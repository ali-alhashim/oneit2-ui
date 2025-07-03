import { Routes } from '@angular/router';

import { MainLayout } from './layouts/main-layout/main-layout';
import { BlankLayout } from './layouts/blank-layout/blank-layout';

import { DashboardComponent } from './pages/dashboard/dashboard';
import { ProfileComponent } from './pages/profile/profile';
import { Login } from './pages/login/login';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },
  {
    path: '',
    component: BlankLayout,
    children: [
      { path: 'login', component: Login }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

