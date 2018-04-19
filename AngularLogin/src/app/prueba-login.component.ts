import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  template: `
    <h2>Prueba de Logueo</h2>
    <div *ngIf="loginService.isLogged"><h1>Estás Logueado</h1></div>
  `
})
export class PruebaLogin implements OnInit {

  constructor(private router: Router,
    public loginService: LoginService) { }

  ngOnInit() {
  }
}
