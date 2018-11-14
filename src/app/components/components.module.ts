import { NgModule } from '@angular/core';


import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { GraficosDonnaComponent } from './GraficosDonas/graficos-donna.component';
import { ChartsModule } from 'ng2-charts';

import { BrowserModule } from '@angular/platform-browser';







@NgModule({
  declarations: [
    IncrementadorComponent,
    GraficosDonnaComponent

    ],
  exports: [
    IncrementadorComponent,
    GraficosDonnaComponent
  ],
  imports: [
   FormsModule,
   ChartsModule,
   BrowserModule
  ],
})
export class ComponentsModule { }
