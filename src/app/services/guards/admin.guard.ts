import { UsuarioService } from './../usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(public _us: UsuarioService ) {

  }
  canActivate() {
    if (this._us.usuario.role === 'ADMIN_ROLE') {
      return true;

    } else {

     this._us.logout();

      return false;
    }
  }
}
