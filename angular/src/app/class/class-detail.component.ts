import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Class, ClassService } from './class.service';
import { LoginService } from '../login/login.service';

@Component({
    moduleId: module.id,
    selector: 'ClassDetailComponent',
    templateUrl: 'class-detail.component.html',
})
export class ClassDetailComponent {

    gclass: Class;

    constructor(private router: Router, activatedRoute: ActivatedRoute,
                public service: ClassService,
                private loginService: LoginService) {

        const id = activatedRoute.snapshot.params['id'];
        service.getClass(id).subscribe(
            gclass => this.gclass = gclass,
            error => console.error(error)
        );
    }

    removeClass() {
        const okResponse = window.confirm('Do you want to remove this class?');
        if (okResponse) {
            this.service.removeClass(this.gclass).subscribe(
                _ => this.router.navigate(['/clases']),
                error => console.error(error)
            );
        }
        this.router.navigate(['/clases']);
    }

    gotoClasses() {
        this.router.navigate(['/clases']);
    }
}