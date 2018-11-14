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
      {titulo: 'Promesas', url: '/rxjs'}


    ]
  },
  {
  titulo: 'Mantenimiento',
  icono: 'mdi mdi-folder-lock-open',
  submenu: [
  {titulo: 'Usuarios', url: '/usuarios'},
  {titulo: 'Medicos', url: '/medicos'},
  {titulo: 'Hospitales', url: '/hospitales'}
]
}

];
  constructor() { }

}
