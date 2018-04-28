import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { User, LoginService } from '../login/login.service';

export interface User {
    id?: number;
    name: string;
    roles: string[];
}

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
    constructor(private http:Http, private loginService: LoginService) {}
    abdPrincipiante:number;
    
    getTrainings() {
        return this.http.get(URL, { withCredentials: true })
          .map(response => response.json())
          .catch(error => this.handleError(error));
    }

    getTraining(id) {
        return this.http.get(URL + this.loginService.user.name, { withCredentials: true })
          .map(response => response.json())
          .catch(error => this.handleError(error));
    }

    saveTraining(training: Training, id: string) {

        const body = JSON.stringify(training);
        const headers = new Headers({
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        });
        const options = new RequestOptions({ withCredentials: true, headers });
    
        if (!id) {
          return this.http.post(URL, body, options)
            .map(response => response.json())
            .catch(error => this.handleError(error));
        } else {
          return this.http.put(URL + this.loginService.user.name + '/' + id, body, options)
            .map(response => response.json())
            .catch(error => this.handleError(error));
        }
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error.text());
    }
}