import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Store, select } from '@ngrx/store';
import { addDataRequest } from '../../shared/actions/add-data.actions';
import { Profile } from '../../shared/interfaces/transaction-form.interface';
import { selectNotification } from '../../shared/selectors/notification.selector';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class ProfileComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private readonly store: Store = inject(Store);
  private _snackBar = inject(MatSnackBar);
  public notification$ = this.store.pipe(select(selectNotification));

  public profileForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    accountNumber: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
  });
  ngOnInit(): void {
    this.notification$.subscribe((notification) => {
      if (notification.isOpen) {
        this.openSnackBar(
          notification.message,
          notification.action,
          notification.duration
        );
      }
    });
  }

  openSnackBar(message: string, action: string | undefined, duration: number) {
    this._snackBar.open(message, action, {
      duration: duration,
    });
  }

  submit() {
    if (this.profileForm.valid) {
      const valuesForm = this.profileForm.value;
      const formData: Profile = {
        name: valuesForm.name,
        accountNumber: valuesForm.accountNumber,
        email: valuesForm.email,
        phone: valuesForm.phone,
      };
      this.store.dispatch(addDataRequest({ item: formData }));
      this.profileForm.reset();
    }
  }
}
