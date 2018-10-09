
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService , SidebarService, SharedService, UsuarioService, LoginguardGuard, SubirArchivoService } from './service.index';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [SettingsService, SidebarService, SharedService, UsuarioService, LoginguardGuard, SubirArchivoService],
  declarations: []
})
export class ServiceModule { }
