
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// tslint:disable-next-line:max-line-length
import { SettingsService , AdminGuard , SidebarService, SharedService, UsuarioService, LoginguardGuard, SubirArchivoService, HospitalService, MedicosService } from './service.index';
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
        AdminGuard,
        SubirArchivoService,
         UploadmodalServiceService,
         HospitalService,
         MedicosService
        ],
  declarations: []
})
export class ServiceModule { }
