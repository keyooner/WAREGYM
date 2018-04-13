import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact, ContactService } from './contact.service';

@Component({
  moduleId: module.id,
  selector: 'ContactFormComponent',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class ContactFormComponent {

  newContact: boolean;
  contact: Contact;

  constructor(
    private _router: Router,
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

  save() {
    this.service.saveContact(this.contact).subscribe(
      contact => { },
      error => console.error('Error creating new contact: ' + error)
    );
    window.history.back();
  }
}