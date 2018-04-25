import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact, ContactService } from './contact.service';
import { LoginService } from '../login/login.service';

@Component({
  moduleId: module.id,
  selector: 'ContactListComponent',
  templateUrl: 'contact-list.component.html'
})

export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private router: Router, private service: ContactService, public loginService: LoginService) { }

  ngOnInit() {
    if (this.loginService.isAdmin) {
    this.service.getContacts().subscribe(
      contacts => this.contacts = contacts,
      error => console.log(error)
    );
   } else {
     this.router.navigate(['/login']),
     window.alert('No tienes permisos');
   }
  }

  returnContact() {
    this.router.navigate(['/contacto']);
  }
}
