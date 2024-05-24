import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then(c => c.HomeComponent),
    data: { title: 'Home' }, 
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./components/transactions/transactions.component').then(
        c => c.TransactionsComponent
      ),
    data: { title: 'Transferências' },
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./components/profile/profile.component').then(
        c => c.ProfileComponent
      ),
    data: { title: 'Perfil' },
  },
  {
    path: 'extract',
    loadComponent: () =>
      import('./components/extract/extract.component').then(
        c => c.ExtractComponent
      ),
    data: { title: 'Extratos' },
  },
  {
    path: 'investment',
    loadComponent: () =>
      import('./components/investment/investment.component').then(
        c => c.InvestmentComponent
      ),
    data: { title: 'Investimentos' },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];


export class AppRoutingModule {}

export { routes };
