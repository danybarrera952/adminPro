import { Observable } from 'rxjs/RX';
import { SubirArchivoService } from './../subirArchivo/subir-archivo.service';
import { Usuario } from './../../../models/usuario.model';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import swal from 'sweetalert2';
import { Router } from '@angular/router';






@Injectable()
export class UsuarioService {
  usuario: Usuario;
  token: string;
  menu: any [] = [];

  constructor(public http: HttpClient, public router: Router, public subirArchivos: SubirArchivoService ) {

    this.cargarVariablesStorage();


   }
   guardarStorage(id: string, token: string, usuario: Usuario, menu: any ) {

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('menu', JSON.stringify(menu));

    this.usuario = usuario;
    this.token = token;
    this.menu = menu;
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
         this.menu = JSON.parse(localStorage.getItem('menu'));

        } else {

          this.token = '';
          this.usuario = null;
          this.menu = [];

        }

   }

   loginGoogle(token: string) {


     // tslint:disable-next-line:prefer-const
     let url = URL_SERVICES + '/login/google';

     return this.http.post(url, {token})
     .map((resp: any) => {
      this.guardarStorage(resp.id, resp.token, resp.usuario, resp.menu);
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

                  })
                  .catch(err => {

                    swal(err.error.mensaje, err.error.errors.message, 'error');


                    return Observable.throw(err);

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
                      this.guardarStorage(resp.id, resp.token, resp.usuario, resp.menu);
                      return true;
                    })
                    .catch(err => {

                      swal('Error en el login', err.error.mensaje, 'error');


                      return Observable.throw(err);

                    });


  }

  actualizarUsuario(usuario: Usuario) {

    const url = URL_SERVICES + '/usuario/' + usuario._id + '?token=' + this.token;


         return this.http.put(url , usuario)
                        .map((resp: any) => {
                          const usuarioDB: Usuario = resp.usuario;
                          this.guardarStorage(usuarioDB._id, this.token, usuarioDB, this.menu);

                          swal('Usuario Actualizado', usuario.nombre, 'success');
                          return true;
                        });

  }

  actualizarImagen(Imagen: File, id: string) {

  this.subirArchivos.subirArchivo(Imagen, 'usuarios', id)
                    .then((resp: any ) => {

                       this.usuario.img = resp.usuario.img;
                      swal('Imagen Actualizada', this.usuario.nombre, 'success');
                      this.guardarStorage(id , this.token, this.usuario, this.menu);


                    } )
                    .catch(resp => {

                      console.log(resp);

                    });
  }

  cargarUsuarios( desde: number = 0 ) {

    const url = URL_SERVICES + '/usuario?desde=' + desde;

    return this.http.get(url);


  }

  buscarUsuarios( termino: string ) {

    const  url = URL_SERVICES + '/busqueda/coleccion/usuarios/' + termino ;

    return this.http.get(url).map((resp: any) => resp.usuarios );

  }

  borrarUsuario( id) {

    let url = URL_SERVICES + '/usuario/' + id;
    url +=  '?token' + this.token;

    return this.http.delete( url )
                    .map(resp => {

                      swal('Usuario Borrado', 'El Usuario ha sido borrado correctamente');
                      return true;

                    });

  }

}
