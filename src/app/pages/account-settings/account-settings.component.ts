import { Component, OnInit, Inject } from '@angular/core';
import { log } from 'util';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _DOCUMENT , public _sv: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: any , link: any) {

    this.aplicarCheck(link);

    this._sv.aplicarTema(tema);

  }

  aplicarCheck(link: any) {

    let selectores: any = document.getElementsByClassName('selector');




    for ( let ref of selectores) {

      // recorre el arreglo de selectores para buscar y remover la clase working

      ref.classList.remove('working');


    }

    link.classList.add('working');


  }

  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector');

    let tema = this._sv.ajustes.Tema;

    for ( let ref of selectores) {
      if ( ref.getAttribute('data-theme') === tema) {

        ref.classList.add('working');
        break;

      }
  }

}
}
