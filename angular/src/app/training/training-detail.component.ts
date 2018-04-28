import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Training, TrainingService } from './training.service'; 
import { LoginService } from '../login/login.service';


@Component({
    moduleId: module.id,
    selector: 'trainingDetailComponent',
    templateUrl: 'training-detail.component.html',
})
export class TrainingDetailComponent {

    training: Training;
    constructor (private service:TrainingService, 
                 activatedRoute: ActivatedRoute, 
                 private router:Router, 
                 public loginService: LoginService,
                 private trainingService: TrainingService) {

                service.getTraining().subscribe(
                training => {this.training = training, console.log(training)},
                error => console.error(error)
                    );
                 }
    
    gotoTraining() {
        this.router.navigate(['/entrenamiento']);
    }
                
}