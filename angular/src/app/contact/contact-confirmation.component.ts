import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact, ContactService } from './contact.service';

@Component({
   template: `
    <section class="s-content s-content--narrow">
        <div class="text-center">
            <h2> Mensaje Enviado correctamente </h2>
            <button (click)="gotoContact()">Volver a contacto</button>
        </div>
    </section>
   `
})

export class ContactConfirmationComponent {

    constructor(private router: Router, activatedRoute: ActivatedRoute, public service: ContactService) {}
    
    gotoContact() {
        this.router.navigate(['/contacto']);
    }
}
