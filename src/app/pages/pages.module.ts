import { PipesModule } from '../pipes/pipes.module';
import { NgModule } from '@angular/core';

// modules
import { SharedModule } from './../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';




// routes

import { PAGES_ROUTES } from './pages.routes';
// Components

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';

@NgModule({
   declarations: [
    PagesComponent,

  DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent
 ],
 exports: [
  PagesComponent,

  DashboardComponent,
  ProgressComponent,
  Graficas1Component

 ],
 imports: [
SharedModule,
PAGES_ROUTES,
ComponentsModule,
PipesModule,
FormsModule,
CommonModule

 ]

})
export class PagesModule {}

