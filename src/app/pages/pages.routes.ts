import { BusquedaComponent } from './busqueda/busqueda.component';
import { MedicoComponent } from './medicos/medico.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginguardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { AdminGuard } from '../services/service.index';



const pages_routes: Routes = [
  {
    path: '', component: PagesComponent,
    canActivate: [LoginguardGuard],
    children: [
  { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dahsboard'} },
  { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'} },
  { path: 'graficas', component: Graficas1Component, data: {titulo: 'Graficas'} },
  { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
  { path: 'account', component: AccountSettingsComponent, data: {titulo: 'Account'} },
  { path: 'perfil', component: ProfileComponent, data: {titulo: 'Perfil del usuario'} },
  { path: 'busqueda/:termino', component: BusquedaComponent, data: {titulo: 'Buscador'} },
  // Mantenimientos


  { path: 'usuarios',
  component: UsuariosComponent,
  canActivate: [AdminGuard],
   data: {titulo: 'Mantenimiento del usuario'} },

  { path: 'hospitales', component: HospitalesComponent, data: {titulo: 'Mantenimiento del hospital'} },
  { path: 'medicos', component: MedicosComponent, data: {titulo: 'Mantenimiento de los Medicos'} },
  { path: 'medico/:id', component: MedicoComponent, data: {titulo: 'Actualizar Medico'} },
  { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'} },
   { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
    ]

  }
];


export const PAGES_ROUTES = RouterModule.forChild( pages_routes );
