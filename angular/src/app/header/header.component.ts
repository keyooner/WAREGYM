import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
    moduleId: module.id,
    selector: 'headerComponent',
    templateUrl: 'header.component.html',
})
export class HeaderComponent {

    constructor (private router: Router, public loginService: LoginService) {}

    logOut() {
    this.loginService.logOut().subscribe(
      response => { this.router.navigate(['/login']), window.alert('Te has desconectado con éxito') },
      error => console.log('Error when trying to log out: ' + error)
    );
  }
}
