import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private router: Router,
    activatedRoute: ActivatedRoute, private loginService: LoginService) { }

  logIn(event: any, user: string, pass: string) {

    event.preventDefault();

    this.loginService.logIn(user, pass).subscribe(
      u => {console.log(u), this.router.navigate(['/index'])},
      error => alert('Invalid user or password')
    );
  }

  gotoRegistred() {
    this.router.navigate(['/registro']);
  }

}