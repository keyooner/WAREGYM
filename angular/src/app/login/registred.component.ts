import { Component } from '@angular/core';
import {LoginService} from './login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
    <section class="s-content s-content--narrow">
        <div class="row">
                <h4>Usuario</h4>
                <div class="form-field">
                    <input [(ngModel)]="userName" type="text" name="username" class="full-width" placeholder="Usuario" required/>
                </div>

                <h4>Contraseña</h4>
                <div class="form-field">
                    <input [(ngModel)]="password" type="password" name="password" class="full-width" placeholder="Contraseña" required/>
                </div>

                <h4>Repetir ontraseña</h4>
                <div class="form-field">
                    <input [(ngModel)]="password" type="password" name="password" class="full-width" placeholder="Contraseña" required/>
                </div>
                
                <div class="text-center">
                    <button (click)="registred()" class="submit btn btn--primary full-width">Registrarme</button>
                </div>
        </div>
    </section>
    `
})

export class RegistredComponent {}