import { Component } from '@angular/core';
import {LoginService} from './login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'loginComponent',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent {
    userName: string;
    password: string;

    constructor (private loginService: LoginService, private router: Router) {}

    logIn() {
        this.loginService.logIn(this.userName, this.password).subscribe(
            response => this.router.navigate(['/index']),
            error => window.confirm("Usuario o contraseña erróneo :(")
        );      
    }

    gotoRegistred () {
        this.router.navigate(['/registro']);
    }
}
