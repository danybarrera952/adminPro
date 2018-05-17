import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {

    urlTema: 'assets/css/colors/default.css',
    Tema: 'default'


  };

  constructor( @Inject(DOCUMENT) private _DOCUMENT) { this.cargarAjustes(); }

  guardarAjustes() {

    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));

  }

  cargarAjustes() {

     if (localStorage.getItem('ajustes')) {

         this.ajustes = JSON.parse(localStorage.getItem('ajustes'));

         this.aplicarTema(this.ajustes.Tema);
}
  }

  aplicarTema(tema: string) {

    let url = `assets/css/colors/${tema}.css`;

    this._DOCUMENT.getElementById('theme').setAttribute('href', url );

    this.ajustes.Tema = tema;
    this.ajustes.urlTema = url;
    this.guardarAjustes();

  }

}

interface Ajustes {

  urlTema: string;
  Tema: string;
}
