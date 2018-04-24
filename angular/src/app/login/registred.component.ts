import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, RegistredService } from './registred.service';

@Component({
    moduleId: module.id,
    selector: 'RegistredComponent',
    templateUrl: 'registred.component.html',
})

export class RegistredComponent {

    newUser: boolean;
    user: User;
    rePass: string;

    constructor(
        private router: Router,
        activatedRoute: ActivatedRoute,
        private service: RegistredService) {
            const id = activatedRoute.snapshot.params['id'];
    if (id) {
      service.getUser(id).subscribe(
        product => this.user = product,
        error => console.error(error)
      );
      this.newUser = false;
    } else {
      this.user = { name: '', passwordHash: '', roles: ['ROLE_USER'] };
      this.newUser = true;
    }
        }

    validationPassword() {
      if (this.rePass === this.user.passwordHash) {
        this.registredUser() 
        console.log(this.rePass)
        console.log(this.user.passwordHash)
      } else {
        window.confirm('Las contraseñas no coinciden.')
        this.router.navigate(['/registro']);
      }
    }    

    registredUser() {
        this.service.registredUser(this.user).subscribe(
          product => { } ,
          error => console.error('Error al crear un nuevo usuario: ' + error)
        );
        window.confirm('Has insertado bien todos los datos?')
        this.router.navigate(['/perfil']);
      }
    
      cancel() {
        this.router.navigate(['/login']);
      }
}

