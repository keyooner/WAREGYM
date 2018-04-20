import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product, ProductService } from './product.service';
import { LoginService } from '../login/login.service';

@Component({
    moduleId: module.id,
    selector: 'ProductDetailComponent',
    templateUrl: 'product-detail.component.html',  
  })
export class ProductDetailComponent {

    product: Product;

    constructor(private router: Router, 
        activatedRoute: ActivatedRoute, 
        public service: ProductService, 
        public loginService: LoginService) {

        const id = activatedRoute.snapshot.params['id'];
        service.getProduct(id).subscribe(
            product => this.product = product,
            error => console.error(error)
        );
    }

    removeProduct() {
        const okResponse = window.confirm('Do you want to remove this product?');
        if (okResponse) {
            this.service.removeProduct(this.product).subscribe(
                _ => this.router.navigate(['/productos']),
                error => console.error(error)
            );
        }
    }

    editProduct() {
        this.router.navigate(['/producto/edit', this.product.id]);
    }

    gotoProducts() {
        this.router.navigate(['/productos']);
    }
}