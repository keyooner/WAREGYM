import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const appRoutes = [
  { path: 'index', component: AppComponent},
  /*{ path: 'login', component: LoginComponent},*/
  { path: '', redirectTo: 'index', pathMatch: 'full' }
]

export const routing = RouterModule.forRoot(appRoutes);