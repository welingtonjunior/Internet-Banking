import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { addDataRequest } from '../../shared/actions/add-data.actions';
import { Profile } from '../../shared/interfaces/transaction-form.interface';

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
    ReactiveFormsModule]
})
export class ProfileComponent {
  
  private formBuilder = inject(FormBuilder)
  private readonly store: Store = inject(Store)

  profileForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    accountNumber: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]]
  });

  submit(){
    const valuesForm = this.profileForm.value;
    const formData: Profile = {
      name: valuesForm.name,
      accountNumber: valuesForm.accountNumber,
      email: valuesForm.email,
      phone: valuesForm.phone
    };
    console.log('submit ==>', formData)
    this.store.dispatch(addDataRequest({ item: formData}))
    this.profileForm.reset()
  }
 
}