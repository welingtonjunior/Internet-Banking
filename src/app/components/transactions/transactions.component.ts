import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {

  public transactionForm: FormGroup = new FormGroup({
    accountOrigin: new FormControl('', Validators.required),
    accountDestination: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    transactionType: new FormControl('', Validators.required),
    transactionDate: new FormControl('', Validators.required),
    securityPassword: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {
    this.transactionForm
  }
}
