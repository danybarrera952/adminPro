import { MedicosService } from './../../services/medicos/medicos.service';
import { Hospital } from './../../../models/hospital.model';
import { NgForm } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Medico } from '../../../models/medico.model';
import { HospitalService } from '../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadModalComponent } from '../../components/upload-modal/upload-modal.component';
import { UploadmodalServiceService } from '../../components/upload-modal/uploadmodal-service.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  hospitales: Hospital [] = [];
  medico: Medico = new Medico('', '', '', '', '');
  hospital: Hospital = new Hospital('');

  constructor(public _sH: HospitalService, public modal: UploadmodalServiceService, public _mS: MedicosService, public router: Router,
    public activedRoute: ActivatedRoute ) {

    activedRoute.params.subscribe(params => {

      const id = params['id'];

      if ( id !== 'nuevo' ) {

        this.cargrMedico(id);
      }

    });
   }

  ngOnInit() {
    this._sH.cargarHospitales()
            .subscribe(hospitales => this.hospitales = hospitales);

            this.modal.notificacion.subscribe(resp => this.medico.img = resp.medico.img);

  }

  guardarMedico(f: NgForm) {


    if (f.invalid) {

      return;

    }

    this._mS.GuardarMedico( this.medico)
            .subscribe(medico => {

              this.medico._id = medico._id;
              this.router.navigate(['/medico', medico._id]);


            });


  }

  cambioHospital( id: string ) {

       this._sH.obtenerHospital( id)
               .subscribe(hospital => this.hospital = hospital );

  }

  cargrMedico(id: string) {

    this._mS.obtenerMedico(id)
          .subscribe(medico => {


            this.medico = medico;
            this.medico.hospital = medico.hospital._id;
            this.cambioHospital(this.medico.hospital);


          });


  }

  cambiarFoto() {

    this.modal.mostrarModal('medicos', this.medico._id);





  }




}
