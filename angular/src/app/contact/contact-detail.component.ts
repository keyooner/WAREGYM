import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

import { Contact, ContactService } from './contact.service';

@Component({
    moduleId: module.id,
    selector: 'ContacDetailComponent',
    templateUrl: 'contact-detail.component.html',
})

export class ContactDetailComponent {

    contact: Contact;

    constructor(private router: Router, 
                activatedRoute: ActivatedRoute, 
                public service: ContactService,
                public loginService: LoginService) {

        const id = activatedRoute.snapshot.params['id'];
        service.getContact(id).subscribe(
            contact => this.contact = contact,
            error => console.error(error)
        );
    }

    ngOnInit() {
        if (!this.loginService.isAdmin) {
          this.router.navigate((['/login'])),
          window.alert('No tienes permisos, por favor inicia sesión');
        }
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
