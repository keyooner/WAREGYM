import { NgModule } from '@angular/core';
import { routing }  from './../app.routing';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { LoginComponent } from './login.component';
import { HeaderComponent } from './../headerComponent/header.component';
import { FooterComponent } from './../footer/footer.component';

@NgModule({
    imports: [BrowserModule,
        //NgbModule.forRoot(),
        routing

    ],
    declarations: [
        LoginComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        LoginComponent,
    ]
})
export class LoginModule {

}
