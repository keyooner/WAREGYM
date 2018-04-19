import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Exercise{
    id?:number;
    name:string;
    weigth:number;
    reps:number;
}

export interface Training{
    id?:number;
    name:string;
    exercises:Exercise[];
}

const URL = 'https://localhost:8443/api/entrenamientos/';
@Injectable()
export class TrainingService {
    constructor(private http:Http) {}
    abdPrincipiante:number;
    
    getTrainings(page: number) {
        return this.http.get(URL + "?page=" + page, { withCredentials: true })
          .map(response => response.json())
          .catch(error => this.handleError(error));
    }

    getTraining(id: number | string) {
        return this.http.get(URL + id, { withCredentials: true })
          .map(response => response.json())
          .catch(error => this.handleError(error));
    }

    saveTraining(training: Training) {

        const body = JSON.stringify(training);
        const headers = new Headers({
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        });
        const options = new RequestOptions({ withCredentials: true, headers });
    
        if (!training.id) {
          return this.http.post(URL, body, options)
            .map(response => response.json())
            .catch(error => this.handleError(error));
        } else {
          return this.http.put(URL + training.id, body, options)
            .map(response => response.json())
            .catch(error => this.handleError(error));
        }
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error.text());
    }
}