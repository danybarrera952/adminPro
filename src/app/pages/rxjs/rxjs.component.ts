import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/RX';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

   let obs = new Observable(observer => {

    let contador = 0;

    let intervalo = setInterval(() => {

      contador += 1;

      observer.next(contador);

      if (contador === 3) {

        observer.complete();
      }



    }, 1000);



   });

   // Asi es como se llama el observable

   obs.subscribe( number => console.log( 'numero'),

   error => console.log('error'),
   () => console.log('EL observable termino')

 );


  }

  ngOnInit() {
  }

}
