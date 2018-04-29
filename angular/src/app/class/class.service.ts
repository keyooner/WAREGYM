import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {User, LoginService} from '../login/login.service';
import 'rxjs/Rx';


export interface Class {
  id?: number;
  name: string;
  image1: string;
  image2: string;
  image3: string;
  description: string;
  development: string;
  benefit: string;
  schedule: [['','',''],['','',''],['','',''],['','',''],['','','']];
  users: User[];
}

const URL = 'https://localhost:8443/api/clases/';
@Injectable()
export class ClassService {

  constructor(private http: Http) { }

  getClasses() {
    return this.http.get(URL, { withCredentials: true })
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  getClass(id: number | string) {
    return this.http.get(URL + id, { withCredentials: true })
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  saveClass(gclass: Class) {

    const body = JSON.stringify(gclass);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true, headers });

    if (!gclass.id) {
      return this.http.post(URL, body, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
    } else {
      return this.http.put(URL + gclass.id, body, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
    }
  }

  removeClass(gclass: Class) {

    const headers = new Headers({
      'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true, headers });

    return this.http.delete(URL + gclass.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw('Server error (' + error.status + '): ' + error.text());
  }
}