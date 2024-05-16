import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ExtractComponent } from './components/extract/extract.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),
    data: { title: 'Home' }
  },
  {
    path: 'transactions',
    loadComponent: () => import('./components/transactions/transactions.component').then(c => c.TransactionsComponent),
    data: { title: 'Transferências' }
  },
  {
    path: 'profile',
    loadComponent: () => import('./components/profile/profile.component').then(c => c.ProfileComponent),
    data: { title: 'Perfil' }
  },
  {
    path: 'extract',
    loadComponent: () => import('./components/extract/extract.component').then(c => c.ExtractComponent),
    data: { title: 'Extratos' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo:'/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export { routes };
