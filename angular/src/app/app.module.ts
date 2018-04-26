import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing }  from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { CommonModule } from "@angular/common";


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { ContactListComponent } from './contact/contact-list.component';
import { ContactDetailComponent } from './contact/contact-detail.component';
import { ContactFormComponent } from './contact/contact-form.component';
import { ContactEditComponent } from './contact/contact-edit.component';
import { ContactConfirmationComponent } from './contact/contact-confirmation.component';
import { ContactService } from './contact/contact.service';

import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductFormComponent } from './product/product-form.component';
import { ProductEditComponent } from './product/product-edit.component';

import { ProductService } from './product/product.service';

import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { RegistredComponent } from './login/registred.component';
import { RegistredService } from './login/registred.service';

import { WaregymComponent } from './waregym/waregym.component';

import { ClassListComponent } from './class/class-list.component';
import { ClassDetailComponent } from './class/class-detail.component';
import { ClassFormComponent } from './class/class-form.component';
import { ClassService } from './class/class.service';

import { TrainingComponent } from './training/training.component';
import { TrainingService } from './training/training.service';
//import { TrainingDetailComponent } from './training/training-detail.component';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,

    ContactDetailComponent,
    ContactListComponent,
    ContactFormComponent,
    ContactConfirmationComponent,
    ContactEditComponent,

    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent,
    ProductEditComponent,

    ClassListComponent,
    ClassDetailComponent,
    ClassFormComponent,

    TrainingComponent,
    // TrainingDetailComponent,

    LoginComponent,
    RegistredComponent,

    WaregymComponent,

    ProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATELNKgTAuJcLmWZFFZoEO6-mhjGbJrRs'}),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule
  ],
  providers: [
    ContactService,
    ProductService,
    LoginService,
    RegistredService,
    ClassService,
    TrainingService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
