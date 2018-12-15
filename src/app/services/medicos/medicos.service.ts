import { UsuarioService } from './../usuario/usuario.service';
import { URL_SERVICES } from './../../config/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Medico } from '../../../models/medico.model';

@Injectable()
export class MedicosService {

  totalMedicos: number ;
  nombre: string = 'hugo';

  constructor(public http: HttpClient , public _US: UsuarioService) { }


  cargarMedicos() {
    const url = URL_SERVICES + '/medico';
    return this.http.get(url)
                     .map((resp: any) => {
                      this.totalMedicos = resp.total;
                      this.nombre = 'daniel';
                       return resp.medicos;
                     });
  }

  buscarMedico( termino: string ) {

    const  url = URL_SERVICES + '/busqueda/coleccion/medicos/' + termino ;
    return this.http.get(url)
    .map((resp: any) =>  resp.medicos);


  }

  borrarMedico(id: string) {

    let url = URL_SERVICES + '/medico/' + id;
    url += '?token=' + this._US.token;
    return this.http.delete( url )
                    .map(resp => {
                      Swal('Medico Borrado', 'Eliminado Correctamente', 'success');


                    } );

  }

  obtenerMedico(id: string) {

    const url = `${URL_SERVICES}/medico/${id}`;

    return this.http.get(url)
                    .map((resp: any) => resp.medico);

  }

  GuardarMedico(medico: Medico) {

    if (medico._id) {

      let url = URL_SERVICES + '/medico/' + medico._id;
      url += '?token=' + this._US.token;
      return this.http.put(url, medico)
      .map((resp: any) => {
       Swal('Medico actualizado', medico.nombre, 'success');
              return resp.Medico;
      });


    } else {

      let url = URL_SERVICES + '/medico';
      url += '?token=' + this._US.token;

     return this.http.post(url, medico)
               .map((resp: any) => {
                Swal('Medico Creado', medico.nombre, 'success');
                       return resp.Medico;
               });

    }


  }

}
