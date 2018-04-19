import { LoginService } from './login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PruebaLogin } from './prueba-login.component';
import { LoginComponent } from './login.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [AppComponent, PruebaLogin, LoginComponent],
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, routing],
  bootstrap: [AppComponent],
  providers: [LoginService]
})
export class AppModule { }
