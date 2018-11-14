import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UploadmodalServiceService {

  public tipo: string ;
  public id: string;
  public oculto: string = 'oculto';
   public notificacion = new EventEmitter<any>();
  constructor() { }

  oculatarModal() {
    this.oculto = 'oculto';
    this.tipo = null;
    this.id = null;

  }

  mostrarModal(tipo , id) {

    this.oculto = '' ;
    this.tipo = tipo;
    this.id = id;



  }
}
