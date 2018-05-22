import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
   this.contar().then(


   ).catch();

}





  ngOnInit() {


  }


  contar() {

    return new Promise( (resolve, reject) => {

      let contador = 0;

      setInterval( () => {

        contador += 1;
        if ( contador === 3 ) {

          resolve('Ok');
          console.log('disparaldo el resolve si funciono');

             }

      }, 1000);

      });

        }

}
