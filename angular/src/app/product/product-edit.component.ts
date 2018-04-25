import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product, ProductService } from './product.service';
import { ProductFormComponent } from './product-form.component';
import { LoginService } from '../login/login.service';

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
    private service: ProductService,
    public loginService: LoginService) {

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

  ngOnInit() {
    if (!this.loginService.isAdmin) {
      this.router.navigate((['/login'])),
      window.alert('No tienes permisos, por favor inicia sesión');
    }
  }

  cancel() {
    window.history.back();
  }

  saveEditProduct() {
      
    //console.log(this.product.image);
      let parse = this.product.image.split('\\');
      this.product.image = parse[parse.length - 1];
      this.service.saveProduct(this.product).subscribe(
        product => { } ,
        error => console.error('Error creating new product: ' + error)
      );
      window.confirm('Seguro que quieres crear este producto?')
      this.router.navigate(['/productos']);
    }
}