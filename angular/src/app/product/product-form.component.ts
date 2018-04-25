import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product, ProductService } from './product.service';
import { LoginService } from '../login/login.service';

@Component({
  moduleId: module.id,
  selector: 'ProductFormComponent',
  templateUrl: 'product-form.component.html',
})
export class ProductFormComponent {

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

  saveProduct() {
    
//  console.log(this.product.image);
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