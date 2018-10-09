import { URL_SERVICES } from './../config/config';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {

   let url = URL_SERVICES + '/imagen';

   if (!img) {
    return url + '/usuarios/xxx';
   }

   // validar si es una imagen de google

   if (img.indexOf('https') >= 0) {
     return img;

   }
   switch (tipo) {

     case 'usuario':
     url += '/usuarios/' + img;
     break;

     case 'medico':
     url += '/medicos/' + img;
     break;

     case 'hospital':
     url += '/hospitales/' + img;
     break;

     default:
     console.log('tipo de usuarios no existe');
     url += '/usuarios/xxx';
   }


    return url;
  }

}
