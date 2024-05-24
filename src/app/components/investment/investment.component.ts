import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InvestmentService } from '../../shared/services/investment/investment.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  standalone: true,
  styleUrls: ['./investment.component.scss'],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  providers: [InvestmentService]
})
export class InvestmentComponent implements OnInit {
  public assets!: Observable<any[]>;
  public totalInvested!: number;
  public profitability!: number;
  public displayedColumns: string[] = ['name', 'value', 'allocation'];
  public quotes: any[] = [];

  constructor(
    private investmentService: InvestmentService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.investmentService.getAllQuotes().subscribe(
      (data) => {
        this.quotes = data;
        console.log(this.quotes);
      },
      (error) => {
        console.error('Erro ao obter as cotações', error);
      }
    );
  }

  refreshData(): void {
    this.loadData();
    this.snackBar.open('Dados atualizados!', 'Fechar', {
      duration: 2000,
    });
  }
}
