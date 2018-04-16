import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { IndexComponent } from './index/index.component';

import { ContactListComponent } from './contact/contact-list.component';
import { ContactDetailComponent } from './contact/contact-detail.component';
import { ContactFormComponent } from './contact/contact-form.component';
import { ContactConfirmationComponent } from './contact/contact-confirmation.component';

import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductFormComponent } from './product/product-form.component';

import { ClassListComponent } from './class/class-list.component';
import { ClassDetailComponent } from './class/class-detail.component';
import { ClassFormComponent } from './class/class-form.component';
import { ClassService } from './class/class.service';

import {WaregymComponent} from './waregym/waregym.component';

const appRoutes = [
  { path: 'index', component: IndexComponent, useAsDefault: true},
  { path: 'login', component: LoginComponent},

  { path: 'comentarios', component: ContactListComponent },
  { path: 'contacto', component: ContactFormComponent },
  { path: 'comentario/:id', component: ContactDetailComponent },
  { path: 'comentario/edit/:id', component: ContactFormComponent },
  { path: 'contacto/confirmation', component: ContactConfirmationComponent },

  { path: 'productos', component: ProductListComponent },
  { path: 'producto/new', component: ProductFormComponent },
  { path: 'producto/:id', component: ProductDetailComponent },

  { path: 'clases', component: ClassListComponent },
  { path: 'clase/new', component: ClassFormComponent },
  { path: 'clase/:id', component: ClassDetailComponent },

  { path: 'waregym', component: WaregymComponent },

  { path: '', redirectTo: 'index', pathMatch: 'full' },
]

export const routing = RouterModule.forRoot(appRoutes);