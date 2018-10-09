import swal from 'sweetalert2';
import { UsuarioService } from './../../services/service.index';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
usuario: Usuario;
imagensubir: File;
imagenTemp: string;
  constructor(public _us: UsuarioService) {

    this.usuario = this._us.usuario;
   }

  ngOnInit() {
  }
  guardar(usuarioActualizar: Usuario) {
    this.usuario.nombre = usuarioActualizar.nombre;

    // validacion para no permitir que un usuario de google cambie su correo
    if ( !this.usuario.google) {

      this.usuario.email = usuarioActualizar.email;
    }


    this._us.actualizarUsuario(this.usuario).subscribe( );


  }

  seleccionImagen( archivo: File ) {



    if (!archivo) {

      this.imagensubir = null;

      return;
    }

    if (archivo.type.indexOf('image') < 0 ) {
        swal('Solo imagenes', 'El archivo seleccionado no es una imagen');
        this.imagensubir = null;
        return;

    }


    this.imagensubir = archivo;
    const reader = new FileReader();
    const urleImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result;


  }

  CambiarImagen() {

    this._us.actualizarImagen(this.imagensubir, this.usuario._id);



  }

}
