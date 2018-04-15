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

import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductFormComponent } from './product/product-form.component';

import { ProductService } from './product/product.service';

import { LoginComponent } from './login/login.component';
import {LoginService } from './login/login.service';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,

    ContactDetailComponent, 
    ContactListComponent, 
    ContactFormComponent,

    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent,

    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule, 
    HttpModule, 
    JsonpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATELNKgTAuJcLmWZFFZoEO6-mhjGbJrRs'}),
  ],
  providers: [
    ContactService,
    ProductService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
