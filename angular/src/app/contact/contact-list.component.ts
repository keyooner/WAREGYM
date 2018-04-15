import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact, ContactService } from './contact.service';

@Component({
  moduleId: module.id,
  selector: 'ContactListComponent',
  templateUrl: 'contact-list.component.html'
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
