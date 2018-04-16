import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class LoginService {
    user: string;
    pass: string;

    constructor(private http: Http) {}

logIn(user: string, pass: string) {

    this.user = user;
    this.pass = pass;

    const userPass = user + ':' + pass;

    const headers = new Headers({
        'Authorization': 'Basic ' + utf8_to_b64(userPass),
        'X-Requested-With': 'XMLHttpRequest'
    });

    const options = new RequestOptions({ withCredentials: true, headers });

    return this.http.get("https://localhost:8443/api/clases", options)
        .map(response => response.json())
        .catch(error => error.json()
    );
}

registred() {}

}

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}

