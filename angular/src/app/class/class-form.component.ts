import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Class, ClassService } from './class.service';

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
    private service: ClassService) {

    const id = activatedRoute.snapshot.params['id'];
    if (id) {
      service.getClass(id).subscribe(
        gclass => this.gclass = gclass,
        error => console.error(error)
      );
      this.newClass = false;
    } else {
      this.gclass = { name: '', image1: '', image2: '', image3: '', description: '', development: '', benefit: '' };
      this.newClass = true;
    }
  }

  cancel() {
    window.history.back();
  }

  saveClass() {
    this.service.saveClass(this.gclass).subscribe(
      gclass => { },
      error => console.error('Error creating new class: ' + error)
    );
    window.confirm('Seguro que quieres crear esta clase?')
    this.router.navigate(['/clases']);
  }
}