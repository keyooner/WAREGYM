import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
    moduleId: module.id,
    selector: 'trainingDetailComponent',
    templateUrl: 'training-detail.component.html',
})
export class TrainingDetailComponent1 {

    constructor (public loginService: LoginService) {}
}