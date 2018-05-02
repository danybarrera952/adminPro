import { RouterModule, Routes } from '@angular/router';
// Routes
import { LoginComponent } from './login/login.component';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';



const app_routes: Routes = [

{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },

{ path: '**', component: NopagefoundComponent}
];

// useHash se usa para evitar hacer configuraiones en el servidor ,, el useHash nos crea una ruta separada
export const APP_ROUTING = RouterModule.forRoot(app_routes, {useHash: true});
