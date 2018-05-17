import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/service.index';
declare function iniciar();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(public _sv: SettingsService) { }

  ngOnInit() {

    iniciar();
  }

}
