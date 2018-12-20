import { Medico } from './../../../models/medico.model';
import { Usuario } from './../../../models/usuario.model';
import { URL_SERVICES } from './../../config/config';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hospital } from '../../../models/hospital.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  usuarios: Usuario [] = [];
  medicos: Medico [] = [];
  hospitales: Hospital[] = [];


  constructor(public activated: ActivatedRoute, public http: HttpClient) {

    activated.params.subscribe(params => {

      const termino = params['termino'];

      this.buscar(termino);


    });
  }

  ngOnInit() {
  }

  buscar(termino: string) {

    const url = URL_SERVICES + '/busqueda/todo/' +  termino;


    this.http.get(url)
              .subscribe( (resp: any) => {

                console.log(resp);


                this.hospitales = resp.hospitales;
                this.medicos = resp.medicos;
                this.usuarios = resp.usuarios;

              });

  }

}
