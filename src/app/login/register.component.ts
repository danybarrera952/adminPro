import { Router } from '@angular/router';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import swal from 'sweetalert2';
import { UsuarioService } from '../services/service.index';
declare function iniciar();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor( public _UsuarioService: UsuarioService, public _router: Router) {

   }
// funcion para comparar

  soniguales(campo1: string, campo2: string) {

    return (group: FormGroup) => {

      let pass1: any;
      let pass2: any;
      pass1 = group.controls[campo1].value;
       pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {

        return null;
      }

      return {
        soniguales: true
      };



    };



  }

  ngOnInit() {
     iniciar();

    //  trabajar con el formulario por form

     this.forma = new FormGroup({
       nombre: new FormControl(null, Validators.required),
       correo: new FormControl(null, [Validators.required, Validators.email]),
       password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)


     }, { validators: this.soniguales('password', 'password2')});


  }
   obtenerUsuario() {

    if (this.forma.invalid) {

      return;
    }

    if (!this.forma.value.condiciones) {

     swal( 'Debe aceptar las condiciones', 'warning');
      return;
    }


    // tslint:disable-next-line:prefer-const
    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password
       );

       this._UsuarioService.crearUsuario(usuario).subscribe(resp => this._router.navigate(['/login']));



}
}
