import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegistredComponent } from './login/registred.component';
import { RegistredService } from './login/registred.service';

import { IndexComponent } from './index/index.component';

import { ContactListComponent } from './contact/contact-list.component';
import { ContactDetailComponent } from './contact/contact-detail.component';
import { ContactFormComponent } from './contact/contact-form.component';
import { ContactConfirmationComponent } from './contact/contact-confirmation.component';
import { ContactEditComponent } from './contact/contact-edit.component';

import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductFormComponent } from './product/product-form.component';
import { ProductEditComponent } from './product/product-edit.component';

import { ClassListComponent } from './class/class-list.component';
import { ClassDetailComponent } from './class/class-detail.component';
import { ClassFormComponent } from './class/class-form.component';

import { WaregymComponent } from './waregym/waregym.component';
import { TrainingComponent } from './training/training.component';

import { ProfileComponent } from './profile/profile.component';
//import { TrainingDetailComponent } from './training/training-detail.component';

const appRoutes = [
  { path: 'index', component: IndexComponent, useAsDefault: true},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistredComponent },
  { path: 'perfil', component: ProfileComponent },

  { path: 'comentarios', component: ContactListComponent },
  { path: 'contacto', component: ContactFormComponent },
  { path: 'comentario/:id', component: ContactDetailComponent },
  { path: 'comentario/edit/:id', component: ContactEditComponent },
  { path: 'contacto/confirmation', component: ContactConfirmationComponent },

  { path: 'productos', component: ProductListComponent },
  { path: 'producto/new', component: ProductFormComponent },
  { path: 'producto/edit/:id', component: ProductEditComponent },
  { path: 'producto/:id', component: ProductDetailComponent },

  { path: 'entrenamiento', component: TrainingComponent },
  //{ path: 'entrenamiento/:id', component: TrainingDetailComponent },

  { path: 'clases', component: ClassListComponent },
  { path: 'clase/new', component: ClassFormComponent },
  { path: 'clase/:id', component: ClassDetailComponent },

  { path: 'waregym', component: WaregymComponent },

  { path: '', redirectTo: 'index', pathMatch: 'full' },
]

export const routing = RouterModule.forRoot(appRoutes);
