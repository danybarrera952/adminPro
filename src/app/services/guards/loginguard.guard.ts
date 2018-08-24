import { UsuarioService } from './../usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class LoginguardGuard implements CanActivate {

  constructor(public _us: UsuarioService, public router: Router) {

  }
  canActivate() {


    if (this._us.islogin()) {
      console.log('paso por el Guard');
      return true;
    } else {

      console.log('Bloqueado por el Guard');
      this.router.navigate(['/login']);
      return false;

    }





  }
}
