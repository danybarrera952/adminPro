import { Router, ActivationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string;

  constructor(private router: Router, public title: Title, public meta: Meta) {

this.SetData()
.subscribe(event => {


                    this.label = event.titulo;
                    this.title.setTitle(this.label);
                    // Enviar metadatos
                    let metag: MetaDefinition = {
                      name: 'description',
                      content: this.label
                    };
                    this.meta.updateTag(metag);

                });


   }

  ngOnInit() {
  }

  SetData() {

  return  this.router.events
.pipe(filter(evento => evento instanceof ActivationEnd),
filter((evento: ActivationEnd) => evento.snapshot.firstChild == null),
map((evento: ActivationEnd) => evento.snapshot.data));

  }


}
