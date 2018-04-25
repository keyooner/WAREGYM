import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';


@Component({
    moduleId: module.id,
    selector: 'profileComponent',
    templateUrl: 'profile.component.html',
})
export class ProfileComponent {

    constructor (public loginService: LoginService, private router: Router) {}

  gotoAddClass() {
      this.router.navigate(['/clase/new']);
  }

  gotoAddProduct() {
      this.router.navigate(['/producto/new']);
  }

  gotoViewMessages() {
      this.router.navigate(['/comentarios']);
  }

  gotoMyTraining() {

  }

  gotoViewClass() {
      this.router.navigate(['/clases']);
  }

  gotoViewProducts() {
      this.router.navigate(['/productos']);
  }
}
