import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficos-donna',
  templateUrl: './graficos-donna.component.html'
})
export class GraficosDonnaComponent implements OnInit {

  @Input() Labels: string[] = [];
  @Input() ChartData: number[] = [];
  public doughnutChartType: string = 'doughnut';







  constructor() {





        }






  ngOnInit() {





  }

}
