import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product, ProductService } from './product.service';
import { LoginService } from '../login/login.service';

@Component({
  moduleId: module.id,
  selector: 'ProductListComponent',
  templateUrl: 'product-list.component.html',  
})
export class ProductListComponent implements OnInit {

  products: Product[];
  max: number;
  page = 0;

  constructor(private router: Router, private service: ProductService, private loginService: LoginService) { }

  ngOnInit() {
    this.service.getProducts(this.page).subscribe(
      products => {
        this.products = products.content;
        this.max = products.totalPages -1;
        console.log(this.max);
      },
      error => console.log(error)
    );
  }

  newProduct() {
    this.router.navigate(['/producto/new']);
  }

  previousPage(){
    this.page--;
    this.service.getProducts(this.page).subscribe(
      products => this.products = products.content,
      error => console.log(error)
    );
  }
  
  nextPage(){
    this.page++;
    this.service.getProducts(this.page).subscribe(
      products => this.products = products.content,
      error => console.log(error)
    );
  }
}