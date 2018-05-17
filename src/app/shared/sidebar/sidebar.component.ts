import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public _sideBarService: SidebarService) {console.log('menu', _sideBarService.menu);
   }

  ngOnInit() {
  }

}
