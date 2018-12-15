import { MedicosService } from './../../services/service.index';
import { Component, OnInit } from '@angular/core';
import { Medico } from '../../../models/medico.model';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {

  medicos: Medico[] = [];
  constructor(public _serviceMedico: MedicosService) { }

  ngOnInit() {
this.cargarMedicos();



  }

  buscarMedico( termino: string) {

    if (termino.length <= 0 ) {
      this.cargarMedicos();
      return;

    }

    this._serviceMedico.buscarMedico(termino)
                       .subscribe(medicos => this.medicos = medicos);


  }

  borrarMedico( medico: Medico ) {
     this._serviceMedico.borrarMedico(medico._id)
                         .subscribe(() => this.cargarMedicos());

  }

  cargarMedicos() {

    this._serviceMedico.cargarMedicos()
                       .subscribe(medicos =>  this.medicos = medicos);

}

}
