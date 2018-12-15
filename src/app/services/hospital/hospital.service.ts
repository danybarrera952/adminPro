import { UsuarioService } from './../usuario/usuario.service';
import { Injectable } from '@angular/core';
import { URL_SERVICES } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Hospital } from '../../../models/hospital.model';
import swal from 'sweetalert2';


@Injectable()
export class HospitalService {

  totalHospitales: number ;

  constructor(public http: HttpClient, public _ususarioService: UsuarioService) { }

  cargarHospitales() {

    const url = URL_SERVICES + '/hospital';

    return this.http.get(url)
                     .map((resp: any) => {

                      this.totalHospitales = resp.total;

                       return resp.hospitales;

                     });


  }

  obtenerHospital( id: string ) {

    const url = URL_SERVICES + '/hospital/' + id;

    return this.http.get(url)
    .map((resp: any) =>  resp.hospital);


  }

  borrarhospital(id: string) {

    let url = URL_SERVICES + '/hospital/' + id;
    url += '?token=' + this._ususarioService.token;
    return this.http.delete( url )
                    .map(resp => swal('hospital Borrado', 'Eliminado Correctamente', 'success') );

  }
  crearHospital( nombre: string ) {
    let url = URL_SERVICES + '/hospital' ;
    url += '?token=' + this._ususarioService.token;

    return this.http.post( url, {nombre} )
    .map((resp: any) =>  resp.hospitales);


  }

  buscarHospital( termino: string ) {

    const  url = URL_SERVICES + '/busqueda/coleccion/hospitales/' + termino ;
    return this.http.get(url)
    .map((resp: any) =>  resp.hospitales);


  }

  actualizarHospital( hospital: Hospital ) {


    let  url = URL_SERVICES + '/hospital/' + hospital._id ;

    url += '?token=' + this._ususarioService.token;
    return this.http.put(url , hospital)
    .map((resp: any) =>  {

      swal('hospital Actualizado', hospital.nombre, 'success');
       return resp.hospital;





    });

  }


}

