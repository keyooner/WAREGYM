import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from '../app.component';
import { ContactListComponent } from './contact-list.component';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactFormComponent } from './contact-form.component';

import { ContactService } from './contact.service';
import { routing } from '../app.routing';

@NgModule({
  declarations: [AppComponent, ContactDetailComponent, ContactListComponent, ContactFormComponent],
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, routing],
  bootstrap: [AppComponent],
  providers: [ContactService]
})
export class ContactModule { }