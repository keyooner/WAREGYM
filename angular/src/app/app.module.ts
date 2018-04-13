import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routing }  from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { ContactListComponent } from './contact/contact-list.component';
import { ContactDetailComponent } from './contact/contact-detail.component';
import { ContactFormComponent } from './contact/contact-form.component';
import { ContactService } from './contact/contact.service';

import { LoginComponent } from './login/login.component';
import {LoginService } from './login/login.service';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,

    ContactDetailComponent, 
    ContactListComponent, 
    ContactFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule, 
    HttpModule, 
    JsonpModule,
    routing
  ],
  providers: [
    ContactService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
