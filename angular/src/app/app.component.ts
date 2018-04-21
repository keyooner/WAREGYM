import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              '../assets/css/base.css',
	      '../assets/css/vendor.css',
	      '../assets/css/main.css']
})
export class AppComponent {
  title = 'WareGym';
}
