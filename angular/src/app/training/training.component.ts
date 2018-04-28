import { Component } from '@angular/core';
import { TrainingService, Training, Exercise } from './training.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
    moduleId: module.id,
    selector: 'training',
    templateUrl: 'training.component.html',
    styleUrls: ['training.component.scss']
})
export class TrainingComponent {
    newTraining:boolean;
    currentTraining:string;
    page = 0;
    training:Training;

    constructor(private service:TrainingService, 
                activatedRoute: ActivatedRoute, 
                private router:Router, 
                public loginService: LoginService){

        this.currentTraining="";

        const id = activatedRoute.snapshot.params['id'];
        if (id) {
        service.getTraining().subscribe(
            training => this.training = training,
            error => console.error(error)
        );
        this.newTraining = false;
        } else {
        this.training = { name: this.currentTraining,exercises: []};
        /*if (this.currentTraining = "principiante") {
            this.training.exercises = this.principianteExercise;
        }*/
        this.newTraining = true;
        }
    }

    setCurrentTraining(name:string) {
        this.currentTraining=name;
    }

    cancel() {
        window.history.back();
    }
    
    saveTraining() {
        
        this.service.saveTraining(this.training, this.currentTraining).subscribe(
            training => { } ,
            error => console.error('Error creating new training: ' + error)
        );
        window.confirm('¿Añadir el entrenamiento?'),
        this.router.navigate(['/entrenamiento/']),
        window.alert('Entrenamiento añadido con éxito');
        this.service.getCurrentTraining().subscribe(
            response => {this.training = response, this.router.navigate(['entrenamiento/personal'])}
        )
      }
}
