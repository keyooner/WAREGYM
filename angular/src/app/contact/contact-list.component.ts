import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact, ContactService } from './contact.service';

@Component({
  template: `
    <h2>Comentarios</h2>
    <ul class="items">
      <li *ngFor="let contact of contacts">
        <a [routerLink]="['/comentario', contact.id]">Nombre: {{contact.name}} - Email: {{contact.email}}</a>
      </li>
    </ul>
    <button (click)="newContact()">New Coment</button>
  `
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private router: Router, private service: ContactService) { }

  ngOnInit() {
    this.service.getContacts().subscribe(
      contacts => this.contacts = contacts,
      error => console.log(error)
    );
  }

  newContact() {
    this.router.navigate(['/contacto']);
  }
}
