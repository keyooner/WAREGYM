import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact, ContactService } from './contact.service';

@Component({
    moduleId: module.id,
    selector: 'ContactListComponent',
    templateUrl: 'contact-detail.component.html',
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
        const okResponse = window.confirm('Quieres eliminar este contacto?');
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
