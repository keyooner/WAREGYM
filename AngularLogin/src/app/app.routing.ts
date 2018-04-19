import { Routes, RouterModule } from '@angular/router';

import { PruebaLogin } from './prueba-login.component';

const appRoutes = [
  { path: 'logueo', component: PruebaLogin, useAsDefault: true },
  { path: '', redirectTo: 'logueo', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
