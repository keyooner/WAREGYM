import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

import { Class, ClassService } from './class.service';

@Component({
  moduleId: module.id,
  selector: 'ClassListComponent',
  templateUrl: 'class-list.component.html',
})
export class ClassListComponent implements OnInit {

  classes: Class[];
  booleans: boolean[];
  //o:boolean;
  //oo='';

  constructor(private router: Router, private service: ClassService, public loginService: LoginService) { }

  ngOnInit() {
    this.service.getClasses().subscribe(
      classes => this.classes = classes,
      error => console.log(error)
    );
    //this.booleans[0]=true;
    //this.oo='aaa';
    
  }

  newClass() {
    this.router.navigate(['/clase/new']);
  }

  makeBooleansList(){
    this.classes.forEach((item,index)=>{
      for(let user of item.users){
        if(user.name === this.loginService.user.name){
          this.booleans[index]=true;
        }else{
          this.booleans[index]=false;
        }
      }
    });
  }

}