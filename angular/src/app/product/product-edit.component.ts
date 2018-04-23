import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product, ProductService } from './product.service';
import { ProductFormComponent } from './product-form.component';

@Component({
    moduleId: module.id,
    selector: 'ProductEditComponent',
    templateUrl: 'product-edit.component.html',  
  })

  export class ProductEditComponent {

    newProduct: boolean;
    product: Product;

  constructor(
    private router: Router,
    activatedRoute: ActivatedRoute,
    private service: ProductService) {

    const id = activatedRoute.snapshot.params['id'];
    if (id) {
      service.getProduct(id).subscribe(
        product => this.product = product,
        error => console.error(error)
      );
      this.newProduct = false;
    } else {
      this.product = { type: '', name: '', link: '' };
      this.newProduct = true;
    }
  }

  cancel() {
    window.history.back();
  }

  saveEditProduct() {
    this.service.saveProduct(this.product).subscribe(
      product => { } ,
      error => console.error('Error al guardar el nuevo producto: ' + error)
    );
    window.confirm('Seguro que quieres guardar los cambios en el producto?')
    this.router.navigate(['/productos']);
  }
}