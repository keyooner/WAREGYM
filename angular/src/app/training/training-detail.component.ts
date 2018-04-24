import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from './training.service'; 
import { LoginService } from '../login/login.service';


@Component({
    moduleId: module.id,
    selector: 'trainingDetailComponent',
    templateUrl: 'training-detail.component.html',
})
export class TrainingDetailComponent {

    constructor (private service:TrainingService, 
                 activatedRoute: ActivatedRoute, 
                 private router:Router, 
                 public loginService: LoginService) {}
}