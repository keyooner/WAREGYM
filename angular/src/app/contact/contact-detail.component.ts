import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact, ContactService } from './contact.service';

@Component({
    template: `
  <div *ngIf="contact">
  <h2>Comentario de "{{contact.name}}"</h2>
  <div>
    <p>Email: {{contact.email}}</p>
    <p>Number: {{contact.number}}</p>
    <p>Message: {{contact.message}}</p>
  </div>
  <p>
    <button (click)="removeContact()">Remove</button>
    <button (click)="editContact()">Edit</button>
    <br>
    <button (click)="gotoComents()">All Coments</button>
  </p>
  </div>`
})
export class ContactDetailComponent {

    contact: Contact;

    constructor(private router: Router, activatedRoute: ActivatedRoute, public service: ContactService) {

        const id = activatedRoute.snapshot.params['id'];
        service.getContact(id).subscribe(
            contact => this.contact = contact,
            error => console.error(error)
        );
    }

    removeContact() {
        const okResponse = window.confirm('Do you want to remove this contact?');
        if (okResponse) {
            this.service.removeContact(this.contact).subscribe(
                _ => this.router.navigate(['/comentarios']),
                error => console.error(error)
            );
        }
    }

    editContact() {
        this.router.navigate(['/comentario/edit', this.contact.id]);
    }

    gotoComents() {
        this.router.navigate(['/comentarios']);
    }
}
