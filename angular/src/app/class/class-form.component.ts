import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Class, ClassService } from './class.service';
import { LoginService } from '../login/login.service';

@Component({
  moduleId: module.id,
  selector: 'ClassFormComponent',
  templateUrl: 'class-form.component.html',
})
export class ClassFormComponent {

  newClass: boolean;
  gclass: Class;

  constructor(
    private router: Router,
    activatedRoute: ActivatedRoute,
    private service: ClassService,
    public loginService: LoginService) {

    const id = activatedRoute.snapshot.params['id'];
    if (id) {
      service.getClass(id).subscribe(
        gclass => this.gclass = gclass,
        error => console.error(error)
      );
      this.newClass = false;
    } else {
      this.gclass = { name: '', image1: '', image2: '', image3: '', description: '', development: '', benefit: '', schedule: [['','',''],['','',''],['','',''],['','',''],['','','']], users: [] };
      this.newClass = true;
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

  saveClass() {
    //console.log(this.gclass.image1);
    let parse = this.gclass.image1.split('\\');
    this.gclass.image1 = parse[parse.length - 1];
    this.service.saveClass(this.gclass).subscribe(
      gclass => { },
      error => console.error('Error creating new class: ' + error)
    );
    window.confirm('Seguro que quieres crear esta clase?')
    this.router.navigate(['/clases']);
  }
}