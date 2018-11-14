import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import { Title } from '@angular/platform-browser';
import { UploadmodalServiceService } from '../../components/upload-modal/uploadmodal-service.service';

// declare var swal: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario [] = [];
  desde_int: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;




  constructor( public usuarioService: UsuarioService, public usuarioUpload: UploadmodalServiceService) { }

  ngOnInit() {
    this.cargarUsuarios();
    this.usuarioUpload.notificacion.subscribe(resp => this.cargarUsuarios());
  }

  cargarUsuarios() {

    this.cargando = true;


    this.usuarioService.cargarUsuarios( this.desde_int )
                       .subscribe((resp: any) => {
                         this.totalRegistros = resp.total;
                         this.usuarios = resp.usuarios;
                         this.cargando = false;


                       });




  }

  cambiarDesde( valor: number) {

    const desde = valor + this.desde_int;

    if ( desde >= this.totalRegistros) {
      return;

    }

    if ( desde < 0) {

      return;

    }

    this.desde_int += valor;
    this.cargarUsuarios();





  }

  buscarUsuario( termino: string) {

    if ( termino.length <= 0) {
      this.cargarUsuarios();
      return;
    }
    this.cargando = true;
     this.usuarioService.buscarUsuarios(termino)
                         .subscribe((usuarios: Usuario[]) => {
                          this.usuarios = usuarios;
                          this.cargando = false;


     });

  }

  borrarUsuario( usuario: Usuario ) {

    if (usuario._id === this.usuarioService.usuario._id) {
      swal('No puede borrar el usuario', 'No se puede borrar asi mismo', 'error');
      return;
    }

    swal({

      title: 'Estas seguro?',
      text: 'Estas a punto de borrar a' + usuario.nombre,
      type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, keep it'

    })
    .then( borrar => {

      console.log(borrar);


      if ( borrar.value) {

        this.usuarioService.borrarUsuario( usuario._id)
                           .subscribe( resp => {

                            console.log(resp);
                            this.cambiarDesde(-5);
                            this.cargarUsuarios();


                           });


      }




    });



  }

  guardarUsuario(usuario) {

      this.usuarioService.actualizarUsuario(usuario)
                         .subscribe();
  }

  mostrarModal(id: string) {
    this.usuarioUpload.mostrarModal('usuarios', id );


  }

}
