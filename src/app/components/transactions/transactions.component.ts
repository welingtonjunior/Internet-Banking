import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { addDataRequest } from '../../shared/actions/add-data.actions';
import { DataState } from '../../shared/reducers/load-data.reducer';
import { selectData } from '../../shared/selectors/load-data.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { selectNotification } from '../../shared/selectors/notification.selector';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmModalComponent } from '../../shared/modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButton,
    CommonModule,
    MatDialogModule,
    ConfirmModalComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  public transactionForm: FormGroup;
  public dataList$!: Observable<any>;
  notification$ = this.store.pipe(select(selectNotification));

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<DataState>,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.transactionForm = this.formBuilder.group({
      accountOrigin: ['', Validators.required],
      accountDestination: ['', Validators.required],
      amount: ['', Validators.required],
      description: ['', Validators.required],
      transactionType: ['', Validators.required],
      transactionDate: ['', Validators.required],
      securityPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.notification$.subscribe((notification) => {
      if (notification.isOpen) {
        this.openSnackBar(notification.message, notification.action, notification.duration);
      }
    });

    this.dataList$ = this.store.pipe(select(selectData));
  }

  openSnackBar(message: string, action: string | undefined, duration: number) {
    this._snackBar.open(message, action, {
      duration: duration,
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent);
    dialogRef.componentInstance.$closeModal.subscribe(() => {
      this.confirmTransaction();
    });
  }

  confirmTransaction(): void {
    if (this.transactionForm.valid) {
      const params = this.transactionForm.value;
      this.store.dispatch(addDataRequest({ item: params }));
      this.transactionForm.reset();
      console.log('PARAMS ==>>', params);
    }
  }
}
