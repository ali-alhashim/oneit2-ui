import { Routes } from '@angular/router';

import { MainLayout } from './layouts/main-layout/main-layout';
import { BlankLayout } from './layouts/blank-layout/blank-layout';

import { DashboardPage } from './pages/dashboard/dashboard';
import { ProfilePage } from './pages/profile/profile';
import { Login } from './pages/login/login';
import { DevicesPage } from './pages/devices/devices';
import { AssetsPage } from './pages/assets/assets';
import { TicketsPage } from './pages/tickets/tickets';
import { UsersPage } from './pages/users/users';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardPage },
      { path: 'profile', component: ProfilePage },
      {path: 'devices', component: DevicesPage},
      {path: 'asstes', component: AssetsPage},
      {path: 'tickets', component:TicketsPage},
      {path: 'users', component:UsersPage}
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

