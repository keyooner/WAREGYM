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
    e1principiante:Exercise;
    e2principiante:Exercise;
    e3principiante:Exercise;
    e4principiante:Exercise;
    principianteExercise:Exercise[]

    constructor(private service:TrainingService, 
                activatedRoute: ActivatedRoute, 
                private router:Router, 
                private loginService: LoginService){

        this.currentTraining="principiante";
        this.e1principiante= {name:"flexiones",weigth:0,reps:10};
        this.e2principiante= {name:"press de banca",weigth:50,reps:5};
        this.e3principiante= {name:"abdominales",weigth:0,reps:15};
        this.principianteExercise= [this.e1principiante,this.e2principiante,this.e3principiante];

        const id = activatedRoute.snapshot.params['id'];
        if (id) {
        service.getTraining(id).subscribe(
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
        console.log(this.currentTraining);
        this.service.saveTraining(this.training, this.currentTraining).subscribe(
            training => { } ,
            error => console.error('Error creating new training: ' + error)
        );
        window.confirm('¿Añadir el entrenamiento?'),
        this.router.navigate(['/entrenamiento/']),
        window.alert('Entrenamiento añadido con éxito');
      }
}
