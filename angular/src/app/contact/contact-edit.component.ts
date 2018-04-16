import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact, ContactService } from './contact.service';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@Component({
  moduleId: module.id,
  selector: 'ContactEditComponent',
  templateUrl: 'contact-edit.component.html'
})

export class ContactEditComponent {

  newContact: boolean;
  contact: Contact;

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

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

  saveEditContact() {
    this.service.saveContact(this.contact).subscribe(
      contact => { },
      error => console.error('Error creating new contact: ' + error),
    );
    window.confirm('Seguro que quieres modificar este mensaje?')
    this.router.navigate(['/comentarios']);
  } 
}