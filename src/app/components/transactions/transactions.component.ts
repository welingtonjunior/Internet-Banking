import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { addDataRequest } from '../../shared/actions/add-data.actions';
import { DataState } from '../../shared/reducers/load-data.reducer';
import { selectData } from '../../shared/selectors/load-data.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { selectNotification } from '../../shared/selectors/notification.selector';
import { NotificationState } from '../../shared/reducers/notification.reducer';

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
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent implements OnInit {
  public transactionForm: FormGroup;
  public dataList$: Observable<any> = this.store.pipe(select(selectData));
  public notification$: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<DataState>,
    private storeNotification: Store<NotificationState>
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
    this.notification$ = this.storeNotification.pipe( 
    select(selectNotification)
  );
  }

  submit() {
    const params = this.transactionForm.value;
    if (this.transactionForm.valid) {
      console.log('submit ==>', this.transactionForm.value);
      this.store.dispatch(addDataRequest({ item: params }));
      console.log('notificacao ===>', this.notification$)
      this.transactionForm.reset();
    }
  }
}
