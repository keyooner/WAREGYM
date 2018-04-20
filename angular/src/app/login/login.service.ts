import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';

const URL = 'https://localhost:8443/api';

export interface User {
    id?: number;
    name: string;
    roles: string[];
}

@Injectable()
export class LoginService {

    isLogged = false;
    isAdmin = false;
    isTeach = false;
    isUser = false;
    notLogged = true;
    user: User;

    constructor(private http: Http, private router: Router, activatedRoute: ActivatedRoute) {
        this.reqIsLogged();
    }

    reqIsLogged() {

        const headers = new Headers({
            'X-Requested-With': 'XMLHttpRequest'
        });

        const options = new RequestOptions({ withCredentials: true, headers });

        this.http.get(URL + '/logIn', options).subscribe(
            response => { this.processLogInResponse(response),
            this.router.navigate(['/registro'])
        },
            error => {
                if (error.status !== 401) {
                    console.error('Error de inicio de sesión: ' +
                        JSON.stringify(error));
                }
            }
        );
    }

    private processLogInResponse(response) {
        this.isLogged = true;
        this.notLogged = false;
        this.user = response.json();
        this.isUser = this.user.roles.indexOf('ROLE_USER') !== -1;
        this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
        this.isTeach = this.user.roles.indexOf('ROLE_TEACH') !== -1;
    }

    logIn(user: string, pass: string) {

        const userPass = user + ':' + pass;

        const headers = new Headers({
            'Authorization': 'Basic ' + utf8_to_b64(userPass),
            'X-Requested-With': 'XMLHttpRequest'
        });

        const options = new RequestOptions({ withCredentials: true, headers });

        return this.http.get(URL + '/logIn', options).map(
            response => {
                this.processLogInResponse(response);
                return this.user;
            }
        );
    }

    logOut() {

        return this.http.get(URL + '/logOut', { withCredentials: true }).map(
            response => {
                this.isLogged = false;
                this.isAdmin = false;
                return response;
            }
        );
    }
}

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}