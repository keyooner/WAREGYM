import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact, ContactService } from './contact.service';

@Component({
  moduleId: module.id,
  selector: 'ContactFormComponent',
  templateUrl: 'contact-form.component.html',
  styleUrls: ['contact-form.component.scss']
})

export class ContactFormComponent {

  zoom: number = 16;
  lat: number = 40.4893538;
  lng: number = -3.6827461;

  newContact: boolean;
  contact: Contact;

  constructor(
    private router: Router,
    activatedRoute: ActivatedRoute,
    private service: ContactService) {

    const id = activatedRoute.snapshot.params['id'];
    if (id) {
      service.getContact(id).subscribe(
        contact => this.contact = contact,
        error => console.error(error)
      );
      this.newContact = false;
    } else {
      this.contact = { name: '',email: '', message: '' };
      this.newContact = true;
    }
  }

  cancel() {
    window.history.back();
  }

  saveContact() {
    this.service.saveContact(this.contact).subscribe(
      contact => { },
      error => console.error('Error creating new contact: ' + error),
    );
    window.confirm('Quieres enviar este mensaje?')
    this.router.navigate(['/contacto/confirmation']);
  }
}