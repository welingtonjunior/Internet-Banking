import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
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


@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButton,
    CommonModule
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent implements OnInit {
  public transactionForm: FormGroup;
  public dataList$: Observable<any> = this.store.pipe(select(selectData)); 
  
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<DataState>
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
    console.log('lista ==>', this.dataList$)
  }

  submit() {
    const params = this.transactionForm.value;
    if (this.transactionForm.valid) {
      console.log('submit ==>', this.transactionForm.value);
      this.store.dispatch(addDataRequest({item: params}));
      this.transactionForm.reset();
    }
  }
}
