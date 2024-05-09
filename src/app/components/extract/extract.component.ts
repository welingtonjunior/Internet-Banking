import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { addDataState } from '../../shared/reducers/add-data.reducer';
import {MatIconModule} from '@angular/material/icon'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extract',
  standalone: true,
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
  imports: [MatTableModule, MatIconModule, CommonModule]
})
export class ExtractComponent implements OnInit {
  public displayedColumns: string[] = ['accountOrigin', 'accountDestination', 'amount', 'description', 'transactionType', 'transactionDate'];
  
  dataSource = [
    { 
      accountOrigin: '123', 
      accountDestination: '456', 
      amount: 100, 
      description: 'Transferência bancária', 
      transactionType: 'Transferência', 
      transactionDate: '2024-05-01' 
    },
    { 
      accountOrigin: '456', 
      accountDestination: '789', 
      amount: 200, 
      description: 'Pagamento de fatura', 
      transactionType: 'Pagamento', 
      transactionDate: '2024-05-02' 
    },
    { 
      accountOrigin: '789', 
      accountDestination: '123', 
      amount: 150, 
      description: 'Depósito em conta', 
      transactionType: 'Depósito', 
      transactionDate: '2024-05-03' 
    },
    { 
      accountOrigin: '123', 
      accountDestination: '789', 
      amount: 300, 
      description: 'Saque em ATM', 
      transactionType: 'Saque', 
      transactionDate: '2024-05-04' 
    },
    { 
      accountOrigin: '789', 
      accountDestination: '456', 
      amount: 250, 
      description: 'Transferência entre contas', 
      transactionType: 'Transferência', 
      transactionDate: '2024-05-05' 
    }
  ];



  constructor(private store: Store<addDataState>) { }

  ngOnInit() {
   
  }

  
}
