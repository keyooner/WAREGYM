import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export interface User {
  id?: number;
  name: string;
  passwordHash;
  training?: [string];
  activities?: [string];
  roles: [string];
  }

const URL = 'https://localhost:8080/api/users/';
@Injectable()
export class RegistredService {
    
    constructor(private http: Http) { }

    getUser(id: number | string) {
      return this.http.get(URL + id, { withCredentials: true })
        .map(response => response.json())
        .catch(error => this.handleError(error));
    }
    
    registredUser(user: User) {

        const body = JSON.stringify(user);
        const headers = new Headers({
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        });
        const options = new RequestOptions({ withCredentials: true, headers });
    
        if (!user.id) {
          return this.http.post(URL, body, options)
            .map(response => response.json())
            .catch(error => this.handleError(error));
        } else {
          return this.http.put(URL + user.id, body, options)
            .map(response => response.json())
            .catch(error => this.handleError(error));
        }
      }
      
      private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error.text());
      }
}

