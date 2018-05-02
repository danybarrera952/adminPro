import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Modules

import { PagesModule } from './pages/pages.module';



// Routes

import { APP_ROUTING } from './app.routes';
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
