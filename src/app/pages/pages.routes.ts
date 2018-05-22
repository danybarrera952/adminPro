import { PromesasComponent } from './promesas/promesas.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const pages_routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
  { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dahsboard'} },
  { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'} },
  { path: 'graficas', component: Graficas1Component, data: {titulo: 'Graficas'} },
  { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
  { path: 'account', component: AccountSettingsComponent, data: {titulo: 'Account'} },
  { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'} },
   { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
    ]

  }
];


export const PAGES_ROUTES = RouterModule.forChild( pages_routes );
