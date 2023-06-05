import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'busca',
    loadComponent: () => import('./pages/busca/busca.page').then( m => m.BuscaPage)
  },
  {
    path: 'financeiro',
    loadComponent: () => import('./pages/financeiro/financeiro.page').then( m => m.FinanceiroPage)
  },
  {
    path: 'proxima',
    loadComponent: () => import('./pages/proxima/proxima.page').then( m => m.ProximaPage)
  },  {
    path: 'curtidas',
    loadComponent: () => import('./pages/curtidas/curtidas.page').then( m => m.CurtidasPage)
  },

];
