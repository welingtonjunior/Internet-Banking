import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ExtractComponent } from './components/extract/extract.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
    data: { title: 'Transferências' }
  },
  {
    path: 'extract',
    component: ExtractComponent,
    data: { title: 'Extratos' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

