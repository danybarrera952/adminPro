import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
menu: any = [
  {
   titulo: 'principal',
    icono: 'mdi mdi-gauge',
    submenu: [
      {titulo: 'Dashboard', url: '/dashboard'},
      {titulo: 'progressBar', url: '/progress'},
      {titulo: 'Graficas', url: '/graficas'},
      {titulo: 'Promesas', url: '/promesas'},
      {titulo: 'Promesas', url: '/rxjs'},


    ]
  }
];
  constructor() { }

}
