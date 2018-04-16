import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Class, ClassService } from './class.service';

@Component({
  moduleId: module.id,
  selector: 'ClassListComponent',
  templateUrl: 'class-list.component.html',
})
export class ClassListComponent implements OnInit {

  classes: Class[];

  constructor(private router: Router, private service: ClassService) { }

  ngOnInit() {
    this.service.getClasses().subscribe(
      classes => this.classes = classes,
      error => console.log(error)
    );
  }

  newClass() {
    this.router.navigate(['/clase/new']);
  }
}