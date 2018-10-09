import { Injectable } from '@angular/core';
import { URL_SERVICES } from '../../config/config';


@Injectable()
export class SubirArchivoService {

  constructor() { }

  subirArchivo(archivo: File, tipo: string, id: string) {

    return new Promise( ( resolve, reject ) => {

      const formData = new FormData();
      // Ajax
      const xhr = new XMLHttpRequest();

      formData.append('imagen', archivo, archivo.name);

      xhr.onreadystatechange =  () => {
       if ( xhr.readyState === 4) {

        // validar si la imagen ce subio
        if (xhr.status === 200) {
          console.log('imagen subida');
          resolve(JSON.parse (xhr.response) );
           } else {
            console.log('No ce pudo subir la imagen');
             reject(  xhr.response);

           }


       }
      };
      const url = URL_SERVICES + '/upload/' + tipo + '/' + id;

      xhr.open('PUT', url , true);
      xhr.send(formData);
    });

  }

}
