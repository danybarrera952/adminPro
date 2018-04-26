import { RouterModule, Routes } from '@angular/router';
// Routes
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';



const app_routes: Routes = [
{
  path: '', component: PagesComponent,
  children: [
{ path: 'dashboard', component: DashboardComponent },
{ path: 'progress', component: ProgressComponent },
{ path: 'graficas', component: Graficas1Component },

 { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
  ]

},


{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },

{ path: '**', component: NopagefoundComponent}
];

// useHash se usa para evitar hacer configuraiones en el servidor ,, el useHash nos crea una ruta separada
export const APP_ROUTING = RouterModule.forRoot(app_routes, {useHash: true});
