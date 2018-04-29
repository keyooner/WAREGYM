import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Contact {
    id?: number;
    name: string;
    email: string;
    number?: number;
    message: string;
  }

  const URL = 'https://localhost:8080/api/contactos/';
@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  getContacts() {
    return this.http.get(URL, { withCredentials: true })
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  getContact(id: number | string) {
    return this.http.get(URL + id, { withCredentials: true })
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  saveContact(contact: Contact) {

    const body = JSON.stringify(contact);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true, headers });

    if (!contact.id) {
      return this.http.post(URL, body, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
    } else {
      return this.http.put(URL + contact.id, body, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
    }
  }

  removeContact(contact: Contact) {

    const headers = new Headers({
      'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true, headers });

    return this.http.delete(URL + contact.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }

  updateContact(contact: Contact) {

    const body = JSON.stringify(contact);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true, headers });

    return this.http.put(URL + contact.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw('Server error (' + error.status + '): ' + error.text());
  }
}
