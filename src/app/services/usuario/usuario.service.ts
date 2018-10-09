import { SubirArchivoService } from './../subirArchivo/subir-archivo.service';
import { Usuario } from './../../../models/usuario.model';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';

import 'rxjs/add/operator/map';
import swal from 'sweetalert2';
import { Router } from '@angular/router';






@Injectable()
export class UsuarioService {
  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient, public router: Router, public subirArchivos: SubirArchivoService ) {

    this.cargarVariablesStorage();


   }
   guardarStorage(id: string, token: string, usuario: Usuario ) {

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
   }

   logout() {
     this.token = '';
     this.usuario = null;
     localStorage.removeItem('token');
     localStorage.removeItem('usuario');
     this.router.navigate(['/login']);
   }

   cargarVariablesStorage() {

    if (localStorage.getItem('token')) {
         this.token = localStorage.getItem('token');
         this.usuario = JSON.parse(localStorage.getItem('usuario'));

        } else {

          this.token = '';
          this.usuario = null;

        }

   }

   loginGoogle(token: string) {


     // tslint:disable-next-line:prefer-const
     let url = URL_SERVICES + '/login/google';

     return this.http.post(url, {token})
     .map((resp: any) => {
      this.guardarStorage(resp.id, resp.token, resp.usuario);
      return true;
    });

   }

   // creaamos un Usuario en base al modelo que tenemos

  crearUsuario( usuario: Usuario) {

    // para utilizar llamadas http necesitamos el modulo y importar en el constructor el http

  // Primer lugar necesito el URL por el que estoy trabajando ejemplo localhost:3000

  // tslint:disable-next-line:prefer-const
  let url = URL_SERVICES + '/usuario';

  // Despues mandamos la peticion por http y vamos a necesitar resivir un observable para eso ponemos la palabra return

  return this.http.post(url, usuario)
                  .map((resp: any) => {

                    swal('Usuario Creado', usuario.email, 'success');

                    return resp.usuario;

                  });
  }

  islogin() {

    return (this.token.length > 5 ) ? true : false;
  }

  login( usuario: Usuario, recuerdame: boolean = false) {

    if (recuerdame) {
      localStorage.setItem('email', usuario.email);

    } else {
      localStorage.removeItem('email');
    }

    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICES + '/login';
    return this.http.post(url, usuario)
                    .map((resp: any) => {
                      this.guardarStorage(resp.id, resp.token, resp.usuario);
                      return true;
                    });


  }

  actualizarUsuario(usuario: Usuario) {

    const url = URL_SERVICES + '/usuario/' + usuario._id + '?token=' + this.token;


         return this.http.put(url , usuario)
                        .map((resp: any) => {
                          const usuarioDB: Usuario = resp.usuario;
                          this.guardarStorage(usuarioDB._id, this.token, usuarioDB);

                          swal('Usuario Actualizado', usuario.nombre, 'success');
                          return true;
                        });

  }

  actualizarImagen(Imagen: File, id: string) {

  this.subirArchivos.subirArchivo(Imagen, 'usuarios', id)
                    .then((resp: any ) => {

                       this.usuario.img = resp.usuario.img;
                      swal('Imagen Actualizada', this.usuario.nombre, 'success');
                      this.guardarStorage(id , this.token, this.usuario);


                    } )
                    .catch(resp => {

                      console.log(resp);

                    });
  }

}
