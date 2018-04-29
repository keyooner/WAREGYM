import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Product {
  id?: number;
  type: string;
  name: string;
  value?: number;
  link: string;
  image?: string;
}

const URL = 'https://localhost:8080/api/productos/';
@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProducts(page: number) {
    return this.http.get(URL + "?page=" + page, { withCredentials: true })
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  getProduct(id: number | string) {
    return this.http.get(URL + id, { withCredentials: true })
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  saveProduct(product: Product) {

    const body = JSON.stringify(product);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true, headers });

    if (!product.id) {
      return this.http.post(URL, body, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
    } else {
      return this.http.put(URL + product.id, body, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
    }
  }

  removeProduct(product: Product) {

    const headers = new Headers({
      'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true, headers });

    return this.http.delete(URL + product.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }
  
  private handleError(error: any) {
    console.error(error);
    return Observable.throw('Server error (' + error.status + '): ' + error.text());
  }
}
