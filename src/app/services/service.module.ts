
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService , SidebarService, SharedService, UsuarioService, LoginguardGuard, SubirArchivoService } from './service.index';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UploadmodalServiceService } from '../components/upload-modal/uploadmodal-service.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],

  providers: [SettingsService,
     SidebarService,
      SharedService,
       UsuarioService,
        LoginguardGuard,
        SubirArchivoService,
         UploadmodalServiceService],
  declarations: []
})
export class ServiceModule { }
