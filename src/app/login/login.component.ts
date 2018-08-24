import { UsuarioService } from './../services/service.index';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { NgZone } from '@angular/core';


declare function iniciar();
// importar libreria
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email: string;
  recuerdame: boolean = false;
  auth2: any;


  constructor(public router: Router, public uService: UsuarioService,  private zone: NgZone) { }

  ngOnInit() {

    this.email = localStorage.getItem('email') || '';

    if (this.email.length > 1) {
      this.recuerdame = true;

    }



  iniciar();
  this.googleIn();
  }

  googleIn() {

     gapi.load('auth2', () => {
       this.auth2 = gapi.auth2.init({
         client_id: '383518913633-nf045btd207a2rf22vr0iho1dppkarqp.apps.googleusercontent.com',
         cookiepolicy: 'single_host_origin',
         scope: 'profile email'
       } );

       this.attachSign(document.getElementById('btn_google'));

     });

  }


  // tslint:disable-next-line:no-shadowed-variable
  attachSign( element ) {

    this.auth2.attachClickHandler(element, {}, (googleuser) => {


      // tslint:disable-next-line:prefer-const
       let token = googleuser.getAuthResponse().id_token;
       this.zone.run(() => {

         this.uService.loginGoogle(token).subscribe(() =>  this.router.navigate( [ '/dashboard' ] ) );

      });

       });

  }



  ingresar(forma: NgForm) {

    // si no es valida que se salga
    if (forma.invalid) {
      return;
    }

  console.log(forma.valid);
  console.log(forma.value);

  // tslint:disable-next-line:prefer-const
  let usuario = new  Usuario(null, forma.value.email, forma.value.password);
  this.uService.login(usuario, forma.value.recuerdame)
                .subscribe( correcto => this.router.navigate(['/dashboard']));
  }

}
