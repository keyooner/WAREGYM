import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
    moduleId: module.id,
    selector: 'headerComponent',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {

    constructor (public loginService: LoginService) {}

    logOut() {
    this.loginService.logOut().subscribe(
      response => { },
      error => console.log('Error when trying to log out: ' + error)
    );
  }
}
