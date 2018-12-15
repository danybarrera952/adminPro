


import { HospitalService, SubirArchivoService } from './../../services/service.index';
import { Hospital } from './../../../models/hospital.model';
import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { UploadmodalServiceService } from '../../components/upload-modal/uploadmodal-service.service';








@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {


  hospitales: Hospital [] = [];

  constructor( public _hospitalService: HospitalService, public  _subirArchivo: UploadmodalServiceService) { }

  ngOnInit() {
  this.cargarHospitales();
  this._subirArchivo.notificacion.subscribe(() => this.cargarHospitales());


  }

  cargarHospitales() {

    this._hospitalService.cargarHospitales()
                         .subscribe(hospitales => this.hospitales = hospitales);

  }

  guardarHospital(hospital: Hospital) {

    this._hospitalService.actualizarHospital(hospital)
                         .subscribe();

  }

  crearHospital() {


   Swal(
      {
        title: ' Crear Hospital',
        text: 'Ingresa el nombre de hospital',
        input: 'text',
        type: 'info',
        showCancelButton: true,
        confirmButtonText: 'OK',
        focusCancel: true


    }).then( valor => {

      if (!valor || valor === 0) {

        return;

      }
      this._hospitalService.crearHospital(valor.value)
                           .subscribe( () => this.cargarHospitales());

    });


  }




  borrarHospital( hospital: Hospital ) {

    this._hospitalService.borrarhospital( hospital._id)
                        .subscribe( () => this.cargarHospitales());


  }

  buscarHospital( termino: string) {

    if (termino.length <= 0) {

      this.cargarHospitales();
      return;
    }

    this._hospitalService.buscarHospital(termino)
                        .subscribe(hospitales => this.hospitales = hospitales );


  }

  actualizarImagen(id: string) {

    console.log(id);




  this._subirArchivo.mostrarModal('hospitales', id);



  }

}
