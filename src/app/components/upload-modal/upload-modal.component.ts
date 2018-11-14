import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../services/service.index';
import swal from 'sweetalert2';
import { UploadmodalServiceService } from './uploadmodal-service.service';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styles: []
})
export class UploadModalComponent implements OnInit {

  oculto: string = '';

  imagensubir: File;
imagenTemp: string;

  constructor(public _subirArchivoService: SubirArchivoService,
              public _uploadmodalService: UploadmodalServiceService) { }

  ngOnInit() {
  }

 cerrarModal( ) {

  this.imagensubir = null;
  this.imagenTemp = null;
  this._uploadmodalService.oculatarModal();

 }
  seleccionImagen( archivo: File ) {



    if (!archivo) {

      this.imagensubir = null;

      return;
    }

    if (archivo.type.indexOf('image') < 0 ) {
        swal('Solo imagenes', 'El archivo seleccionado no es una imagen');
        this.imagensubir = null;
        return;

    }


    this.imagensubir = archivo;
    const reader = new FileReader();
    const urleImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result;


  }

  subirArchivo() {

     this._subirArchivoService.subirArchivo(this.imagensubir, this._uploadmodalService.tipo, this._uploadmodalService.id)
                              .then(resp => {

                                this._uploadmodalService.notificacion.emit(resp);
                                this.cerrarModal();

                              })
                              .catch( err => {

                              });

  }

}
