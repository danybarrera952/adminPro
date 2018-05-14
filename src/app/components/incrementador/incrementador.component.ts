import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

@Input()  porcentaje: number ;
@Input() leyenda: string = 'Hekko';
@Output() cambioPorcentaje: EventEmitter<number> = new EventEmitter();
@ViewChild('progressTxt') progressTxt: ElementRef;



  constructor() { }

  ngOnInit() {
  }
  cambiarValor(valor: number) {

    if (this.porcentaje >= 100) {
      return;
    }
    if (this.porcentaje <= 0) {
      return;
    }


    this.porcentaje = this.porcentaje + valor;

    this.cambioPorcentaje.emit(this.porcentaje);

  }

  onChanges(nuevoNuemero: number) {





    if (nuevoNuemero >= 100) {
       this.porcentaje = 50;
    } else if (nuevoNuemero <= 0 ) {
      this.porcentaje = 20 ;
    } else {
      this.porcentaje = nuevoNuemero ;
    }


    this.progressTxt.nativeElement.value = this.porcentaje;

    this.cambioPorcentaje.emit(this.porcentaje);

    this.progressTxt.nativeElement.focus();



  }
}
