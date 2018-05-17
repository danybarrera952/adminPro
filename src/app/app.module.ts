
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



// components

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Modules

import { PagesModule } from './pages/pages.module';

// services

import { ServiceModule } from './services/service.module';


// Routes

import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    PagesModule,
    ServiceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
