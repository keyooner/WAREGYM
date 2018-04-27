webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"s-pageheader s-pageheader--home\" style=\"min-height:0px;\">\n    <headerComponent></headerComponent>\n</section>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n<section class=\"s-footer\">\n<footer class=\"s-footer\"> \n    <footerComponent></footerComponent>\n</footer>\n</section>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'WareGym';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css"), __webpack_require__("./src/assets/css/base.css"), __webpack_require__("./src/assets/css/vendor.css"), __webpack_require__("./src/assets/css/main.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_recaptcha__ = __webpack_require__("./node_modules/ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_recaptcha_forms__ = __webpack_require__("./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_recaptcha_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng_recaptcha_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__index_index_component__ = __webpack_require__("./src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_contact_list_component__ = __webpack_require__("./src/app/contact/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contact_contact_detail_component__ = __webpack_require__("./src/app/contact/contact-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_contact_form_component__ = __webpack_require__("./src/app/contact/contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contact_contact_edit_component__ = __webpack_require__("./src/app/contact/contact-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_contact_confirmation_component__ = __webpack_require__("./src/app/contact/contact-confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__contact_contact_service__ = __webpack_require__("./src/app/contact/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__product_product_list_component__ = __webpack_require__("./src/app/product/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__product_product_detail_component__ = __webpack_require__("./src/app/product/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__product_product_form_component__ = __webpack_require__("./src/app/product/product-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__product_product_edit_component__ = __webpack_require__("./src/app/product/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__product_product_service__ = __webpack_require__("./src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__login_registred_component__ = __webpack_require__("./src/app/login/registred.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__login_registred_service__ = __webpack_require__("./src/app/login/registred.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__waregym_waregym_component__ = __webpack_require__("./src/app/waregym/waregym.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__class_class_list_component__ = __webpack_require__("./src/app/class/class-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__class_class_detail_component__ = __webpack_require__("./src/app/class/class-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__class_class_form_component__ = __webpack_require__("./src/app/class/class-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__class_class_service__ = __webpack_require__("./src/app/class/class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__training_training_component__ = __webpack_require__("./src/app/training/training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__training_training_service__ = __webpack_require__("./src/app/training/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































//import { TrainingDetailComponent } from './training/training-detail.component';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__contact_contact_detail_component__["a" /* ContactDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__contact_contact_list_component__["a" /* ContactListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__contact_contact_form_component__["a" /* ContactFormComponent */],
                __WEBPACK_IMPORTED_MODULE_18__contact_contact_confirmation_component__["a" /* ContactConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_17__contact_contact_edit_component__["a" /* ContactEditComponent */],
                __WEBPACK_IMPORTED_MODULE_20__product_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__product_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_22__product_product_form_component__["a" /* ProductFormComponent */],
                __WEBPACK_IMPORTED_MODULE_23__product_product_edit_component__["a" /* ProductEditComponent */],
                __WEBPACK_IMPORTED_MODULE_30__class_class_list_component__["a" /* ClassListComponent */],
                __WEBPACK_IMPORTED_MODULE_31__class_class_detail_component__["a" /* ClassDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_32__class_class_form_component__["a" /* ClassFormComponent */],
                __WEBPACK_IMPORTED_MODULE_34__training_training_component__["a" /* TrainingComponent */],
                // TrainingDetailComponent,
                __WEBPACK_IMPORTED_MODULE_25__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_27__login_registred_component__["a" /* RegistredComponent */],
                __WEBPACK_IMPORTED_MODULE_29__waregym_waregym_component__["a" /* WaregymComponent */],
                __WEBPACK_IMPORTED_MODULE_36__profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyATELNKgTAuJcLmWZFFZoEO6-mhjGbJrRs'
                }),
                __WEBPACK_IMPORTED_MODULE_7_ng_recaptcha__["RecaptchaModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ng_recaptcha_forms__["RecaptchaFormsModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__contact_contact_service__["a" /* ContactService */],
                __WEBPACK_IMPORTED_MODULE_24__product_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_26__login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_28__login_registred_service__["a" /* RegistredService */],
                __WEBPACK_IMPORTED_MODULE_33__class_class_service__["a" /* ClassService */],
                __WEBPACK_IMPORTED_MODULE_35__training_training_service__["a" /* TrainingService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_registred_component__ = __webpack_require__("./src/app/login/registred.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_index_component__ = __webpack_require__("./src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_list_component__ = __webpack_require__("./src/app/contact/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_detail_component__ = __webpack_require__("./src/app/contact/contact-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_form_component__ = __webpack_require__("./src/app/contact/contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_confirmation_component__ = __webpack_require__("./src/app/contact/contact-confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_edit_component__ = __webpack_require__("./src/app/contact/contact-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_product_list_component__ = __webpack_require__("./src/app/product/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_product_detail_component__ = __webpack_require__("./src/app/product/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_product_form_component__ = __webpack_require__("./src/app/product/product-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_product_edit_component__ = __webpack_require__("./src/app/product/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__class_class_list_component__ = __webpack_require__("./src/app/class/class-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__class_class_detail_component__ = __webpack_require__("./src/app/class/class-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__class_class_form_component__ = __webpack_require__("./src/app/class/class-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__waregym_waregym_component__ = __webpack_require__("./src/app/waregym/waregym.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__training_training_component__ = __webpack_require__("./src/app/training/training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");



















//import { TrainingDetailComponent } from './training/training-detail.component';
var appRoutes = [
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_3__index_index_component__["a" /* IndexComponent */], useAsDefault: true },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'registro', component: __WEBPACK_IMPORTED_MODULE_2__login_registred_component__["a" /* RegistredComponent */] },
    { path: 'perfil', component: __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'comentarios', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_list_component__["a" /* ContactListComponent */] },
    { path: 'contacto', component: __WEBPACK_IMPORTED_MODULE_6__contact_contact_form_component__["a" /* ContactFormComponent */] },
    { path: 'comentario/:id', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_detail_component__["a" /* ContactDetailComponent */] },
    { path: 'comentario/edit/:id', component: __WEBPACK_IMPORTED_MODULE_8__contact_contact_edit_component__["a" /* ContactEditComponent */] },
    { path: 'contacto/confirmation', component: __WEBPACK_IMPORTED_MODULE_7__contact_contact_confirmation_component__["a" /* ContactConfirmationComponent */] },
    { path: 'productos', component: __WEBPACK_IMPORTED_MODULE_9__product_product_list_component__["a" /* ProductListComponent */] },
    { path: 'producto/new', component: __WEBPACK_IMPORTED_MODULE_11__product_product_form_component__["a" /* ProductFormComponent */] },
    { path: 'producto/edit/:id', component: __WEBPACK_IMPORTED_MODULE_12__product_product_edit_component__["a" /* ProductEditComponent */] },
    { path: 'producto/:id', component: __WEBPACK_IMPORTED_MODULE_10__product_product_detail_component__["a" /* ProductDetailComponent */] },
    { path: 'entrenamiento', component: __WEBPACK_IMPORTED_MODULE_17__training_training_component__["a" /* TrainingComponent */] },
    //{ path: 'entrenamiento/:id', component: TrainingDetailComponent },
    { path: 'clases', component: __WEBPACK_IMPORTED_MODULE_13__class_class_list_component__["a" /* ClassListComponent */] },
    { path: 'clase/new', component: __WEBPACK_IMPORTED_MODULE_15__class_class_form_component__["a" /* ClassFormComponent */] },
    { path: 'clase/:id', component: __WEBPACK_IMPORTED_MODULE_14__class_class_detail_component__["a" /* ClassDetailComponent */] },
    { path: 'waregym', component: __WEBPACK_IMPORTED_MODULE_16__waregym_waregym_component__["a" /* WaregymComponent */] },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/class/class-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- s-content\n================================================== -->\n<section class=\"s-content s-content--narrow s-content--no-padding-bottom\">\n\n    <article class=\"row format-gallery\">\n        <div *ngIf=\"gclass\">\n        <div class=\"s-content__header col-full\">\n            <h1 class=\"s-content__header-title\">\n                {{gclass.name}}\n            </h1>\n        <!-- end s-content__header -->\n        <div class=\"s-content__media col-full\">\n            <div class=\"s-content__post-thumb\">\n                <img src=\"../../assets/files/{{gclass.image1}}\" srcset=\"../../assets/files/{{gclass.image1}} 2000w, \n                          ../../assets/files/{{gclass.image1}} 1000w, \n                          ../../assets/files/{{gclass.image1}} 500w\" sizes=\"(max-width: 2000px) 100vw, 2000px\" alt=\"\">\n            </div>\n        </div>\n        <!-- end s-content__media -->\n\n        <div class=\"col-full s-content__main\">\n\n            <div class=\"text-center\">\n                <h1>¿Qué es el {{gclass.name}}?</h1>\n\n            <p>{{gclass.description}}</p>\n\n            <div class=\"text-center\">\n                <h1>Desarrollo de una clase</h1>\n\n                <p>{{gclass.development}}</p>\n\n                <div class=\"text-center\">\n                    <h1>Beneficios</h1>\n                </div>\n\n                <p>{{gclass.benefit}}</p>\n          </div>\n                <div class=\"text-center\">\n                    <h1>Horarios</h1>\n                </div>\n            </div>\n        </div>\n        <div class=\"row-center\">\n            <table class=\"table table-sm\">\n                <thead>\n                    <tr>\n                        <th style=\"text-align:center\" scope=\"col\">Días/Horas</th>\n                        <th style=\"text-align:center\" scope=\"col\">Lunes</th>\n                        <th style=\"text-align:center\" scope=\"col\">Martes</th>\n                        <th style=\"text-align:center\" scope=\"col\">Miércoles</th>\n                        <th style=\"text-align:center\" scope=\"col\">Jueves</th>\n                        <th style=\"text-align:center\" scope=\"col\">Viernes</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th style=\"text-align:center\" scope=\"row\">10:00</th>\n                        <td style=\"text-align:center\">{{gclass.schedule[0][0]}}</td>\n                        <td style=\"text-align:center\">{{gclass.schedule[1][0]}}</td>\n                        <td style=\"text-align:center\">{{gclass.schedule[2][0]}}</td>\n                        <td style=\"text-align:center\">{{gclass.schedule[3][0]}}</td>\n                        <td style=\"text-align:center\">{{gclass.schedule[4][0]}}</td>\n                    </tr>\n                    <tr>\n                        <th style=\"text-align:center\" scope=\"row\">12:00</th>\n                        <td style=\"text-align:center\">{{gclass.schedule[0][1]}}</td>\n                        <td style=\"text-align:center\">{{gclass.schedule[1][1]}}</td>\n                        <td style=\"text-align:center\">{{gclass.schedule[2][1]}}</td>\n                        <td style=\"text-align:center\">{{gclass.schedule[3][1]}}</td>\n                        <td style=\"text-align:center\">{{gclass.schedule[4][1]}}</td>\n                    </tr>\n                    <tr>\n                        <th style=\"text-align:center\" scope=\"row\">17:00</th>\n                        <td style=\"text-align:center\">{{gclass.schedule[0][2]}}</td>\n                        <td style=\"text-align:center\">{{gclass.schedule[1][2]}}</td>\n                        <td style=\"text-align:center\">{{gclass.schedule[2][2]}}</td>\n                        <td style=\"text-align:center\">{{gclass.schedule[3][2]}}</td>\n                        <td style=\"text-align:center\">{{gclass.schedule[4][2]}}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class=\"class-inscription text-center\">\n                <button *ngIf=\"loginService.isAdmin || loginService.isTeach\" (click)=\"removeClass()\">Borrar Clase</button>\n                <button (click)=\"gotoClasses()\">Todas las Clases</button>\n                <button *ngIf=\"loginService.isUser || loginService.isTeach\" (click)=\"inscriptionClass()\">Inscribirme</button>\n            </div>\n        </div>\n        </div>\n        </div>\n    </article>\n</section>"

/***/ }),

/***/ "./src/app/class/class-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_service__ = __webpack_require__("./src/app/class/class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassDetailComponent = /** @class */ (function () {
    function ClassDetailComponent(router, activatedRoute, service, loginService) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.loginService = loginService;
        var id = activatedRoute.snapshot.params['id'];
        service.getClass(id).subscribe(function (gclass) { return _this.gclass = gclass; }, function (error) { return console.error(error); });
    }
    ClassDetailComponent.prototype.removeClass = function () {
        var _this = this;
        var okResponse = window.confirm('Do you want to remove this class?');
        if (okResponse) {
            this.service.removeClass(this.gclass).subscribe(function (_) { return _this.router.navigate(['/clases']); }, function (error) { return console.error(error); });
        }
        this.router.navigate(['/clases']);
    };
    ClassDetailComponent.prototype.gotoClasses = function () {
        this.router.navigate(['/clases']);
    };
    ClassDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'ClassDetailComponent',
            template: __webpack_require__("./src/app/class/class-detail.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__class_service__["a" /* ClassService */],
            __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]])
    ], ClassDetailComponent);
    return ClassDetailComponent;
}());



/***/ }),

/***/ "./src/app/class/class-form.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"s-content s-content--narrow s-content--no-padding-bottom\">\n    <div class=\"row\">\n        <div class=\"col-full s-content__main\">\n            <h2>Añadir Clase</h2>\n                <div *ngIf=\"gclass\">\n                    <fieldset>\n                        <div *ngIf=\"gclass.id\"><label>Id: </label>{{gclass.id}</div>\n\n                        <div class=\"form-field\">\n                            <input [(ngModel)]=\"gclass.name\" type=\"text\" class=\"full-width\" placeholder=\"Nombre\" required/>\n                        </div>\n\n                        <div class=\"message form-field\">\n                            <textarea [(ngModel)]=\"gclass.description\" class=\"full-width\" placeholder=\"Description\"></textarea>\n                        </div>\n\n                        <div class=\"message form-field\">\n                                <textarea [(ngModel)]=\"gclass.development\" class=\"full-width\" placeholder=\"Desarrollo\"></textarea>\n                        </div>\n\n                        <div class=\"message form-field\">\n                                <textarea [(ngModel)]=\"gclass.benefit\" class=\"full-width\" placeholder=\"Beneficios\"></textarea>\n                        </div>\n\n                        <div class=\"message form-field\">\n                            <input [(ngModel)]=\"gclass.image1\" type=\"file\"/>\n                        </div>\n                        \n                        <h2>Horario</h2>\n                            <table>\n                                <tr>\n                                    <td>Días/Horas</td>\n                                    <td>Lunes</td>\n                                    <td>Martes</td>\n                                    <td>Miércoles</td>\n                                    <td>Jueves</td>\n                                    <td>Viernes</td>\n                                </tr>\n                                <tr>\n                                    <td>10:00</td>\n                                    <td><input type=\"text\" [(ngModel)]=\"gclass.schedule[0][0]\" style=\"width: 10px\"></td>\n                                    <td><input type=\"text\" [(ngModel)]=\"gclass.schedule[1][0]\" style=\"width: 10px\"></td>\n                                    <td><input type=\"text\" [(ngModel)]=\"gclass.schedule[2][0]\" style=\"width: 10px\"></td>\n                                    <td><input type=\"text\" [(ngModel)]=\"gclass.schedule[3][0]\" style=\"width: 10px\"></td>\n                                    <td><input type=\"text\" [(ngModel)]=\"gclass.schedule[4][0]\" style=\"width: 10px\"></td>\n                                </tr>\n                                <tr>\n                                    <td>12:00</td>\n                                    <td><input type=\"text\" [(ngModel)]=\"gclass.schedule[0][1]\" style=\"width: 10px\"></td>\n                                    <td><input type=\"text\" [(ngModel)]=\"gclass.schedule[1][1]\" style=\"width: 10px\"></td>\n                                    <td><input type=\"text\" [(ngModel)]=\"gclass.schedule[2][1]\" style=\"width: 10px\"></td>\n                                    <td><input type=\"text\" [(ngModel)]=\"gclass.schedule[3][1]\" style=\"width: 10px\"></td>\n                                    <td><input type=\"text\" [(ngModel)]=\"gclass.schedule[4][1]\" style=\"width: 10px\"></td>\n                                </tr>\n                                <tr>\n                                    <td>17:00</td>\n                                    <td><input type=\"text\" [(ngModel)]=\"gclass.schedule[0][2]\" style=\"width: 10px\"></td>\n                                    <td><input type=\"text\" [(ngModel)]=\"gclass.schedule[1][2]\" style=\"width: 10px\"></td>\n                                    <td><input type=\"text\" [(ngModel)]=\"gclass.schedule[2][2]\" style=\"width: 10px\"></td>\n                                    <td><input type=\"text\" [(ngModel)]=\"gclass.schedule[3][2]\" style=\"width: 10px\"></td>\n                                    <td><input type=\"text\" [(ngModel)]=\"gclass.schedule[4][2]\" style=\"width: 10px\"></td>\n                                </tr>\n                        </table>\n                    </fieldset>\n                </div>\n                <div class=\"text-center\">\n                    <button (click)=\"saveClass()\">Añadir Clase</button>\n                    <button (click)=\"cancel()\">Cancelar</button>\n                </div>\n            </div>\n        </div>\n</section>"

/***/ }),

/***/ "./src/app/class/class-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_service__ = __webpack_require__("./src/app/class/class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassFormComponent = /** @class */ (function () {
    function ClassFormComponent(router, activatedRoute, service, loginService) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.loginService = loginService;
        var id = activatedRoute.snapshot.params['id'];
        if (id) {
            service.getClass(id).subscribe(function (gclass) { return _this.gclass = gclass; }, function (error) { return console.error(error); });
            this.newClass = false;
        }
        else {
            this.gclass = { name: '', image1: '', image2: '', image3: '', description: '', development: '', benefit: '', schedule: [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], users: [] };
            this.newClass = true;
        }
    }
    ClassFormComponent.prototype.ngOnInit = function () {
        if (!this.loginService.isAdmin) {
            this.router.navigate((['/login'])),
                window.alert('No tienes permisos, por favor inicia sesión');
        }
    };
    ClassFormComponent.prototype.cancel = function () {
        window.history.back();
    };
    ClassFormComponent.prototype.saveClass = function () {
        //console.log(this.gclass.image1);
        var parse = this.gclass.image1.split('\\');
        this.gclass.image1 = parse[parse.length - 1];
        this.service.saveClass(this.gclass).subscribe(function (gclass) { }, function (error) { return console.error('Error creating new class: ' + error); });
        window.confirm('Seguro que quieres crear esta clase?');
        this.router.navigate(['/clases']);
    };
    ClassFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'ClassFormComponent',
            template: __webpack_require__("./src/app/class/class-form.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__class_service__["a" /* ClassService */],
            __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]])
    ], ClassFormComponent);
    return ClassFormComponent;
}());



/***/ }),

/***/ "./src/app/class/class-list.component.html":
/***/ (function(module, exports) {

module.exports = " <section class=\"s-content s-content--narrow s-content--no-padding-bottom\">\n\n    <article class=\"row format-gallery\">\n\n        <div class=\"s-content__header col-full\">\n            <h1 class=\"s-content__header-title\">Inscríbete a las clases que quieras</h1>\n        </div> <!-- end s-content__header -->\n\n            <div class=\"row text-center\">\n\n            <h1 class=\"lead\">Clases Disponibles</h1><br>\n\n            <div *ngFor=\"let gclass of classes\">\n                <h2><a [routerLink]=\"['/clase', gclass.id]\">{{gclass.name}}</a></h2>\n            </div>\n\n              <button *ngIf=\"loginService.isTeach || loginService.isAdmin\" (click)=\"newClass()\">Añadir Clase</button>\n        </div>\n\n    </article>\n\n</section>"

/***/ }),

/***/ "./src/app/class/class-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_service__ = __webpack_require__("./src/app/class/class.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassListComponent = /** @class */ (function () {
    //o:boolean;
    //oo='';
    function ClassListComponent(router, service, loginService) {
        this.router = router;
        this.service = service;
        this.loginService = loginService;
    }
    ClassListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getClasses().subscribe(function (classes) { return _this.classes = classes; }, function (error) { return console.log(error); });
        //this.booleans[0]=true;
        //this.oo='aaa';
    };
    ClassListComponent.prototype.newClass = function () {
        this.router.navigate(['/clase/new']);
    };
    ClassListComponent.prototype.makeBooleansList = function () {
        var _this = this;
        this.classes.forEach(function (item, index) {
            for (var _i = 0, _a = item.users; _i < _a.length; _i++) {
                var user = _a[_i];
                if (user.name === _this.loginService.user.name) {
                    _this.booleans[index] = true;
                }
                else {
                    _this.booleans[index] = false;
                }
            }
        });
    };
    ClassListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'ClassListComponent',
            template: __webpack_require__("./src/app/class/class-list.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__class_service__["a" /* ClassService */], __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]])
    ], ClassListComponent);
    return ClassListComponent;
}());



/***/ }),

/***/ "./src/app/class/class.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'https://localhost:8443/api/clases/';
var ClassService = /** @class */ (function () {
    function ClassService(http) {
        this.http = http;
    }
    ClassService.prototype.getClasses = function () {
        var _this = this;
        return this.http.get(URL, { withCredentials: true })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ClassService.prototype.getClass = function (id) {
        var _this = this;
        return this.http.get(URL + id, { withCredentials: true })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ClassService.prototype.saveClass = function (gclass) {
        var _this = this;
        var body = JSON.stringify(gclass);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ withCredentials: true, headers: headers });
        if (!gclass.id) {
            return this.http.post(URL, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
        else {
            return this.http.put(URL + gclass.id, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
    };
    ClassService.prototype.removeClass = function (gclass) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.delete(URL + gclass.id, options)
            .map(function (response) { return undefined; })
            .catch(function (error) { return _this.handleError(error); });
    };
    ClassService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error (' + error.status + '): ' + error.text());
    };
    ClassService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ClassService);
    return ClassService;
}());



/***/ }),

/***/ "./src/app/contact/contact-confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactConfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service__ = __webpack_require__("./src/app/contact/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactConfirmationComponent = /** @class */ (function () {
    function ContactConfirmationComponent(router, activatedRoute, service) {
        this.router = router;
        this.service = service;
    }
    ContactConfirmationComponent.prototype.gotoContact = function () {
        this.router.navigate(['/contacto']);
    };
    ContactConfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <section class=\"s-content s-content--narrow\">\n        <div class=\"text-center\">\n            <h2> Mensaje enviado correctamente </h2>\n            <button (click)=\"gotoContact()\">Volver a contacto</button>\n        </div>\n    </section>\n   "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactService */]])
    ], ContactConfirmationComponent);
    return ContactConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"s-content s-content--narrow\">\n\n    <div class=\"row\">\n\n        <div class=\"s-content__header col-full\">\n            <h1 class=\"s-content__header-title\">\n                <div *ngIf=\"contact\"></div>\n                Comentario de {{contact.name}}\n            </h1>\n        </div>\n        <!-- end s-content__header -->\n        <fieldset>\n            <div class=\"text-center\">\n                <h2>Nombre </h2><p>{{contact.name}}</p>\n                <h2>Email </h2><p>{{contact.email}}</p>\n               <a href=\"mailto:{{contact.email}}?Subject=WareGym\" target=\"_top\"><button class=\"submit btn btn--primary full-width\">Enviar Email</button></a>\n                <h2>Numero </h2><p>{{contact.number}}</p>\n                <h2>Comentario </h2><p>{{contact.message}}</p>\n                <button (click)=\"removeContact()\" class=\"submit btn btn--primary full-width\">Eliminar</button>\n                <br>\n                <button (click)=\"gotoComents()\" class=\"submit btn btn--primary full-width\">Volver a los mensajes</button>\n                <br>\n                <button (click)=\"editContact()\" class=\"submit btn btn--primary full-width\">Editar Mensaje</button>\n            </div>\n        </fieldset>\n    </div>\n    <!-- end row -->\n\n</section>\n<!-- s-content -->"

/***/ }),

/***/ "./src/app/contact/contact-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_service__ = __webpack_require__("./src/app/contact/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactDetailComponent = /** @class */ (function () {
    function ContactDetailComponent(router, activatedRoute, service, loginService) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.loginService = loginService;
        var id = activatedRoute.snapshot.params['id'];
        service.getContact(id).subscribe(function (contact) { return _this.contact = contact; }, function (error) { return console.error(error); });
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        if (!this.loginService.isAdmin) {
            this.router.navigate((['/login'])),
                window.alert('No tienes permisos, por favor inicia sesión');
        }
    };
    ContactDetailComponent.prototype.removeContact = function () {
        var _this = this;
        var okResponse = window.confirm('Quieres eliminar este contacto?');
        if (okResponse) {
            this.service.removeContact(this.contact).subscribe(function (_) { return _this.router.navigate(['/comentarios']); }, function (error) { return console.error(error); });
        }
    };
    ContactDetailComponent.prototype.editContact = function () {
        this.router.navigate(['/comentario/edit', this.contact.id]);
    };
    ContactDetailComponent.prototype.gotoComents = function () {
        this.router.navigate(['/comentarios']);
    };
    ContactDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'ContacDetailComponent',
            template: __webpack_require__("./src/app/contact/contact-detail.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__contact_service__["a" /* ContactService */],
            __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- s-content\n================================================== -->\n<section class=\"s-content\">\n    <div class=\"row\">\n    <h3>Modificar Mensaje</h3>\n    <fieldset>\n        <div *ngIf=\"contact\">\n            <div *ngIf=\"contact.id\">\n                <label>Id: {{contact.id}}</label>\n            </div>    \n            <div class=\"form-field\">\n                <input [(ngModel)]=\"contact.name\" type=\"text\" class=\"full-width\" placeholder=\"Nombre\" required/>\n            </div>\n\n            <div class=\"form-field\">\n                <input input [(ngModel)]=\"contact.number\" type=\"number\" class=\"full-width\" placeholder=\"Móvil\"/>\n            </div>\n\n            <div class=\"form-field\">\n                <input [(ngModel)]=\"contact.email\" type=\"text\" class=\"full-width\" placeholder=\"Correo electrónico\" required/>\n            </div>\n\n            <div class=\"message form-field\">\n                <textarea [(ngModel)]=\"contact.message\" class=\"full-width\" placeholder=\"Tu mensaje\"></textarea>\n            </div>\n\n            <button (click)=\"saveEditContact()\" class=\"submit btn btn--primary full-width\">Guardar</button>\n            <button (click)=\"cancel()\" class=\"submit btn btn--primary full-width\">Cancelar</button>\n        </div>\n    </fieldset>\n    </div>                \n    <!-- end form -->\n</section>"

/***/ }),

/***/ "./src/app/contact/contact-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service__ = __webpack_require__("./src/app/contact/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactEditComponent = /** @class */ (function () {
    function ContactEditComponent(router, activatedRoute, service, loginService) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.loginService = loginService;
        var id = activatedRoute.snapshot.params['id'];
        if (id) {
            service.getContact(id).subscribe(function (contact) { return _this.contact = contact; }, function (error) { return console.error(error); });
            this.newContact = false;
        }
        else {
            this.contact = { name: '', email: '', message: '' };
            this.newContact = true;
        }
    }
    ContactEditComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response " + captchaResponse + ":");
    };
    ContactEditComponent.prototype.ngOnInit = function () {
        if (!this.loginService.isAdmin) {
            this.router.navigate((['/login'])),
                window.alert('No tienes permisos, por favor inicia sesión');
        }
    };
    ContactEditComponent.prototype.cancel = function () {
        window.history.back();
    };
    ContactEditComponent.prototype.saveEditContact = function () {
        this.service.saveContact(this.contact).subscribe(function (contact) { }, function (error) { return console.error('Error creating new contact: ' + error); });
        window.confirm('Seguro que quieres modificar este mensaje?');
        this.router.navigate(['/comentarios']);
    };
    ContactEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'ContactEditComponent',
            template: __webpack_require__("./src/app/contact/contact-edit.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactService */],
            __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]])
    ], ContactEditComponent);
    return ContactEditComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- s-content\n    ================================================== -->\n    <section class=\"s-content\">\n        <div class=\"row\">\n\n            <div class=\"s-content__header col-full\">\n                <h1 class=\"s-content__header-title\">\n                    Contacta con nosotros\n                </h1>\n            </div>\n            <!-- end s-content__header -->\n\n            <div class=\"s-content__media col-full\">\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n                    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n                </agm-map>\n            </div>\n            <!-- end s-content__media -->\n\n            <div class=\"col-full s-content__main\">\n\n                <p class=\"lead\">PUEDES ENCONTRAR LA INFORMACIÓN DE NUESTROS CENTROS EN LA PÁGINA WEB.</p>\n\n                <p>Si tu pregunta está relacionada con nuestras actividades dirigidas consulta el horario de actividades dirigidas en la sección \"Clases\". Si quieres saber más sobre la actividad podrás encontrar toda la información en \"Entrenamientos\".\n                </p>\n\n                <p>Si tu pregunta está relacionada con nuestras cuotas, podrás consultar nuestras cuotas y promociones en la página principal.\n                </p>\n\n                <div class=\"row\">\n                    <div class=\"col-six tab-full\">\n                        <h3>Donde entontrarnos</h3>\n\n                        <p>\n                            Calle Serrano 1\n                            <br> Madrid\n                            <br> 28901\n                        </p>\n\n                    </div>\n\n                    <div class=\"col-six tab-full\">\n                        <h3>Información de contacto</h3>\n\n                        <p>contacto@waregym.com\n                            <br> info@waregym.com\n                            <br> Phone: (+1) 123 456\n                        </p>\n\n                    </div>\n                </div>\n                <!-- end row -->\n                \n                <h3>Déjanos tu mensaje</h3>\n                <fieldset>\n                    <div *ngIf=\"contact\">\n                        <div *ngIf=\"contact.id\">\n                            <label>Id: </label>{{contact.id}}\n                        </div>    \n                        <div class=\"form-field\">\n                            <input [(ngModel)]=\"contact.name\" type=\"text\" class=\"full-width\" placeholder=\"Nombre\" required/>\n                        </div>\n\n                        <div class=\"form-field\">\n                            <input input [(ngModel)]=\"contact.number\" type=\"number\" class=\"full-width\" placeholder=\"Móvil\"/>\n                        </div>\n\n                        <div class=\"form-field\">\n                            <input [(ngModel)]=\"contact.email\" type=\"text\" class=\"full-width\" placeholder=\"Correo electrónico\" required/>\n                        </div>\n\n                        <div class=\"message form-field\">\n                            <textarea [(ngModel)]=\"contact.message\" class=\"full-width\" placeholder=\"Tu mensaje\"></textarea>\n                        </div>\n\n                        <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LfUZBMUAAAAAJIFByqzdQzO3KLzX79bmrQuzeW1\"></re-captcha>\n                        <button (click)=\"saveContact()\" class=\"submit btn btn--primary full-width\">Enviar</button>\n                        <button (click)=\"cancel()\" class=\"submit btn btn--primary full-width\">Cancelar</button>\n                    </div>\n                </fieldset>\n                <!-- end form -->\n                \n            </div>\n            <!-- end s-content__main -->\n\n        </div>\n        <!-- end row -->\n    </section>"

/***/ }),

/***/ "./src/app/contact/contact-form.component.scss":
/***/ (function(module, exports) {

module.exports = "agm-map {\n  width: 100%;\n  height: 300px; }\n"

/***/ }),

/***/ "./src/app/contact/contact-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service__ = __webpack_require__("./src/app/contact/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(router, activatedRoute, service) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.zoom = 16;
        this.lat = 40.4893538;
        this.lng = -3.6827461;
        var id = activatedRoute.snapshot.params['id'];
        if (id) {
            service.getContact(id).subscribe(function (contact) { return _this.contact = contact; }, function (error) { return console.error(error); });
            this.newContact = false;
        }
        else {
            this.contact = { name: '', email: '', message: '' };
            this.newContact = true;
        }
    }
    ContactFormComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response " + captchaResponse + ":");
    };
    ContactFormComponent.prototype.cancel = function () {
        window.history.back();
    };
    ContactFormComponent.prototype.saveContact = function () {
        this.service.saveContact(this.contact).subscribe(function (contact) { }, function (error) { return console.error('Error creating new contact: ' + error); });
        window.confirm('Quieres enviar este mensaje?');
        this.router.navigate(['/contacto/confirmation']);
    };
    ContactFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'ContactFormComponent',
            template: __webpack_require__("./src/app/contact/contact-form.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactService */]])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"s-content s-content--narrow\">\n\n    <div class=\"row\" class=\"text-center\">\n\n        <div class=\"s-content__header col-full\">\n            <h1 class=\"s-content__header-title\">\n                Nuevos comentarios\n            </h1>\n        </div>\n        <!-- end s-content__header -->\n        <ul class=\"items\">\n            <li *ngFor=\"let contact of contacts\">\n                <a [routerLink]=\"['/comentario', contact.id]\">Nombre: {{contact.name}} - Email: {{contact.email}}</a>\n            </li>\n            </ul>\n            <button (click)=\"returnContact()\">Volver a contacto</button>\n    </div>\n    <!-- end row -->\n\n</section>\n<!-- s-content -->"

/***/ }),

/***/ "./src/app/contact/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service__ = __webpack_require__("./src/app/contact/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(router, service, loginService) {
        this.router = router;
        this.service = service;
        this.loginService = loginService;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.loginService.isAdmin) {
            this.service.getContacts().subscribe(function (contacts) { return _this.contacts = contacts; }, function (error) { return console.log(error); });
        }
        else {
            this.router.navigate(['/login']),
                window.alert('No tienes permisos');
        }
    };
    ContactListComponent.prototype.returnContact = function () {
        this.router.navigate(['/contacto']);
    };
    ContactListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'ContactListComponent',
            template: __webpack_require__("./src/app/contact/contact-list.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'https://localhost:8443/api/contactos/';
var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.getContacts = function () {
        var _this = this;
        return this.http.get(URL, { withCredentials: true })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ContactService.prototype.getContact = function (id) {
        var _this = this;
        return this.http.get(URL + id, { withCredentials: true })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ContactService.prototype.saveContact = function (contact) {
        var _this = this;
        var body = JSON.stringify(contact);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ withCredentials: true, headers: headers });
        if (!contact.id) {
            return this.http.post(URL, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
        else {
            return this.http.put(URL + contact.id, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
    };
    ContactService.prototype.removeContact = function (contact) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.delete(URL + contact.id, options)
            .map(function (response) { return undefined; })
            .catch(function (error) { return _this.handleError(error); });
    };
    ContactService.prototype.updateContact = function (contact) {
        var _this = this;
        var body = JSON.stringify(contact);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.put(URL + contact.id, body, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ContactService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error (' + error.status + '): ' + error.text());
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- s-footer\n    ================================================== -->\n        <div class=\"s-footer__main\">\n            <div class=\"row\">\n\n                <div class=\"col-two md-four mob-full s-footer__sitelinks\">\n\n                    <h4>Secciones</h4>\n\n                    <ul class=\"s-footer__linklist\">\n                        <li><a [routerLink]=\"['/index']\">Inicio</a></li>\n                        <li><a [routerLink]=\"['/waregym']\" title=\"\">Waregym</a></li>\n                        <li><a [routerLink]=\"['/producto/new']\">Añadir producto</a></li>\n                        <li><a [routerLink]=\"['/productos']\">Productos disponibles</a></li>\n                        <li><a [routerLink]=\"['/contacto']\">Contacto</a></li>\n                        \n              \t\t\t<li><a [routerLink]=\"['/logIn']\" title=\"\">Iniciar Sesión</a></li>\n                        \n                    </ul>\n\n                </div>\n                <!-- end s-footer__sitelinks -->\n\n                <div class=\"col-two md-four mob-full s-footer__archives\">\n\n                    <h4>Clases</h4>\n\n                    <ul class=\"s-footer__linklist\">\n                        <li><a [routerLink]=\"['/clases']\">Añadir Clase</a></li>\n                        <li><a [routerLink]=\"['/clases']\">Apúntate</a></li>\n                    </ul>\n\n                </div>\n                <!-- end s-footer__archives -->\n\n                <div class=\"col-two md-four mob-full s-footer__social\">\n\n                    <h4>Entrenamiento</h4>\n\n                    <ul class=\"s-footer__linklist\">\n                        <li><a [routerLink]=\"\">Mi Entrenamiento</a></li>\n                        <li><a id = \"hprinc\" style=\"display:none;\" [routerLink]=\"\">Principiante</a></li>\n                        <li><a id = \"hmed\" style=\"display:none;\" [routerLink]=\"\">Medio</a></li>\n                        <li><a id = \"hadv\" style=\"display:none;\" [routerLink]=\"\">Avanzado</a></li>\n                        <li><a id = \"hexp\" style=\"display:none;\" [routerLink]=\"\">Experto</a></li>\n                    </ul>\n\n                </div>\n                <!-- end s-footer__social -->\n\n                <div class=\"col-five md-full end s-footer__subscribe\">\n\n                    <h4>Contacto</h4>\n\n                    <p>Telf: (+34) 123 456 789\n                        <br> Ubicación: C/Serrano n º 1, Madrid, España </p>\n\n                </div>\n                <!-- end s-footer__subscribe -->\n\n            </div>\n        </div>\n        <!-- end s-footer__main -->\n\n        <div class=\"s-footer__bottom\">\n            <div class=\"row\">\n                <div class=\"col-full\">\n                    <div class=\"s-footer__copyright\">\n                        <span>© Copyright Waregym 2018</span>\n                    </div>\n\n                    <div class=\"go-top\">\n                        <a class=\"smoothscroll\" title=\"Back to Top\" href=\"#top\"></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- end s-footer__bottom -->\n\n    <!-- end s-footer -->\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'footerComponent',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header class=\"header\">\n      <div class=\"header__content row\">\n    \n          <div class=\"header__logo\">\n              <a class=\"logo\" href=\"/index\">\n                  <img href=\"/index\" src=\"assets/images/logoGYM.png\" alt=\"Homepage\">\n              </a>\n          </div>\n          <!-- end header__logo -->\n    \n          <ul class=\"header__social\">\n              <li>\n                  <a href=\"https://es-es.facebook.com/FitnessMotivacion/\" target=\"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n              </li>\n              <li>\n                  <a href=\"https://twitter.com/fltness?lang=es\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n              </li>\n              <li>\n                  <a href=\"https://www.instagram.com/fitnessgirlsmotivation/?hl=es\" target=\"_blank\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n              </li>\n              <li>\n                  <a href=\"https://www.pinterest.es/categories/health_fitness/\" target=\"_blank\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i></a>\n              </li>\n          </ul>\n          <!-- end header__social -->\n    \n          <a class=\"header__search-trigger\" href=\"#0\"></a>\n    \n          <div class=\"header__search\">\n    \n              <form role=\"search\" method=\"get\" class=\"header__search-form\" action=\"#\">\n                  <label>\n                      <span class=\"hide-content\">Buscar por:</span>\n                      <input type=\"search\" class=\"search-field\" placeholder=\"Type Keywords\" value=\"\" name=\"s\" title=\"Buscar por:\" autocomplete=\"off\">\n                  </label>\n                  <input type=\"submit\" class=\"search-submit\" value=\"Search\">\n              </form>\n    \n              <a href=\"#0\" title=\"Close Search\" class=\"header__overlay-close\">Close</a>\n    \n          </div>\n          <!-- end header__search -->\n    \n    \n          <a class=\"header__toggle-menu\" href=\"#0\" title=\"Menu\"><span>Menu</span></a>\n    \n          <nav class=\"header__nav-wrap\">\n    \n              <h2 class=\"header__nav-heading h6\">Site Navigation</h2>\n    \n              <ul class=\"header__nav\">\n                  <li ><a [routerLink]=\"['/index']\" title=\"\">Inicio</a></li>\n                  <li class=\"has-children\">\n                      <a [routerLink]=\"['/clases']\" title=\"\">Clases</a>\n                      <ul class=\"sub-menu\">\n                        <li><a [routerLink]=\"['/clases']\">Clases disponibles</a></li>\n                        <li *ngIf=\"loginService.isAdmin || loginService.isTeach\"><a [routerLink]=\"['/clase/new']\">Añadir Clase</a></li>\n                      </ul>\n                  </li>\n\n                  <li class=\"has-children\">\n                      <a [routerLink]=\"['/entrenamiento']\" title=\"\">Entrenamientos</a>\n                       <ul class=\"sub-menu\">\n                          <li><a [routerLink]=\"['/entrenamiento']\">Mi entrenamiento</a></li>\n                      </ul>\n                  </li>\n                  <li><a [routerLink]=\"['/waregym']\" title=\"\">Waregym</a></li>\n\n                  <li class=\"has-children\">\n                    <a [routerLink]=\"['/productos']\" title=\"\">Productos</a>\n                    <ul class=\"sub-menu\">\n                        <li *ngIf=\"loginService.isAdmin || loginService.isTeach\"><a [routerLink]=\"['/producto/new']\">Añadir producto</a></li>\n                        <li><a [routerLink]=\"['/productos']\">Productos disponibles</a></li>\n                    </ul>\n                  </li>\n                  \n                  <li class=\"has-children\">\n                    <a [routerLink]=\"['/contacto']\" title=\"\">Contacto</a>\n                    <ul class=\"sub-menu\">\n                        <li *ngIf=\"loginService.isAdmin\"><a [routerLink]=\"['/comentarios']\">Ver Comentarios</a></li>\n                    </ul>\n                  </li>\n                  \n                     <li *ngIf=\"loginService.notLogged\"><a [routerLink]=\"['/login']\" title=\"\">Iniciar Sesión</a></li>\n\n            \n                    <li *ngIf=\"loginService.isLogged\">\n                        <a [routerLink]=\"['/perfil']\">{{loginService.user.name}}</a>\n                    </li>\n                    <li *ngIf=\"loginService.isLogged\">\n                        <button class=\"btn\" (click)=\"logOut()\" type=\"button\">Log Out</button>\n                    </li>\n              </ul>\n              <!-- end header__nav -->\n    \n              <a href=\"#0\" title=\"Close Menu\" class=\"header__overlay-close close-mobile-menu\">Close</a>\n    \n          </nav>\n          <!-- end header__nav-wrap -->\n    \n      </div>\n      <!-- header-content -->\n    </header>\n    \n    "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    HeaderComponent.prototype.logOut = function () {
        var _this = this;
        this.loginService.logOut().subscribe(function (response) { _this.router.navigate(['/login']), window.alert('Te has desconectado con éxito'); }, function (error) { return console.log('Error al intentar cerrar sesión: ' + error); });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'headerComponent',
            template: __webpack_require__("./src/app/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pageheader-content row\">\n    <div class=\"col-full\">\n\n        <div class=\"featured\">\n\n            <div class=\"featured__column featured__column--big\">\n                <div class=\"entry\" style=\"background-image:url('assets/images/thumbs/featured/featured-fitnessworld.jpg');\">\n\n                    <div class=\"entry__content\">\n                        <span class=\"entry__category\"><a [routerLink]=\"['/waregym']\">Fitness</a></span>\n\n                        <h1><a [routerLink]=\"['/waregym']\" title=\"\">¿POR QUÉ WAREGYM?</a></h1>\n\n                    </div>\n                    <!-- end entry__content -->\n\n                </div>\n                <!-- end entry -->\n            </div>\n            <!-- end featured__big -->\n\n            <div class=\"featured__column featured__column--small\">\n\n                <div class=\"entry\" style=\"background-image:url('assets/images/index/oferta-gym.jpg');\">\n\n                    <div class=\"entry__content\">\n                        <span class=\"entry__category\"><a [routerLink]=\"['/waregym']\">Precios</a></span>\n\n                        <h1><a  [routerLink]=\"['/waregym']\" title=\"\">¡OFERTA ESPECIAL!</a></h1>\n\n                    </div>\n                    <!-- end entry__content -->\n\n                </div>\n                <!-- end entry -->\n\n                <div class=\"entry\" style=\"background-image:url('assets/images/thumbs/featured/featured-workout.jpg');\">\n\n                    <div class=\"entry__content\">\n                        <span class=\"entry__category\"><a href=\"/entrenamientos/entrenamiento\">Rutinas</a></span>\n\n                        <h1><a href=\"/entrenamientos/entrenamiento\" title=\"\">Entrenamiento personal</a></h1>\n\n                    </div>\n                    <!-- end entry__content -->\n\n                </div>\n                <!-- end entry -->\n\n            </div>\n            <!-- end featured__small -->\n        </div>\n        <!-- end featured -->\n\n    </div>\n    <!-- end col-full -->\n</div>\n<!-- end pageheader-content row -->\n<section class=\"s-content\">\n        <div class=\"row masonry-wrap\">\n            <div class=\"masonry\">\n\n                <div class=\"grid-sizer\"></div>\n                <article class=\"masonry__brick entry format-standard\">\n\n                    <div class=\"entry__thumb\">\n                        <a [routerLink]=\"\" class=\"entry__thumb-link\">\n                            <img  src=\"../assets/images/thumbs/masonry/product-400.jpg\" \n                                srcset=\"../assets/images/thumbs/masonry/product-400.jpg 1x, \n                                ../assets/images/thumbs/masonry/product-400.jpg 2x\" alt=\"\">\n                        </a>\n                    </div>\n\n                    <div class=\"entry__text\">\n                        <div class=\"entry__header\">\n                            <h1 class=\"entry__title\"><a [routerLink]=\"['/productos']\" >Nuestros productos</a></h1>\n                        </div>\n                        <div class=\"entry__excerpt\">\n                            <p>\n                                Conoce en un clic los productos que tu cuerpo necesita.\n                            </p>\n                        </div>\n                        <div class=\"entry__meta\">\n                            <span class=\"entry__meta-links\">\n                                <a [routerLink]=\"['/productos']\" >Nutrición</a> \n                            </span>\n                        </div>\n                    </div>\n\n                </article>\n                <!-- end article -->\n\n                <article class=\"masonry__brick entry format-quote\">\n\n                    <div class=\"entry__thumb\">\n                        <blockquote>\n                            <p>Si eres persistente, lo conseguirás. If you are consistent, you will keep it.</p>\n\n                            <cite>Bruce Lee</cite>\n                        </blockquote>\n                    </div>\n\n                </article>\n                <!-- end article -->\n\n                <article class=\"masonry__brick entry format-quote\">\n\n                    <div class=\"entry__thumb\">\n                        <blockquote>\n                            <p>Un ganador es un perdedor que nunca se dió por vencido.</p>\n\n                            <cite>Arnold Schwarzenegger</cite>\n                        </blockquote>\n                    </div>\n\n                </article>\n                <!-- end article -->\n\n\n                <article class=\"masonry__brick entry format-standard\">\n\n                    <div class=\"entry__thumb\">\n                        <a [routerLink]=\"\"  class=\"entry__thumb-link\">\n                             <img  src=\"../assets/images/thumbs/masonry/gym-400.jpg\" \n                                srcset=\"../assets/images/thumbs/masonry/gym-400.jpg 1x, \n                                ../assets/images/thumbs/masonry/gym-400.jpg 2x\" alt=\"\">\n                        </a>\n                    </div>\n\n                    <div class=\"entry__text\">\n                        <div class=\"entry__header\">\n                            <h1 class=\"entry__title\"><a [routerLink]=\"\" >Instalaciones únicas</a></h1>\n                        </div>\n                        <div class=\"entry__excerpt\">\n                            <p>\n                                Échale un vistazo a nuestras instalaciones y precios.\n                            </p>\n                        </div>\n                        <div class=\"entry__meta\">\n                            <span class=\"entry__meta-links\">\n                                <a [routerLink]=\"\" >Salud</a>\n                            </span>\n                        </div>\n                    </div>\n\n                </article>\n                <!-- end article -->\n            </div>\n            <!-- end masonry -->\n        </div>\n        <!-- end masonry-wrap -->\n    </section>"

/***/ }),

/***/ "./src/app/index/index.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'indexComponent',
            template: __webpack_require__("./src/app/index/index.component.html"),
            styles: [__webpack_require__("./src/app/index/index.component.scss")]
        })
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- s-content\n    ================================================== -->\n    <section class=\"s-content s-content--narrow\">\n        <form *ngIf=\"!loginService.isLogged\" role=\"search\">\n\n            <div class=\"row\">\n                <div class=\"text-center\">\n                    <h2>Iniciar Sesión</h2>\n                </div>\n                    <h4>Usuario</h4>\n                    <div class=\"form-field\">\n                        <input #user type=\"text\" class=\"form-control full-width\" name=\"username\" placeholder=\"Username\" required/>\n                    </div>\n\n                    <h4>Contraseña</h4>\n                    <div class=\"form-field\">\n                        <input #pass type=\"password\" class=\"form-control full-width\" name=\"password\" placeholder=\"Password\" required/>\n                    </div>\n                    \n                    <div class=\"text-center\">\n                        <button type=\"submit\" (click)=\"logIn($event, user.value, pass.value)\" class=\"btn full-width\">Iniciar Sesión</button>\n                        <button (click)=\"gotoRegistred()\" class=\"submit btn btn--primary full-width\">Registrarme</button>\n                    </div>\n             </div>\n        </form>\n    </section>\n<!-- s-content -->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, activatedRoute, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    LoginComponent.prototype.logIn = function (event, user, pass) {
        var _this = this;
        event.preventDefault();
        this.loginService.logIn(user, pass).subscribe(function (u) { console.log(u), _this.router.navigate(['/index']); }, function (error) { return alert('Invalid user or password'); });
    };
    LoginComponent.prototype.gotoRegistred = function () {
        this.router.navigate(['/registro']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__("./src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'https://localhost:8443/api';
var LoginService = /** @class */ (function () {
    function LoginService(http, router, activatedRoute) {
        this.http = http;
        this.router = router;
        this.isLogged = false;
        this.isAdmin = false;
        this.isTeach = false;
        this.isUser = false;
        this.notLogged = true;
        this.reqIsLogged();
    }
    LoginService.prototype.reqIsLogged = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ withCredentials: true, headers: headers });
        this.http.get(URL + '/logIn', options).subscribe(function (response) {
            _this.processLogInResponse(response),
                _this.router.navigate(['/registro']);
        }, function (error) {
            if (error.status !== 401) {
                console.error('Error de inicio de sesión: ' +
                    JSON.stringify(error));
            }
        });
    };
    LoginService.prototype.processLogInResponse = function (response) {
        this.isLogged = true;
        this.notLogged = false;
        this.user = response.json();
        this.isUser = this.user.roles.indexOf('ROLE_USER') !== -1;
        this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
        this.isTeach = this.user.roles.indexOf('ROLE_TEACH') !== -1;
    };
    LoginService.prototype.logIn = function (user, pass) {
        var _this = this;
        var userPass = user + ':' + pass;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Authorization': 'Basic ' + utf8_to_b64(userPass),
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.get(URL + '/logIn', options).map(function (response) {
            _this.processLogInResponse(response);
            return _this.user;
        });
    };
    LoginService.prototype.logOut = function () {
        var _this = this;
        return this.http.get(URL + '/logOut', { withCredentials: true }).map(function (response) {
            _this.isLogged = false;
            _this.isAdmin = false;
            _this.notLogged = true;
            return response;
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], LoginService);
    return LoginService;
}());

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}


/***/ }),

/***/ "./src/app/login/registred.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"s-content s-content--narrow\">\n        <div class=\"row\">\n            <div class=\"text-center\">\n                <h2>Registro</h2>\n            </div>\n            <div *ngIf=\"user\">\n                <h4>Usuario</h4>\n                <div class=\"form-field\">\n                    <input [(ngModel)]=\"user.name\" type=\"text\" name=\"name\" class=\"full-width\" placeholder=\"Usuario\" required/>\n                </div>\n\n                <h4>Contraseña</h4>\n                <div class=\"form-field\">\n                    <input [(ngModel)]=\"user.passwordHash\" type=\"password\" name=\"passwordHash\" class=\"full-width\" placeholder=\"Contraseña\" required/>\n                </div>\n\n                <h4>Repetir Contraseña</h4>\n                <div class=\"form-field\">\n                    <input [(ngModel)]=\"rePass\" type=\"password\" name=\"passwordHash\" class=\"full-width\" placeholder=\"Contraseña\" required/>\n                </div>\n                \n                <div class=\"text-center\">\n                    <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LfUZBMUAAAAAJIFByqzdQzO3KLzX79bmrQuzeW1\"></re-captcha>\n                    <button (click)=\"validationPassword()\" class=\"submit full-width\">Registrarme</button>\n                    <button (click)=\"cancel()\" class=\"submit btn btn--primary full-width\">Cancelar</button>\n                </div>\n            </div>\n        </div>\n</section>"

/***/ }),

/***/ "./src/app/login/registred.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistredComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registred_service__ = __webpack_require__("./src/app/login/registred.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistredComponent = /** @class */ (function () {
    function RegistredComponent(router, activatedRoute, service) {
        var _this = this;
        this.router = router;
        this.service = service;
        var id = activatedRoute.snapshot.params['id'];
        if (id) {
            service.getUser(id).subscribe(function (product) { return _this.user = product; }, function (error) { return console.error(error); });
            this.newUser = false;
        }
        else {
            this.user = { name: '', passwordHash: '', roles: ['ROLE_USER'] };
            this.newUser = true;
        }
    }
    RegistredComponent.prototype.validationPassword = function () {
        if (this.rePass === this.user.passwordHash) {
            this.registredUser();
            console.log(this.rePass);
            console.log(this.user.passwordHash);
        }
        else {
            window.confirm('Las contraseñas no coinciden.');
            this.router.navigate(['/registro']);
        }
    };
    RegistredComponent.prototype.registredUser = function () {
        this.service.registredUser(this.user).subscribe(function (product) { }, function (error) { return console.error('Error al crear un nuevo usuario: ' + error); });
        window.confirm('Has insertado bien todos los datos?');
        this.router.navigate(['/perfil']);
    };
    RegistredComponent.prototype.cancel = function () {
        this.router.navigate(['/login']);
    };
    RegistredComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'RegistredComponent',
            template: __webpack_require__("./src/app/login/registred.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__registred_service__["a" /* RegistredService */]])
    ], RegistredComponent);
    return RegistredComponent;
}());



/***/ }),

/***/ "./src/app/login/registred.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistredService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'https://localhost:8443/api/users/';
var RegistredService = /** @class */ (function () {
    function RegistredService(http) {
        this.http = http;
    }
    RegistredService.prototype.getUser = function (id) {
        var _this = this;
        return this.http.get(URL + id, { withCredentials: true })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    RegistredService.prototype.registredUser = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ withCredentials: true, headers: headers });
        if (!user.id) {
            return this.http.post(URL, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
        else {
            return this.http.put(URL + user.id, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
    };
    RegistredService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error (' + error.status + '): ' + error.text());
    };
    RegistredService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RegistredService);
    return RegistredService;
}());



/***/ }),

/***/ "./src/app/product/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"s-content\">\n    <div class=\"text-center\">\n    <div class=\"row masonry-wrap\">\n        <div class=\"masonry\">\n            <div class=\"text-center\">\n            <div class=\"grid-sizer\"></div>\n            <div *ngIf=\"product\">\n            <h1>Producto {{product.name}}</h1>\n            <article class=\"masonry__brick entry format-standard\">\n                    \n                <div class=\"entry__thumb\">\n                    <a [routerLink]=\"['/producto', product.id]\" class=\"entry__thumb-link\">\n                        <img src=\"../../assets/files/{{product.image}}\" \n                                srcset=\"../../assets/files/{{product.image}} 1x, ../../assets/files/{{product.image}} 2x\" alt=\"\">\n                    </a>\n                </div>\n    \n                <div class=\"entry__text\">\n                    <div class=\"entry__header\">\n                        <h1 class=\"entry__title\"><a [routerLink]=\"['/producto', product.id]\">{{product.type}}</a></h1>\n                    </div>\n                    <div class=\"entry__excerpt\">\n                        <p>\n                            {{product.name}}\n                        </p>\n                        <h4>\n                            Valoración: {{product.value}}/10  \n                        </h4>\n                    </div>\n                    <div class=\"entry__meta\">\n                        <span class=\"entry__meta-links\">\n                            <a href=\"{{product.link}}\" target=\"_blank\">Enlace Compra</a> \n                        </span>\n                    </div>\n                    <div>\n                    <button *ngIf=\"loginService.isAdmin\" (click)=\"removeProduct()\">Eliminar Producto</button>\n                    </div>\n                </div>\n            </article> <!-- end article -->\n            </div> \n            </div>\n        </div> <!-- end masonry -->\n    </div> <!-- end masonry-wrap -->\n    </div>\n    \n    <div class=\"text-center\">\n        \n        <button (click)=\"gotoProducts()\">Todos los productos</button>\n        <button *ngIf=\"loginService.isAdmin\" (click)=\"editProduct()\">Editar Producto</button>\n     \n    </div>\n\n    </section> <!-- s-content -->"

/***/ }),

/***/ "./src/app/product/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(router, activatedRoute, service, loginService) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.loginService = loginService;
        var id = activatedRoute.snapshot.params['id'];
        service.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return console.error(error); });
    }
    ProductDetailComponent.prototype.removeProduct = function () {
        var _this = this;
        var okResponse = window.confirm('Do you want to remove this product?');
        if (okResponse) {
            this.service.removeProduct(this.product).subscribe(function (_) { return _this.router.navigate(['/productos']); }, function (error) { return console.error(error); });
        }
    };
    ProductDetailComponent.prototype.editProduct = function () {
        this.router.navigate(['/producto/edit', this.product.id]);
    };
    ProductDetailComponent.prototype.gotoProducts = function () {
        this.router.navigate(['/productos']);
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'ProductDetailComponent',
            template: __webpack_require__("./src/app/product/product-detail.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product/product-edit.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- s-content\n    ================================================== -->\n    <section class=\"s-content s-content--narrow s-content--no-padding-bottom\">\n            <div class=\"row\">\n        \n                <div *ngIf=\"product\">\n                        <h2>Editar Producto</h2>\n                        <fieldset>\n        \n                            <div class=\"form-field\">\n                                    <input [(ngModel)]=\"product.type\" type=\"text\" class=\"full-width\" placeholder=\"Tipo de producto\" required/>\n                            </div>\n        \n                            <div class=\"form-field\">\n                                    <input [(ngModel)]=\"product.name\" type=\"text\" class=\"full-width\" placeholder=\"Nombre\" required/>\n                            </div>\n        \n                            <div class=\"form-field\">\n                                <input [(ngModel)]=\"product.value\" type=\"number\" class=\"full-width\" placeholder=\"Valoración\" required/>\n                            </div>\n        \n                            <div class=\"form-field\">\n                                    <input [(ngModel)]=\"product.link\" type=\"text\" class=\"full-width\" placeholder=\"Url\" required/>\n                            </div>\n\n                            <div class=\"form-field\">\n                                <input [(ngModel)]=\"product.image\" type=\"file\"/>\n                            </div>\n                            \n                            <div class=\"text-center\">\n                                <button (click)=\"saveEditProduct()\">Guardar</button>\n                                <button (click)=\"cancel()\">Cancelar</button>\n                            </div>\n                        </fieldset>                   \n                    </div>\n            </div>\n            </section>"

/***/ }),

/***/ "./src/app/product/product-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(router, activatedRoute, service, loginService) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.loginService = loginService;
        var id = activatedRoute.snapshot.params['id'];
        if (id) {
            service.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return console.error(error); });
            this.newProduct = false;
        }
        else {
            this.product = { type: '', name: '', link: '' };
            this.newProduct = true;
        }
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        if (!this.loginService.isAdmin) {
            this.router.navigate((['/login'])),
                window.alert('No tienes permisos, por favor inicia sesión');
        }
    };
    ProductEditComponent.prototype.cancel = function () {
        window.history.back();
    };
    ProductEditComponent.prototype.saveEditProduct = function () {
        //console.log(this.product.image);
        var parse = this.product.image.split('\\');
        this.product.image = parse[parse.length - 1];
        this.service.saveProduct(this.product).subscribe(function (product) { }, function (error) { return console.error('Error creating new product: ' + error); });
        window.confirm('Seguro que quieres crear este producto?');
        this.router.navigate(['/productos']);
    };
    ProductEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'ProductEditComponent',
            template: __webpack_require__("./src/app/product/product-edit.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/product/product-form.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- s-content\n    ================================================== -->\n    <section class=\"s-content s-content--narrow s-content--no-padding-bottom\">\n    <div class=\"row\">\n\n        <div *ngIf=\"product\">\n                <h2>Nuevo producto</h2>\n                <fieldset>\n\n                    <div class=\"form-field\">\n                            <input [(ngModel)]=\"product.type\" type=\"text\" class=\"full-width\" placeholder=\"Tipo de producto\" required/>\n                    </div>\n\n                    <div class=\"form-field\">\n                            <input [(ngModel)]=\"product.name\" type=\"text\" class=\"full-width\" placeholder=\"Nombre\" required/>\n                    </div>\n\n                    <div class=\"form-field\">\n                        <input [(ngModel)]=\"product.value\" type=\"number\" class=\"full-width\" placeholder=\"Valoración\" required/>\n                    </div>\n\n                    <div class=\"form-field\">\n                            <input [(ngModel)]=\"product.link\" type=\"text\" class=\"full-width\" placeholder=\"Url\" required/>\n                    </div>\n                    \n                    <div class=\"form-field\">\n                        <input [(ngModel)]=\"product.image\" type=\"file\"/>\n                    </div>\n\n                    <div class=\"text-center\">\n                        <button (click)=\"saveProduct()\">Guardar</button>\n                        <button (click)=\"cancel()\">Cancelar</button>\n                    </div>\n                </fieldset>                   \n            </div>\n    </div>\n    </section>"

/***/ }),

/***/ "./src/app/product/product-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(router, activatedRoute, service, loginService) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.loginService = loginService;
        var id = activatedRoute.snapshot.params['id'];
        if (id) {
            service.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return console.error(error); });
            this.newProduct = false;
        }
        else {
            this.product = { type: '', name: '', link: '' };
            this.newProduct = true;
        }
    }
    ProductFormComponent.prototype.ngOnInit = function () {
        if (!this.loginService.isAdmin) {
            this.router.navigate((['/login'])),
                window.alert('No tienes permisos, por favor inicia sesión');
        }
    };
    ProductFormComponent.prototype.cancel = function () {
        window.history.back();
    };
    ProductFormComponent.prototype.saveProduct = function () {
        //  console.log(this.product.image);
        var parse = this.product.image.split('\\');
        this.product.image = parse[parse.length - 1];
        this.service.saveProduct(this.product).subscribe(function (product) { }, function (error) { return console.error('Error creating new product: ' + error); });
        window.confirm('Seguro que quieres crear este producto?');
        this.router.navigate(['/productos']);
    };
    ProductFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'ProductFormComponent',
            template: __webpack_require__("./src/app/product/product-form.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/product/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"s-content\">\n    \n    <div class=\"text-center\">\n    <div class=\"row masonry-wrap\">\n    <div class=\"masonry\">\n\n        <div class=\"grid-sizer\"></div>\n        <div *ngFor=\"let product of products\">\n        <article class=\"masonry__brick entry format-standard\">\n                \n            <div class=\"entry__thumb\">\n                <a [routerLink]=\"['/producto', product.id]\" class=\"entry__thumb-link\">\n                    <img src=\"../../assets/files/{{product.image}}\" \n                            srcset=\"../../assets/files/{{product.image}} 1x, ../../assets/files/{{product.image}} 2x\" alt=\"\">\n                </a>\n            </div>\n\n            <div class=\"entry__text\">\n                <div class=\"entry__header\">\n                    <h1 class=\"entry__title\"><a [routerLink]=\"['/producto', product.id]\">{{product.type}}</a></h1>\n                </div>\n                <div class=\"entry__excerpt\">\n                    <p>\n                        {{product.name}}\n                    </p>\n                    <h4>\n                        Valoración: {{product.value}}/10  \n                    </h4>\n                </div>\n                <div class=\"entry__meta\">\n                    <span class=\"entry__meta-links\">\n                        <a href=\"{{product.link}}\" target=\"_blank\">Enlace Compra</a> \n                    </span>\n                </div>\n            </div>\n            \n        </article> <!-- end article -->\n        </div> \n    </div> <!-- end masonry -->\n</div> <!-- end masonry-wrap -->\n</div>\n\n<div>\n    <div style=\"margin:0 auto; width: 400px;\">\n        <button *ngIf=\"loginService.isAdmin || loginService.isTeach\" (click)=\"newProduct()\">New Product</button>\n        <br>\n        <button  (click)=\"previousPage()\" *ngIf=\"page !== 0\" class=\"btn btn--primary\">Anterior</button>\n        <button (click)=\"nextPage()\" *ngIf=\"page < this.max\" class=\"btn btn--primary\">Siguiente</button>\n    </div>\n</div>\n\n</section> <!-- s-content -->"

/***/ }),

/***/ "./src/app/product/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(router, service, loginService) {
        this.router = router;
        this.service = service;
        this.loginService = loginService;
        this.page = 0;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getProducts(this.page).subscribe(function (products) {
            _this.products = products.content;
            _this.max = products.totalPages - 1;
            console.log(_this.max);
        }, function (error) { return console.log(error); });
    };
    ProductListComponent.prototype.newProduct = function () {
        this.router.navigate(['/producto/new']);
    };
    ProductListComponent.prototype.previousPage = function () {
        var _this = this;
        this.page--;
        this.service.getProducts(this.page).subscribe(function (products) { return _this.products = products.content; }, function (error) { return console.log(error); });
    };
    ProductListComponent.prototype.nextPage = function () {
        var _this = this;
        this.page++;
        this.service.getProducts(this.page).subscribe(function (products) { return _this.products = products.content; }, function (error) { return console.log(error); });
    };
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'ProductListComponent',
            template: __webpack_require__("./src/app/product/product-list.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'https://localhost:8443/api/productos/';
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProducts = function (page) {
        var _this = this;
        return this.http.get(URL + "?page=" + page, { withCredentials: true })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ProductService.prototype.getProduct = function (id) {
        var _this = this;
        return this.http.get(URL + id, { withCredentials: true })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ProductService.prototype.saveProduct = function (product) {
        var _this = this;
        var body = JSON.stringify(product);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ withCredentials: true, headers: headers });
        if (!product.id) {
            return this.http.post(URL, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
        else {
            return this.http.put(URL + product.id, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
    };
    ProductService.prototype.removeProduct = function (product) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.delete(URL + product.id, options)
            .map(function (response) { return undefined; })
            .catch(function (error) { return _this.handleError(error); });
    };
    ProductService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error (' + error.status + '): ' + error.text());
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- s-content\n    ================================================== -->\n    <section class=\"s-content s-content--narrow\">\n        <div class=\"row text-center\">\n                \n            <div *ngIf=\"loginService.isLogged\">\n                \n                <h1 class=\"h3 mb-3 font-weight-normal\">Bienvenido a tu área personal {{loginService.user.name}}</h1>\n                \n                <div *ngIf=\"loginService.isUser\">\n                    <h5>¿Qué deseas hacer?</h5>\n                    <button (click)=\"gotoMyTraining()\" class=\"submit full-width\">Mi entrenamiento</button>\n                    <button (click)=\"gotoViewClass()\" class=\"submit full-width\">Ver clases</button>\n                    <button (click)=\"gotoViewProducts()\" class=\"submit full-width\">Productos disponibles</button>\n                </div>\n\n                <div *ngIf=\"loginService.isAdmin\">\n                    <h5>Eres Administrador</h5>\n                    <button (click)=\"gotoAddClass()\" class=\"submit full-width\">Añadir Clases</button>\n                    <button (click)=\"gotoAddProduct()\" class=\"submit full-width\">Añadir Productos</button>\n                    <button (click)=\"gotoViewMessages()\" class=\"submit full-width\">Ver Mensajes</button>\n                </div>\n\n                <div *ngIf=\"loginService.isTeach\">\n                    <h5>Eres Profesor</h5>\n                    <button (click)=\"gotoAddClass()\" class=\"submit full-width\">Añadir Clases</button>\n                    <button (click)=\"gotoAddProduct()\" class=\"submit full-width\">Añadir Productos</button>\n                    <button (click)=\"gotoViewClass()\" class=\"submit full-width\">Ver clases</button>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- s-content -->"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    ProfileComponent.prototype.gotoAddClass = function () {
        this.router.navigate(['/clase/new']);
    };
    ProfileComponent.prototype.gotoAddProduct = function () {
        this.router.navigate(['/producto/new']);
    };
    ProfileComponent.prototype.gotoViewMessages = function () {
        this.router.navigate(['/comentarios']);
    };
    ProfileComponent.prototype.gotoMyTraining = function () {
    };
    ProfileComponent.prototype.gotoViewClass = function () {
        this.router.navigate(['/clases']);
    };
    ProfileComponent.prototype.gotoViewProducts = function () {
        this.router.navigate(['/productos']);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'profileComponent',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/training/training.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"s-content s-content--narrow s-content--no-padding-bottom\">\n\n    <article class=\"row format-video\">\n        <div class=\"s-content__header col-full\">\n                <h1 class=\"display-1\">\n                    CREAR     ENTRENAMIENTO\n                </h1>\n                <p class=\"lead\"> Selecciona qué tipo de entrenamiento quieres emplear\n                de los cuatro distintos creados por nuestros expertos según tu experiencia<p>\n        </div>\n        <div align = \"center\">\n            <form action=\"javascript:;\" onsubmit=\"accion()\">\n                <select [(ngModel)]=\"currentTraining\" id=\"tipo\" name=\"tipo\" >\n                    <option value=\"6\">Principiante</option>\n                    <option value=\"7\">Avanzado</option>\n                    <option value=\"8\">Medio</option>\n                    <option value=\"9\" >Experto</option>\n                </select>      \n                <button (click)=\"saveTraining()\"> Seleccionar </button>\n            </form>\n        </div>\n        \n        <br>\n            <!-- INFO -->\n\n                <div *ngIf=\"currentTraining == '6'\" id=\"beginner\">\n                        <h2 style=\"text-align: center\">INFORMACIÓN DEL ENTRENAMIENTO PRINCIPIANTE</h2>\n                        <p class=\"lead\" style=\"text-align: center\">El entrenamiento elegido tendra los siguientes ejercicios...</p>\n                    <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width:50%\">\n                        <div class=\"entry__text\">\n                            <div class=\"entry__header\">\n                                <h1 class=\"titulo__info\">ABDOMINALES</h1>\n                            </div>\n                            <div class=\"entry__excerpt\">\n                                <p class=\"info\">15</p>\n                            </div>\n                        </div>\n                    </article>\n                    <!-- end article -->\n\n                    <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%;\">\n\n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">TIEMPO TOTAL DE ENTRENAMIENTO</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\">20 minutos</p>\n                                </div>\n                            </div>\n                        </article>\n                        \n                        <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%;\">\n    \n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">PRESS DE BANCA</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\">50 kg </p>\n                                    <p style=\"text-align: center;\">5 repeticiones</p>\n                                </div>\n                            </div>\n    \n                        </article>\n                        <!-- end article -->\n                    \n                        <!-- end article -->\n    \n                        <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%\">\n    \n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">FLEXIONES</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\"> 10 </p>\n                                </div>\n                            </div>\n    \n                        </article>\n                        <!-- end article -->\n                </div>\n\n                <!-- Medium training info -->\n                \n                <div *ngIf=\"currentTraining == '7'\" id=\"medium\">\n                        <h2 style=\"text-align: center\">INFORMACIÓN DEL ENTRENAMIENTO AVANZADO</h2>\n                        <p class=\"lead\" style=\"text-align: center\">El entrenamiento elegido tendra los siguientes ejercicios...</p>\n                        <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width:50%\">\n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">ABDOMINALES</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\">15</p>\n                                </div>\n                            </div>\n    \n                        </article>\n                        <!-- end article -->\n    \n                        <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%;\">\n    \n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">TIEMPO TOTAL DE ENTRENAMIENTO</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\">30 minutos</p>\n                                </div>\n                            </div>\n                        </article>\n                        \n                        <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%;\">\n    \n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">PRESS DE BANCA</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\">70 kg </p>\n                                    <p style=\"text-align: center;\">7 repeticiones</p>\n                                </div>\n                            </div>\n    \n                        </article>\n                        <!-- end article -->\n                    \n                    <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%\">\n    \n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">PESAS</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\"> 10 kg </p>\n                                    <p style=\"text-align: center;\">5 repeticiones</p>\n                                </div>\n                            </div>\n    \n                        </article>\n    \n                        <!-- end article -->\n    \n                        <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%\">\n    \n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">FLEXIONES</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\"> 20 </p>\n                                </div>\n                            </div>\n    \n                        </article>\n                        <!-- end article -->\n                    </div>\n                    \n                    \n                    <div *ngIf=\"currentTraining == '8'\" id=\"advanced\" >\n                            <h2 style=\"text-align: center\">INFORMACIÓN DEL ENTRENAMIENTO MEDIO</h2>\n                            <p class=\"lead\" style=\"text-align: center\">El entrenamiento elegido tendra los siguientes ejercicios...</p>\n                        <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width:50%\">\n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">PIERNAS</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\">40 kg</p>\n                                    <p style=\"text-align: center;\">15 repeticiones</p>\n                                </div>\n                            </div>\n                        </article>\n                        <!-- end article -->\n    \n                        <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%;\">\n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">TIEMPO TOTAL DE ENTRENAMIENTO</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\">45 minutos</p>\n                                </div>\n                            </div>\n                        </article>\n                        \n                        <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%;\">\n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">PRESS DE BANCA</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\">100 kg </p>\n                                    <p style=\"text-align: center;\">10 repeticiones</p>\n                                </div>\n                            </div>\n    \n                        </article>\n                        <!-- end article -->\n                        \n                         <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%;\">\n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">PRESS DE PECTORAL</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\">50 kg </p>\n                                    <p style=\"text-align: center;\">20 repeticiones</p>\n                                </div>\n                            </div>\n    \n                        </article>\n      \n                    \n                    <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%\">\n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">PESAS</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\"> 20 kg </p>\n                                    <p style=\"text-align: center;\">10 repeticiones</p>\n                                </div>\n                            </div>\n    \n                        </article>\n    \n                        <!-- end article -->\n    \n                        <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%\">\n    \n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">BARRAS</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\"> 10 repeticiones </p>\n                                </div>\n                            </div>\n    \n                        </article>\n                        <!-- end article -->\n                    </div>\n                    <!-- Expert info -->\n                \n                <div *ngIf=\" currentTraining == '9'\" id=\"expert\" >\n                        <h2 style=\"text-align: center\">INFORMACIÓN DEL ENTRENAMIENTO EXPERTO</h2>\n                        <p class=\"lead\" style=\"text-align: center\">El entrenamiento elegido tendra los siguientes ejercicios...</p>\n                        <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width:50%\">\n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">PIERNAS</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\">60 kg</p>\n                                    <p style=\"text-align: center;\">20 repeticiones</p>\n                                </div>\n                            </div>\n                        </article>\n                        <!-- end article -->\n    \n                        <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%;\">\n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">TIEMPO TOTAL DE ENTRENAMIENTO</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\">1 hora</p>\n                                </div>\n                            </div>\n                        </article>\n                        \n                        <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%;\">\n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">PRESS DE BANCA</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\">150 kg </p>\n                                    <p style=\"text-align: center;\">10 repeticiones</p>\n                                </div>\n                            </div>\n    \n                        </article>\n                        <!-- end article -->\n                        \n                         <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%;\">\n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">PRESS DE PECTORAL</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\">70 kg </p>\n                                    <p style=\"text-align: center;\">10 repeticiones</p>\n                                </div>\n                            </div>\n    \n                        </article>\n      \n                    \n                    <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%\">\n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">FLEXIONES</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\"> + 20 kg </p>\n                                    <p style=\"text-align: center;\">10 repeticiones</p>\n                                </div>\n                            </div>\n    \n                        </article>\n    \n                        <!-- end article -->\n    \n                        <article class=\"masonry__brick entry format-standard aos-init aos-animate\" style=\"width: 50%\">\n    \n                            <div class=\"entry__text\">\n                                <div class=\"entry__header\">\n                                    <h1 class=\"titulo__info\">BARRAS</h1>\n                                </div>\n                                <div class=\"entry__excerpt\">\n                                    <p class=\"info\"> 10 repeticiones </p>\n                                    <p style=\"text-align: center;\">+10 kg</p>\n                                </div>\n                            </div>\n    \n                        </article>\n                        <!-- end article -->\n                    </div>\n                    \n                    \n                <!-- end INFO -->\n    </article>\n</section>\n"

/***/ }),

/***/ "./src/app/training/training.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/training/training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__training_service__ = __webpack_require__("./src/app/training/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrainingComponent = /** @class */ (function () {
    function TrainingComponent(service, activatedRoute, router, loginService) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.loginService = loginService;
        this.page = 0;
        this.currentTraining = "principiante";
        this.e1principiante = { name: "flexiones", weigth: 0, reps: 10 };
        this.e2principiante = { name: "press de banca", weigth: 50, reps: 5 };
        this.e3principiante = { name: "abdominales", weigth: 0, reps: 15 };
        this.principianteExercise = [this.e1principiante, this.e2principiante, this.e3principiante];
        var id = activatedRoute.snapshot.params['id'];
        if (id) {
            service.getTraining(id).subscribe(function (training) { return _this.training = training; }, function (error) { return console.error(error); });
            this.newTraining = false;
        }
        else {
            this.training = { name: this.currentTraining, exercises: [] };
            /*if (this.currentTraining = "principiante") {
                this.training.exercises = this.principianteExercise;
            }*/
            this.newTraining = true;
        }
    }
    TrainingComponent.prototype.setCurrentTraining = function (name) {
        this.currentTraining = name;
    };
    TrainingComponent.prototype.cancel = function () {
        window.history.back();
    };
    TrainingComponent.prototype.saveTraining = function () {
        console.log(this.currentTraining);
        this.service.saveTraining(this.training, this.currentTraining).subscribe(function (training) { }, function (error) { return console.error('Error creating new training: ' + error); });
        window.confirm('¿Añadir el entrenamiento?'),
            this.router.navigate(['/entrenamiento/']),
            window.alert('Entrenamiento añadido con éxito');
    };
    TrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'training',
            template: __webpack_require__("./src/app/training/training.component.html"),
            styles: [__webpack_require__("./src/app/training/training.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__training_service__["a" /* TrainingService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "./src/app/training/training.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'https://localhost:8443/api/entrenamientos/';
var TrainingService = /** @class */ (function () {
    function TrainingService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
    }
    TrainingService.prototype.getTrainings = function (page) {
        var _this = this;
        return this.http.get(URL + "?page=" + page, { withCredentials: true })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    TrainingService.prototype.getTraining = function (id) {
        var _this = this;
        return this.http.get(URL + id, { withCredentials: true })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    TrainingService.prototype.saveTraining = function (training, id) {
        var _this = this;
        var body = JSON.stringify(training);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ withCredentials: true, headers: headers });
        if (!id) {
            return this.http.post(URL, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
        else {
            return this.http.put(URL + this.loginService.user.name + '/' + id, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
    };
    TrainingService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error (' + error.status + '): ' + error.text());
    };
    TrainingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__login_login_service__["a" /* LoginService */]])
    ], TrainingService);
    return TrainingService;
}());



/***/ }),

/***/ "./src/app/waregym/waregym.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n    <!-- s-content\n    ================================================== -->\n    <section class=\"s-content s-content--narrow s-content--no-padding-bottom\">\n\n        <article class=\"row format-gallery\">\n\n        <div class=\"row\">\n\n            <div class=\"s-content__header col-full\">\n                <h1 class=\"s-content__header-title\">\n                    ¿Por qué Waregym?\n                </h1>\n                <h2 class=\"s-content__header-title\">\n                    Por nuestros precios\n                </h2>\n            </div>\n            <!-- end s-content__header -->\n\n            <div class=\"s-content__media col-full\">\n                <div class=\"s-content__post-thumb\">\n                    <img src=\"../assets/images/precios.jpg\" srcset=\"../assets/images/precios.jpg 2000w, \n                              ../assets/images/precios.jpg 1000w, \n                              ../assets/images/precios.jpg 500w\" sizes=\"(max-width: 2000px) 100vw, 2000px\" alt=\"\">\n                </div>\n            </div>\n            <!-- end s-content__media -->\n            <div class=\"s-content__header col-full\">\n                <h2 class=\"s-content__header-title\">\n                    Por nuestras instalaciones\n                </h2>\n            </div>\n            \n            <div class=\"s-content__media col-full\">\n                <div class=\"s-content__post-thumb\">\n                    <img src=\"../assets/images/piscina.jpg\" srcset=\"../assets/images/piscina.jpg 2000w, \n                              ../assets/images/piscina.jpg 1000w, \n                              ../assets/images/piscina.jpg 500w\" sizes=\"(max-width: 2000px) 100vw, 2000px\" alt=\"\">\n                </div>\n            </div>\n            \n            <div class=\"s-content__header col-full\">\n                <h2 class=\"s-content__header-title\">\n                    Porque garantizamos resultados\n                </h2>\n            </div>\n            \n            <div class=\"s-content__media col-full\">\n                <div class=\"s-content__post-thumb\">\n                    <img src=\"../assets/images/resultados.jpg\" srcset=\"../assets/images/resultados.jpg 2000w, \n                              ../assets/images/resultados.jpg 1000w, \n                              ../assets/images/resultados.jpg 500w\" sizes=\"(max-width: 2000px) 100vw, 2000px\" alt=\"\">\n                </div>\n            </div>\n            <!-- end s-content__media -->\n            \n            <div class=\"s-content__header col-full\">\n                <h2 class=\"s-content__header-title\">\n                    Un poco más sobre nosotros\n                </h2>\n            </div>\n\n            <div class=\"col-full s-content__main\">\n\n                <p class=\"lead\">WareGym surge de la idea de mejorar la calidad de la actividad física, poniendo a disposición de sus usuarios los medios necesarios para la consecución de sus objetivos personales, tanto en equipamiento deportivo cómo en personal cualificado, garantizando la la mayor eficacia de entrenamiento posible. Nuestra estructura de entrenamiento nos permite asegurar que nuestros usuarios contarán con el material adecuado y el personal cualificado en todos y cada uno de sus entrenamientos. WareGym es mucho más que un gimnasio, es un Centro de Entrenamiento Personal de última generación, cuyo objetivo es asesorar y ayudar a personas de distintos perfiles en la consecución de una serie de objetivos relacionados con la salud, el bienestar, el rendimiento deportivo y la imagen corporal.</p>\n\n                <p id=\"waregym-title\">UNAS PALABRAS DEL FUNDADOR:</p>\n                \n                <p class=\"lead\">Cuando creamos “WareGym” nunca pudimos imaginar que fuéramos a ser capaces de ayudar a tanta gente a cambiar su mentalidad y aspecto físico en tan poco tiempo. Gracias al equipo de profesionales que trabajan en todos nuestros centros somos capaces de proveer a la población de una actividad física de alta calidad, en la que personas de distintos perfiles pueden entrenar al mismo tiempo de una manera divertida, segura y sobretodo eficaz. Nuestro objetivo número uno es ayudarte a conseguir ser la persona que tú quieres ser en el menor tiempo posible de una manera eficaz, progresiva y segura, sin importar cuál sea tu experiencia, tu edad, sexo u otras connotaciones personales.<br><br> En nombre de la familia “WareGym” me gustaría darle las gracias por dedicar parte de su preciado tiempo en leer estas palabras y nos gustaría ayudarle en el camino hacia su transformación, no hay otra cosa que nos haga más felices que hacer feliz a la gente. <br><br>Un saludo <br>Stephen Jobs\n                </p>\n\n            </div>\n            <!-- end s-content__main -->\n\n        </div>\n        <!-- end row -->\n\n        </article>\n    </section>\n    <!-- s-content -->"

/***/ }),

/***/ "./src/app/waregym/waregym.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/waregym/waregym.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaregymComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WaregymComponent = /** @class */ (function () {
    function WaregymComponent() {
    }
    WaregymComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'waregymComponent',
            template: __webpack_require__("./src/app/waregym/waregym.component.html"),
            styles: [__webpack_require__("./src/app/waregym/waregym.component.scss")]
        })
    ], WaregymComponent);
    return WaregymComponent;
}());



/***/ }),

/***/ "./src/assets/css/base.css":
/***/ (function(module, exports) {

module.exports = "/* =================================================================== \n *\n *  Philosophy v1.0 Base Stylesheet\n *  12-30-2017\n *  ------------------------------------------------------------------\n *\n *  TOC:\n *  # imports\n *  # normalize\n *  # basic/base setup styles\n *    ## Media\n *    ## Typography resets\n *    ## links\n *    ## inputs\n *  # grid\n *    ## medium size devices\n *    ## tablets\n *    ## mobile devices\n *    ## small mobile devices\n *  # block grids\n *    ## medium size devices\n *    ## tablets\n *    ## mobile devices\n *    ## small mobile devices\n *  # MISC\n *\n * =================================================================== */\n\n\n/* ===================================================================\n *  # imports \n *\n * ------------------------------------------------------------------- */\n\n\n/*!\n *  Font Awesome 4.2.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n\n\n@font-face{font-family:'FontAwesome';src:url('fontawesome-webfont.7149833697a959306ec3.eot?v=4.2.0');src:url('fontawesome-webfont.7149833697a959306ec3.eot?#iefix&v=4.2.0') format('embedded-opentype'),url('fontawesome-webfont.d95d6f5d5ab7cfefd096.woff?v=4.2.0') format('woff'),url('fontawesome-webfont.c4668ed2440df82d3fd2.ttf?v=4.2.0') format('truetype'),url('fontawesome-webfont.65bcbc899f379216109a.svg?v=4.2.0#fontawesomeregular') format('svg');font-weight:normal;font-style:normal}\n\n\n.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}\n\n\n.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}\n\n\n.fa-2x{font-size:2em}\n\n\n.fa-3x{font-size:3em}\n\n\n.fa-4x{font-size:4em}\n\n\n.fa-5x{font-size:5em}\n\n\n.fa-fw{width:1.28571429em;text-align:center}\n\n\n.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}\n\n\n.fa-ul>li{position:relative}\n\n\n.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}\n\n\n.fa-li.fa-lg{left:-1.85714286em}\n\n\n.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}\n\n\n.pull-right{float:right}\n\n\n.pull-left{float:left}\n\n\n.fa.pull-left{margin-right:.3em}\n\n\n.fa.pull-right{margin-left:.3em}\n\n\n.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}\n\n\n@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\n\n\n@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\n\n\n.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);transform:rotate(90deg)}\n\n\n.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);transform:rotate(180deg)}\n\n\n.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);transform:rotate(270deg)}\n\n\n.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}\n\n\n.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);-webkit-transform:scale(1, -1);transform:scale(1, -1)}\n\n\n:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{-webkit-filter:none;filter:none}\n\n\n.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}\n\n\n.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}\n\n\n.fa-stack-1x{line-height:inherit}\n\n\n.fa-stack-2x{font-size:2em}\n\n\n.fa-inverse{color:#fff}\n\n\n.fa-glass:before{content:\"\\f000\"}\n\n\n.fa-music:before{content:\"\\f001\"}\n\n\n.fa-search:before{content:\"\\f002\"}\n\n\n.fa-envelope-o:before{content:\"\\f003\"}\n\n\n.fa-heart:before{content:\"\\f004\"}\n\n\n.fa-star:before{content:\"\\f005\"}\n\n\n.fa-star-o:before{content:\"\\f006\"}\n\n\n.fa-user:before{content:\"\\f007\"}\n\n\n.fa-film:before{content:\"\\f008\"}\n\n\n.fa-th-large:before{content:\"\\f009\"}\n\n\n.fa-th:before{content:\"\\f00a\"}\n\n\n.fa-th-list:before{content:\"\\f00b\"}\n\n\n.fa-check:before{content:\"\\f00c\"}\n\n\n.fa-remove:before,.fa-close:before,.fa-times:before{content:\"\\f00d\"}\n\n\n.fa-search-plus:before{content:\"\\f00e\"}\n\n\n.fa-search-minus:before{content:\"\\f010\"}\n\n\n.fa-power-off:before{content:\"\\f011\"}\n\n\n.fa-signal:before{content:\"\\f012\"}\n\n\n.fa-gear:before,.fa-cog:before{content:\"\\f013\"}\n\n\n.fa-trash-o:before{content:\"\\f014\"}\n\n\n.fa-home:before{content:\"\\f015\"}\n\n\n.fa-file-o:before{content:\"\\f016\"}\n\n\n.fa-clock-o:before{content:\"\\f017\"}\n\n\n.fa-road:before{content:\"\\f018\"}\n\n\n.fa-download:before{content:\"\\f019\"}\n\n\n.fa-arrow-circle-o-down:before{content:\"\\f01a\"}\n\n\n.fa-arrow-circle-o-up:before{content:\"\\f01b\"}\n\n\n.fa-inbox:before{content:\"\\f01c\"}\n\n\n.fa-play-circle-o:before{content:\"\\f01d\"}\n\n\n.fa-rotate-right:before,.fa-repeat:before{content:\"\\f01e\"}\n\n\n.fa-refresh:before{content:\"\\f021\"}\n\n\n.fa-list-alt:before{content:\"\\f022\"}\n\n\n.fa-lock:before{content:\"\\f023\"}\n\n\n.fa-flag:before{content:\"\\f024\"}\n\n\n.fa-headphones:before{content:\"\\f025\"}\n\n\n.fa-volume-off:before{content:\"\\f026\"}\n\n\n.fa-volume-down:before{content:\"\\f027\"}\n\n\n.fa-volume-up:before{content:\"\\f028\"}\n\n\n.fa-qrcode:before{content:\"\\f029\"}\n\n\n.fa-barcode:before{content:\"\\f02a\"}\n\n\n.fa-tag:before{content:\"\\f02b\"}\n\n\n.fa-tags:before{content:\"\\f02c\"}\n\n\n.fa-book:before{content:\"\\f02d\"}\n\n\n.fa-bookmark:before{content:\"\\f02e\"}\n\n\n.fa-print:before{content:\"\\f02f\"}\n\n\n.fa-camera:before{content:\"\\f030\"}\n\n\n.fa-font:before{content:\"\\f031\"}\n\n\n.fa-bold:before{content:\"\\f032\"}\n\n\n.fa-italic:before{content:\"\\f033\"}\n\n\n.fa-text-height:before{content:\"\\f034\"}\n\n\n.fa-text-width:before{content:\"\\f035\"}\n\n\n.fa-align-left:before{content:\"\\f036\"}\n\n\n.fa-align-center:before{content:\"\\f037\"}\n\n\n.fa-align-right:before{content:\"\\f038\"}\n\n\n.fa-align-justify:before{content:\"\\f039\"}\n\n\n.fa-list:before{content:\"\\f03a\"}\n\n\n.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}\n\n\n.fa-indent:before{content:\"\\f03c\"}\n\n\n.fa-video-camera:before{content:\"\\f03d\"}\n\n\n.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:\"\\f03e\"}\n\n\n.fa-pencil:before{content:\"\\f040\"}\n\n\n.fa-map-marker:before{content:\"\\f041\"}\n\n\n.fa-adjust:before{content:\"\\f042\"}\n\n\n.fa-tint:before{content:\"\\f043\"}\n\n\n.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}\n\n\n.fa-share-square-o:before{content:\"\\f045\"}\n\n\n.fa-check-square-o:before{content:\"\\f046\"}\n\n\n.fa-arrows:before{content:\"\\f047\"}\n\n\n.fa-step-backward:before{content:\"\\f048\"}\n\n\n.fa-fast-backward:before{content:\"\\f049\"}\n\n\n.fa-backward:before{content:\"\\f04a\"}\n\n\n.fa-play:before{content:\"\\f04b\"}\n\n\n.fa-pause:before{content:\"\\f04c\"}\n\n\n.fa-stop:before{content:\"\\f04d\"}\n\n\n.fa-forward:before{content:\"\\f04e\"}\n\n\n.fa-fast-forward:before{content:\"\\f050\"}\n\n\n.fa-step-forward:before{content:\"\\f051\"}\n\n\n.fa-eject:before{content:\"\\f052\"}\n\n\n.fa-chevron-left:before{content:\"\\f053\"}\n\n\n.fa-chevron-right:before{content:\"\\f054\"}\n\n\n.fa-plus-circle:before{content:\"\\f055\"}\n\n\n.fa-minus-circle:before{content:\"\\f056\"}\n\n\n.fa-times-circle:before{content:\"\\f057\"}\n\n\n.fa-check-circle:before{content:\"\\f058\"}\n\n\n.fa-question-circle:before{content:\"\\f059\"}\n\n\n.fa-info-circle:before{content:\"\\f05a\"}\n\n\n.fa-crosshairs:before{content:\"\\f05b\"}\n\n\n.fa-times-circle-o:before{content:\"\\f05c\"}\n\n\n.fa-check-circle-o:before{content:\"\\f05d\"}\n\n\n.fa-ban:before{content:\"\\f05e\"}\n\n\n.fa-arrow-left:before{content:\"\\f060\"}\n\n\n.fa-arrow-right:before{content:\"\\f061\"}\n\n\n.fa-arrow-up:before{content:\"\\f062\"}\n\n\n.fa-arrow-down:before{content:\"\\f063\"}\n\n\n.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}\n\n\n.fa-expand:before{content:\"\\f065\"}\n\n\n.fa-compress:before{content:\"\\f066\"}\n\n\n.fa-plus:before{content:\"\\f067\"}\n\n\n.fa-minus:before{content:\"\\f068\"}\n\n\n.fa-asterisk:before{content:\"\\f069\"}\n\n\n.fa-exclamation-circle:before{content:\"\\f06a\"}\n\n\n.fa-gift:before{content:\"\\f06b\"}\n\n\n.fa-leaf:before{content:\"\\f06c\"}\n\n\n.fa-fire:before{content:\"\\f06d\"}\n\n\n.fa-eye:before{content:\"\\f06e\"}\n\n\n.fa-eye-slash:before{content:\"\\f070\"}\n\n\n.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\f071\"}\n\n\n.fa-plane:before{content:\"\\f072\"}\n\n\n.fa-calendar:before{content:\"\\f073\"}\n\n\n.fa-random:before{content:\"\\f074\"}\n\n\n.fa-comment:before{content:\"\\f075\"}\n\n\n.fa-magnet:before{content:\"\\f076\"}\n\n\n.fa-chevron-up:before{content:\"\\f077\"}\n\n\n.fa-chevron-down:before{content:\"\\f078\"}\n\n\n.fa-retweet:before{content:\"\\f079\"}\n\n\n.fa-shopping-cart:before{content:\"\\f07a\"}\n\n\n.fa-folder:before{content:\"\\f07b\"}\n\n\n.fa-folder-open:before{content:\"\\f07c\"}\n\n\n.fa-arrows-v:before{content:\"\\f07d\"}\n\n\n.fa-arrows-h:before{content:\"\\f07e\"}\n\n\n.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}\n\n\n.fa-twitter-square:before{content:\"\\f081\"}\n\n\n.fa-facebook-square:before{content:\"\\f082\"}\n\n\n.fa-camera-retro:before{content:\"\\f083\"}\n\n\n.fa-key:before{content:\"\\f084\"}\n\n\n.fa-gears:before,.fa-cogs:before{content:\"\\f085\"}\n\n\n.fa-comments:before{content:\"\\f086\"}\n\n\n.fa-thumbs-o-up:before{content:\"\\f087\"}\n\n\n.fa-thumbs-o-down:before{content:\"\\f088\"}\n\n\n.fa-star-half:before{content:\"\\f089\"}\n\n\n.fa-heart-o:before{content:\"\\f08a\"}\n\n\n.fa-sign-out:before{content:\"\\f08b\"}\n\n\n.fa-linkedin-square:before{content:\"\\f08c\"}\n\n\n.fa-thumb-tack:before{content:\"\\f08d\"}\n\n\n.fa-external-link:before{content:\"\\f08e\"}\n\n\n.fa-sign-in:before{content:\"\\f090\"}\n\n\n.fa-trophy:before{content:\"\\f091\"}\n\n\n.fa-github-square:before{content:\"\\f092\"}\n\n\n.fa-upload:before{content:\"\\f093\"}\n\n\n.fa-lemon-o:before{content:\"\\f094\"}\n\n\n.fa-phone:before{content:\"\\f095\"}\n\n\n.fa-square-o:before{content:\"\\f096\"}\n\n\n.fa-bookmark-o:before{content:\"\\f097\"}\n\n\n.fa-phone-square:before{content:\"\\f098\"}\n\n\n.fa-twitter:before{content:\"\\f099\"}\n\n\n.fa-facebook:before{content:\"\\f09a\"}\n\n\n.fa-github:before{content:\"\\f09b\"}\n\n\n.fa-unlock:before{content:\"\\f09c\"}\n\n\n.fa-credit-card:before{content:\"\\f09d\"}\n\n\n.fa-rss:before{content:\"\\f09e\"}\n\n\n.fa-hdd-o:before{content:\"\\f0a0\"}\n\n\n.fa-bullhorn:before{content:\"\\f0a1\"}\n\n\n.fa-bell:before{content:\"\\f0f3\"}\n\n\n.fa-certificate:before{content:\"\\f0a3\"}\n\n\n.fa-hand-o-right:before{content:\"\\f0a4\"}\n\n\n.fa-hand-o-left:before{content:\"\\f0a5\"}\n\n\n.fa-hand-o-up:before{content:\"\\f0a6\"}\n\n\n.fa-hand-o-down:before{content:\"\\f0a7\"}\n\n\n.fa-arrow-circle-left:before{content:\"\\f0a8\"}\n\n\n.fa-arrow-circle-right:before{content:\"\\f0a9\"}\n\n\n.fa-arrow-circle-up:before{content:\"\\f0aa\"}\n\n\n.fa-arrow-circle-down:before{content:\"\\f0ab\"}\n\n\n.fa-globe:before{content:\"\\f0ac\"}\n\n\n.fa-wrench:before{content:\"\\f0ad\"}\n\n\n.fa-tasks:before{content:\"\\f0ae\"}\n\n\n.fa-filter:before{content:\"\\f0b0\"}\n\n\n.fa-briefcase:before{content:\"\\f0b1\"}\n\n\n.fa-arrows-alt:before{content:\"\\f0b2\"}\n\n\n.fa-group:before,.fa-users:before{content:\"\\f0c0\"}\n\n\n.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}\n\n\n.fa-cloud:before{content:\"\\f0c2\"}\n\n\n.fa-flask:before{content:\"\\f0c3\"}\n\n\n.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}\n\n\n.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}\n\n\n.fa-paperclip:before{content:\"\\f0c6\"}\n\n\n.fa-save:before,.fa-floppy-o:before{content:\"\\f0c7\"}\n\n\n.fa-square:before{content:\"\\f0c8\"}\n\n\n.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:\"\\f0c9\"}\n\n\n.fa-list-ul:before{content:\"\\f0ca\"}\n\n\n.fa-list-ol:before{content:\"\\f0cb\"}\n\n\n.fa-strikethrough:before{content:\"\\f0cc\"}\n\n\n.fa-underline:before{content:\"\\f0cd\"}\n\n\n.fa-table:before{content:\"\\f0ce\"}\n\n\n.fa-magic:before{content:\"\\f0d0\"}\n\n\n.fa-truck:before{content:\"\\f0d1\"}\n\n\n.fa-pinterest:before{content:\"\\f0d2\"}\n\n\n.fa-pinterest-square:before{content:\"\\f0d3\"}\n\n\n.fa-google-plus-square:before{content:\"\\f0d4\"}\n\n\n.fa-google-plus:before{content:\"\\f0d5\"}\n\n\n.fa-money:before{content:\"\\f0d6\"}\n\n\n.fa-caret-down:before{content:\"\\f0d7\"}\n\n\n.fa-caret-up:before{content:\"\\f0d8\"}\n\n\n.fa-caret-left:before{content:\"\\f0d9\"}\n\n\n.fa-caret-right:before{content:\"\\f0da\"}\n\n\n.fa-columns:before{content:\"\\f0db\"}\n\n\n.fa-unsorted:before,.fa-sort:before{content:\"\\f0dc\"}\n\n\n.fa-sort-down:before,.fa-sort-desc:before{content:\"\\f0dd\"}\n\n\n.fa-sort-up:before,.fa-sort-asc:before{content:\"\\f0de\"}\n\n\n.fa-envelope:before{content:\"\\f0e0\"}\n\n\n.fa-linkedin:before{content:\"\\f0e1\"}\n\n\n.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}\n\n\n.fa-legal:before,.fa-gavel:before{content:\"\\f0e3\"}\n\n\n.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}\n\n\n.fa-comment-o:before{content:\"\\f0e5\"}\n\n\n.fa-comments-o:before{content:\"\\f0e6\"}\n\n\n.fa-flash:before,.fa-bolt:before{content:\"\\f0e7\"}\n\n\n.fa-sitemap:before{content:\"\\f0e8\"}\n\n\n.fa-umbrella:before{content:\"\\f0e9\"}\n\n\n.fa-paste:before,.fa-clipboard:before{content:\"\\f0ea\"}\n\n\n.fa-lightbulb-o:before{content:\"\\f0eb\"}\n\n\n.fa-exchange:before{content:\"\\f0ec\"}\n\n\n.fa-cloud-download:before{content:\"\\f0ed\"}\n\n\n.fa-cloud-upload:before{content:\"\\f0ee\"}\n\n\n.fa-user-md:before{content:\"\\f0f0\"}\n\n\n.fa-stethoscope:before{content:\"\\f0f1\"}\n\n\n.fa-suitcase:before{content:\"\\f0f2\"}\n\n\n.fa-bell-o:before{content:\"\\f0a2\"}\n\n\n.fa-coffee:before{content:\"\\f0f4\"}\n\n\n.fa-cutlery:before{content:\"\\f0f5\"}\n\n\n.fa-file-text-o:before{content:\"\\f0f6\"}\n\n\n.fa-building-o:before{content:\"\\f0f7\"}\n\n\n.fa-hospital-o:before{content:\"\\f0f8\"}\n\n\n.fa-ambulance:before{content:\"\\f0f9\"}\n\n\n.fa-medkit:before{content:\"\\f0fa\"}\n\n\n.fa-fighter-jet:before{content:\"\\f0fb\"}\n\n\n.fa-beer:before{content:\"\\f0fc\"}\n\n\n.fa-h-square:before{content:\"\\f0fd\"}\n\n\n.fa-plus-square:before{content:\"\\f0fe\"}\n\n\n.fa-angle-double-left:before{content:\"\\f100\"}\n\n\n.fa-angle-double-right:before{content:\"\\f101\"}\n\n\n.fa-angle-double-up:before{content:\"\\f102\"}\n\n\n.fa-angle-double-down:before{content:\"\\f103\"}\n\n\n.fa-angle-left:before{content:\"\\f104\"}\n\n\n.fa-angle-right:before{content:\"\\f105\"}\n\n\n.fa-angle-up:before{content:\"\\f106\"}\n\n\n.fa-angle-down:before{content:\"\\f107\"}\n\n\n.fa-desktop:before{content:\"\\f108\"}\n\n\n.fa-laptop:before{content:\"\\f109\"}\n\n\n.fa-tablet:before{content:\"\\f10a\"}\n\n\n.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}\n\n\n.fa-circle-o:before{content:\"\\f10c\"}\n\n\n.fa-quote-left:before{content:\"\\f10d\"}\n\n\n.fa-quote-right:before{content:\"\\f10e\"}\n\n\n.fa-spinner:before{content:\"\\f110\"}\n\n\n.fa-circle:before{content:\"\\f111\"}\n\n\n.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}\n\n\n.fa-github-alt:before{content:\"\\f113\"}\n\n\n.fa-folder-o:before{content:\"\\f114\"}\n\n\n.fa-folder-open-o:before{content:\"\\f115\"}\n\n\n.fa-smile-o:before{content:\"\\f118\"}\n\n\n.fa-frown-o:before{content:\"\\f119\"}\n\n\n.fa-meh-o:before{content:\"\\f11a\"}\n\n\n.fa-gamepad:before{content:\"\\f11b\"}\n\n\n.fa-keyboard-o:before{content:\"\\f11c\"}\n\n\n.fa-flag-o:before{content:\"\\f11d\"}\n\n\n.fa-flag-checkered:before{content:\"\\f11e\"}\n\n\n.fa-terminal:before{content:\"\\f120\"}\n\n\n.fa-code:before{content:\"\\f121\"}\n\n\n.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}\n\n\n.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}\n\n\n.fa-location-arrow:before{content:\"\\f124\"}\n\n\n.fa-crop:before{content:\"\\f125\"}\n\n\n.fa-code-fork:before{content:\"\\f126\"}\n\n\n.fa-unlink:before,.fa-chain-broken:before{content:\"\\f127\"}\n\n\n.fa-question:before{content:\"\\f128\"}\n\n\n.fa-info:before{content:\"\\f129\"}\n\n\n.fa-exclamation:before{content:\"\\f12a\"}\n\n\n.fa-superscript:before{content:\"\\f12b\"}\n\n\n.fa-subscript:before{content:\"\\f12c\"}\n\n\n.fa-eraser:before{content:\"\\f12d\"}\n\n\n.fa-puzzle-piece:before{content:\"\\f12e\"}\n\n\n.fa-microphone:before{content:\"\\f130\"}\n\n\n.fa-microphone-slash:before{content:\"\\f131\"}\n\n\n.fa-shield:before{content:\"\\f132\"}\n\n\n.fa-calendar-o:before{content:\"\\f133\"}\n\n\n.fa-fire-extinguisher:before{content:\"\\f134\"}\n\n\n.fa-rocket:before{content:\"\\f135\"}\n\n\n.fa-maxcdn:before{content:\"\\f136\"}\n\n\n.fa-chevron-circle-left:before{content:\"\\f137\"}\n\n\n.fa-chevron-circle-right:before{content:\"\\f138\"}\n\n\n.fa-chevron-circle-up:before{content:\"\\f139\"}\n\n\n.fa-chevron-circle-down:before{content:\"\\f13a\"}\n\n\n.fa-html5:before{content:\"\\f13b\"}\n\n\n.fa-css3:before{content:\"\\f13c\"}\n\n\n.fa-anchor:before{content:\"\\f13d\"}\n\n\n.fa-unlock-alt:before{content:\"\\f13e\"}\n\n\n.fa-bullseye:before{content:\"\\f140\"}\n\n\n.fa-ellipsis-h:before{content:\"\\f141\"}\n\n\n.fa-ellipsis-v:before{content:\"\\f142\"}\n\n\n.fa-rss-square:before{content:\"\\f143\"}\n\n\n.fa-play-circle:before{content:\"\\f144\"}\n\n\n.fa-ticket:before{content:\"\\f145\"}\n\n\n.fa-minus-square:before{content:\"\\f146\"}\n\n\n.fa-minus-square-o:before{content:\"\\f147\"}\n\n\n.fa-level-up:before{content:\"\\f148\"}\n\n\n.fa-level-down:before{content:\"\\f149\"}\n\n\n.fa-check-square:before{content:\"\\f14a\"}\n\n\n.fa-pencil-square:before{content:\"\\f14b\"}\n\n\n.fa-external-link-square:before{content:\"\\f14c\"}\n\n\n.fa-share-square:before{content:\"\\f14d\"}\n\n\n.fa-compass:before{content:\"\\f14e\"}\n\n\n.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\f150\"}\n\n\n.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\f151\"}\n\n\n.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\f152\"}\n\n\n.fa-euro:before,.fa-eur:before{content:\"\\f153\"}\n\n\n.fa-gbp:before{content:\"\\f154\"}\n\n\n.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}\n\n\n.fa-rupee:before,.fa-inr:before{content:\"\\f156\"}\n\n\n.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\f157\"}\n\n\n.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\f158\"}\n\n\n.fa-won:before,.fa-krw:before{content:\"\\f159\"}\n\n\n.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}\n\n\n.fa-file:before{content:\"\\f15b\"}\n\n\n.fa-file-text:before{content:\"\\f15c\"}\n\n\n.fa-sort-alpha-asc:before{content:\"\\f15d\"}\n\n\n.fa-sort-alpha-desc:before{content:\"\\f15e\"}\n\n\n.fa-sort-amount-asc:before{content:\"\\f160\"}\n\n\n.fa-sort-amount-desc:before{content:\"\\f161\"}\n\n\n.fa-sort-numeric-asc:before{content:\"\\f162\"}\n\n\n.fa-sort-numeric-desc:before{content:\"\\f163\"}\n\n\n.fa-thumbs-up:before{content:\"\\f164\"}\n\n\n.fa-thumbs-down:before{content:\"\\f165\"}\n\n\n.fa-youtube-square:before{content:\"\\f166\"}\n\n\n.fa-youtube:before{content:\"\\f167\"}\n\n\n.fa-xing:before{content:\"\\f168\"}\n\n\n.fa-xing-square:before{content:\"\\f169\"}\n\n\n.fa-youtube-play:before{content:\"\\f16a\"}\n\n\n.fa-dropbox:before{content:\"\\f16b\"}\n\n\n.fa-stack-overflow:before{content:\"\\f16c\"}\n\n\n.fa-instagram:before{content:\"\\f16d\"}\n\n\n.fa-flickr:before{content:\"\\f16e\"}\n\n\n.fa-adn:before{content:\"\\f170\"}\n\n\n.fa-bitbucket:before{content:\"\\f171\"}\n\n\n.fa-bitbucket-square:before{content:\"\\f172\"}\n\n\n.fa-tumblr:before{content:\"\\f173\"}\n\n\n.fa-tumblr-square:before{content:\"\\f174\"}\n\n\n.fa-long-arrow-down:before{content:\"\\f175\"}\n\n\n.fa-long-arrow-up:before{content:\"\\f176\"}\n\n\n.fa-long-arrow-left:before{content:\"\\f177\"}\n\n\n.fa-long-arrow-right:before{content:\"\\f178\"}\n\n\n.fa-apple:before{content:\"\\f179\"}\n\n\n.fa-windows:before{content:\"\\f17a\"}\n\n\n.fa-android:before{content:\"\\f17b\"}\n\n\n.fa-linux:before{content:\"\\f17c\"}\n\n\n.fa-dribbble:before{content:\"\\f17d\"}\n\n\n.fa-skype:before{content:\"\\f17e\"}\n\n\n.fa-foursquare:before{content:\"\\f180\"}\n\n\n.fa-trello:before{content:\"\\f181\"}\n\n\n.fa-female:before{content:\"\\f182\"}\n\n\n.fa-male:before{content:\"\\f183\"}\n\n\n.fa-gittip:before{content:\"\\f184\"}\n\n\n.fa-sun-o:before{content:\"\\f185\"}\n\n\n.fa-moon-o:before{content:\"\\f186\"}\n\n\n.fa-archive:before{content:\"\\f187\"}\n\n\n.fa-bug:before{content:\"\\f188\"}\n\n\n.fa-vk:before{content:\"\\f189\"}\n\n\n.fa-weibo:before{content:\"\\f18a\"}\n\n\n.fa-renren:before{content:\"\\f18b\"}\n\n\n.fa-pagelines:before{content:\"\\f18c\"}\n\n\n.fa-stack-exchange:before{content:\"\\f18d\"}\n\n\n.fa-arrow-circle-o-right:before{content:\"\\f18e\"}\n\n\n.fa-arrow-circle-o-left:before{content:\"\\f190\"}\n\n\n.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\f191\"}\n\n\n.fa-dot-circle-o:before{content:\"\\f192\"}\n\n\n.fa-wheelchair:before{content:\"\\f193\"}\n\n\n.fa-vimeo-square:before{content:\"\\f194\"}\n\n\n.fa-turkish-lira:before,.fa-try:before{content:\"\\f195\"}\n\n\n.fa-plus-square-o:before{content:\"\\f196\"}\n\n\n.fa-space-shuttle:before{content:\"\\f197\"}\n\n\n.fa-slack:before{content:\"\\f198\"}\n\n\n.fa-envelope-square:before{content:\"\\f199\"}\n\n\n.fa-wordpress:before{content:\"\\f19a\"}\n\n\n.fa-openid:before{content:\"\\f19b\"}\n\n\n.fa-institution:before,.fa-bank:before,.fa-university:before{content:\"\\f19c\"}\n\n\n.fa-mortar-board:before,.fa-graduation-cap:before{content:\"\\f19d\"}\n\n\n.fa-yahoo:before{content:\"\\f19e\"}\n\n\n.fa-google:before{content:\"\\f1a0\"}\n\n\n.fa-reddit:before{content:\"\\f1a1\"}\n\n\n.fa-reddit-square:before{content:\"\\f1a2\"}\n\n\n.fa-stumbleupon-circle:before{content:\"\\f1a3\"}\n\n\n.fa-stumbleupon:before{content:\"\\f1a4\"}\n\n\n.fa-delicious:before{content:\"\\f1a5\"}\n\n\n.fa-digg:before{content:\"\\f1a6\"}\n\n\n.fa-pied-piper:before{content:\"\\f1a7\"}\n\n\n.fa-pied-piper-alt:before{content:\"\\f1a8\"}\n\n\n.fa-drupal:before{content:\"\\f1a9\"}\n\n\n.fa-joomla:before{content:\"\\f1aa\"}\n\n\n.fa-language:before{content:\"\\f1ab\"}\n\n\n.fa-fax:before{content:\"\\f1ac\"}\n\n\n.fa-building:before{content:\"\\f1ad\"}\n\n\n.fa-child:before{content:\"\\f1ae\"}\n\n\n.fa-paw:before{content:\"\\f1b0\"}\n\n\n.fa-spoon:before{content:\"\\f1b1\"}\n\n\n.fa-cube:before{content:\"\\f1b2\"}\n\n\n.fa-cubes:before{content:\"\\f1b3\"}\n\n\n.fa-behance:before{content:\"\\f1b4\"}\n\n\n.fa-behance-square:before{content:\"\\f1b5\"}\n\n\n.fa-steam:before{content:\"\\f1b6\"}\n\n\n.fa-steam-square:before{content:\"\\f1b7\"}\n\n\n.fa-recycle:before{content:\"\\f1b8\"}\n\n\n.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}\n\n\n.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}\n\n\n.fa-tree:before{content:\"\\f1bb\"}\n\n\n.fa-spotify:before{content:\"\\f1bc\"}\n\n\n.fa-deviantart:before{content:\"\\f1bd\"}\n\n\n.fa-soundcloud:before{content:\"\\f1be\"}\n\n\n.fa-database:before{content:\"\\f1c0\"}\n\n\n.fa-file-pdf-o:before{content:\"\\f1c1\"}\n\n\n.fa-file-word-o:before{content:\"\\f1c2\"}\n\n\n.fa-file-excel-o:before{content:\"\\f1c3\"}\n\n\n.fa-file-powerpoint-o:before{content:\"\\f1c4\"}\n\n\n.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:\"\\f1c5\"}\n\n\n.fa-file-zip-o:before,.fa-file-archive-o:before{content:\"\\f1c6\"}\n\n\n.fa-file-sound-o:before,.fa-file-audio-o:before{content:\"\\f1c7\"}\n\n\n.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}\n\n\n.fa-file-code-o:before{content:\"\\f1c9\"}\n\n\n.fa-vine:before{content:\"\\f1ca\"}\n\n\n.fa-codepen:before{content:\"\\f1cb\"}\n\n\n.fa-jsfiddle:before{content:\"\\f1cc\"}\n\n\n.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:\"\\f1cd\"}\n\n\n.fa-circle-o-notch:before{content:\"\\f1ce\"}\n\n\n.fa-ra:before,.fa-rebel:before{content:\"\\f1d0\"}\n\n\n.fa-ge:before,.fa-empire:before{content:\"\\f1d1\"}\n\n\n.fa-git-square:before{content:\"\\f1d2\"}\n\n\n.fa-git:before{content:\"\\f1d3\"}\n\n\n.fa-hacker-news:before{content:\"\\f1d4\"}\n\n\n.fa-tencent-weibo:before{content:\"\\f1d5\"}\n\n\n.fa-qq:before{content:\"\\f1d6\"}\n\n\n.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}\n\n\n.fa-send:before,.fa-paper-plane:before{content:\"\\f1d8\"}\n\n\n.fa-send-o:before,.fa-paper-plane-o:before{content:\"\\f1d9\"}\n\n\n.fa-history:before{content:\"\\f1da\"}\n\n\n.fa-circle-thin:before{content:\"\\f1db\"}\n\n\n.fa-header:before{content:\"\\f1dc\"}\n\n\n.fa-paragraph:before{content:\"\\f1dd\"}\n\n\n.fa-sliders:before{content:\"\\f1de\"}\n\n\n.fa-share-alt:before{content:\"\\f1e0\"}\n\n\n.fa-share-alt-square:before{content:\"\\f1e1\"}\n\n\n.fa-bomb:before{content:\"\\f1e2\"}\n\n\n.fa-soccer-ball-o:before,.fa-futbol-o:before{content:\"\\f1e3\"}\n\n\n.fa-tty:before{content:\"\\f1e4\"}\n\n\n.fa-binoculars:before{content:\"\\f1e5\"}\n\n\n.fa-plug:before{content:\"\\f1e6\"}\n\n\n.fa-slideshare:before{content:\"\\f1e7\"}\n\n\n.fa-twitch:before{content:\"\\f1e8\"}\n\n\n.fa-yelp:before{content:\"\\f1e9\"}\n\n\n.fa-newspaper-o:before{content:\"\\f1ea\"}\n\n\n.fa-wifi:before{content:\"\\f1eb\"}\n\n\n.fa-calculator:before{content:\"\\f1ec\"}\n\n\n.fa-paypal:before{content:\"\\f1ed\"}\n\n\n.fa-google-wallet:before{content:\"\\f1ee\"}\n\n\n.fa-cc-visa:before{content:\"\\f1f0\"}\n\n\n.fa-cc-mastercard:before{content:\"\\f1f1\"}\n\n\n.fa-cc-discover:before{content:\"\\f1f2\"}\n\n\n.fa-cc-amex:before{content:\"\\f1f3\"}\n\n\n.fa-cc-paypal:before{content:\"\\f1f4\"}\n\n\n.fa-cc-stripe:before{content:\"\\f1f5\"}\n\n\n.fa-bell-slash:before{content:\"\\f1f6\"}\n\n\n.fa-bell-slash-o:before{content:\"\\f1f7\"}\n\n\n.fa-trash:before{content:\"\\f1f8\"}\n\n\n.fa-copyright:before{content:\"\\f1f9\"}\n\n\n.fa-at:before{content:\"\\f1fa\"}\n\n\n.fa-eyedropper:before{content:\"\\f1fb\"}\n\n\n.fa-paint-brush:before{content:\"\\f1fc\"}\n\n\n.fa-birthday-cake:before{content:\"\\f1fd\"}\n\n\n.fa-area-chart:before{content:\"\\f1fe\"}\n\n\n.fa-pie-chart:before{content:\"\\f200\"}\n\n\n.fa-line-chart:before{content:\"\\f201\"}\n\n\n.fa-lastfm:before{content:\"\\f202\"}\n\n\n.fa-lastfm-square:before{content:\"\\f203\"}\n\n\n.fa-toggle-off:before{content:\"\\f204\"}\n\n\n.fa-toggle-on:before{content:\"\\f205\"}\n\n\n.fa-bicycle:before{content:\"\\f206\"}\n\n\n.fa-bus:before{content:\"\\f207\"}\n\n\n.fa-ioxhost:before{content:\"\\f208\"}\n\n\n.fa-angellist:before{content:\"\\f209\"}\n\n\n.fa-cc:before{content:\"\\f20a\"}\n\n\n.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:\"\\f20b\"}\n\n\n.fa-meanpath:before{content:\"\\f20c\"}\n\n\n/* ===================================================================\n * fonts.scss\n *\n * ------------------------------------------------------------------- */\n\n\n/*\n * libre baskerville\n================================================================================ */\n\n\n@font-face {\n   font-family: \"librebaskerville-regular\";\n   src: url('librebaskerville-regular-webfont.520ff79ac50eb226b24a.woff2') format(\"woff2\"), url('librebaskerville-regular-webfont.c1d1c75cc10d62fbada4.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"librebaskerville-italic\";\n   src: url('librebaskerville-italic-webfont.4ba92be4076c08dbd7f2.woff2') format(\"woff2\"), url('librebaskerville-italic-webfont.70e8ec15e18a31545117.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"librebaskerville-bold\";\n   src: url('librebaskerville-bold-webfont.1c87f16b386bbfdc1ae1.woff2') format(\"woff2\"), url('librebaskerville-bold-webfont.c4711930c3a7eff1e02c.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n/*\n * metropolis\n================================================================================ */\n\n\n@font-face {\n   font-family: \"metropolis-black\";\n   src: url('metropolis-black-webfont.bbfbd56fe362e05fbcbc.woff2') format(\"woff2\"), url('metropolis-black-webfont.15e2705575fcf711418a.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-black-italic\";\n   src: url('metropolis-blackitalic-webfont.546f29b230ec732a0f02.woff2') format(\"woff2\"), url('metropolis-blackitalic-webfont.91d6f64a71d8775be437.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-extrabold\";\n   src: url('metropolis-extrabold-webfont.114f26fb02cf829b3c83.woff2') format(\"woff2\"), url('metropolis-extrabold-webfont.d12b18ebdbec915f966c.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-extrabold-italic\";\n   src: url('metropolis-extrabolditalic-webfont.8e54f6146f71a8ac5752.woff2') format(\"woff2\"), url('metropolis-extrabolditalic-webfont.367fbd4cba16a0463489.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-bold\";\n   src: url('metropolis-bold-webfont.ac3f6f0c7bbcbb5bdab0.woff2') format(\"woff2\"), url('metropolis-bold-webfont.719c42aafc244c53a715.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-bold-italic\";\n   src: url('metropolis-bolditalic-webfont.69951235b058434ee37e.woff2') format(\"woff2\"), url('metropolis-bolditalic-webfont.dd4bc3379f77b9d5c47f.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-semibold\";\n   src: url('metropolis-semibold-webfont.954b06b72e08c11a907c.woff2') format(\"woff2\"), url('metropolis-semibold-webfont.dd03d2213072e60bc7c4.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-semibold-italic\";\n   src: url('metropolis-semibolditalic-webfont.a9920186f2079dccb0fd.woff2') format(\"woff2\"), url('metropolis-semibolditalic-webfont.21a7fa302bfa8762f30d.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-medium\";\n   src: url('metropolis-medium-webfont.eb3f91f51db9e68d96b2.woff2') format(\"woff2\"), url('metropolis-medium-webfont.614addde04d2c078a2f7.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-medium-italic\";\n   src: url('metropolis-mediumitalic-webfont.c0ff4c88f085d8732f65.woff2') format(\"woff2\"), url('metropolis-mediumitalic-webfont.6dcc904b680607b78189.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-regular\";\n   src: url('metropolis-regular-webfont.ea531a4039bd95db5cdb.woff2') format(\"woff2\"), url('metropolis-regular-webfont.cae42ae53417aab57f95.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-italic\";\n   src: url('metropolis-regularitalic-webfont.a49bb074252f52c67485.woff2') format(\"woff2\"), url('metropolis-regularitalic-webfont.d8cfe5b7249aa9f0f1f9.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-light\";\n   src: url('metropolis-light-webfont.79a39f7aeaae578f933f.woff2') format(\"woff2\"), url('metropolis-light-webfont.2ee4814e7a47e465ae6e.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-light-italic\";\n   src: url('metropolis-lightitalic-webfont.0242e0a3f692bf56e289.woff2') format(\"woff2\"), url('metropolis-lightitalic-webfont.63702b7dc9cf8ee30c33.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-extralight\";\n   src: url('metropolis-extralight-webfont.284219683e08fc646926.woff2') format(\"woff2\"), url('metropolis-extralight-webfont.fea61f7bcfa99a12163a.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-extralight-italic\";\n   src: url('metropolis-extralightitalic-webfont.01be7a4184e71f1b1ab0.woff2') format(\"woff2\"), url('metropolis-extralightitalic-webfont.f5a1241587d4cfe8caa3.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-thin\";\n   src: url('metropolis-thin-webfont.ebf4b33ced37eaa61d37.woff2') format(\"woff2\"), url('metropolis-thin-webfont.1e805a8207f91ba69af2.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n@font-face {\n   font-family: \"metropolis-thin-italic\";\n   src: url('metropolis-thinitalic-webfont.ace6e67fea54180a3dbc.woff2') format(\"woff2\"), url('metropolis-thinitalic-webfont.f39156daabef9ff35d97.woff') format(\"woff\");\n   font-style: normal;\n   font-weight: normal;\n}\n\n\n/* ===================================================================\n *  # normalize\n *  normalize.css v5.0.0 | MIT License | \n *  github.com/necolas/normalize.css\n *\n * ------------------------------------------------------------------- */\n\n\nhtml {\n   font-family: sans-serif;\n   line-height: 1.15;\n   -ms-text-size-adjust: 100%;\n   -webkit-text-size-adjust: 100%;\n}\n\n\nbody {\n   margin: 0;\n}\n\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n   display: block;\n}\n\n\nh1 {\n   font-size: 2em;\n   margin: 0.67em 0;\n}\n\n\nfigcaption,\nfigure,\nmain {\n   display: block;\n}\n\n\nfigure {\n   margin: 1em 40px;\n}\n\n\nhr {\n   -webkit-box-sizing: content-box;\n           box-sizing: content-box;\n   height: 0;\n   overflow: visible;\n}\n\n\npre {\n   font-family: monospace, monospace;\n   font-size: 1em;\n}\n\n\na {\n   background-color: transparent;\n   -webkit-text-decoration-skip: objects;\n}\n\n\na:active,\na:hover {\n   outline-width: 0;\n}\n\n\nabbr[title] {\n   border-bottom: none;\n   text-decoration: underline;\n   -webkit-text-decoration: underline dotted;\n           text-decoration: underline dotted;\n}\n\n\nb,\nstrong {\n   font-weight: inherit;\n}\n\n\nb,\nstrong {\n   font-weight: bolder;\n}\n\n\ncode,\nkbd,\nsamp {\n   font-family: monospace, monospace;\n   font-size: 1em;\n}\n\n\ndfn {\n   font-style: italic;\n}\n\n\nmark {\n   background-color: #ff0;\n   color: #000;\n}\n\n\nsmall {\n   font-size: 80%;\n}\n\n\nsub,\nsup {\n   font-size: 75%;\n   line-height: 0;\n   position: relative;\n   vertical-align: baseline;\n}\n\n\nsub {\n   bottom: -0.25em;\n}\n\n\nsup {\n   top: -0.5em;\n}\n\n\naudio,\nvideo {\n   display: inline-block;\n}\n\n\naudio:not([controls]) {\n   display: none;\n   height: 0;\n}\n\n\nimg {\n   border-style: none;\n}\n\n\nsvg:not(:root) {\n   overflow: hidden;\n}\n\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n   font-family: sans-serif;\n   font-size: 100%;\n   line-height: 1.15;\n   margin: 0;\n}\n\n\nbutton,\ninput {\n   overflow: visible;\n}\n\n\nbutton,\nselect {\n   text-transform: none;\n}\n\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n   -webkit-appearance: button;\n}\n\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n   border-style: none;\n   padding: 0;\n}\n\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n   outline: 1px dotted ButtonText;\n}\n\n\nfieldset {\n   border: 1px solid #c0c0c0;\n   margin: 0 2px;\n   padding: 0.35em 0.625em 0.75em;\n}\n\n\nlegend {\n   -webkit-box-sizing: border-box;\n           box-sizing: border-box;\n   color: inherit;\n   display: table;\n   max-width: 100%;\n   padding: 0;\n   white-space: normal;\n}\n\n\nprogress {\n   display: inline-block;\n   vertical-align: baseline;\n}\n\n\ntextarea {\n   overflow: auto;\n}\n\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n   -webkit-box-sizing: border-box;\n           box-sizing: border-box;\n   padding: 0;\n}\n\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n   height: auto;\n}\n\n\n[type=\"search\"] {\n   -webkit-appearance: textfield;\n   outline-offset: -2px;\n}\n\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n   -webkit-appearance: none;\n}\n\n\n::-webkit-file-upload-button {\n   -webkit-appearance: button;\n   font: inherit;\n}\n\n\ndetails,\nmenu {\n   display: block;\n}\n\n\nsummary {\n   display: list-item;\n}\n\n\ncanvas {\n   display: inline-block;\n}\n\n\ntemplate {\n   display: none;\n}\n\n\n[hidden] {\n   display: none;\n}\n\n\n/* ===================================================================\n*  # basic/base setup styles\n*\n* ------------------------------------------------------------------- */\n\n\nhtml {\n   font-size: 62.5%;\n   -webkit-box-sizing: border-box;\n           box-sizing: border-box;\n}\n\n\n*,\n*::before,\n*::after {\n   -webkit-box-sizing: inherit;\n           box-sizing: inherit;\n}\n\n\nbody {\n   font-weight: normal;\n   line-height: 1;\n   word-wrap: break-word;\n   text-rendering: optimizeLegibility;\n   -webkit-overflow-scrolling: touch;\n   -webkit-text-size-adjust: none;\n}\n\n\nbody,\ninput,\nbutton {\n   -moz-osx-font-smoothing: grayscale;\n   -webkit-font-smoothing: antialiased;\n}\n\n\n/* ------------------------------------------------------------------- \n * ## Media\n * ------------------------------------------------------------------- */\n\n\nimg,\nvideo {\n   max-width: 100%;\n   height: auto;\n}\n\n\n/* ------------------------------------------------------------------- \n * ## Typography resets \n * ------------------------------------------------------------------- */\n\n\ndiv, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, p, blockquote, th, td {\n   margin: 0;\n   padding: 0;\n}\n\n\nh1, h2, h3, h4, h5, h6 {\n   -webkit-font-smoothing: auto;\n   -webkit-font-smoothing: antialiased;\n   -webkit-font-variant-ligatures: common-ligatures;\n   font-variant-ligatures: common-ligatures;\n   text-rendering: optimizeLegibility;\n}\n\n\nem,\ni {\n   font-style: italic;\n   line-height: inherit;\n}\n\n\nstrong,\nb {\n   font-weight: bold;\n   line-height: inherit;\n}\n\n\nsmall {\n   font-size: 60%;\n   line-height: inherit;\n}\n\n\nol,\nul {\n   list-style: none;\n}\n\n\nli {\n   display: block;\n}\n\n\n/* ------------------------------------------------------------------- \n * ## links\n * ------------------------------------------------------------------- */\n\n\na {\n   text-decoration: none;\n   line-height: inherit;\n}\n\n\na img {\n   border: none;\n}\n\n\n/* ------------------------------------------------------------------- \n *  ## inputs\n * ------------------------------------------------------------------- */\n\n\nfieldset {\n   margin: 0;\n   padding: 0;\n}\n\n\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea {\n   -webkit-appearance: none;\n   -moz-appearance: none;\n   -ms-appearance: none;\n   -o-appearance: none;\n   appearance: none;\n}\n\n\n/* ===================================================================\n * # grid\n *\n * ------------------------------------------------------------------- */\n\n\n.row {\n   width: 94%;\n   max-width: 1200px;\n   margin: 0 auto;\n}\n\n\n.row:after {\n   content: \"\";\n   display: table;\n   clear: both;\n}\n\n\n.row .row {\n   width: auto;\n   max-width: none;\n   margin-left: -20px;\n   margin-right: -20px;\n}\n\n\n/* column blocks\n * -------------------------------------- */\n\n\n[class*=\"col-\"] {\n   float: left;\n   padding: 0 20px;\n}\n\n\n[class*=\"col-\"] + [class*=\"col-\"].end {\n   float: right;\n}\n\n\n/* column width classes \n * -------------------------------------- */\n\n\n.col-one {\n   width: 8.33333%;\n}\n\n\n.col-two,\n.col-1-6 {\n   width: 16.66667%;\n}\n\n\n.col-three,\n.col-1-4 {\n   width: 25%;\n}\n\n\n.col-four,\n.col-1-3 {\n   width: 33.33333%;\n}\n\n\n.col-five {\n   width: 41.66667%;\n}\n\n\n.col-six,\n.col-1-2 {\n   width: 50%;\n}\n\n\n.col-seven {\n   width: 58.33333%;\n}\n\n\n.col-eight,\n.col-2-3 {\n   width: 66.66667%;\n}\n\n\n.col-nine,\n.col-3-4 {\n  width: 75%;\n}\n\n\n.col-ten,\n.col-5-6 {\n   width: 83.33333%;\n}\n\n\n.col-eleven {\n   width: 91.66667%;\n}\n\n\n.col-twelve,\n.col-full {\n   width: 100%;\n}\n\n\n/* ------------------------------------------------------------------- \n * ## medium size devices\n * ------------------------------------------------------------------- */\n\n\n@media only screen and (max-width: 1200px) {\n   .row .row {\n      margin-left: -15px;\n      margin-right: -15px;\n   }\n\n   [class*=\"col-\"] {\n      padding: 0 15px;\n   }\n\n   .md-two,\n   .md-1-6 {\n      width: 16.66667%;\n   }\n\n   .md-one {\n      width: 8.33333%;\n   }\n\n   .md-three,\n   .md-1-4 {\n      width: 25%;\n   }\n\n   .md-four,\n   .md-1-3 {\n      width: 33.33333%;\n   }\n\n   .md-five {\n      width: 41.66667%;\n   }\n\n   .md-six,\n   .md-1-2 {\n      width: 50%;\n   }\n\n   .md-seven {\n      width: 58.33333%;\n   }\n\n   .md-eight,\n   .md-2-3 {\n      width: 66.66667%;\n   }\n\n   .md-nine,\n   .md-3-4 {\n      width: 75%;\n   }\n\n   .md-ten,\n   .md-5-6 {\n      width: 83.33333%;\n   }\n\n   .md-eleven {\n      width: 91.66667%;\n   }\n\n   .md-twelve,\n   .md-full {\n      width: 100%;\n   }\n}\n\n\n/* ------------------------------------------------------------------- \n * ## tablets\n * ------------------------------------------------------------------- */\n\n\n@media only screen and (max-width: 800px) {\n   .row {\n      width: 90%;\n   }\n\n   .tab-1-4 {\n      width: 25%;\n   }\n\n   .tab-1-3 {\n      width: 33.33333%;\n   }\n\n   .tab-1-2 {\n      width: 50%;\n   }\n\n   .tab-2-3 {\n      width: 66.66667%;\n   }\n\n   .tab-3-4 {\n      width: 75%;\n   }\n\n   .tab-full {\n      width: 100%;\n   }\n\n   .hide-on-tablet {\n      display: none;\n   }\n}\n\n\n/* ------------------------------------------------------------------- \n * ## mobile devices\n * ------------------------------------------------------------------- */\n\n\n@media only screen and (max-width: 600px) {\n   .row {\n      width: auto;\n      padding-left: 25px;\n      padding-right: 25px;\n   }\n\n   .row .row {\n      margin-left: -10px;\n      margin-right: -10px;\n      padding-left: 0;\n      padding-right: 0;\n   }\n\n   [class*=\"col-\"] {\n      padding: 0 10px;\n   }\n\n   .mob-1-4 {\n      width: 25%;\n   }\n\n   .mob-1-3 {\n      width: 33.33333%;\n   }\n\n   .mob-1-2 {\n      width: 50%;\n   }\n\n   .mob-2-3 {\n      width: 66.66667%;\n   }\n\n   .mob-3-4 {\n      width: 75%;\n   }\n\n   .mob-full {\n      width: 100%;\n   }\n\n   .hide-on-mobile {\n      display: none;\n   }\n}\n\n\n/* ------------------------------------------------------------------- \n * ## small mobile devices\n * ------------------------------------------------------------------- */\n\n\n/* stack columns on small mobile devices\n * ------------------------------------------------------------------- */\n\n\n@media only screen and (max-width: 400px) {\n   .row .row {\n      margin-left: 0;\n      margin-right: 0;\n   }\n\n   [class*=\"col-\"] {\n      width: 100% !important;\n      float: none !important;\n      clear: both !important;\n      margin-left: 0;\n      margin-right: 0;\n      padding: 0;\n   }\n\n   [class*=\"col-\"] + [class*=\"col-\"].end {\n      float: none;\n   }\n}\n\n\n/* ===================================================================\n * # block grids\n *\n * ------------------------------------------------------------------- */\n\n\n/* Equally-sized columns define at row level\n * ------------------------------------------------------------------- */\n\n\n[class*=\"block-\"]:after {\n   content: \"\";\n   display: table;\n   clear: both;\n}\n\n\n.block-1-6 .col-block {\n   width: 16.66667%;\n}\n\n\n.block-1-5 .col-block {\n   width: 20%;\n}\n\n\n.block-1-4 .col-block {\n   width: 25%;\n}\n\n\n.block-1-3 .col-block {\n   width: 33.33333%;\n}\n\n\n.block-1-2 .col-block {\n   width: 50%;\n}\n\n\n/**\n * Clearing for block grid columns. Allow columns with \n * different heights to align properly.\n */\n\n\n.block-1-6 .col-block:nth-child(6n + 1),\n.block-1-5 .col-block:nth-child(5n + 1),\n.block-1-4 .col-block:nth-child(4n + 1),\n.block-1-3 .col-block:nth-child(3n + 1),\n.block-1-2 .col-block:nth-child(2n + 1) {\n   clear: both;\n}\n\n\n/* ------------------------------------------------------------------- \n * ## medium size devices\n * ------------------------------------------------------------------- */\n\n\n@media only screen and (max-width: 1200px) {\n   .block-m-1-6 .col-block {\n      width: 16.66667%;\n   }\n\n   .block-m-1-5 .col-block {\n      width: 20%;\n   }\n\n   .block-m-1-4 .col-block {\n      width: 25%;\n   }\n\n   .block-m-1-3 .col-block {\n      width: 33.33333%;\n   }\n\n   .block-m-1-2 .col-block {\n      width: 50%;\n   }\n\n   .block-m-full .col-block {\n      width: 100%;\n      clear: both;\n   }\n\n   [class*=\"block-m-\"] .col-block:nth-child(n) {\n      clear: none;\n   }\n\n   .block-m-1-6 .col-block:nth-child(6n + 1),\n   .block-m-1-5 .col-block:nth-child(5n + 1),\n   .block-m-1-4 .col-block:nth-child(4n + 1),\n   .block-m-1-3 .col-block:nth-child(3n + 1),\n   .block-m-1-2 .col-block:nth-child(2n + 1) {\n      clear: both;\n   }\n}\n\n\n/* ------------------------------------------------------------------- \n * ## tablets\n * ------------------------------------------------------------------- */\n\n\n@media only screen and (max-width: 800px) {\n   .block-tab-1-6 .col-block {\n      width: 16.66667%;\n   }\n\n   .block-tab-1-5 .col-block {\n      width: 20%;\n   }\n\n   .block-tab-1-4 .col-block {\n      width: 25%;\n   }\n\n   .block-tab-1-3 .col-block {\n      width: 33.33333%;\n   }\n\n   .block-tab-1-2 .col-block {\n      width: 50%;\n   }\n\n   .block-tab-full .col-block {\n      width: 100%;\n      clear: both;\n   }\n\n   [class*=\"block-tab-\"] .col-block:nth-child(n) {\n      clear: none;\n   }\n\n   .block-tab-1-6 .col-block:nth-child(6n + 1),\n   .block-tab-1-6 .col-block:nth-child(5n + 1),\n   .block-tab-1-4 .col-block:nth-child(4n + 1),\n   .block-tab-1-3 .col-block:nth-child(3n + 1),\n   .block-tab-1-2 .col-block:nth-child(2n + 1) {\n      clear: both;\n   }\n}\n\n\n/* ------------------------------------------------------------------- \n * ## mobile devices\n * ------------------------------------------------------------------- */\n\n\n@media only screen and (max-width: 600px) {\n   .block-mob-1-6 .col-block {\n      width: 16.66667%;\n   }\n\n   .block-mob-1-5 .col-block {\n      width: 20%;\n   }\n\n   .block-mob-1-4 .col-block {\n      width: 25%;\n   }\n\n   .block-mob-1-3 .col-block {\n      width: 33.33333%;\n   }\n\n   .block-mob-1-2 .col-block {\n      width: 50%;\n   }\n\n   .block-mob-full .col-block {\n      width: 100%;\n      clear: both;\n   }\n\n   [class*=\"block-mob-\"] .col-block:nth-child(n) {\n      clear: none;\n   }\n\n   .block-mob-1-6 .col-block:nth-child(6n + 1),\n   .block-mob-1-5 .col-block:nth-child(5n + 1),\n   .block-mob-1-4 .col-block:nth-child(4n + 1),\n   .block-mob-1-3 .col-block:nth-child(3n + 1),\n   .block-mob-1-2 .col-block:nth-child(2n + 1) {\n      clear: both;\n   }\n}\n\n\n/* ------------------------------------------------------------------- \n * ## small mobile devices\n * ------------------------------------------------------------------- */\n\n\n/* stack columns on small mobile devices\n * ------------------------------------------------------------------- */\n\n\n@media only screen and (max-width: 400px) {\n   .stack .col-block {\n      width: 100% !important;\n      float: none !important;\n      clear: both !important;\n      margin-left: 0;\n      margin-right: 0;\n   }\n}\n\n\n/* ===================================================================\n * # MISC\n *\n * ------------------------------------------------------------------- */\n\n\n.group:after {\n   content: \"\";\n   display: table;\n   clear: both;\n}\n\n\n/* Misc Helper Styles\n * -------------------------------------- */\n\n\n.is-hidden {\n   display: none;\n}\n\n\n.is-invisible {\n   visibility: hidden;\n}\n\n\n.antialiased {\n   -webkit-font-smoothing: antialiased;\n   -moz-osx-font-smoothing: grayscale;\n}\n\n\n.overflow-hidden {\n   overflow: hidden;\n}\n\n\n.remove-bottom {\n   margin-bottom: 0;\n}\n\n\n.half-bottom {\n   margin-bottom: 1.5rem !important;\n}\n\n\n.add-bottom {\n   margin-bottom: 3rem !important;\n}\n\n\n.no-border {\n   border: none;\n}\n\n\n.full-width {\n   width: 100%;\n}\n\n\n.text-center {\n   text-align: center;\n}\n\n\n.text-left {\n   text-align: left;\n}\n\n\n.text-right {\n   text-align: right;\n}\n\n\n.pull-left {\n   float: left;\n}\n\n\n.pull-right {\n   float: right;\n}\n\n\n.align-center {\n   margin-left: auto;\n   margin-right: auto;\n   text-align: center;\n}\n\n\n/*# sourceMappingURL=base.css.map */\n"

/***/ }),

/***/ "./src/assets/css/main.css":
/***/ (function(module, exports) {

module.exports = "/* =================================================================== \n *\n *  Philosophy v1.0 Main Stylesheet\n *  1-2-2018\n *  ------------------------------------------------------------------\n *\n *  TOC:\n *  # base style overrides\n *    ## links\n *  # typography & general theme styles\n *    ## Lists\n *    ## responsive video container\n *    ## floated image\n *    ## tables\n *    ## spacing \n *    ## pace.js styles - minimal\n *  # preloader (line scale)\n *  # forms\n *    ## Style Placeholder Text\n *    ## Change Autocomplete styles in Chrome\n *  # buttons\n *  # additional components\n *    ## alert box\n *    ## additional typo styles\n *    ## pagination\n *  # reusable and common theme styles\n *    ## mediaelement style overrides\n *    ## close button for search and mobile navigation\n *    ## slick slider\n *    ## masonry entries\n *    ## post formats - masonry view\n *  # pageheader\n *    ## header logo\n *    ## header social\n *    ## header-toggle\n *    ## header-search\n *    ## header search trigger\n *    ## main navigation\n *    ## pageheader content\n *    ## feature section animation\n *  # s-content\n *    ## masonry layout\n *  # s-extra\n *    ## popular posts\n *    ## about\n *    ## tags\n *  # footer\n *    ## footer link list\n *    ## subscribe form\n *    ## copyright\n *    ## go to top\n *  # blog styles\n *    ## content main\n *    ## content media\n *    ## post tags\n *    ## author profile\n *    ## blog single page navigation\n *    ## format gallery\n *    ## format video\n *    ## format audio\n *    ## comments\n *  # page styles\n *    ## contact page\n *\n * =================================================================== */\n\n/* ===================================================================\n * # base style overrides\n *\n * ------------------------------------------------------------------- */\n\nhtml {\n    font-size: 10px;\n}\n\n@media only screen and (max-width:400px) {\n    html {\n        font-size: 9.375px;\n    }\n\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    background: #19191b;\n    font-family: \"metropolis-regular\", sans-serif;\n    font-size: 1.6rem;\n    font-style: normal;\n    font-weight: normal;\n    line-height: 1.875;\n    color: #656565;\n    margin: 0;\n    padding: 0;\n}\n\n/* ------------------------------------------------------------------- \n * ## links\n * ------------------------------------------------------------------- */\n\na {\n    color: #0054a5;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n}\n\na:hover,\na:focus,\na:active {\n    color: #000000;\n}\n\na:hover,\na:active {\n    outline: 0;\n}\n\n/* ===================================================================\n * # typography & general theme styles\n * \n * ------------------------------------------------------------------- */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n    font-family: \"librebaskerville-bold\", serif;\n    color: #000000;\n    font-style: normal;\n    font-weight: normal;\n    text-rendering: optimizeLegibility;\n}\n\n#boton-plus{\n    border-radius: 80px 80px;\n}\n\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3,\nh4,\n.h4 {\n    margin-top: 6rem;\n    margin-bottom: 1.8rem;\n}\n\n@media only screen and (max-width:600px) {\n    h1,\n    .h1,\n    h2,\n    .h2,\n    h3,\n    .h3,\n    h4,\n    .h4 {\n        margin-top: 5.1rem;\n    }\n\n}\n\nh5,\n.h5,\nh6,\n.h6 {\n    margin-top: 4.2rem;\n    margin-bottom: 1.5rem;\n}\n\n@media only screen and (max-width:600px) {\n    h5,\n    .h5,\n    h6,\n    .h6 {\n        margin-top: 3.6rem;\n        margin-bottom: 0.9rem;\n    }\n\n}\n\nh1,\n.h1 {\n    font-size: 3.6rem;\n    line-height: 1.25;\n    letter-spacing: -.1rem;\n}\n\n@media only screen and (max-width:600px) {\n    h1,\n    .h1 {\n        font-size: 3.3rem;\n        letter-spacing: -.07rem;\n    }\n\n}\n\nh2,\n.h2 {\n    font-size: 3rem;\n    line-height: 1.3;\n}\n\n@media only screen and (max-width:600px) {\n    h2,\n    .h2 {\n        font-size: 2.8rem;\n    }\n\n}\n\nh3,\n.h3 {\n    font-size: 2.4rem;\n    line-height: 1.25;\n}\n\nh4,\n.h4 {\n    font-size: 2.1rem;\n    line-height: 1.286;\n}\n\nh5,\n.h5 {\n    font-size: 1.6rem;\n    line-height: 1.313;\n}\n\nh6,\n.h6 {\n    font-size: 1.3rem;\n    line-height: 1.385;\n    text-transform: uppercase;\n    letter-spacing: .16rem;\n}\n\np img {\n    margin: 0;\n}\n\np.lead {\n    font-family: \"metropolis-medium\", sans-serif;\n    font-size: 2rem;\n    line-height: 1.8;\n    margin-bottom: 3.6rem;\n    color: #000000;\n    text-align: justify;\n}\n\n#waregym-title {\n    font: 25px arial, sans-serif;\n    color: black;\n}\n\n@media only screen and (max-width:800px) {\n    p.lead {\n        font-size: 1.8rem;\n    }\n\n}\n\nem,\ni,\nstrong,\nb {\n    font-size: inherit;\n    line-height: inherit;\n    font-style: normal;\n    font-weight: normal;\n}\n\nem,\ni {\n    font-family: \"metropolis-italic\", sans-serif;\n}\n\nstrong,\nb {\n    font-family: \"metropolis-bold\", sans-serif;\n}\n\nsmall {\n    font-size: 1.2rem;\n    line-height: inherit;\n}\n\nblockquote {\n    margin: 3.9rem 0;\n    padding-left: 4.5rem;\n    position: relative;\n}\n\nblockquote:before {\n    content: \"\\201C\";\n    font-size: 10rem;\n    line-height: 0px;\n    margin: 0;\n    color: rgba(0, 0, 0, 0.25);\n    font-family: arial, sans-serif;\n    position: absolute;\n    top: 3.6rem;\n    left: 0;\n}\n\nblockquote p {\n    font-family: \"metropolis-medium\", sans-serif;\n    padding: 0;\n    font-size: 2.1rem;\n    line-height: 1.857;\n    color: #000000;\n}\n\nblockquote cite {\n    display: block;\n    font-family: \"metropolis-medium\", sans-serif;\n    font-size: 1.5rem;\n    font-style: normal;\n    line-height: 1.4;\n}\n\nblockquote cite:before {\n    content: \"\\2014 \\0020\";\n}\n\nblockquote cite a,\nblockquote cite a:visited {\n    color: #727272;\n    border: none;\n}\n\nabbr {\n    font-family: \"metropolis-bold\", sans-serif;\n    font-variant: small-caps;\n    text-transform: lowercase;\n    letter-spacing: .05rem;\n    color: #727272;\n}\n\nvar,\nkbd,\nsamp,\ncode,\npre {\n    font-family: Consolas, \"Andale Mono\", Courier, \"Courier New\", monospace;\n}\n\npre {\n    padding: 2.4rem 3rem 3rem;\n    background: #F1F1F1;\n    overflow-x: auto;\n}\n\ncode {\n    font-size: 1.4rem;\n    margin: 0 .2rem;\n    padding: .3rem .6rem;\n    white-space: nowrap;\n    background: #e5e5e5;\n    border: 1px solid #d8d8d8;\n    border-radius: 3px;\n}\n\npre > code {\n    display: block;\n    white-space: pre;\n    line-height: 2;\n    padding: 0;\n    margin: 0;\n}\n\npre.prettyprint > code {\n    border: none;\n}\n\ndel {\n    text-decoration: line-through;\n}\n\nabbr[title],\ndfn[title] {\n    border-bottom: 1px dotted;\n    cursor: help;\n    text-decoration: none;\n}\n\nmark {\n    background: #ffd900;\n    color: #000000;\n}\n\nhr {\n    border: solid rgba(0, 0, 0, 0.1);\n    border-width: 1px 0 0;\n    clear: both;\n    margin: 2.4rem 0 1.5rem;\n    height: 0;\n}\n\n/* ------------------------------------------------------------------- \n * ## Lists\n * ------------------------------------------------------------------- */\n\nol {\n    list-style: decimal;\n}\n\nul {\n    list-style: disc;\n}\n\nli {\n    display: list-item;\n}\n\nol,\nul {\n    margin-left: 1.7rem;\n}\n\nul li {\n    padding-left: .4rem;\n}\n\nul ul,\nul ol,\nol ol,\nol ul {\n    margin: .6rem 0 .6rem 1.7rem;\n}\n\nul.disc li {\n    display: list-item;\n    list-style: none;\n    padding: 0 0 0 .8rem;\n    position: relative;\n}\n\nul.disc li::before {\n    content: \"\";\n    display: inline-block;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #0054a5;\n    position: absolute;\n    left: -17px;\n    top: 11px;\n    vertical-align: middle;\n}\n\ndt {\n    margin: 0;\n    color: #0054a5;\n}\n\ndd {\n    margin: 0 0 0 2rem;\n}\n\n/* ------------------------------------------------------------------- \n * ## responsive video container\n * ------------------------------------------------------------------- */\n\n.video-container {\n    position: relative;\n    padding-bottom: 56.25%;\n    height: 0;\n    overflow: hidden;\n}\n\n.video-container iframe,\n.video-container object,\n.video-container embed,\n.video-container video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n/* ------------------------------------------------------------------- \n * ## floated image\n * ------------------------------------------------------------------- */\n\nimg.pull-right {\n    margin: 1.5rem 0 0 3rem;\n}\n\nimg.pull-left {\n    margin: 1.5rem 3rem 0 0;\n}\n\n/* ------------------------------------------------------------------- \n * ## tables\n * ------------------------------------------------------------------- */\n\ntable {\n    border-width: 0;\n    width: 100%;\n    max-width: 100%;\n    font-family: \"metropolis-regular\", sans-serif;\n}\n\nth,\ntd {\n    padding: 1.5rem 3rem;\n    text-align: left;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nth {\n    color: #000000;\n    font-family: \"metropolis-bold\", sans-serif;\n}\n\ntd {\n    line-height: 1.5;\n}\n\nth:first-child,\ntd:first-child {\n    padding-left: 0;\n}\n\nth:last-child,\ntd:last-child {\n    padding-right: 0;\n}\n\n.table-responsive {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n\n/* ------------------------------------------------------------------- \n * ## spacing \n * ------------------------------------------------------------------- */\n\nbutton,\n.btn {\n    margin-bottom: 1.2rem;\n}\n\n.class-inscription {\n    list-style-type: none;\n    font: 30px Arial;\n}\n\nfieldset {\n    margin-bottom: 1.5rem;\n}\n\ninput,\ntextarea,\nselect,\npre,\nblockquote,\nfigure,\ntable,\np,\nul,\nol,\ndl,\nform,\n.video-container,\n.cl-custom-select {\n    margin-bottom: 3rem;\n}\n\n/* ------------------------------------------------------------------- \n * ## pace.js styles - minimal\n * ------------------------------------------------------------------- */\n\n.pace {\n    -webkit-pointer-events: none;\n    pointer-events: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n}\n\n.pace-inactive {\n    display: none;\n}\n\n.pace .pace-progress {\n    background: #FFFFFF;\n    position: fixed;\n    z-index: 900;\n    top: 0;\n    right: 100%;\n    width: 100%;\n    height: 4px;\n}\n\n.oldie .pace {\n    display: none;\n}\n\n/* ===================================================================\n * # preloader (line scale)\n *\n * ------------------------------------------------------------------- */\n\n#preloader {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #050505;\n    z-index: 800;\n    height: 100%;\n    width: 100%;\n    display: table;\n}\n\n.no-js #preloader,\n.oldie #preloader {\n    display: none;\n}\n\n#loader {\n    display: table-cell;\n    text-align: center;\n    vertical-align: middle;\n}\n\n.line-scale > div:nth-child(1) {\n    -webkit-animation: line-scale 1s -0.4s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n    animation: line-scale 1s -0.4s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n}\n\n.line-scale > div:nth-child(2) {\n    -webkit-animation: line-scale 1s -0.3s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n    animation: line-scale 1s -0.3s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n}\n\n.line-scale > div:nth-child(3) {\n    -webkit-animation: line-scale 1s -0.2s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n    animation: line-scale 1s -0.2s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n}\n\n.line-scale > div:nth-child(4) {\n    -webkit-animation: line-scale 1s -0.1s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n    animation: line-scale 1s -0.1s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n}\n\n.line-scale > div:nth-child(5) {\n    -webkit-animation: line-scale 1s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n    animation: line-scale 1s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n}\n\n.line-scale > div {\n    background-color: #fff;\n    width: 4px;\n    height: 35px;\n    border-radius: 2px;\n    margin: 2px;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    display: inline-block;\n}\n\n@-webkit-keyframes line-scale {\n    0% {\n        -webkit-transform: scaley(1);\n        transform: scaley(1);\n    }\n\n    50% {\n        -webkit-transform: scaley(0.4);\n        transform: scaley(0.4);\n    }\n\n    100% {\n        -webkit-transform: scaley(1);\n        transform: scaley(1);\n    }\n\n}\n\n@keyframes line-scale {\n    0% {\n        -webkit-transform: scaley(1);\n        transform: scaley(1);\n    }\n\n    50% {\n        -webkit-transform: scaley(0.4);\n        transform: scaley(0.4);\n    }\n\n    100% {\n        -webkit-transform: scaley(1);\n        transform: scaley(1);\n    }\n\n}\n\n/* ===================================================================\n * # forms\n *\n * ------------------------------------------------------------------- */\n\nfieldset {\n    border: none;\n}\n\ninput[type=\"email\"],\ninput[type=\"user\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n    display: block;\n    height: 6rem;\n    padding: 1.5rem 0;\n    border: 0;\n    outline: none;\n    color: #151515;\n    font-family: \"metropolis-regular\", sans-serif;\n    font-size: 1.6rem;\n    line-height: 3rem;\n    max-width: 100%;\n    background: transparent;\n    border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n}\n\n.cl-custom-select {\n    position: relative;\n    padding: 0;\n}\n\n.cl-custom-select select {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -ms-appearance: none;\n    -o-appearance: none;\n    appearance: none;\n    text-indent: 0.01px;\n    text-overflow: '';\n    margin: 0;\n    line-height: 3rem;\n    vertical-align: middle;\n}\n\n.cl-custom-select select option {\n    padding-left: 2rem;\n    padding-right: 2rem;\n}\n\n.cl-custom-select select::-ms-expand {\n    display: none;\n}\n\n.cl-custom-select::after {\n    border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n    border-right: 2px solid rgba(0, 0, 0, 0.5);\n    content: '';\n    display: block;\n    height: 8px;\n    width: 8px;\n    margin-top: -7px;\n    pointer-events: none;\n    position: absolute;\n    right: 2.4rem;\n    top: 50%;\n    -webkit-transform-origin: 66% 66%;\n    transform-origin: 66% 66%;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out;\n}\n\n/* IE9 and below */\n\n.oldie .cl-custom-select::after {\n    display: none;\n}\n\ntextarea {\n    min-height: 25rem;\n}\n\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n    color: #0054a5;\n    border-bottom: 2px solid #0054a5;\n}\n\nlabel,\nlegend {\n    font-family: \"metropolis-regular\", sans-serif;\n    font-size: 1.4rem;\n    font-weight: bold;\n    margin-bottom: .9rem;\n    line-height: 1.714;\n    color: #000000;\n    display: block;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    display: inline;\n}\n\nlabel > .label-text {\n    display: inline-block;\n    margin-left: 1rem;\n    font-family: \"librebaskerville-regular\", serif;\n    font-weight: normal;\n    line-height: inherit;\n}\n\nlabel > input[type=\"checkbox\"],\nlabel > input[type=\"radio\"] {\n    margin: 0;\n    position: relative;\n    top: .15rem;\n}\n\n/* ------------------------------------------------------------------- \n * ## Style Placeholder Text\n * ------------------------------------------------------------------- */\n\n::-webkit-input-placeholder {\n    color: #6d6d6d;\n}\n\n:-moz-placeholder {\n    color: #6d6d6d;\n    /* Firefox 18- */\n}\n\n::-moz-placeholder {\n    color: #6d6d6d;\n    /* Firefox 19+ */\n}\n\n:-ms-input-placeholder {\n    color: #6d6d6d;\n}\n\n.placeholder {\n    color: #6d6d6d !important;\n}\n\n/* ------------------------------------------------------------------- \n * ## Change Autocomplete styles in Chrome\n * ------------------------------------------------------------------- */\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus input:-webkit-autofill,\ntextarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,\nselect:-webkit-autofill,\nselect:-webkit-autofill:hover,\nselect:-webkit-autofill:focus {\n    -webkit-text-fill-color: #0054a5;\n    -webkit-transition: background-color 5000s ease-in-out 0s;\n    transition: background-color 5000s ease-in-out 0s;\n}\n\n/* ===================================================================\n * # buttons\n *\n * ------------------------------------------------------------------- */\n\n.btn,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n    display: inline-block;\n    font-family: \"metropolis-bold\", sans-serif;\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    letter-spacing: .3rem;\n    height: 5.4rem;\n    line-height: 5rem;\n    padding: 0 3rem;\n    margin: 0 .3rem 1.2rem 0;\n    color: #000000;\n    text-decoration: none;\n    text-align: center;\n    white-space: nowrap;\n    border-radius: 3px;\n    cursor: pointer;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n    background-color: #c5c5c5;\n    border: .2rem solid #c5c5c5;\n}\n\n.btn:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.btn:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n    background-color: #b8b8b8;\n    border-color: #b8b8b8;\n    color: #000000;\n    outline: 0;\n}\n\n/* button primary\n * ------------------------------------------------- */\n\n.btn.btn--primary,\nbutton.btn--primary,\ninput[type=\"submit\"].btn--primary,\ninput[type=\"reset\"].btn--primary,\ninput[type=\"button\"].btn--primary {\n    background: #000000;\n    border-color: #000000;\n    color: #FFFFFF;\n}\n\n.btn.btn--primary:hover,\nbutton.btn--primary:hover,\ninput[type=\"submit\"].btn--primary:hover,\ninput[type=\"reset\"].btn--primary:hover,\ninput[type=\"button\"].btn--primary:hover,\n.btn.btn--primary:focus,\nbutton.btn--primary:focus,\ninput[type=\"submit\"].btn--primary:focus,\ninput[type=\"reset\"].btn--primary:focus,\ninput[type=\"button\"].btn--primary:focus {\n    background: #0054a5;\n    border-color: #0054a5;\n}\n\n/* button modifiers\n * ------------------------------------------------- */\n\n.btn.full-width,\nbutton.full-width {\n    width: 100%;\n    margin-right: 0;\n}\n\n.btn--medium,\nbutton.btn--medium {\n    height: 5.7rem !important;\n    line-height: 5.3rem !important;\n}\n\n.btn--large,\nbutton.btn--large {\n    height: 6rem !important;\n    line-height: 5.6rem !important;\n}\n\n.btn--stroke,\nbutton.btn--stroke {\n    background: transparent !important;\n    border: 0.2rem solid #000000;\n    color: #000000;\n}\n\n.btn--stroke:hover,\nbutton.btn--stroke:hover {\n    border: 0.2rem solid #0054a5;\n    color: #0054a5;\n}\n\n.btn--pill,\nbutton.btn--pill {\n    padding-left: 3rem !important;\n    padding-right: 3rem !important;\n    border-radius: 1000px !important;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/* =================================================================== \n * # additional components\n *\n * ------------------------------------------------------------------- */\n\n/* ------------------------------------------------------------------- \n * ## alert box\n * ------------------------------------------------------------------- */\n\n.alert-box {\n    padding: 2.1rem 4rem 2.1rem 3rem;\n    position: relative;\n    margin-bottom: 3rem;\n    border-radius: 3px;\n    font-family: \"metropolis-semibold\", sans-serif;\n    font-size: 1.5rem;\n    line-height: 1.6;\n}\n\n.alert-box__close {\n    position: absolute;\n    right: 1.8rem;\n    top: 1.8rem;\n    cursor: pointer;\n}\n\n.alert-box__close.fa {\n    font-size: 12px;\n}\n\n.alert-box--error {\n    background-color: #ffd1d2;\n    color: #e65153;\n}\n\n.alert-box--success {\n    background-color: #c8e675;\n    color: #758c36;\n}\n\n.alert-box--info {\n    background-color: #d7ecfb;\n    color: #4a95cc;\n}\n\n.alert-box--notice {\n    background-color: #fff099;\n    color: #bba31b;\n}\n\n/* ------------------------------------------------------------------- \n * ## additional typo styles\n * ------------------------------------------------------------------- */\n\n/* drop cap \n * ----------------------------------------------- */\n\n.drop-cap::first-letter {\n    float: left;\n    margin: 0;\n    padding: 1.5rem .6rem 0 0;\n    font-size: 8.4rem;\n    font-family: \"metropolis-extrabold\", sans-serif;\n    font-weight: bold;\n    line-height: 6rem;\n    text-indent: 0;\n    background: transparent;\n    color: #000000;\n}\n\n/* line definition style \n * ----------------------------------------------- */\n\n.lining dt,\n.lining dd {\n    display: inline;\n    margin: 0;\n}\n\n.lining dt + dt::before,\n.lining dd + dt::before {\n    content: \"\\A\";\n    white-space: pre;\n}\n\n.lining dd + dd::before {\n    content: \", \";\n}\n\n.lining dd + dd::before {\n    content: \", \";\n}\n\n.lining dd::before {\n    content: \": \";\n    margin-left: -0.2em;\n}\n\n/* dictionary definition style \n * ----------------------------------------------- */\n\n.dictionary-style dt {\n    display: inline;\n    counter-reset: definitions;\n}\n\n.dictionary-style dt + dt::before {\n    content: \", \";\n    margin-left: -0.2em;\n}\n\n.dictionary-style dd {\n    display: block;\n    counter-increment: definitions;\n}\n\n.dictionary-style dd::before {\n    content: counter(definitions, decimal) \". \";\n}\n\n/** \n * Pull Quotes\n * -----------\n * markup:\n *\n * <aside class=\"pull-quote\">\n *    <blockquote>\n *       <p></p>\n *    </blockquote>\n * </aside>\n *\n * --------------------------------------------------------------------- */\n\n.pull-quote {\n    position: relative;\n    padding: 2.1rem 3rem 2.1rem 0px;\n}\n\n.pull-quote::before,\n.pull-quote::after {\n    height: 1em;\n    position: absolute;\n    font-size: 10rem;\n    font-family: Arial, Sans-Serif;\n    color: rgba(0, 0, 0, 0.25);\n}\n\n.pull-quote::before {\n    content: \"\\201C\";\n    top: -3.6rem;\n    left: 0;\n}\n\n.pull-quote::after {\n    content: '\\201D';\n    bottom: 3.6rem;\n    right: 0;\n}\n\n.pull-quote blockquote {\n    margin: 0;\n}\n\n.pull-quote blockquote::before {\n    content: none;\n}\n\n/** \n * Stats Tab\n * ---------\n * markup:\n *\n * <ul class=\"stats-tabs\">\n *    <li><a href=\"#\">[value]<em>[name]</em></a></li>\n * </ul>\n *\n * Extend this object into your markup.\n *\n * --------------------------------------------------------------------- */\n\n.stats-tabs {\n    padding: 0;\n    margin: 3rem 0;\n}\n\n.stats-tabs li {\n    display: inline-block;\n    margin: 0 1.5rem 3rem 0;\n    padding: 0 1.5rem 0 0;\n    border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.stats-tabs li:last-child {\n    margin: 0;\n    padding: 0;\n    border: none;\n}\n\n.stats-tabs li a {\n    display: inline-block;\n    font-size: 2.5rem;\n    font-family: \"metropolis-bold\", sans-serif;\n    font-weight: bold;\n    border: none;\n    color: #000000;\n}\n\n.stats-tabs li a:hover {\n    color: #0054a5;\n}\n\n.stats-tabs li a em {\n    display: block;\n    margin: .6rem 0 0 0;\n    font-size: 1.5rem;\n    font-family: \"metropolis-regular\", sans-serif;\n    color: #727272;\n}\n\n/* -------------------------------------------------------------------\n * ## pagination \n * ------------------------------------------------------------------- */\n\n.pgn {\n    margin: 3rem auto;\n    text-align: center;\n}\n\n.pgn ul {\n    display: inline-block;\n    list-style: none;\n    margin-left: 0;\n    position: relative;\n    padding: 0 6rem;\n}\n\n.pgn ul li {\n    display: inline-block;\n    margin: 0;\n    padding: 0;\n}\n\n.pgn__num {\n    font-family: \"metropolis-bold\", sans-serif;\n    font-size: 1.5rem;\n    line-height: 2.4rem;\n    display: inline-block;\n    padding: .6rem 1.2rem;\n    height: 3.6rem;\n    margin: .3rem .15rem;\n    color: #151515;\n    border-radius: 3px;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n}\n\n.pgn__num:hover {\n    background: #c4c4c4;\n    color: #151515;\n}\n\n.pgn .current,\n.pgn .current:hover {\n    background-color: #151515;\n    color: #FFFFFF;\n}\n\n.pgn .inactive,\n.pgn .inactive:hover {\n    color: #888888;\n    cursor: default;\n}\n\n.pgn__prev,\n.pgn__next {\n    display: block;\n    background-color: #FFFFFF;\n    background-repeat: no-repeat;\n    background-size: 18px 12px;\n    background-position: center;\n    height: 4.8rem;\n    width: 4.8rem;\n    line-height: 4.8rem;\n    padding: 0;\n    margin: 0;\n    border-radius: 50%;\n    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);\n            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);\n    font: 0/0 a;\n    text-shadow: none;\n    color: transparent;\n    -webkit-transition: all 0.2s ease-in-out;\n    transition: all 0.2s ease-in-out;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n}\n\n.pgn__prev:hover,\n.pgn__next:hover {\n    background-color: #151515;\n    color: #FFFFFF;\n    text-decoration: none;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n.pgn__prev {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 17.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2231px%22 height%3D%2220px%22 viewBox%3D%220 0 31 20%22 enable-background%3D%22new 0 0 31 20%22 xml%3Aspace%3D%22preserve%22%3E%3Cg transform%3D%22translate(0%2C-952.36218)%22%3E%09%3Cpath d%3D%22M0.863%2C963.33l7.258%2C8.226c0.507%2C0.57%2C1.476%2C0.665%2C2.056%2C0.121c0.556-0.522%2C0.628-1.486%2C0.121-2.056l-5.126-5.806h23.876%09%09c0.802%2C0%2C1.452-0.65%2C1.452-1.452s-0.65-1.452-1.452-1.452H5.172l5.126-5.806c0.507-0.57%2C0.449-1.55-0.121-2.056%09%09c-0.57-0.507-1.456-0.495-2.056%2C0.121l-7.258%2C8.226c-0.211%2C0.237-0.354%2C0.602-0.363%2C0.968C0.503%2C962.751%2C0.605%2C963.04%2C0.863%2C963.33%09%09z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n    left: 0;\n}\n\n.pgn__prev:hover {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 17.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2231px%22 height%3D%2220px%22 viewBox%3D%220 0 31 20%22 enable-background%3D%22new 0 0 31 20%22 xml%3Aspace%3D%22preserve%22%3E%3Cg transform%3D%22translate(0%2C-952.36218)%22%3E%09%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M0.863%2C963.33l7.258%2C8.226c0.507%2C0.57%2C1.476%2C0.665%2C2.056%2C0.121c0.556-0.522%2C0.628-1.486%2C0.121-2.056%09%09l-5.126-5.806h23.876c0.802%2C0%2C1.452-0.65%2C1.452-1.452s-0.65-1.452-1.452-1.452H5.172l5.126-5.806%09%09c0.507-0.57%2C0.449-1.55-0.121-2.056c-0.57-0.507-1.456-0.495-2.056%2C0.121l-7.258%2C8.226c-0.211%2C0.237-0.354%2C0.602-0.363%2C0.968%09%09C0.503%2C962.751%2C0.605%2C963.04%2C0.863%2C963.33z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\n.pgn__next {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 17.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2231px%22 height%3D%2220px%22 viewBox%3D%220 0 31 20%22 enable-background%3D%22new 0 0 31 20%22 xml%3Aspace%3D%22preserve%22%3E%3Cg transform%3D%22translate(0%2C-952.36218)%22%3E%09%3Cpath d%3D%22M30.5%2C962.362c-0.009-0.366-0.152-0.73-0.363-0.968l-7.258-8.226c-0.6-0.616-1.486-0.628-2.056-0.121%09%09c-0.57%2C0.507-0.628%2C1.486-0.121%2C2.056l5.126%2C5.806H1.952c-0.802%2C0-1.452%2C0.65-1.452%2C1.452s0.65%2C1.452%2C1.452%2C1.452h23.876%09%09l-5.126%2C5.806c-0.507%2C0.57-0.435%2C1.535%2C0.121%2C2.056c0.58%2C0.545%2C1.55%2C0.449%2C2.056-0.121l7.258-8.226%09%09C30.395%2C963.04%2C30.497%2C962.751%2C30.5%2C962.362z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n    right: 0;\n}\n\n.pgn__next:hover {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 17.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2231px%22 height%3D%2220px%22 viewBox%3D%220 0 31 20%22 enable-background%3D%22new 0 0 31 20%22 xml%3Aspace%3D%22preserve%22%3E%3Cg transform%3D%22translate(0%2C-952.36218)%22%3E%09%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M30.5%2C962.362c-0.009-0.366-0.152-0.73-0.363-0.968l-7.258-8.226c-0.6-0.616-1.486-0.628-2.056-0.121%09%09s-0.628%2C1.486-0.121%2C2.056l5.126%2C5.806H1.952c-0.802%2C0-1.452%2C0.65-1.452%2C1.452s0.65%2C1.452%2C1.452%2C1.452h23.876l-5.126%2C5.806%09%09c-0.507%2C0.57-0.435%2C1.535%2C0.121%2C2.056c0.58%2C0.545%2C1.55%2C0.449%2C2.056-0.121l7.258-8.226C30.395%2C963.04%2C30.497%2C962.751%2C30.5%2C962.362z%22%09%09%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\n.pgn__prev.inactive,\n.pgn__next.inactive {\n    background-color: #ffffff;\n    opacity: 0.5;\n    cursor: default;\n}\n\n.pgn__prev.inactive:hover {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 17.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2231px%22 height%3D%2220px%22 viewBox%3D%220 0 31 20%22 enable-background%3D%22new 0 0 31 20%22 xml%3Aspace%3D%22preserve%22%3E%3Cg transform%3D%22translate(0%2C-952.36218)%22%3E%09%3Cpath d%3D%22M0.863%2C963.33l7.258%2C8.226c0.507%2C0.57%2C1.476%2C0.665%2C2.056%2C0.121c0.556-0.522%2C0.628-1.486%2C0.121-2.056l-5.126-5.806h23.876%09%09c0.802%2C0%2C1.452-0.65%2C1.452-1.452s-0.65-1.452-1.452-1.452H5.172l5.126-5.806c0.507-0.57%2C0.449-1.55-0.121-2.056%09%09c-0.57-0.507-1.456-0.495-2.056%2C0.121l-7.258%2C8.226c-0.211%2C0.237-0.354%2C0.602-0.363%2C0.968C0.503%2C962.751%2C0.605%2C963.04%2C0.863%2C963.33%09%09z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\n.pgn__next.inactive:hover {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 17.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2231px%22 height%3D%2220px%22 viewBox%3D%220 0 31 20%22 enable-background%3D%22new 0 0 31 20%22 xml%3Aspace%3D%22preserve%22%3E%3Cg transform%3D%22translate(0%2C-952.36218)%22%3E%09%3Cpath d%3D%22M30.5%2C962.362c-0.009-0.366-0.152-0.73-0.363-0.968l-7.258-8.226c-0.6-0.616-1.486-0.628-2.056-0.121%09%09c-0.57%2C0.507-0.628%2C1.486-0.121%2C2.056l5.126%2C5.806H1.952c-0.802%2C0-1.452%2C0.65-1.452%2C1.452s0.65%2C1.452%2C1.452%2C1.452h23.876%09%09l-5.126%2C5.806c-0.507%2C0.57-0.435%2C1.535%2C0.121%2C2.056c0.58%2C0.545%2C1.55%2C0.449%2C2.056-0.121l7.258-8.226%09%09C30.395%2C963.04%2C30.497%2C962.751%2C30.5%2C962.362z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\n/* ------------------------------------------------------------------- \n * responsive:\n * pagination\n * ------------------------------------------------------------------- */\n\n@media only screen and (max-width:600px) {\n    .pgn ul {\n        padding: 0 5rem;\n    }\n\n    .pgn__prev,\n    .pgn__next {\n        height: 3.6rem;\n        width: 3.6rem;\n        line-height: 3.6rem;\n        background-size: 12px 8px;\n    }\n\n}\n\n/* ===================================================================\n * # reusable and common theme styles\n *\n * ------------------------------------------------------------------- */\n\n.wide {\n    max-width: 1400px;\n}\n\n.narrow {\n    max-width: 800px;\n}\n\n/* ------------------------------------------------------------------- \n * ## mediaelement style overrides\n * ------------------------------------------------------------------- */\n\n.mejs__overlay-button {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22400%22 height%3D%22120%22 viewBox%3D%220 0 400 120%22%3E%3Cstyle%3E.st0%7Bfill%3A%23FFFFFF%3Bwidth%3A16px%3Bheight%3A16px%7D .st1%7Bfill%3Anone%3Bstroke%3A%23FFFFFF%3Bstroke-width%3A1.5%3Bstroke-linecap%3Around%3B%7D .st2%7Bfill%3Anone%3Bstroke%3A%23FFFFFF%3Bstroke-width%3A2%3Bstroke-linecap%3Around%3B%7D .st3%7Bfill%3Anone%3Bstroke%3A%23FFFFFF%3B%7D .st4%7Bfill%3A%23231F20%3B%7D .st5%7Bopacity%3A0.75%3Bfill%3Anone%3Bstroke%3A%23FFFFFF%3Bstroke-width%3A5%3Benable-background%3Anew%3B%7D .st6%7Bfill%3Anone%3Bstroke%3A%23FFFFFF%3Bstroke-width%3A5%3B%7D .st7%7Bopacity%3A0.4%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st8%7Bopacity%3A0.6%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st9%7Bopacity%3A0.8%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st10%7Bopacity%3A0.9%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st11%7Bopacity%3A0.3%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st12%7Bopacity%3A0.5%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st13%7Bopacity%3A0.7%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D%3C%2Fstyle%3E%3Cpath class%3D%22st0%22 d%3D%22M16.5 8.5c.3.1.4.5.2.8-.1.1-.1.2-.2.2l-11.4 7c-.5.3-.8.1-.8-.5V2c0-.5.4-.8.8-.5l11.4 7z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M24 1h2.2c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1H24c-.6 0-1-.4-1-1V2c0-.5.4-1 1-1zm9.8 0H36c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1h-2.2c-.6 0-1-.4-1-1V2c0-.5.4-1 1-1z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M81 1.4c0-.6.4-1 1-1h5.4c.6 0 .7.3.3.7l-6 6c-.4.4-.7.3-.7-.3V1.4zm0 15.8c0 .6.4 1 1 1h5.4c.6 0 .7-.3.3-.7l-6-6c-.4-.4-.7-.3-.7.3v5.4zM98.8 1.4c0-.6-.4-1-1-1h-5.4c-.6 0-.7.3-.3.7l6 6c.4.4.7.3.7-.3V1.4zm0 15.8c0 .6-.4 1-1 1h-5.4c-.6 0-.7-.3-.3-.7l6-6c.4-.4.7-.3.7.3v5.4z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M112.7 5c0 .6.4 1 1 1h4.1c.6 0 .7-.3.3-.7L113.4.6c-.4-.4-.7-.3-.7.3V5zm-7.1 1c.6 0 1-.4 1-1V.9c0-.6-.3-.7-.7-.3l-4.7 4.7c-.4.4-.3.7.3.7h4.1zm1 7.1c0-.6-.4-1-1-1h-4.1c-.6 0-.7.3-.3.7l4.7 4.7c.4.4.7.3.7-.3v-4.1zm7.1-1c-.6 0-1 .4-1 1v4.1c0 .5.3.7.7.3l4.7-4.7c.4-.4.3-.7-.3-.7h-4.1z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M67 5.8c-.5.4-1.2.6-1.8.6H62c-.6 0-1 .4-1 1v5.7c0 .6.4 1 1 1h4.2c.3.2.5.4.8.6l3.5 2.6c.4.3.8.1.8-.4V3.5c0-.5-.4-.7-.8-.4L67 5.8z%22%2F%3E%3Cpath class%3D%22st1%22 d%3D%22M73.9 2.5s3.9-.8 3.9 7.7-3.9 7.8-3.9 7.8%22%2F%3E%3Cpath class%3D%22st1%22 d%3D%22M72.6 6.4s2.6-.4 2.6 3.8-2.6 3.9-2.6 3.9%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M47 5.8c-.5.4-1.2.6-1.8.6H42c-.6 0-1 .4-1 1v5.7c0 .6.4 1 1 1h4.2c.3.2.5.4.8.6l3.5 2.6c.4.3.8.1.8-.4V3.5c0-.5-.4-.7-.8-.4L47 5.8z%22%2F%3E%3Cpath class%3D%22st2%22 d%3D%22M52.8 7l5.4 5.4m-5.4 0L58.2 7%22%2F%3E%3Cpath class%3D%22st3%22 d%3D%22M128.7 8.6c-6.2-4.2-6.5 7.8 0 3.9m6.5-3.9c-6.2-4.2-6.5 7.8 0 3.9%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M122.2 3.4h15.7v13.1h-15.7V3.4zM120.8 2v15.7h18.3V2h-18.3z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M143.2 3h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-14c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z%22%2F%3E%3Cpath class%3D%22st4%22 d%3D%22M146.4 13.8c-.8 0-1.6-.4-2.1-1-1.1-1.4-1-3.4.1-4.8.5-.6 2-1.7 4.6.2l-.6.8c-1.4-1-2.6-1.1-3.3-.3-.8 1-.8 2.4-.1 3.5.7.9 1.9.8 3.4-.1l.5.9c-.7.5-1.6.7-2.5.8zm7.5 0c-.8 0-1.6-.4-2.1-1-1.1-1.4-1-3.4.1-4.8.5-.6 2-1.7 4.6.2l-.5.8c-1.4-1-2.6-1.1-3.3-.3-.8 1-.8 2.4-.1 3.5.7.9 1.9.8 3.4-.1l.5.9c-.8.5-1.7.7-2.6.8z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M60.3 77c.6.2.8.8.6 1.4-.1.3-.3.5-.6.6L30 96.5c-1 .6-1.7.1-1.7-1v-35c0-1.1.8-1.5 1.7-1L60.3 77z%22%2F%3E%3Cpath class%3D%22st5%22 d%3D%22M2.5 79c0-20.7 16.8-37.5 37.5-37.5S77.5 58.3 77.5 79 60.7 116.5 40 116.5 2.5 99.7 2.5 79z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M140.3 77c.6.2.8.8.6 1.4-.1.3-.3.5-.6.6L110 96.5c-1 .6-1.7.1-1.7-1v-35c0-1.1.8-1.5 1.7-1L140.3 77z%22%2F%3E%3Cpath class%3D%22st6%22 d%3D%22M82.5 79c0-20.7 16.8-37.5 37.5-37.5s37.5 16.8 37.5 37.5-16.8 37.5-37.5 37.5S82.5 99.7 82.5 79z%22%2F%3E%3Ccircle class%3D%22st0%22 cx%3D%22201.9%22 cy%3D%2247.1%22 r%3D%228.1%22%2F%3E%3Ccircle class%3D%22st7%22 cx%3D%22233.9%22 cy%3D%2279%22 r%3D%225%22%2F%3E%3Ccircle class%3D%22st8%22 cx%3D%22201.9%22 cy%3D%22110.9%22 r%3D%226%22%2F%3E%3Ccircle class%3D%22st9%22 cx%3D%22170.1%22 cy%3D%2279%22 r%3D%227%22%2F%3E%3Ccircle class%3D%22st10%22 cx%3D%22178.2%22 cy%3D%2256.3%22 r%3D%227.5%22%2F%3E%3Ccircle class%3D%22st11%22 cx%3D%22226.3%22 cy%3D%2256.1%22 r%3D%224.5%22%2F%3E%3Ccircle class%3D%22st12%22 cx%3D%22225.8%22 cy%3D%22102.8%22 r%3D%225.5%22%2F%3E%3Ccircle class%3D%22st13%22 cx%3D%22178.2%22 cy%3D%22102.8%22 r%3D%226.5%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M178 9.4c0 .4-.4.7-.9.7-.1 0-.2 0-.2-.1L172 8.2c-.5-.2-.6-.6-.1-.8l6.2-3.6c.5-.3.8-.1.7.5l-.8 5.1z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M169.4 15.9c-1 0-2-.2-2.9-.7-2-1-3.2-3-3.2-5.2.1-3.4 2.9-6 6.3-6 2.5.1 4.8 1.7 5.6 4.1l.1-.1 2.1 1.1c-.6-4.4-4.7-7.5-9.1-6.9-3.9.6-6.9 3.9-7 7.9 0 2.9 1.7 5.6 4.3 7 1.2.6 2.5.9 3.8 1 2.6 0 5-1.2 6.6-3.3l-1.8-.9c-1.2 1.2-3 2-4.8 2z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M183.4 3.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5c0-.9.7-1.5 1.5-1.5zm5.1 0h8.5c.9 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-8.5c-.9 0-1.5-.7-1.5-1.5-.1-.9.6-1.5 1.5-1.5zm-5.1 5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5c0-.9.7-1.5 1.5-1.5zm5.1 0h8.5c.9 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-8.5c-.9 0-1.5-.7-1.5-1.5-.1-.9.6-1.5 1.5-1.5zm-5.1 5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5c0-.9.7-1.5 1.5-1.5zm5.1 0h8.5c.9 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-8.5c-.9 0-1.5-.7-1.5-1.5-.1-.9.6-1.5 1.5-1.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.mejs__overlay-loading-bg-img {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22400%22 height%3D%22120%22 viewBox%3D%220 0 400 120%22%3E%3Cstyle%3E.st0%7Bfill%3A%23FFFFFF%3Bwidth%3A16px%3Bheight%3A16px%7D .st1%7Bfill%3Anone%3Bstroke%3A%23FFFFFF%3Bstroke-width%3A1.5%3Bstroke-linecap%3Around%3B%7D .st2%7Bfill%3Anone%3Bstroke%3A%23FFFFFF%3Bstroke-width%3A2%3Bstroke-linecap%3Around%3B%7D .st3%7Bfill%3Anone%3Bstroke%3A%23FFFFFF%3B%7D .st4%7Bfill%3A%23231F20%3B%7D .st5%7Bopacity%3A0.75%3Bfill%3Anone%3Bstroke%3A%23FFFFFF%3Bstroke-width%3A5%3Benable-background%3Anew%3B%7D .st6%7Bfill%3Anone%3Bstroke%3A%23FFFFFF%3Bstroke-width%3A5%3B%7D .st7%7Bopacity%3A0.4%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st8%7Bopacity%3A0.6%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st9%7Bopacity%3A0.8%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st10%7Bopacity%3A0.9%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st11%7Bopacity%3A0.3%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st12%7Bopacity%3A0.5%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st13%7Bopacity%3A0.7%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D%3C%2Fstyle%3E%3Cpath class%3D%22st0%22 d%3D%22M16.5 8.5c.3.1.4.5.2.8-.1.1-.1.2-.2.2l-11.4 7c-.5.3-.8.1-.8-.5V2c0-.5.4-.8.8-.5l11.4 7z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M24 1h2.2c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1H24c-.6 0-1-.4-1-1V2c0-.5.4-1 1-1zm9.8 0H36c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1h-2.2c-.6 0-1-.4-1-1V2c0-.5.4-1 1-1z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M81 1.4c0-.6.4-1 1-1h5.4c.6 0 .7.3.3.7l-6 6c-.4.4-.7.3-.7-.3V1.4zm0 15.8c0 .6.4 1 1 1h5.4c.6 0 .7-.3.3-.7l-6-6c-.4-.4-.7-.3-.7.3v5.4zM98.8 1.4c0-.6-.4-1-1-1h-5.4c-.6 0-.7.3-.3.7l6 6c.4.4.7.3.7-.3V1.4zm0 15.8c0 .6-.4 1-1 1h-5.4c-.6 0-.7-.3-.3-.7l6-6c.4-.4.7-.3.7.3v5.4z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M112.7 5c0 .6.4 1 1 1h4.1c.6 0 .7-.3.3-.7L113.4.6c-.4-.4-.7-.3-.7.3V5zm-7.1 1c.6 0 1-.4 1-1V.9c0-.6-.3-.7-.7-.3l-4.7 4.7c-.4.4-.3.7.3.7h4.1zm1 7.1c0-.6-.4-1-1-1h-4.1c-.6 0-.7.3-.3.7l4.7 4.7c.4.4.7.3.7-.3v-4.1zm7.1-1c-.6 0-1 .4-1 1v4.1c0 .5.3.7.7.3l4.7-4.7c.4-.4.3-.7-.3-.7h-4.1z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M67 5.8c-.5.4-1.2.6-1.8.6H62c-.6 0-1 .4-1 1v5.7c0 .6.4 1 1 1h4.2c.3.2.5.4.8.6l3.5 2.6c.4.3.8.1.8-.4V3.5c0-.5-.4-.7-.8-.4L67 5.8z%22%2F%3E%3Cpath class%3D%22st1%22 d%3D%22M73.9 2.5s3.9-.8 3.9 7.7-3.9 7.8-3.9 7.8%22%2F%3E%3Cpath class%3D%22st1%22 d%3D%22M72.6 6.4s2.6-.4 2.6 3.8-2.6 3.9-2.6 3.9%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M47 5.8c-.5.4-1.2.6-1.8.6H42c-.6 0-1 .4-1 1v5.7c0 .6.4 1 1 1h4.2c.3.2.5.4.8.6l3.5 2.6c.4.3.8.1.8-.4V3.5c0-.5-.4-.7-.8-.4L47 5.8z%22%2F%3E%3Cpath class%3D%22st2%22 d%3D%22M52.8 7l5.4 5.4m-5.4 0L58.2 7%22%2F%3E%3Cpath class%3D%22st3%22 d%3D%22M128.7 8.6c-6.2-4.2-6.5 7.8 0 3.9m6.5-3.9c-6.2-4.2-6.5 7.8 0 3.9%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M122.2 3.4h15.7v13.1h-15.7V3.4zM120.8 2v15.7h18.3V2h-18.3z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M143.2 3h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-14c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z%22%2F%3E%3Cpath class%3D%22st4%22 d%3D%22M146.4 13.8c-.8 0-1.6-.4-2.1-1-1.1-1.4-1-3.4.1-4.8.5-.6 2-1.7 4.6.2l-.6.8c-1.4-1-2.6-1.1-3.3-.3-.8 1-.8 2.4-.1 3.5.7.9 1.9.8 3.4-.1l.5.9c-.7.5-1.6.7-2.5.8zm7.5 0c-.8 0-1.6-.4-2.1-1-1.1-1.4-1-3.4.1-4.8.5-.6 2-1.7 4.6.2l-.5.8c-1.4-1-2.6-1.1-3.3-.3-.8 1-.8 2.4-.1 3.5.7.9 1.9.8 3.4-.1l.5.9c-.8.5-1.7.7-2.6.8z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M60.3 77c.6.2.8.8.6 1.4-.1.3-.3.5-.6.6L30 96.5c-1 .6-1.7.1-1.7-1v-35c0-1.1.8-1.5 1.7-1L60.3 77z%22%2F%3E%3Cpath class%3D%22st5%22 d%3D%22M2.5 79c0-20.7 16.8-37.5 37.5-37.5S77.5 58.3 77.5 79 60.7 116.5 40 116.5 2.5 99.7 2.5 79z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M140.3 77c.6.2.8.8.6 1.4-.1.3-.3.5-.6.6L110 96.5c-1 .6-1.7.1-1.7-1v-35c0-1.1.8-1.5 1.7-1L140.3 77z%22%2F%3E%3Cpath class%3D%22st6%22 d%3D%22M82.5 79c0-20.7 16.8-37.5 37.5-37.5s37.5 16.8 37.5 37.5-16.8 37.5-37.5 37.5S82.5 99.7 82.5 79z%22%2F%3E%3Ccircle class%3D%22st0%22 cx%3D%22201.9%22 cy%3D%2247.1%22 r%3D%228.1%22%2F%3E%3Ccircle class%3D%22st7%22 cx%3D%22233.9%22 cy%3D%2279%22 r%3D%225%22%2F%3E%3Ccircle class%3D%22st8%22 cx%3D%22201.9%22 cy%3D%22110.9%22 r%3D%226%22%2F%3E%3Ccircle class%3D%22st9%22 cx%3D%22170.1%22 cy%3D%2279%22 r%3D%227%22%2F%3E%3Ccircle class%3D%22st10%22 cx%3D%22178.2%22 cy%3D%2256.3%22 r%3D%227.5%22%2F%3E%3Ccircle class%3D%22st11%22 cx%3D%22226.3%22 cy%3D%2256.1%22 r%3D%224.5%22%2F%3E%3Ccircle class%3D%22st12%22 cx%3D%22225.8%22 cy%3D%22102.8%22 r%3D%225.5%22%2F%3E%3Ccircle class%3D%22st13%22 cx%3D%22178.2%22 cy%3D%22102.8%22 r%3D%226.5%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M178 9.4c0 .4-.4.7-.9.7-.1 0-.2 0-.2-.1L172 8.2c-.5-.2-.6-.6-.1-.8l6.2-3.6c.5-.3.8-.1.7.5l-.8 5.1z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M169.4 15.9c-1 0-2-.2-2.9-.7-2-1-3.2-3-3.2-5.2.1-3.4 2.9-6 6.3-6 2.5.1 4.8 1.7 5.6 4.1l.1-.1 2.1 1.1c-.6-4.4-4.7-7.5-9.1-6.9-3.9.6-6.9 3.9-7 7.9 0 2.9 1.7 5.6 4.3 7 1.2.6 2.5.9 3.8 1 2.6 0 5-1.2 6.6-3.3l-1.8-.9c-1.2 1.2-3 2-4.8 2z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M183.4 3.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5c0-.9.7-1.5 1.5-1.5zm5.1 0h8.5c.9 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-8.5c-.9 0-1.5-.7-1.5-1.5-.1-.9.6-1.5 1.5-1.5zm-5.1 5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5c0-.9.7-1.5 1.5-1.5zm5.1 0h8.5c.9 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-8.5c-.9 0-1.5-.7-1.5-1.5-.1-.9.6-1.5 1.5-1.5zm-5.1 5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5c0-.9.7-1.5 1.5-1.5zm5.1 0h8.5c.9 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-8.5c-.9 0-1.5-.7-1.5-1.5-.1-.9.6-1.5 1.5-1.5z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.mejs__button > button {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22400%22 height%3D%22120%22 viewBox%3D%220 0 400 120%22%3E%3Cstyle%3E.st0%7Bfill%3A%23FFFFFF%3Bwidth%3A16px%3Bheight%3A16px%7D .st1%7Bfill%3Anone%3Bstroke%3A%23FFFFFF%3Bstroke-width%3A1.5%3Bstroke-linecap%3Around%3B%7D .st2%7Bfill%3Anone%3Bstroke%3A%23FFFFFF%3Bstroke-width%3A2%3Bstroke-linecap%3Around%3B%7D .st3%7Bfill%3Anone%3Bstroke%3A%23FFFFFF%3B%7D .st4%7Bfill%3A%23231F20%3B%7D .st5%7Bopacity%3A0.75%3Bfill%3Anone%3Bstroke%3A%23FFFFFF%3Bstroke-width%3A5%3Benable-background%3Anew%3B%7D .st6%7Bfill%3Anone%3Bstroke%3A%23FFFFFF%3Bstroke-width%3A5%3B%7D .st7%7Bopacity%3A0.4%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st8%7Bopacity%3A0.6%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st9%7Bopacity%3A0.8%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st10%7Bopacity%3A0.9%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st11%7Bopacity%3A0.3%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st12%7Bopacity%3A0.5%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D .st13%7Bopacity%3A0.7%3Bfill%3A%23FFFFFF%3Benable-background%3Anew%3B%7D%3C%2Fstyle%3E%3Cpath class%3D%22st0%22 d%3D%22M16.5 8.5c.3.1.4.5.2.8-.1.1-.1.2-.2.2l-11.4 7c-.5.3-.8.1-.8-.5V2c0-.5.4-.8.8-.5l11.4 7z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M24 1h2.2c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1H24c-.6 0-1-.4-1-1V2c0-.5.4-1 1-1zm9.8 0H36c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1h-2.2c-.6 0-1-.4-1-1V2c0-.5.4-1 1-1z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M81 1.4c0-.6.4-1 1-1h5.4c.6 0 .7.3.3.7l-6 6c-.4.4-.7.3-.7-.3V1.4zm0 15.8c0 .6.4 1 1 1h5.4c.6 0 .7-.3.3-.7l-6-6c-.4-.4-.7-.3-.7.3v5.4zM98.8 1.4c0-.6-.4-1-1-1h-5.4c-.6 0-.7.3-.3.7l6 6c.4.4.7.3.7-.3V1.4zm0 15.8c0 .6-.4 1-1 1h-5.4c-.6 0-.7-.3-.3-.7l6-6c.4-.4.7-.3.7.3v5.4z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M112.7 5c0 .6.4 1 1 1h4.1c.6 0 .7-.3.3-.7L113.4.6c-.4-.4-.7-.3-.7.3V5zm-7.1 1c.6 0 1-.4 1-1V.9c0-.6-.3-.7-.7-.3l-4.7 4.7c-.4.4-.3.7.3.7h4.1zm1 7.1c0-.6-.4-1-1-1h-4.1c-.6 0-.7.3-.3.7l4.7 4.7c.4.4.7.3.7-.3v-4.1zm7.1-1c-.6 0-1 .4-1 1v4.1c0 .5.3.7.7.3l4.7-4.7c.4-.4.3-.7-.3-.7h-4.1z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M67 5.8c-.5.4-1.2.6-1.8.6H62c-.6 0-1 .4-1 1v5.7c0 .6.4 1 1 1h4.2c.3.2.5.4.8.6l3.5 2.6c.4.3.8.1.8-.4V3.5c0-.5-.4-.7-.8-.4L67 5.8z%22%2F%3E%3Cpath class%3D%22st1%22 d%3D%22M73.9 2.5s3.9-.8 3.9 7.7-3.9 7.8-3.9 7.8%22%2F%3E%3Cpath class%3D%22st1%22 d%3D%22M72.6 6.4s2.6-.4 2.6 3.8-2.6 3.9-2.6 3.9%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M47 5.8c-.5.4-1.2.6-1.8.6H42c-.6 0-1 .4-1 1v5.7c0 .6.4 1 1 1h4.2c.3.2.5.4.8.6l3.5 2.6c.4.3.8.1.8-.4V3.5c0-.5-.4-.7-.8-.4L47 5.8z%22%2F%3E%3Cpath class%3D%22st2%22 d%3D%22M52.8 7l5.4 5.4m-5.4 0L58.2 7%22%2F%3E%3Cpath class%3D%22st3%22 d%3D%22M128.7 8.6c-6.2-4.2-6.5 7.8 0 3.9m6.5-3.9c-6.2-4.2-6.5 7.8 0 3.9%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M122.2 3.4h15.7v13.1h-15.7V3.4zM120.8 2v15.7h18.3V2h-18.3z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M143.2 3h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-14c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z%22%2F%3E%3Cpath class%3D%22st4%22 d%3D%22M146.4 13.8c-.8 0-1.6-.4-2.1-1-1.1-1.4-1-3.4.1-4.8.5-.6 2-1.7 4.6.2l-.6.8c-1.4-1-2.6-1.1-3.3-.3-.8 1-.8 2.4-.1 3.5.7.9 1.9.8 3.4-.1l.5.9c-.7.5-1.6.7-2.5.8zm7.5 0c-.8 0-1.6-.4-2.1-1-1.1-1.4-1-3.4.1-4.8.5-.6 2-1.7 4.6.2l-.5.8c-1.4-1-2.6-1.1-3.3-.3-.8 1-.8 2.4-.1 3.5.7.9 1.9.8 3.4-.1l.5.9c-.8.5-1.7.7-2.6.8z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M60.3 77c.6.2.8.8.6 1.4-.1.3-.3.5-.6.6L30 96.5c-1 .6-1.7.1-1.7-1v-35c0-1.1.8-1.5 1.7-1L60.3 77z%22%2F%3E%3Cpath class%3D%22st5%22 d%3D%22M2.5 79c0-20.7 16.8-37.5 37.5-37.5S77.5 58.3 77.5 79 60.7 116.5 40 116.5 2.5 99.7 2.5 79z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M140.3 77c.6.2.8.8.6 1.4-.1.3-.3.5-.6.6L110 96.5c-1 .6-1.7.1-1.7-1v-35c0-1.1.8-1.5 1.7-1L140.3 77z%22%2F%3E%3Cpath class%3D%22st6%22 d%3D%22M82.5 79c0-20.7 16.8-37.5 37.5-37.5s37.5 16.8 37.5 37.5-16.8 37.5-37.5 37.5S82.5 99.7 82.5 79z%22%2F%3E%3Ccircle class%3D%22st0%22 cx%3D%22201.9%22 cy%3D%2247.1%22 r%3D%228.1%22%2F%3E%3Ccircle class%3D%22st7%22 cx%3D%22233.9%22 cy%3D%2279%22 r%3D%225%22%2F%3E%3Ccircle class%3D%22st8%22 cx%3D%22201.9%22 cy%3D%22110.9%22 r%3D%226%22%2F%3E%3Ccircle class%3D%22st9%22 cx%3D%22170.1%22 cy%3D%2279%22 r%3D%227%22%2F%3E%3Ccircle class%3D%22st10%22 cx%3D%22178.2%22 cy%3D%2256.3%22 r%3D%227.5%22%2F%3E%3Ccircle class%3D%22st11%22 cx%3D%22226.3%22 cy%3D%2256.1%22 r%3D%224.5%22%2F%3E%3Ccircle class%3D%22st12%22 cx%3D%22225.8%22 cy%3D%22102.8%22 r%3D%225.5%22%2F%3E%3Ccircle class%3D%22st13%22 cx%3D%22178.2%22 cy%3D%22102.8%22 r%3D%226.5%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M178 9.4c0 .4-.4.7-.9.7-.1 0-.2 0-.2-.1L172 8.2c-.5-.2-.6-.6-.1-.8l6.2-3.6c.5-.3.8-.1.7.5l-.8 5.1z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M169.4 15.9c-1 0-2-.2-2.9-.7-2-1-3.2-3-3.2-5.2.1-3.4 2.9-6 6.3-6 2.5.1 4.8 1.7 5.6 4.1l.1-.1 2.1 1.1c-.6-4.4-4.7-7.5-9.1-6.9-3.9.6-6.9 3.9-7 7.9 0 2.9 1.7 5.6 4.3 7 1.2.6 2.5.9 3.8 1 2.6 0 5-1.2 6.6-3.3l-1.8-.9c-1.2 1.2-3 2-4.8 2z%22%2F%3E%3Cpath class%3D%22st0%22 d%3D%22M183.4 3.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5c0-.9.7-1.5 1.5-1.5zm5.1 0h8.5c.9 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-8.5c-.9 0-1.5-.7-1.5-1.5-.1-.9.6-1.5 1.5-1.5zm-5.1 5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5c0-.9.7-1.5 1.5-1.5zm5.1 0h8.5c.9 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-8.5c-.9 0-1.5-.7-1.5-1.5-.1-.9.6-1.5 1.5-1.5zm-5.1 5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5c0-.9.7-1.5 1.5-1.5zm5.1 0h8.5c.9 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-8.5c-.9 0-1.5-.7-1.5-1.5-.1-.9.6-1.5 1.5-1.5z%22%2F%3E%3C%2Fsvg%3E\");\n    background-color: transparent;\n    outline: none !important;\n}\n\n.audio-wrap .mejs__container {\n    background-color: rgba(0, 0, 0, 0.8) !important;\n    font-family: \"metropolis-light\", sans-serif;\n}\n\n.audio-wrap .mejs__time-buffering,\n.audio-wrap .mejs__time-current,\n.audio-wrap .mejs__time-handle,\n.audio-wrap .mejs__time-loaded,\n.audio-wrap .mejs__time-marker,\n.audio-wrap .mejs__time-total,\n.audio-wrap .mejs__time-hovered {\n    height: 2px;\n}\n\n.audio-wrap .mejs__time-total {\n    margin-top: 9px;\n}\n\n.audio-wrap .mejs__time-handle {\n    left: -5px;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background: #FFFFFF;\n    top: -5px;\n    cursor: pointer;\n    display: block;\n    position: absolute;\n    z-index: 2;\n    border: none;\n}\n\n.audio-wrap .mejs__time-handle-content {\n    top: 0;\n    left: 0;\n    width: 12px;\n    height: 12px;\n}\n\n.audio-wrap .mejs__horizontal-volume-total,\n.audio-wrap .mejs__horizontal-volume-current {\n    border-radius: 0;\n}\n\n/* ------------------------------------------------------------------- \n * ## close button for search and mobile navigation \n * ------------------------------------------------------------------- */\n\n.header__overlay-close {\n    position: absolute;\n    display: block;\n    width: 45px;\n    height: 45px;\n    top: 21px;\n    left: 50%;\n    margin-left: -23px;\n    font: 0/0 a;\n    text-shadow: none;\n    color: transparent;\n}\n\n.header__overlay-close::before,\n.header__overlay-close::after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 2px;\n    height: 20px;\n    top: 12px;\n    left: 22px;\n    background-color: #FFFFFF;\n}\n\n.header__overlay-close::before {\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n\n.header__overlay-close::after {\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n}\n\n/* ------------------------------------------------------------------- \n * ## slick slider \n * ------------------------------------------------------------------- */\n\n.slick-slider .slick-slide {\n    outline: none;\n}\n\n.slick-slider .slick-dots {\n    display: block;\n    list-style: none;\n    width: 100%;\n    padding: 0;\n    margin: 3rem 0 0 0;\n    text-align: center;\n    position: absolute;\n    top: 100%;\n    left: 0;\n}\n\n.slick-slider .slick-dots li {\n    display: inline-block;\n    width: 18px;\n    height: 18px;\n    margin: 0;\n    padding: 4px;\n    cursor: pointer;\n}\n\n.slick-slider .slick-dots li button {\n    display: block;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: rgba(255, 255, 255, 0.6);\n    border: none;\n    line-height: 10px;\n    padding: 0;\n    margin: 0;\n    cursor: pointer;\n    font: 0/0 a;\n    text-shadow: none;\n    color: transparent;\n}\n\n.slick-slider .slick-dots li button:hover,\n.slick-slider .slick-dots li button:focus {\n    outline: none;\n}\n\n.slick-slider .slick-dots li.slick-active button,\n.slick-slider .slick-dots li:hover button {\n    background: #FFFFFF;\n}\n\n/* ------------------------------------------------------------------- \n * ## masonry entries \n * ------------------------------------------------------------------- */\n\n.masonry .entry {\n    margin-bottom: 40px;\n}\n\n.masonry .entry__thumb,\n.masonry .entry__text {\n    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);\n            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);\n}\n\n.masonry .entry__thumb {\n    position: relative;\n    overflow: hidden;\n}\n\n.masonry .entry__thumb-link img {\n    vertical-align: bottom;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n}\n\n.masonry .entry__thumb-link::before {\n    content: \"\";\n    display: block;\n    background: rgba(0, 0, 0, 0.8);\n    opacity: 0;\n    visibility: hidden;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n    z-index: 1;\n}\n\n.masonry .entry__thumb-link::after {\n    content: \"...\";\n    font-family: georgia, serif;\n    font-size: 2.7rem;\n    z-index: 1;\n    display: block;\n    height: 90px;\n    width: 90px;\n    letter-spacing: -1px;\n    line-height: 90px;\n    margin-left: -45px;\n    margin-top: -45px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    text-align: center;\n    color: #FFFFFF;\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n}\n\n.masonry .entry__thumb:hover .entry__thumb-link::before {\n    opacity: 1;\n    visibility: visible;\n}\n\n.masonry .entry__thumb:hover .entry__thumb-link::after {\n    opacity: 1;\n    visibility: visible;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n\n.masonry .entry__thumb:hover .entry__thumb-link img {\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05);\n}\n\n.masonry .entry__text {\n    padding: 3rem 2.8rem 3.6rem;\n    background-color: #FFFFFF;\n}\n\n.masonry .entry__title {\n    font-size: 2.4rem;\n    line-height: 1.375;\n    margin-top: 0;\n    margin-bottom: 2.1rem;\n}\n\n.masonry .entry__title a {\n    color: #000000;\n    border-bottom: 1px solid transparent;\n}\n\n.masonry .entry__title a:hover,\n.masonry .entry__title a:focus {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n}\n\n.masonry .entry__date {\n    font-family: \"metropolis-medium\", sans-serif;\n    font-size: 1.4rem;\n    line-height: 1.714;\n    margin-bottom: .6rem;\n}\n\n.masonry .entry__date a {\n    color: #858585;\n}\n\n.masonry .entry__excerpt {\n    font-size: 1.5rem;\n    line-height: 1.8;\n}\n\n.masonry .entry__meta {\n    font-family: \"metropolis-semibold\", sans-serif;\n    font-size: 1.5rem;\n    margin-bottom: 0;\n}\n\n.masonry .entry__meta a {\n    color: #0054a5;\n}\n\n.masonry .entry__meta a:hover {\n    color: #000000;\n}\n\n.masonry .entry__meta-links a::after {\n    content: \", \";\n}\n\n.masonry .entry__meta-links a:last-child::after {\n    display: none;\n}\n\n/* ------------------------------------------------------------------- \n *  ## post formats - masonry view\n * ------------------------------------------------------------------- */\n\n/* format quote & format link\n * --------------------------------------- */\n\n.format-quote,\n.format-link {\n    text-align: center;\n}\n\n.format-quote .entry__thumb,\n.format-link .entry__thumb {\n    display: table;\n    background: #FFFFFF;\n    padding: 2.4rem 3rem 4.8rem;\n    min-height: 324px;\n    width: 100%;\n    position: relative;\n}\n\n.format-quote .entry__thumb::before,\n.format-link .entry__thumb::before {\n    content: \"\";\n    display: block;\n    height: 3.6rem;\n    width: 3.6rem;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    opacity: .2;\n    margin-bottom: 1.5rem;\n    position: absolute;\n    top: 3.3rem;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n}\n\n.format-quote blockquote::before {\n    display: none;\n}\n\n.format-quote blockquote,\n.format-link .link-wrap {\n    display: table-cell;\n    margin: 0;\n    padding-left: 0;\n    vertical-align: middle;\n}\n\n.format-quote blockquote p,\n.format-link .link-wrap p {\n    font-family: \"librebaskerville-bold\", serif;\n    color: #000000;\n    padding: 7.8rem 0 0 0;\n    margin-bottom: 3.3rem;\n    font-size: 2.4rem;\n    line-height: 1.625;\n}\n\n.format-quote cite,\n.format-link cite {\n    display: block;\n    font-family: \"metropolis-regular\", sans-serif;\n    font-size: 1.5rem;\n    font-style: normal;\n    line-height: 1.6;\n    color: #999999;\n}\n\n.format-quote cite::before,\n.format-link cite::before {\n    display: none;\n}\n\n.format-quote cite a,\n.format-quote cite a:visited {\n    color: #999999;\n    border: none;\n}\n\n.format-quote .entry__thumb::before {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 17.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22iconmonstr%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2249px%22 height%3D%2237px%22 viewBox%3D%220 0 49 37%22 style%3D%22enable-background%3Anew 0 0 49 37%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cpath id%3D%22quote-7%22 d%3D%22M22.5%2C13.05c0%2C10.282-7.783%2C21.038-20%2C23.45l-1.969-4.252c4.43-1.67%2C8.326-7.484%2C8.76-11.492%09C4.311%2C19.973%2C0.5%2C15.661%2C0.5%2C10.459C0.5%2C4.095%2C5.668%2C0.5%2C10.898%2C0.5C16.928%2C0.5%2C22.5%2C5.11%2C22.5%2C13.05z M48.5%2C13.05%09c0%2C10.282-7.783%2C21.038-20%2C23.45l-1.969-4.252c4.43-1.67%2C8.326-7.484%2C8.76-11.492c-4.98-0.783-8.791-5.095-8.791-10.297%09c0-6.364%2C5.168-9.959%2C10.398-9.959C42.928%2C0.5%2C48.5%2C5.11%2C48.5%2C13.05z%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.format-link .entry__thumb::before {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 17.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2249px%22 height%3D%2249.005px%22 viewBox%3D%220 0 49 49.005%22 enable-background%3D%22new 0 0 49 49.005%22 xml%3Aspace%3D%22preserve%22%3E%3Cpath d%3D%22M12.875%2C17.939c0.878-0.878%2C1.852-1.602%2C2.888-2.174c5.774-3.182%2C13.179-1.49%2C16.891%2C4.138l-4.492%2C4.49%09c-1.288-2.938-4.486-4.61-7.669-3.898c-1.198%2C0.268-2.336%2C0.866-3.266%2C1.796l-8.609%2C8.613c-2.614%2C2.614-2.614%2C6.866%2C0%2C9.481%09s6.866%2C2.614%2C9.481%2C0l2.654-2.654c2.414%2C0.958%2C5.002%2C1.34%2C7.559%2C1.15l-5.858%2C5.858c-5.022%2C5.022-13.165%2C5.022-18.187%2C0%09s-5.022-13.165%2C0-18.187C4.267%2C26.551%2C12.875%2C17.939%2C12.875%2C17.939z M26.548%2C4.266l-5.858%2C5.858%09c2.554-0.192%2C5.144%2C0.192%2C7.559%2C1.148L30.9%2C8.62c2.614-2.614%2C6.866-2.614%2C9.481%2C0s2.614%2C6.866%2C0%2C9.481l-8.611%2C8.611%09c-2.622%2C2.622-6.88%2C2.6-9.481%2C0c-0.606-0.606-1.128-1.36-1.454-2.102l-4.492%2C4.49c0.472%2C0.716%2C0.962%2C1.334%2C1.592%2C1.964%09c1.624%2C1.624%2C3.692%2C2.834%2C6.072%2C3.408c3.084%2C0.742%2C6.388%2C0.332%2C9.227-1.234c1.036-0.572%2C2.01-1.296%2C2.888-2.174l8.609-8.611%09c5.024-5.022%2C5.024-13.165%2C0.002-18.187C39.711-0.755%2C31.571-0.755%2C26.548%2C4.266z%22%2F%3E%3C%2Fsvg%3E\");\n    width: 3.3rem;\n}\n\n.format-link .link-wrap cite:before {\n    display: none;\n}\n\n.format-link .link-wrap cite a,\n.format-link .link-wrap cite a:visited {\n    color: #999999;\n    display: inline-block;\n    padding-bottom: .3rem;\n}\n\n.format-link .link-wrap cite a:hover,\n.format-link .link-wrap cite a:focus {\n    color: #000000;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n/* format video\n * --------------------------------------- */\n\n.format-video .entry__thumb a {\n    cursor: -webkit-zoom-in;\n    cursor: zoom-in;\n    display: block;\n    position: relative;\n}\n\n.format-video .entry__thumb a img {\n    vertical-align: bottom;\n}\n\n.format-video .entry__thumb a::before {\n    content: \"\";\n    display: block;\n    height: 4.5rem;\n    width: 4.5rem;\n    position: absolute;\n    bottom: 3rem;\n    left: 3rem;\n    cursor: -webkit-zoom-in;\n    cursor: zoom-in;\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 17.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2231px%22 height%3D%2231px%22 viewBox%3D%220 0 31 31%22 enable-background%3D%22new 0 0 31 31%22 xml%3Aspace%3D%22preserve%22%3E%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M15.5%2C0.5c-8.284%2C0-15%2C6.716-15%2C15s6.716%2C15%2C15%2C15s15-6.716%2C15-15S23.784%2C0.5%2C15.5%2C0.5z M11.75%2C21.75V9.25%09L23%2C15.682L11.75%2C21.75z%22%2F%3E%3C%2Fsvg%3E\");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n/* ===================================================================\n * # pageheader\n *\n * ------------------------------------------------------------------- */\n\n.s-pageheader {\n    min-height: 174px;\n    \n    background-repeat: no-repeat;\n    background-position: center center;\n    position: relative;\n}\n\n.s-pageheader::before {\n    display: block;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #151515;\n    opacity: .95;\n}\n\n.s-pageheader--home {\n    padding-top: 222px;\n}\n\n.header {\n    position: absolute;\n    text-align: center;\n    top: 30px;\n    width: 100%;\n}\n\n.header__content {\n    position: relative;\n    padding: 0 20px;\n}\n\n.pageheader-content {\n    overflow: hidden;\n    padding: 0 75px;\n    max-width: 1350px;\n}\n\n/* -------------------------------------------------------------------\n * ## header logo\n * ------------------------------------------------------------------- */\n\n.header__logo {\n    display: inline-block;\n    margin: 0;\n    padding: 0;\n    z-index: 501;\n}\n\n.header__logo a {\n    display: block;\n    margin: 0 0 0 6px;\n    padding: 0;\n    outline: 0;\n    border: none;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n}\n\n.header__logo img {\n    width: 265px;\n    height: 48px;\n}\n\n/* -------------------------------------------------------------------\n * ## header social\n * ------------------------------------------------------------------- */\n\n.header__social {\n    list-style: none;\n    font-size: 23px;\n    line-height: 1;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    left: 20px;\n    top: 12px;\n}\n\n.header__social a {\n    color: #FFFFFF;\n}\n\n.header__social li {\n    display: inline-block;\n    margin-right: 5px;\n    padding-left: 0;\n}\n\n.header__social li:last-child {\n    margin-right: 0;\n}\n\n/* ------------------------------------------------------------------- \n * ## header-toggle\n * ------------------------------------------------------------------- */\n\n.header__toggle-menu {\n    display: none;\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    left: 20px;\n    top: 6px;\n}\n\n.header__toggle-menu span {\n    display: block;\n    width: 22px;\n    height: 2px;\n    margin-top: -1px;\n    position: absolute;\n    right: 9px;\n    top: 50%;\n    bottom: auto;\n    left: auto;\n    background-color: white;\n    -webkit-transition: background 0.2s ease-in-out;\n    transition: background 0.2s ease-in-out;\n    font: 0/0 a;\n    text-shadow: none;\n    color: transparent;\n}\n\n.header__toggle-menu span::before,\n.header__toggle-menu span::after {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: inherit;\n    left: 0;\n}\n\n.header__toggle-menu span::before {\n    top: -8px;\n}\n\n.header__toggle-menu span::after {\n    bottom: -8px;\n}\n\n/* ------------------------------------------------------------------- \n * ## header-search\n * ------------------------------------------------------------------- */\n\n.header__search {\n    display: block;\n    text-align: center;\n    background: #151515;\n    opacity: 0;\n    visibility: hidden;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n    z-index: 900;\n}\n\n.header__search-form {\n    width: 100%;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n}\n\n.header__search-form label {\n    color: #FFFFFF;\n}\n\n.header__search-form::after {\n    content: \"Press Enter to begin your search.\";\n    display: block;\n    letter-spacing: 0.6px;\n    font-size: 1.6rem;\n    margin-top: 3rem;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.5);\n}\n\n.header__search-form input[type=\"search\"] {\n    background-color: transparent;\n    color: #000000;\n    height: auto;\n    width: 100%;\n    font-family: \"metropolis-semibold\", sans-serif;\n    font-size: 6rem;\n    line-height: 1.5;\n    border: none;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;\n    max-width: 680px;\n    padding-top: .6rem !important;\n    padding-bottom: .6rem !important;\n    margin: 0 auto;\n}\n\n.header__search-form input[type=\"search\"]::-webkit-input-placeholder {\n    color: #FFFFFF;\n    text-align: center !important;\n    opacity: 1;\n}\n\n.header__search-form input[type=\"search\"]:-moz-placeholder {\n    color: #FFFFFF;\n    text-align: center !important;\n    opacity: 1;\n}\n\n.header__search-form input[type=\"search\"]::-moz-placeholder {\n    color: #FFFFFF;\n    text-align: center !important;\n    opacity: 1;\n}\n\n.header__search-form input[type=\"search\"]:-ms-input-placeholder {\n    color: #FFFFFF;\n    text-align: center !important;\n    opacity: 1;\n}\n\n.header__search-form input[type=\"search\"].placeholder {\n    color: #FFFFFF;\n    text-align: center !important;\n    opacity: 1;\n}\n\n.header__search-form input[type=\"search\"]:focus {\n    outline: none;\n}\n\n.header__search-form input[type=\"submit\"] {\n    display: none;\n}\n\nbody.search-is-visible {\n    overflow: hidden;\n}\n\n.search-is-visible .header__search {\n    opacity: 1;\n    visibility: visible;\n}\n\n/* -------------------------------------------------------------------\n * ## header search trigger\n * ------------------------------------------------------------------- */\n\n.header__search-trigger {\n    height: 21px;\n    min-width: 21px;\n    position: absolute;\n    right: 20px;\n    top: 15px;\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 17.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2225px%22 height%3D%2224px%22 viewBox%3D%220 0 25 24%22 enable-background%3D%22new 0 0 25 24%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%09%09%3Cellipse fill%3D%22none%22 stroke%3D%22%23FFFFFF%22 stroke-width%3D%221.9657%22 stroke-linecap%3D%22round%22 stroke-linejoin%3D%22round%22 stroke-miterlimit%3D%2210%22 cx%3D%229.492%22 cy%3D%229.109%22 rx%3D%228.02%22 ry%3D%227.708%22%2F%3E%09%09%09%3Cline fill%3D%22none%22 stroke%3D%22%23FFFFFF%22 stroke-width%3D%221.9657%22 stroke-linecap%3D%22round%22 stroke-linejoin%3D%22round%22 stroke-miterlimit%3D%2210%22 x1%3D%2223.527%22 y1%3D%2222.599%22 x2%3D%2215.457%22 y2%3D%2214.842%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n    background-repeat: no-repeat;\n    background-position: right center;\n    background-size: contain;\n}\n\n.header__search-trigger::before {\n    font-family: \"metropolis-semibold\", sans-serif;\n    font-size: 12px;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    line-height: 21px;\n    content: \"Search\";\n    display: block;\n    color: #FFFFFF;\n    float: left;\n    padding-right: 33px;\n}\n\n/* ------------------------------------------------------------------- \n * responsive:\n * header components\n * ------------------------------------------------------------------- */\n\n@media only screen and (max-width:1000px) {\n    .header__social {\n        font-size: 21px;\n    }\n\n}\n\n@media only screen and (max-width:900px) {\n    .header__logo img {\n        width: 250px;\n        height: 45px;\n    }\n\n}\n\n@media only screen and (max-width:800px) {\n    .s-pageheader {\n        min-height: 90px;\n    }\n\n    .s-pageheader--home {\n        padding-top: 120px;\n    }\n\n    .header {\n        top: 24px;\n    }\n\n    .header__logo img {\n        width: 225px;\n        height: 40px;\n    }\n\n    .header__social {\n        display: none;\n    }\n\n    .header__toggle-menu {\n        top: 0;\n        display: block;\n    }\n\n    .header__search-trigger {\n        top: 9px;\n        right: 28px;\n    }\n\n    .header__search-trigger::before {\n        display: none;\n    }\n\n    .header__search-form::after {\n        font-size: 1.5rem;\n    }\n\n    .header__search-form input[type=\"search\"] {\n        max-width: none;\n        width: 80%;\n        font-size: 4.2rem;\n    }\n\n}\n\n@media only screen and (max-width:600px) {\n    .s-pageheader {\n        min-height: 84px;\n    }\n\n    .header__logo img {\n        width: 200px;\n        height: 36px;\n    }\n\n    .header__toggle-menu {\n        top: -3px;\n    }\n\n    .header__search-trigger {\n        top: 6px;\n    }\n\n    .header__search-form input[type=\"search\"] {\n        font-size: 3.4rem;\n    }\n\n}\n\n@media only screen and (max-width:400px) {\n    .s-pageheader {\n        min-height: 78px;\n    }\n\n    .s-pageheader--home {\n        padding-top: 96px;\n    }\n\n    .header__logo img {\n        width: 160px;\n        height: 29px;\n    }\n\n    .header__toggle-menu {\n        top: -7px;\n    }\n\n    .header__search-trigger {\n        top: 3px;\n    }\n\n    .header__search-form input[type=\"search\"] {\n        font-size: 2.6rem;\n    }\n\n}\n\n/* -------------------------------------------------------------------\n * ## main navigation\n * ------------------------------------------------------------------- */\n\n.header__nav-wrap {\n    margin-top: 15px;\n    border-top: 1px solid rgba(255, 255, 255, 0.04);\n    padding-top: 15px;\n}\n\n.header__nav-wrap a {\n    color: rgba(255, 255, 255, 0.6);\n}\n\n.header__nav-wrap .header__nav-heading {\n    text-align: center;\n    font-family: \"metropolis-semibold\", sans-serif;\n    font-size: 1.4rem;\n    color: #FFFFFF;\n    text-transform: uppercase;\n    letter-spacing: .3rem;\n    margin-top: 6rem;\n}\n\n.header__nav-wrap .header__nav-heading,\n.header__nav-wrap .close-mobile-menu {\n    display: none;\n}\n\n.header__nav {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    font-family: \"metropolis-medium\", sans-serif;\n    font-size: 15px;\n}\n\n.header__nav li {\n    display: inline-block;\n    position: relative;\n    padding: 0 2rem;\n}\n\n.header__nav li.has-children {\n    padding-right: 3.3rem;\n}\n\n.header__nav li a {\n    display: block;\n    color: rgba(255, 255, 255, 0.6);\n    line-height: 39px;\n}\n\n.header__nav li.has-children > a::after {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n    border-right: 1px solid rgba(255, 255, 255, 0.3);\n    content: '';\n    display: block;\n    height: 5px;\n    width: 5px;\n    margin-top: -4px;\n    pointer-events: none;\n    position: absolute;\n    right: 1.8rem;\n    top: 21px;\n    -webkit-transform-origin: 66% 66%;\n    transform-origin: 66% 66%;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n}\n\n.header__nav li:hover > a,\n.header__nav li:focus > a {\n    color: #FFFFFF;\n}\n\n.header__nav li:hover li,\n.header__nav li:focus li {\n    background: transparent;\n}\n\n.header__nav li.current > a {\n    color: #FFFFFF;\n}\n\n.header__nav li ul {\n    position: absolute;\n    top: 45px;\n    left: 0;\n    font-size: 14px;\n    margin: 0;\n    padding: 1.8rem 0;\n    background: #050505;\n    border-radius: 0 0 3px 3px;\n    z-index: 500;\n    -webkit-transform: translate3d(0, 15px, 0);\n    transform: translate3d(0, 15px, 0);\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n    opacity: 0;\n    visibility: hidden;\n}\n\n.header__nav li ul ul {\n    position: absolute;\n    top: 0;\n    left: 100%;\n    left: calc(100% + 1px);\n    border-radius: 0 0 3px 3px;\n    padding-top: 1.2rem;\n}\n\n.header__nav li ul li {\n    display: block;\n    text-align: left;\n    padding: 0;\n    margin: 0;\n    min-height: 33px;\n    width: 100%;\n}\n\n.header__nav li ul li a {\n    display: block;\n    white-space: nowrap;\n    padding: 7.5px 3rem 7.5px 2rem;\n    font-family: \"metropolis-regular\", sans-serif;\n    line-height: 18px;\n    color: rgba(255, 255, 255, 0.6);\n}\n\n.header__nav li ul li a:hover,\n.header__nav li ul li a:focus {\n    color: #FFFFFF;\n}\n\n.header__nav li:hover > ul {\n    opacity: 1;\n    visibility: visible;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n\n/* ------------------------------------------------------------------- \n * responsive:\n * main navigation\n * ------------------------------------------------------------------- */\n\n@media only screen and (min-width:801px) {\n    .header__nav li.has-children:hover > a::after,\n    .header__nav li.has-children:focus > a::after {\n        -webkit-transform: rotate(225deg);\n        transform: rotate(225deg);\n    }\n\n    .header__nav li ul {\n        display: block !important;\n    }\n\n}\n\n@media only screen and (max-width:800px) {\n    .header__nav-wrap {\n        background-color: #151515;\n        opacity: 0;\n        visibility: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        -webkit-transition: all 0.3s ease-in-out;\n        transition: all 0.3s ease-in-out;\n        margin: 0;\n        border: none;\n        z-index: 600;\n        overflow-y: auto;\n    }\n\n    .header__nav-wrap .header__nav-heading,\n    .header__nav-wrap .close-mobile-menu {\n        display: block;\n    }\n\n    .header__nav {\n        margin: 4.8rem 6rem 3rem 6rem;\n        border-bottom: 1px solid rgba(255, 255, 255, 0.03);\n        font-family: \"metropolis-semibold\", sans-serif;\n        font-size: 16px;\n    }\n\n    .header__nav li {\n        display: block;\n        padding: 0;\n        text-align: left;\n    }\n\n    .header__nav li ul {\n        display: none;\n        position: static;\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n        opacity: 1;\n        visibility: visible;\n        background-color: transparent;\n        padding: 0 0 1.8rem 0;\n        -webkit-transition: none !important;\n        transition: none !important;\n    }\n\n    .header__nav li.has-children > a::after {\n        top: 27px;\n    }\n\n    .header__nav li.has-children > a.sub-menu-is-open::after {\n        -webkit-transform: rotate(225deg);\n        transform: rotate(225deg);\n    }\n\n    .header__nav li ul li a {\n        padding: 7.5px 1.5rem 7.5px 1.5rem;\n    }\n\n    .header__nav > li {\n        border-top: 1px solid rgba(255, 255, 255, 0.03);\n    }\n\n    .header__nav > li a {\n        line-height: 54px;\n    }\n\n    body.nav-wrap-is-visible {\n        overflow: hidden;\n    }\n\n    .nav-wrap-is-visible .header__nav-wrap {\n        opacity: 1;\n        visibility: visible;\n    }\n\n}\n\n@media only screen and (max-width:400px) {\n    .header__nav {\n        margin: 4.2rem 4.2rem 3rem 4.2rem;\n    }\n\n}\n\n/* -------------------------------------------------------------------\n * ## pageheader content\n * ------------------------------------------------------------------- */\n\n.featured {\n    background-color: #151515;\n    height: 564px;\n    position: relative;\n}\n\n.featured::before,\n.featured::after {\n    content: \"\";\n    display: block;\n    height: 1px;\n    width: 60px;\n    background-color: rgba(255, 255, 255, 0.15);\n    position: absolute;\n    top: 50%;\n}\n\n.featured::before {\n    left: -75px;\n}\n\n.featured::after {\n    right: -75px;\n}\n\n.featured__column {\n    float: left;\n}\n\n.featured .entry {\n    display: block;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    overflow: hidden;\n    position: relative;\n}\n\n.featured .entry h1 {\n    font-size: 3.6rem;\n    line-height: 1.333;\n    margin-top: 0;\n    margin-bottom: 3rem;\n}\n\n.featured .entry h1 a {\n    color: #FFFFFF;\n    border-bottom: 1px solid transparent;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n}\n\n.featured .entry h1 a:focus,\n.featured .entry h1 a:hover {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.featured .entry::before {\n    display: block;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    -webkit-transition: all 0.4s ease-in-out;\n    transition: all 0.4s ease-in-out;\n    opacity: .5;\n    background-color: #151515;\n}\n\n.featured .entry:hover::before {\n    opacity: .8;\n}\n\n.featured .entry__content {\n    position: absolute;\n    left: 0;\n    bottom: 6rem;\n    width: 100%;\n    padding: 0 20% 0 6rem;\n    display: block;\n}\n\n.featured .entry__category {\n    display: inline-block;\n    font-family: \"metropolis-bold\", sans-serif;\n    font-size: 1.1rem;\n    line-height: 2.4rem;\n    text-transform: uppercase;\n    letter-spacing: .2rem;\n    margin-bottom: 2.4rem;\n}\n\n.featured .entry__category a {\n    display: inline-block;\n    color: #FFFFFF;\n    padding: 0 1.5rem;\n}\n\n.featured .entry__info {\n    position: relative;\n}\n\n.featured .entry__profile-pic {\n    float: left;\n    height: 4.2rem;\n    width: 4.2rem;\n    margin-top: -.9rem;\n}\n\n.featured .entry__profile-pic img {\n    border-radius: 50%;\n}\n\n.featured .entry__meta {\n    list-style: none;\n    margin: 0 0 0 6rem;\n    padding: 0;\n    font-family: \"metropolis-semibold\", sans-serif;\n    color: rgba(255, 255, 255, 0.5);\n    line-height: 1.5;\n}\n\n.featured .entry__meta li {\n    display: inline-block;\n    padding-left: 0;\n}\n\n.featured .entry__meta li::after {\n    content: '\\2022';\n    margin-left: 9px;\n    margin-right: 6px;\n}\n\n.featured .entry__meta li:last-child::after {\n    display: none;\n}\n\n.featured .entry__meta a {\n    color: rgba(255, 255, 255, 0.5);\n}\n\n.featured .entry__meta a:focus,\n.featured .entry__meta a:hover {\n    color: #FFFFFF;\n}\n\n.featured__column--big {\n    width: 66.66666%;\n    position: relative;\n}\n\n.featured__column--big .entry {\n    height: 564px;\n}\n\n.featured__column--big .entry__category a {\n    background-color: #01aef0;\n}\n\n.featured__column--small {\n    width: 33.333333333%;\n    position: relative;\n}\n\n.featured__column--small .entry {\n    height: 282px;\n}\n\n.featured__column--small .entry h1 {\n    font-size: 2rem;\n    margin-bottom: 1.2rem;\n}\n\n.featured__column--small .entry__content {\n    bottom: 2.4rem;\n    padding: 0 10% 0 3rem;\n}\n\n.featured__column--small .entry__category {\n    font-size: 1rem;\n    line-height: 2.1rem;\n    margin-bottom: 1.5rem;\n}\n\n.featured__column--small .entry__category a {\n    background-color: #679a23;\n}\n\n.featured__column--small .entry__profile-pic {\n    display: none;\n}\n\n.featured__column--small .entry__meta {\n    margin: 0;\n    font-size: 1.4rem;\n}\n\n/* animate .featured\n * ------------------------------------------------------------------- */\n\nhtml.cl-preload .featured {\n    opacity: 0;\n}\n\nhtml.cl-loaded .featured {\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n    -webkit-animation-name: fadeIn;\n    animation-name: fadeIn;\n}\n\nhtml.no-csstransitions .featured {\n    opacity: 1;\n}\n\n/* ------------------------------------------------------------------- \n * ## feature section animation\n * ------------------------------------------------------------------- */\n\n/* fade in */\n\n@-webkit-keyframes fadeIn {\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, 150%, 0);\n        transform: translate3d(0, 150%, 0);\n    }\n\n    to {\n        opacity: 1;\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n    }\n\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, 150%, 0);\n        transform: translate3d(0, 150%, 0);\n    }\n\n    to {\n        opacity: 1;\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n    }\n\n}\n\n/* fade out */\n\n@-webkit-keyframes fadeOut {\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n        -webkit-transform: translate3d(0, -150%, 0);\n        transform: translate3d(0, -150%, 0);\n    }\n\n}\n\n@keyframes fadeOut {\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n        -webkit-transform: translate3d(0, -150%, 0);\n        transform: translate3d(0, -150%, 0);\n    }\n\n}\n\n/* ------------------------------------------------------------------- \n * responsive:\n * pageheader content\n * ------------------------------------------------------------------- */\n\n@media only screen and (max-width:1400px) {\n    .pageheader-content {\n        padding: 0;\n    }\n    .featured::before,\n    .featured::after {\n        display: none;\n    }\n\n}\n\n@media only screen and (max-width:1200px) {\n    .featured {\n        height: auto;\n    }\n\n    .featured__column--big .entry {\n        height: 522px;\n    }\n\n    .featured__column--big .entry h1 {\n        font-size: 3.2rem;\n    }\n\n    .featured__column--small .entry {\n        height: 261px;\n    }\n\n}\n\n@media only screen and (max-width:1000px) {\n    .featured__column--big {\n        width: 60%;\n    }\n\n    .featured__column--big .entry {\n        height: 504px;\n    }\n\n    .featured__column--big .entry h1 {\n        font-size: 3rem;\n    }\n\n    .featured__column--big .entry__content {\n        padding: 0 10% 0 4.2rem;\n    }\n\n    .featured__column--small {\n        width: 40%;\n    }\n\n    .featured__column--small .entry {\n        height: 252px;\n    }\n\n}\n\n@media only screen and (max-width:900px) {\n    .pageheader-content {\n        max-width: 780px;\n    }\n\n    .featured__column {\n        float: none;\n        width: 100%;\n    }\n\n    .featured__column--big .entry {\n        height: 468px;\n    }\n\n    .featured__column--small:after {\n        content: \"\";\n        display: table;\n        clear: both;\n    }\n\n    .featured__column--small .entry {\n        height: 300px;\n        float: left;\n        width: 50%;\n    }\n\n}\n\n@media only screen and (max-width:800px) {\n    .featured__column .entry {\n        height: 360px;\n    }\n\n    .featured__column .entry h1 {\n        font-size: 2.8rem;\n        margin-bottom: 3rem;\n    }\n\n    .featured__column .entry__content {\n        bottom: 5.4rem;\n        padding: 0 10% 0 4.2rem;\n    }\n\n    .featured__column--small .entry {\n        float: none;\n        width: 100%;\n    }\n\n    .featured__column--small .entry:last-child {\n        display: none;\n    }\n\n    .featured__column--small .entry__category {\n        font-size: 1.1rem;\n        line-height: 2.4rem;\n        margin-bottom: 2.4rem;\n    }\n\n    .featured__column--small .entry__profile-pic {\n        display: block;\n    }\n\n    .featured__column--small .entry__meta {\n        margin: 0 0 0 6rem;\n        font-size: 1.6rem;\n    }\n\n}\n\n@media only screen and (max-width:700px) {\n    .pageheader-content {\n        max-width: 540px;\n    }\n\n}\n\n@media only screen and (max-width:600px) {\n    .pageheader-content {\n        max-width: 500px;\n        width: auto;\n        padding-left: 25px;\n        padding-right: 25px;\n    }\n\n    .featured__column .entry {\n        height: 330px;\n    }\n\n    .featured__column .entry h1 {\n        font-size: 2.6rem;\n        margin-bottom: 1.5rem;\n    }\n\n    .featured__column .entry__content {\n        bottom: 4.2rem;\n        padding: 0 3rem 0;\n    }\n\n    .featured__column .entry__category {\n        font-size: 1rem;\n        line-height: 2.1rem;\n        margin-bottom: 1.5rem;\n    }\n\n    .featured__column .entry__profile-pic {\n        display: none;\n    }\n\n    .featured__column .entry__meta {\n        margin: 0rem;\n        font-size: 1.5rem;\n    }\n\n}\n\n@media only screen and (max-width:500px) {\n    .featured__column .entry h1 {\n        font-size: 2.4rem;\n    }\n\n    .featured .entry__content {\n        bottom: 3.6rem;\n    }\n\n    .featured .entry__meta {\n        font-size: 1.4rem;\n    }\n\n}\n\n@media only screen and (max-width:400px) {\n    .featured__column .entry {\n        height: 288px;\n    }\n\n    .featured__column .entry h1 {\n        font-size: 2rem;\n    }\n\n    .featured .entry__content {\n        bottom: 3rem;\n        padding: 0 2.4rem 0;\n    }\n\n}\n\n/* ===================================================================\n * # s-content\n *\n * ------------------------------------------------------------------- */\n\n.s-content {\n    background-color: #f2f2f2;\n    padding-top: 8.4rem;\n    padding-bottom: 7.2rem;\n}\n\n.s-content--no-padding-bottom {\n    padding-bottom: 0;\n}\n\n.s-content--narrow .row {\n    max-width: 960px;\n}\n\n.s-content__header {\n    padding-bottom: 3rem;\n    text-align: center;\n}\n\n.s-content__header h1 {\n    font-size: 4.8rem;\n    line-height: 1.25;\n    margin-top: 0;\n    letter-spacing: -.15rem;\n}\n\n.s-content__header .lead {\n    color: rgba(0, 0, 0, 0.5);\n}\n\n/* ------------------------------------------------------------------- \n * responsive:\n * s-content\n * ------------------------------------------------------------------- */\n\n@media only screen and (max-width:1200px) {\n    .s-content--narrow .row {\n        max-width: 900px;\n    }\n\n}\n\n@media only screen and (max-width:1000px) {\n    .s-content--narrow .row {\n        max-width: 800px;\n    }\n\n    .s-content__header h1 {\n        font-size: 4.5rem;\n    }\n\n}\n\n@media only screen and (max-width:800px) {\n    .s-content {\n        padding-top: 6rem;\n    }\n\n    .s-content__header h1 {\n        font-size: 4rem;\n    }\n\n}\n\n@media only screen and (max-width:600px) {\n    .s-content__header h1 {\n        font-size: 3.6rem;\n    }\n\n}\n\n/* -------------------------------------------------------------------\n * ## masonry layout\n * ------------------------------------------------------------------- */\n\n.masonry-wrap {\n    max-width: none;\n    width: 1440px;\n    overflow: hidden;\n}\n\n.masonry {\n    margin-bottom: 3rem;\n}\n\n.masonry:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.masonry .grid-sizer,\n.masonry__brick {\n    width: 360px;\n}\n\n.masonry__brick {\n    float: left;\n    padding: 0 20px;\n}\n\n/* ------------------------------------------------------------------- \n * responsive:\n * masonry layout\n * ------------------------------------------------------------------- */\n\n@media only screen and (max-width:1480px) {\n    .masonry-wrap {\n        width: 1080px;\n    }\n\n}\n\n@media only screen and (max-width:1140px) {\n    .masonry-wrap {\n        width: 1020px;\n    }\n\n    .masonry .grid-sizer,\n    .masonry .masonry__brick {\n        width: 340px;\n    }\n\n}\n\n@media only screen and (max-width:1060px) {\n    .masonry-wrap {\n        width: 740px;\n    }\n\n    .masonry .grid-sizer,\n    .masonry .masonry__brick {\n        width: 370px;\n    }\n\n}\n\n@media only screen and (max-width:800px) {\n    .masonry-wrap {\n        max-width: 700px;\n        width: 90%;\n    }\n\n    .masonry .grid-sizer,\n    .masonry .masonry__brick {\n        width: 50%;\n        padding: 0 15px;\n    }\n\n}\n\n@media only screen and (max-width:700px) {\n    .masonry-wrap {\n        max-width: 400px;\n    }\n\n    .masonry .grid-sizer,\n    .masonry .masonry__brick {\n        width: 100%;\n        clear: both;\n    }\n\n}\n\n@media only screen and (max-width:600px) {\n    .masonry-wrap {\n        width: auto;\n    }\n\n    .masonry .grid-sizer,\n    .masonry .masonry__brick {\n        padding: 0 10px;\n    }\n\n}\n\n@media only screen and (max-width:400px) {\n    .masonry .masonry__brick {\n        width: 100% !important;\n        float: none !important;\n        clear: both !important;\n        margin-left: 0;\n        margin-right: 0;\n        padding: 0;\n    }\n\n}\n\n/* ===================================================================\n * # s-extra\n *\n * ------------------------------------------------------------------- */\n\n.s-extra {\n    background-color: #FFFFFF;\n    padding-top: 7.8rem;\n    padding-bottom: 9rem;\n    font-family: \"metropolis-regular\", sans-serif;\n    font-size: 1.5rem;\n    line-height: 1.8;\n}\n\n.s-extra a {\n    color: #000000;\n}\n\n.s-extra a:hover,\n.s-extra a:focus {\n    color: #0054a5;\n}\n\n.s-extra h3,\n.s-extra h5 {\n    margin-top: 0;\n}\n\n.s-extra h3 {\n    font-size: 2.4rem;\n    line-height: 1.375;\n    margin-bottom: 3rem;\n}\n\n.s-extra h5 {\n    font-family: \"metropolis-extrabold\", sans-serif;\n    font-size: 1.6rem;\n    line-height: 1.3125;\n    margin-bottom: .6rem;\n}\n\n.s-extra .top [class*=\"col-\"] {\n    margin-bottom: 4.8rem;\n}\n\n/* -------------------------------------------------------------------\n * ## popular posts\n * ------------------------------------------------------------------- */\n\n.s-extra .popular__post {\n    position: relative;\n    padding-left: 9.5rem;\n    margin-bottom: 3.3rem;\n    min-height: 5.4rem;\n}\n\n.s-extra .popular__thumb {\n    position: absolute;\n    top: .3rem;\n    left: 0;\n}\n\n.s-extra .popular__thumb img {\n    height: 6.9rem;\n    width: 6.9rem;\n}\n\n.s-extra .popular__meta {\n    font-size: 1.3rem;\n    line-height: 1.615;\n}\n\n/* -------------------------------------------------------------------\n * ## about\n * ------------------------------------------------------------------- */\n\n.s-extra .about {\n    padding: 0 40px;\n}\n\n.s-extra .about p {\n    margin-bottom: 1.5rem;\n}\n\n.s-extra .about__social {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    font-size: 2.4rem;\n}\n\n.s-extra .about__social li {\n    display: inline-block;\n    padding-left: 0;\n    margin-right: 9px;\n}\n\n/* -------------------------------------------------------------------\n * ## tags\n * ------------------------------------------------------------------- */\n\n.s-extra .tags-wrap {\n    max-width: 900px;\n}\n\n.s-extra .tags {\n    text-align: center;\n}\n\n.s-extra .tagcloud {\n    padding-top: .6rem;\n}\n\n.s-extra .tagcloud a {\n    display: inline-block;\n    font-family: \"metropolis-extrabold\", sans-serif;\n    font-size: 1.3rem;\n    line-height: 3.6rem;\n    text-transform: uppercase;\n    letter-spacing: .2rem;\n    padding: 0 2rem;\n    margin: 0 1.2rem 1.5rem 0;\n    border-radius: 3px;\n    background: #e2e2e2;\n    text-decoration: none;\n    color: #333333;\n    position: relative;\n}\n\n.s-extra .tagcloud a:hover,\n.s-extra .tagcloud a:focus {\n    color: #FFFFFF;\n    background: #151515;\n}\n\n/* ------------------------------------------------------------------- \n * responsive:\n * s-extra\n * ------------------------------------------------------------------- */\n\n@media only screen and (max-width:1200px) {\n    .s-extra .top {\n        max-width: 900px;\n    }\n\n    .s-extra .popular__posts article:nth-child(n + 5) {\n        display: none;\n    }\n\n}\n\n@media only screen and (max-width:1000px) {\n    .s-extra .top,\n    .s-extra .tags-wrap {\n        max-width: 800px;\n    }\n\n}\n\n@media only screen and (max-width:800px) {\n    .s-extra .top,\n    .s-extra .tags-wrap {\n        max-width: 550px;\n    }\n\n    .s-extra .about {\n        padding: 0 15px;\n    }\n\n    .s-extra .tags {\n        text-align: left;\n    }\n\n}\n\n@media only screen and (max-width:600px) {\n    .s-extra h3,\n    .s-extra .about,\n    .s-extra .tags {\n        text-align: center;\n    }\n\n    .s-extra .popular__thumb {\n        left: .6rem;\n    }\n\n    .s-extra .popular__thumb img {\n        height: 6.6rem;\n        width: 6.6rem;\n    }\n\n    .s-extra .about {\n        padding: 0 10px;\n    }\n\n}\n\n@media only screen and (max-width:400px) {\n    .s-extra .popular__post {\n        padding-left: 8.5rem;\n    }\n\n    .s-extra .popular__thumb {\n        left: .6rem;\n    }\n\n    .s-extra .popular__thumb img {\n        height: 6.3rem;\n        width: 6.3rem;\n    }\n\n    .s-extra .about {\n        padding: 0;\n    }\n\n}\n\n/* ===================================================================\n * # footer\n *\n * ------------------------------------------------------------------- */\n\nfooter {\n    padding-top: 10.2rem;\n    padding-bottom: 6rem;\n    font-size: 1.5rem;\n    line-height: 2;\n    color: rgba(255, 255, 255, 0.4);\n}\n\nfooter a {\n    color: #FFFFFF;\n}\n\nfooter h4 {\n    font-family: \"metropolis-bold\", sans-serif;\n    font-size: 1.4rem;\n    line-height: 1.286;\n    text-transform: uppercase;\n    letter-spacing: .25rem;\n    padding-bottom: 4.2rem;\n    color: #FFFFFF;\n    margin-top: 0;\n    position: relative;\n}\n\nfooter h4::after {\n    content: \"\";\n    display: block;\n    height: 1px;\n    width: 120px;\n    background-color: rgba(255, 255, 255, 0.1);\n    position: absolute;\n    left: 0;\n    bottom: 0;\n}\n\n.s-footer__main {\n    margin-bottom: 3.6rem;\n}\n\n/* -------------------------------------------------------------------\n * ## footer link list\n * ------------------------------------------------------------------- */\n\n.s-footer__linklist {\n    list-style: none;\n    margin-left: 0;\n}\n\n.s-footer__linklist a {\n    color: rgba(255, 255, 255, 0.4);\n}\n\n.s-footer__linklist li {\n    padding-left: 0;\n}\n\n/* -------------------------------------------------------------------\n * ## subscribe form\n * ------------------------------------------------------------------- */\n\n.s-footer__subscribe .subscribe-form {\n    margin: 0;\n    padding: 0;\n    position: relative;\n}\n\n.s-footer__subscribe #mc-form {\n    width: 100%;\n}\n\n.s-footer__subscribe #mc-form input[type=\"email\"] {\n    width: 100%;\n    height: 5.4rem;\n    font-size: 1.5rem;\n    padding: 1.2rem 100px 1.2rem 60px;\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 17.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2230.584px%22 height%3D%2220.948px%22 viewBox%3D%220 0 30.584 20.948%22 enable-background%3D%22new 0 0 30.584 20.948%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%09%09%3Crect x%3D%221.292%22 y%3D%221.292%22 fill%3D%22none%22 stroke%3D%22%23FFFFFF%22 stroke-width%3D%222.5841%22 stroke-linecap%3D%22round%22 stroke-linejoin%3D%22round%22 stroke-miterlimit%3D%2210%22 width%3D%2228%22 height%3D%2218.364%22%2F%3E%09%09%09%3Cline fill%3D%22none%22 stroke%3D%22%23FFFFFF%22 stroke-width%3D%222.5841%22 stroke-linecap%3D%22round%22 stroke-linejoin%3D%22round%22 stroke-miterlimit%3D%2210%22 x1%3D%2215.292%22 y1%3D%2210.474%22 x2%3D%2229.292%22 y2%3D%221.292%22%2F%3E%09%09%09%3Cline fill%3D%22none%22 stroke%3D%22%23FFFFFF%22 stroke-width%3D%222.5841%22 stroke-linecap%3D%22round%22 stroke-linejoin%3D%22round%22 stroke-miterlimit%3D%2210%22 x1%3D%2215.292%22 y1%3D%2210.474%22 x2%3D%221.292%22 y2%3D%221.292%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\") 20px center no-repeat, rgba(0, 0, 0, 0.1);\n    background-size: 24px 16px, auto;\n    margin-bottom: 1.8rem;\n    color: rgba(255, 255, 255, 0.5);\n    border-radius: 3px;\n    border: none;\n}\n\n.s-footer__subscribe #mc-form input[type=\"email\"]:hover,\n.s-footer__subscribe #mc-form input[type=\"email\"]:focus {\n    color: #FFFFFF;\n}\n\n.s-footer__subscribe #mc-form input[type=\"email\"]::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.2);\n}\n\n.s-footer__subscribe #mc-form input[type=\"email\"]:-moz-placeholder {\n    color: rgba(255, 255, 255, 0.2);\n    /* Firefox 18- */\n}\n\n.s-footer__subscribe #mc-form input[type=\"email\"]::-moz-placeholder {\n    color: rgba(255, 255, 255, 0.2);\n    /* Firefox 19+ */\n}\n\n.s-footer__subscribe #mc-form input[type=\"email\"]:-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.2);\n}\n\n.s-footer__subscribe #mc-form input[type=\"email\"].placeholder {\n    color: rgba(255, 255, 255, 0.2) !important;\n}\n\n.s-footer__subscribe #mc-form input[type=submit] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    color: #FFFFFF;\n    background: #0054a5;\n    border-color: #0054a5;\n    padding: 0 15px;\n    border-radius: 0 3px 3px 0;\n}\n\n.s-footer__subscribe #mc-form label {\n    color: #FFFFFF;\n    font-family: \"metropolis-regular\", sans-serif, sans-serif;\n    font-size: 1.3rem;\n    padding: 0 2rem;\n}\n\n.s-footer__subscribe #mc-form label i {\n    padding-right: 6px;\n}\n\n/* -------------------------------------------------------------------\n * ## copyright\n * ------------------------------------------------------------------- */\n\n.s-footer__bottom .s-footer__copyright span {\n    display: inline-block;\n}\n\n.s-footer__bottom .s-footer__copyright span::after {\n    content: \"|\";\n    display: inline-block;\n    padding: 0 1rem 0 1.2rem;\n    color: rgba(255, 255, 255, 0.1);\n}\n\n.s-footer__bottom .s-footer__copyright span:last-child::after {\n    display: none;\n}\n\n/* ------------------------------------------------------------------- \n * ## go to top\n * ------------------------------------------------------------------- */\n\n.go-top {\n    position: fixed;\n    bottom: 30px;\n    right: 30px;\n    z-index: 600;\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transition: all 0.8s ease-in-out;\n    transition: all 0.8s ease-in-out;\n    -webkit-transform: translate3d(0, 200%, 0);\n    transform: translate3d(0, 200%, 0);\n}\n\n.go-top a,\n.go-top a:visited {\n    text-decoration: none;\n    border: 0 none;\n    display: block;\n    height: 5.4rem;\n    width: 5.4rem;\n    line-height: 5.4rem;\n    text-align: center;\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 17.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2220px%22 height%3D%2231px%22 viewBox%3D%220 0 20 31%22 enable-background%3D%22new 0 0 20 31%22 xml%3Aspace%3D%22preserve%22%3E%3Cg transform%3D%22translate(0%2C-952.36218)%22%3E%09%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M9.032%2C953.225l-8.226%2C7.258c-0.57%2C0.507-0.665%2C1.476-0.121%2C2.056c0.522%2C0.556%2C1.486%2C0.628%2C2.056%2C0.121%09%09l5.806-5.126v23.876c0%2C0.802%2C0.65%2C1.452%2C1.452%2C1.452s1.452-0.65%2C1.452-1.452v-23.876l5.806%2C5.126%09%09c0.57%2C0.507%2C1.55%2C0.449%2C2.056-0.121c0.507-0.57%2C0.495-1.456-0.121-2.056l-8.226-7.258c-0.237-0.211-0.602-0.354-0.968-0.363%09%09C9.611%2C952.865%2C9.322%2C952.967%2C9.032%2C953.225z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n    background-color: #000000;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 10px 16px;\n    color: rgba(255, 255, 255, 0.5);\n    text-align: center;\n    text-transform: uppercase;\n    border-radius: 50%;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n}\n\n.go-top a:hover,\n.go-top a:focus {\n    color: #FFFFFF;\n    background-color: #0054a5;\n}\n\n.go-top.link-is-visible {\n    opacity: 1;\n    visibility: visible;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n\n/* ------------------------------------------------------------------- \n * responsive:\n * footer components\n * ------------------------------------------------------------------- */\n\n@media only screen and (max-width:1200px) {\n    .s-footer__main > .row {\n        max-width: 800px;\n    }\n\n    .s-footer__sitelinks,\n    .s-footer__archives,\n    .s-footer__social {\n        margin-bottom: 3rem;\n    }\n\n    .s-footer__subscribe {\n        clear: both;\n    }\n\n    .s-footer__bottom {\n        text-align: center;\n    }\n\n}\n\n@media only screen and (max-width:600px) {\n    footer {\n        padding-top: 7.8rem;\n    }\n\n    .s-footer__main .row {\n        max-width: 480px;\n    }\n\n    .s-footer__main h4 {\n        padding-bottom: 0;\n        margin-bottom: 2.4rem;\n    }\n\n    .s-footer__main h4::after {\n        display: none;\n    }\n\n    .s-footer__main .s-footer__linklist {\n        width: 80%;\n        margin: 0 auto;\n    }\n\n    .s-footer__main .s-footer__linklist li a {\n        display: block;\n        border-bottom: 1px solid rgba(255, 255, 255, 0.03);\n        padding: .6rem 0;\n    }\n\n    .s-footer__main .s-footer__linklist li:first-child a {\n        border-top: 1px solid rgba(255, 255, 255, 0.03);\n    }\n\n    .s-footer__sitelinks,\n    .s-footer__archives,\n    .s-footer__social,\n    .s-footer__subscribe {\n        text-align: center;\n    }\n\n    .s-footer__sitelinks,\n    .s-footer__archives,\n    .s-footer__social {\n        margin-bottom: 4.2rem;\n    }\n\n    .s-footer__main .row [class*=\"col-\"]:nth-child(2) {\n        display: none;\n    }\n\n    .s-footer__bottom {\n        padding-bottom: .6rem;\n    }\n\n    .s-footer__bottom .s-footer__copyright span {\n        display: block;\n    }\n\n    .s-footer__bottom .s-footer__copyright span::after {\n        display: none;\n    }\n\n}\n\n/* ===================================================================\n * # blog styles\n *\n * ------------------------------------------------------------------- */\n\n.s-content--narrow .s-content__header {\n    padding-bottom: 20px 8rem;\n}\n\n.s-content--narrow h3.remove-top-margin {\n    margin-top: 0;\n}\n\n.s-content--narrow h3.quarter-top-margin {\n    margin-top: 1.5rem;\n}\n\n.s-content--narrow h3.half-top-margin {\n    margin-top: 3rem;\n}\n\n.s-content__header-title {\n    font-size: 4.2rem;\n    line-height: 1.214;\n    margin-bottom: .9rem;\n}\n\n.s-content__header-meta {\n    list-style: none;\n    margin-left: 0;\n    margin-bottom: 1.2rem;\n    font-family: \"metropolis-medium\", sans-serif;\n    font-size: 1.5rem;\n    line-height: 1.8;\n    position: relative;\n}\n\n.s-content__header-meta li {\n    display: inline-block;\n    padding-left: 0;\n    margin: 0 1rem;\n}\n\n.s-content__header-meta span,\n.s-content__header-meta a {\n    color: #000000;\n}\n\n.s-content__header-meta .cat a::after {\n    content: \",\";\n}\n\n.s-content__header-meta .cat a:last-child::after {\n    content: none;\n}\n\n/* -------------------------------------------------------------------\n * ## content main\n * ------------------------------------------------------------------- */\n\n.s-content__main {\n    margin-top: 6rem;\n    padding-left: 6rem;\n    padding-right: 6rem;\n}\n\n.s-content__main img {\n    max-width: 960px;\n    margin: 3rem 0 3rem -6rem;\n}\n\n/* -------------------------------------------------------------------\n * ## content media\n * ------------------------------------------------------------------- */\n\n.s-content__media {\n    padding: 0;\n    margin-top: 4.8rem;\n}\n\n.s-content__media img {\n    vertical-align: bottom;\n}\n\n.s-content__media,\n.s-content__post-thumb {\n    position: relative;\n}\n\n/* -------------------------------------------------------------------\n * ## post tags\n * ------------------------------------------------------------------- */\n\n.s-content__tags {\n    margin-top: 6rem;\n    font-family: \"metropolis-regular\", sans-serif;\n}\n\n.s-content__tags span {\n    font-family: \"metropolis-bold\", sans-serif;\n    color: #151515;\n    position: relative;\n    padding-right: 55px;\n    margin-right: 1.5rem;\n    margin-top: 1.2rem;\n}\n\n.s-content__tags span::after {\n    display: inline-block;\n    content: \"\";\n    height: 1px;\n    width: 40px;\n    background-color: rgba(0, 0, 0, 0.2);\n    position: absolute;\n    top: 50%;\n    right: 0;\n}\n\n.s-content__tags .s-content__tag-list {\n    display: inline-block;\n    padding-right: 0;\n    margin-right: 0;\n}\n\n.s-content__tags .s-content__tag-list::after {\n    display: none;\n}\n\n.s-content__tags .s-content__tag-list a {\n    display: inline-block;\n    font-family: \"metropolis-regular\", sans-serif;\n    font-size: 1.3rem;\n    line-height: inherit;\n    color: #7f7f7f;\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    border-radius: 3px;\n    margin-right: 6px;\n    margin-bottom: 6px;\n    padding: 0 10px;\n}\n\n.s-content__tags .s-content__tag-list a:hover,\n.s-content__tags .s-content__tag-list a:focus {\n    background-color: #000000;\n    border-color: #000000;\n    color: #ffffff;\n}\n\n.s-content__tags .s-content__tag-list a:last-child {\n    margin-right: 0;\n}\n\n/* -------------------------------------------------------------------\n * ## author profile\n * ------------------------------------------------------------------- */\n\n.s-content__author {\n    margin-top: 10.2rem;\n    padding-left: 9rem;\n    position: relative;\n}\n\n.s-content__author img {\n    margin: 0 !important;\n    width: 6.6rem;\n    height: 6.6rem;\n    border-radius: 50%;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.s-content__author p {\n    margin-bottom: 1.2rem;\n}\n\n.s-content__author-name {\n    margin-top: 0;\n}\n\n.s-content__author-name a {\n    color: #151515;\n}\n\n.s-content__author-social {\n    list-style: none;\n    margin-left: 0;\n    font-family: \"metropolis-bold\", sans-serif;\n    font-size: 12px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n}\n\n.s-content__author-social li {\n    display: inline-block;\n    margin-right: 1rem;\n    padding-left: 0;\n}\n\n.s-content__author-social a {\n    color: #151515;\n}\n\n/* -------------------------------------------------------------------\n * ## blog single page navigation\n * ------------------------------------------------------------------- */\n\n.s-content__pagenav {\n    margin-top: 10.2rem;\n    padding-top: 1.8rem;\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    position: relative;\n}\n\n.s-content__nav:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.s-content__nav span {\n    display: block;\n    font-family: \"metropolis-medium\", sans-serif;\n    font-size: 12px;\n    text-transform: uppercase;\n    letter-spacing: 2.5px;\n    color: #7f7f7f;\n    margin-bottom: 1.2rem;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n}\n\n.s-content__nav a {\n    font-family: \"librebaskerville-bold\", serif;\n    font-size: 2.2rem;\n    line-height: 1.5;\n    color: #19191b;\n}\n\n.s-content__nav a:hover span,\n.s-content__nav a:focus span {\n    color: #19191b;\n}\n\n.s-content__prev,\n.s-content__next {\n    width: 50%;\n    float: left;\n    padding-right: 2rem;\n}\n\n/* -------------------------------------------------------------------\n * ## format gallery\n * ------------------------------------------------------------------- */\n\n.format-gallery .entry__thumb {\n    overflow: hidden;\n}\n\n.format-gallery .slider {\n    overflow: hidden;\n}\n\n.format-gallery .slick-dots {\n    text-align: left;\n    margin: 0;\n    padding: 0 2rem 0 2.4rem;\n    position: absolute;\n    top: auto;\n    bottom: 2.4rem;\n    left: 0;\n}\n\n.format-gallery .slider__slides {\n    cursor: pointer;\n    overflow: hidden;\n    opacity: 0;\n    visibility: hidden;\n}\n\n.format-gallery .slider__slides.slick-initialized {\n    opacity: 1;\n    visibility: visible;\n}\n\n/* -------------------------------------------------------------------\n * ## format video\n * ------------------------------------------------------------------- */\n\n.format-video .video-container {\n    margin-bottom: 0;\n}\n\n/* -------------------------------------------------------------------\n * ## format audio\n * ------------------------------------------------------------------- */\n\n.format-audio .audio-wrap {\n    position: absolute !important;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n}\n\n/* ------------------------------------------------------------------- \n * responsive:\n * blog styles\n * ------------------------------------------------------------------- */\n\n@media only screen and (max-width:1200px) {\n    .s-content--narrow .s-content__header {\n        padding: 0 6rem;\n    }\n\n    .s-content__main {\n        padding-left: 5rem;\n        padding-right: 5rem;\n    }\n\n    .s-content__main img {\n        max-width: 900px;\n        margin: 3rem 0 3rem -5rem;\n    }\n\n}\n\n@media only screen and (max-width:1000px) {\n    .s-content--narrow .s-content__header {\n        padding: 0 6rem;\n    }\n\n    .s-content__header-title {\n        font-size: 3.8rem;\n    }\n\n    .s-content__main {\n        padding-left: 4rem;\n        padding-right: 4rem;\n    }\n\n    .s-content__main img {\n        max-width: 800px;\n        margin: 3rem 0 3rem -4rem;\n    }\n\n}\n\n@media only screen and (max-width:900px) {\n    .s-content__main,\n    .s-content__media {\n        padding-left: 15px;\n        padding-right: 15px;\n    }\n\n    .s-content--narrow .s-content__header {\n        padding: 0 5rem;\n    }\n\n    .s-content__main img {\n        max-width: 100%;\n        margin: 3rem 0 3rem;\n    }\n\n}\n\n@media only screen and (max-width:800px) {\n    .s-content__header-title {\n        font-size: 3.6rem;\n    }\n\n    .s-content__prev,\n    .s-content__next {\n        width: 100%;\n        float: none;\n        padding: 0;\n        text-align: left;\n        margin-bottom: 1.8rem;\n    }\n\n    .s-content__author {\n        text-align: center;\n        padding-left: 0;\n    }\n\n    .s-content__author img {\n        position: static;\n    }\n\n    .s-content__author-name {\n        margin-top: 1.2rem;\n    }\n\n}\n\n@media only screen and (max-width:600px) {\n    .s-content--narrow .s-content__header,\n    .s-content__main,\n    .s-content__media {\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n\n    .s-content__prev,\n    .s-content__next {\n        text-align: center;\n    }\n\n}\n\n@media only screen and (max-width:500px) {\n    .s-content__header-title {\n        font-size: 3.4rem;\n    }\n\n}\n\n@media only screen and (max-width:400px) {\n    .s-content--narrow .s-content__header,\n    .s-content__main,\n    .s-content__media {\n        padding-left: 0;\n        padding-right: 0;\n    }\n\n    .s-content--narrow .s-content__header {\n        margin-top: 0;\n    }\n\n    .s-content__header-title {\n        font-size: 3.3rem;\n    }\n\n}\n\n/* -------------------------------------------------------------------\n * ## comments \n * ------------------------------------------------------------------- */\n\n.comments-wrap {\n    background-color: #e5e5e5;\n    padding: 8.4rem 0 9rem;\n    margin-top: 10.2rem;\n}\n\n/* comments\n * -------------------------------------------------- */\n\n#comments {\n    padding-top: 1.2rem;\n    padding-bottom: 1.2rem;\n    max-width: 880px;\n    color: #4c4c4c;\n}\n\n#comments h3 {\n    margin-top: 0;\n    margin-bottom: 1.5rem;\n}\n\n#comments ol,\n#comments ul {\n    list-style: none;\n}\n\n.commentlist {\n    margin: 6rem 0 5.4rem;\n    padding: 0;\n}\n\n.commentlist > .comment {\n    position: relative;\n    list-style: none;\n    margin: 0;\n    padding: 1.8rem 0;\n    padding-left: 14%;\n}\n\n.comment__avatar {\n    position: absolute;\n    left: 0;\n    display: block;\n    height: 6rem;\n    width: 6rem;\n}\n\n.comment__avatar img {\n    margin-top: 0.6rem;\n    height: 6rem;\n    width: 6rem;\n    border-radius: 100%;\n}\n\n.comment__info cite {\n    font-family: \"metropolis-bold\", sans-serif;\n    font-size: 1.9rem;\n    line-height: 1.263;\n    font-style: normal;\n    color: #151515;\n}\n\n.comment__meta {\n    font-family: \"metropolis-regular\", sans-serif;\n    font-size: 1.45rem;\n    line-height: 3rem;\n    font-style: normal;\n    display: block;\n    color: rgba(0, 0, 0, 0.7);\n}\n\n.comment__meta time {\n    margin-right: 12px;\n}\n\n.comment__meta .reply {\n    font-family: \"metropolis-semibold\", sans-serif;\n}\n\n.comment__text {\n    clear: both;\n    margin: 1.8rem 0 0 0;\n    padding: 0;\n}\n\n.comment ul.children {\n    margin: 0;\n    padding: 1.8rem 0 0 0;\n}\n\n.comment ul.children li {\n    padding-left: 5%;\n    padding-top: 1.8rem;\n}\n\n/* comments form\n * ---------------------------- */\n\n#comments .respond {\n    padding-top: 4.2rem;\n}\n\n#comments form {\n    padding-top: 3rem;\n}\n\n#comments form .form-field {\n    margin-bottom: 3.9rem;\n}\n\n/* ------------------------------------------------------------------- \n * responsive:\n * comments\n * ------------------------------------------------------------------- */\n\n@media only screen and (max-width:1200px) {\n    #comments {\n        max-width: 830px;\n    }\n\n}\n\n@media only screen and (max-width:1000px) {\n    #comments {\n        max-width: 750px;\n    }\n\n}\n\n@media only screen and (max-width:800px) {\n    #comments form button {\n        width: 100%;\n    }\n\n    .comment__avatar {\n        height: 5.1rem;\n        width: 5.1rem;\n    }\n\n    .comment__avatar img {\n        margin-top: 0;\n        height: 5.1rem;\n        width: 5.1rem;\n    }\n\n}\n\n@media only screen and (max-width:600px) {\n    #comments h3 {\n        text-align: center;\n    }\n\n    .commentlist > .comment {\n        padding-left: 0;\n    }\n\n    .commentlist .comment__avatar {\n        display: none;\n    }\n\n}\n\n/* ===================================================================\n * # page styles\n *\n * ------------------------------------------------------------------- */\n\n/* ------------------------------------------------------------------- \n * ## contact page\n * ------------------------------------------------------------------- */\n\n/* map\n * ----------------------------------------------- */\n\n#map {\n\theight: 400px;\n    width: 80%;\n }\n\n#map-wrap {\n    background: #FFFFFF;\n    z-index: 500;\n    height: 420px;\n}\n\n#map-wrap .gm-style img {\n    max-width: none;\n}\n\n#map-wrap .gm-style label {\n    width: auto;\n    display: inline;\n}\n\n#map-wrap #map-container {\n    height: 100%;\n    width: 100%;\n    background: #DDDDDD;\n    position: relative;\n}\n\n#map-wrap #map-zoom-in,\n#map-wrap #map-zoom-out {\n    height: 3.2rem;\n    width: 3.2rem;\n    cursor: pointer;\n    margin-right: 4rem;\n    color: white;\n    background-color: #000000;\n    display: none;\n}\n\n#map-wrap #map-zoom-in {\n    margin-bottom: 2px;\n    margin-top: 30px;\n}\n\n#map-wrap #map-zoom-in::before,\n#map-wrap #map-zoom-out::before {\n    display: block;\n    color: white;\n    text-align: center;\n    font-family: 'FontAwesome';\n    font-size: 14px;\n    content: \"\\f067\";\n    height: 32px;\n    width: 32px;\n    line-height: 32px;\n    -webkit-transition: color 0.3s ease-in-out;\n    transition: color 0.3s ease-in-out;\n}\n\n#map-wrap #map-zoom-in::before {\n    content: \"\\f067\";\n}\n\n#map-wrap #map-zoom-out::before {\n    content: \"\\f068\";\n}\n\n#map-wrap #map-zoom-in:hover::before,\n#map-wrap #map-zoom-out:hover::before {\n    background-color: #0054a5;\n}\n\n/* contact form\n * ----------------------------------------------- */\n\n#cForm {\n    margin-top: 3.6rem;\n}\n\n/*# sourceMappingURL=main.css.map */\n"

/***/ }),

/***/ "./src/assets/css/vendor.css":
/***/ (function(module, exports) {

module.exports = "/* =================================================================== \n *\n *  Philosophy v1.0 Vendor/Third Party CSS \n *  12-30-2017\n *  ------------------------------------------------------------------\n *\n *  TOC:\n *  # lity - v1.6.6 - 2016-04-22\n *  # Animate on Scroll\n *  # Slick Slider\n *  # MediaElement\n *  # prettyprint GitHub Theme\n *\n * =================================================================== */\n\n\n/* ===================================================================\n * # lity - v1.6.6 - 2016-04-22\n *   http://sorgalla.com/lity/\n *   Copyright (c) 2016 Jan Sorgalla; Licensed MIT \n * ------------------------------------------------------------------- */\n\n\n.lity {\n   z-index: 9990;\n   position: fixed;\n   top: 0;\n   right: 0;\n   bottom: 0;\n   left: 0;\n   white-space: nowrap;\n   background: #ffffff;\n   background: white;\n   outline: none !important;\n   opacity: 0;\n   -webkit-transition: opacity 0.3s ease;\n   transition: opacity 0.3s ease;\n}\n\n\n.lity.lity-opened {\n   opacity: 1;\n}\n\n\n.lity.lity-closed {\n   opacity: 0;\n}\n\n\n.lity * {\n   -webkit-box-sizing: border-box;\n   box-sizing: border-box;\n}\n\n\n.lity-wrap {\n   z-index: 9990;\n   position: fixed;\n   top: 0;\n   right: 0;\n   bottom: 0;\n   left: 0;\n   text-align: center;\n   outline: none !important;\n}\n\n\n.lity-wrap:before {\n   content: '';\n   display: inline-block;\n   height: 100%;\n   vertical-align: middle;\n   margin-right: -0.25em;\n}\n\n\n.lity-loader {\n   z-index: 9991;\n   color: #333;\n   position: absolute;\n   top: 50%;\n   margin-top: -0.8em;\n   width: 100%;\n   text-align: center;\n   font-size: 14px;\n   font-family: Arial, Helvetica, sans-serif;\n   opacity: 0;\n   -webkit-transition: opacity 0.3s ease;\n   transition: opacity 0.3s ease;\n}\n\n\n.lity-loading .lity-loader {\n   opacity: 1;\n}\n\n\n.lity-container {\n   z-index: 9992;\n   position: relative;\n   text-align: left;\n   vertical-align: middle;\n   display: inline-block;\n   white-space: normal;\n   max-width: 100%;\n   max-height: 100%;\n   outline: none !important;\n}\n\n\n.lity-content {\n   z-index: 9993;\n   width: 100%;\n   -webkit-transform: scale(1);\n   transform: scale(1);\n   -webkit-transition: -webkit-transform 0.3s ease;\n   transition: -webkit-transform 0.3s ease;\n   transition: transform 0.3s ease;\n   transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n\n\n.lity-loading .lity-content,\n.lity-closed .lity-content {\n   -webkit-transform: scale(0.8);\n   transform: scale(0.8);\n}\n\n\n.lity-content:after {\n   content: '';\n   position: absolute;\n   left: 0;\n   top: 0;\n   bottom: 0;\n   display: block;\n   right: 0;\n   width: auto;\n   height: auto;\n   z-index: -1;\n}\n\n\n.lity-close {\n   z-index: 9994;\n   width: 42px;\n   height: 42px;\n   position: fixed;\n   text-align: center !important;\n   right: 20px;\n   top: 20px;\n   -webkit-appearance: none;\n   cursor: pointer;\n   text-decoration: none;\n   text-align: center;\n   padding: 0;\n   margin: 0;\n   color: black;\n   font-style: normal;\n   font-size: 30px;\n   font-family: Arial, sans-serif;\n   line-height: 42px;\n   border: 0;\n   background: transparent;\n   outline: none;\n   -webkit-box-shadow: none;\n   box-shadow: none;\n   font: 0/0 a;\n   text-shadow: none;\n   color: transparent;\n   border-radius: 50%;\n}\n\n\n.lity-close::before,\n.lity-close::after {\n   display: block;\n   content: \"\";\n   height: 20px;\n   width: 2px;\n   background-color: black;\n   position: absolute;\n   top: 11px;\n   left: 20px;\n}\n\n\n.lity-close::before {\n   -webkit-transform: rotate(-45deg);\n   transform: rotate(-45deg);\n}\n\n\n.lity-close::after {\n   -webkit-transform: rotate(45deg);\n   transform: rotate(45deg);\n}\n\n\n.lity-close::-moz-focus-inner {\n   border: 0;\n   padding: 0;\n}\n\n\n.lity-close:hover,\n.lity-close:focus,\n.lity-close:active,\n.lity-close:visited {\n   text-decoration: none;\n   text-align: center;\n   padding: 0;\n   color: #fff;\n   font-style: normal;\n   font-size: 30px;\n   font-family: Arial, sans-serif;\n   line-height: 36px;\n   border: 0;\n   background: transparent;\n   outline: none;\n   -webkit-box-shadow: none;\n   box-shadow: none;\n   font: 0/0 a;\n   text-shadow: none;\n   color: transparent;\n}\n\n\n.lity-close:hover::before,\n.lity-close:hover::after,\n.lity-close:focus::before,\n.lity-close:focus::after,\n.lity-close:active::before,\n.lity-close:active::after,\n.lity-close:visited::before,\n.lity-close:visited::after {\n   background-color: #0054a5;\n}\n\n\n/* Image */\n\n\n.lity-image img {\n   max-width: 100%;\n   display: block;\n   line-height: 0;\n   border: 0;\n}\n\n\n/* iFrame */\n\n\n.lity-iframe .lity-container {\n   width: 100%;\n   max-width: 964px;\n}\n\n\n.lity-iframe-container {\n   width: 100%;\n   height: 0;\n   padding-top: 56.25%;\n   overflow: auto;\n   pointer-events: auto;\n   -webkit-transform: translateZ(0);\n   transform: translateZ(0);\n   -webkit-overflow-scrolling: touch;\n}\n\n\n.lity-iframe-container iframe {\n   position: absolute;\n   display: block;\n   top: 0;\n   left: 0;\n   width: 100%;\n   height: 100%;\n   background: #000;\n}\n\n\n.lity-hide {\n   display: none;\n}\n\n\n/* ===================================================================\n * # Animate on Scroll \n *   https://michalsnik.github.io/aos/\n *\n * ------------------------------------------------------------------- */\n\n\n[data-aos][data-aos][data-aos-duration='50'],\nbody[data-aos-duration='50'] [data-aos] {\n   -webkit-transition-duration: 50ms;\n           transition-duration: 50ms;\n}\n\n\n[data-aos][data-aos][data-aos-delay='50'],\nbody[data-aos-delay='50'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='50'].aos-animate,\nbody[data-aos-delay='50'] [data-aos].aos-animate {\n   -webkit-transition-delay: 50ms;\n           transition-delay: 50ms;\n}\n\n\n[data-aos][data-aos][data-aos-duration='100'],\nbody[data-aos-duration='100'] [data-aos] {\n   -webkit-transition-duration: .1s;\n           transition-duration: .1s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='100'],\nbody[data-aos-delay='100'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='100'].aos-animate,\nbody[data-aos-delay='100'] [data-aos].aos-animate {\n   -webkit-transition-delay: .1s;\n           transition-delay: .1s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='150'],\nbody[data-aos-duration='150'] [data-aos] {\n   -webkit-transition-duration: .15s;\n           transition-duration: .15s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='150'],\nbody[data-aos-delay='150'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='150'].aos-animate,\nbody[data-aos-delay='150'] [data-aos].aos-animate {\n   -webkit-transition-delay: .15s;\n           transition-delay: .15s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='200'],\nbody[data-aos-duration='200'] [data-aos] {\n   -webkit-transition-duration: .2s;\n           transition-duration: .2s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='200'],\nbody[data-aos-delay='200'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='200'].aos-animate,\nbody[data-aos-delay='200'] [data-aos].aos-animate {\n   -webkit-transition-delay: .2s;\n           transition-delay: .2s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='250'],\nbody[data-aos-duration='250'] [data-aos] {\n   -webkit-transition-duration: .25s;\n           transition-duration: .25s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='250'],\nbody[data-aos-delay='250'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='250'].aos-animate,\nbody[data-aos-delay='250'] [data-aos].aos-animate {\n   -webkit-transition-delay: .25s;\n           transition-delay: .25s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='300'],\nbody[data-aos-duration='300'] [data-aos] {\n   -webkit-transition-duration: .3s;\n           transition-duration: .3s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='300'],\nbody[data-aos-delay='300'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='300'].aos-animate,\nbody[data-aos-delay='300'] [data-aos].aos-animate {\n   -webkit-transition-delay: .3s;\n           transition-delay: .3s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='350'],\nbody[data-aos-duration='350'] [data-aos] {\n   -webkit-transition-duration: .35s;\n           transition-duration: .35s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='350'],\nbody[data-aos-delay='350'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='350'].aos-animate,\nbody[data-aos-delay='350'] [data-aos].aos-animate {\n   -webkit-transition-delay: .35s;\n           transition-delay: .35s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='400'],\nbody[data-aos-duration='400'] [data-aos] {\n   -webkit-transition-duration: .4s;\n           transition-duration: .4s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='400'],\nbody[data-aos-delay='400'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='400'].aos-animate,\nbody[data-aos-delay='400'] [data-aos].aos-animate {\n   -webkit-transition-delay: .4s;\n           transition-delay: .4s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='450'],\nbody[data-aos-duration='450'] [data-aos] {\n   -webkit-transition-duration: .45s;\n           transition-duration: .45s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='450'],\nbody[data-aos-delay='450'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='450'].aos-animate,\nbody[data-aos-delay='450'] [data-aos].aos-animate {\n   -webkit-transition-delay: .45s;\n           transition-delay: .45s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='500'],\nbody[data-aos-duration='500'] [data-aos] {\n   -webkit-transition-duration: .5s;\n           transition-duration: .5s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='500'],\nbody[data-aos-delay='500'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='500'].aos-animate,\nbody[data-aos-delay='500'] [data-aos].aos-animate {\n   -webkit-transition-delay: .5s;\n           transition-delay: .5s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='550'],\nbody[data-aos-duration='550'] [data-aos] {\n   -webkit-transition-duration: .55s;\n           transition-duration: .55s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='550'],\nbody[data-aos-delay='550'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='550'].aos-animate,\nbody[data-aos-delay='550'] [data-aos].aos-animate {\n   -webkit-transition-delay: .55s;\n           transition-delay: .55s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='600'],\nbody[data-aos-duration='600'] [data-aos] {\n   -webkit-transition-duration: .6s;\n           transition-duration: .6s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='600'],\nbody[data-aos-delay='600'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='600'].aos-animate,\nbody[data-aos-delay='600'] [data-aos].aos-animate {\n   -webkit-transition-delay: .6s;\n           transition-delay: .6s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='650'],\nbody[data-aos-duration='650'] [data-aos] {\n   -webkit-transition-duration: .65s;\n           transition-duration: .65s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='650'],\nbody[data-aos-delay='650'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='650'].aos-animate,\nbody[data-aos-delay='650'] [data-aos].aos-animate {\n   -webkit-transition-delay: .65s;\n           transition-delay: .65s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='700'],\nbody[data-aos-duration='700'] [data-aos] {\n   -webkit-transition-duration: .7s;\n           transition-duration: .7s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='700'],\nbody[data-aos-delay='700'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='700'].aos-animate,\nbody[data-aos-delay='700'] [data-aos].aos-animate {\n   -webkit-transition-delay: .7s;\n           transition-delay: .7s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='750'],\nbody[data-aos-duration='750'] [data-aos] {\n   -webkit-transition-duration: .75s;\n           transition-duration: .75s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='750'],\nbody[data-aos-delay='750'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='750'].aos-animate,\nbody[data-aos-delay='750'] [data-aos].aos-animate {\n   -webkit-transition-delay: .75s;\n           transition-delay: .75s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='800'],\nbody[data-aos-duration='800'] [data-aos] {\n   -webkit-transition-duration: .8s;\n           transition-duration: .8s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='800'],\nbody[data-aos-delay='800'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='800'].aos-animate,\nbody[data-aos-delay='800'] [data-aos].aos-animate {\n   -webkit-transition-delay: .8s;\n           transition-delay: .8s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='850'],\nbody[data-aos-duration='850'] [data-aos] {\n   -webkit-transition-duration: .85s;\n           transition-duration: .85s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='850'],\nbody[data-aos-delay='850'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='850'].aos-animate,\nbody[data-aos-delay='850'] [data-aos].aos-animate {\n   -webkit-transition-delay: .85s;\n           transition-delay: .85s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='900'],\nbody[data-aos-duration='900'] [data-aos] {\n   -webkit-transition-duration: .9s;\n           transition-duration: .9s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='900'],\nbody[data-aos-delay='900'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='900'].aos-animate,\nbody[data-aos-delay='900'] [data-aos].aos-animate {\n   -webkit-transition-delay: .9s;\n           transition-delay: .9s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='950'],\nbody[data-aos-duration='950'] [data-aos] {\n   -webkit-transition-duration: .95s;\n           transition-duration: .95s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='950'],\nbody[data-aos-delay='950'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='950'].aos-animate,\nbody[data-aos-delay='950'] [data-aos].aos-animate {\n   -webkit-transition-delay: .95s;\n           transition-delay: .95s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1000'],\nbody[data-aos-duration='1000'] [data-aos] {\n   -webkit-transition-duration: 1s;\n           transition-duration: 1s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1000'],\nbody[data-aos-delay='1000'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1000'].aos-animate,\nbody[data-aos-delay='1000'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1s;\n           transition-delay: 1s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1050'],\nbody[data-aos-duration='1050'] [data-aos] {\n   -webkit-transition-duration: 1.05s;\n           transition-duration: 1.05s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1050'],\nbody[data-aos-delay='1050'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1050'].aos-animate,\nbody[data-aos-delay='1050'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.05s;\n           transition-delay: 1.05s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1100'],\nbody[data-aos-duration='1100'] [data-aos] {\n   -webkit-transition-duration: 1.1s;\n           transition-duration: 1.1s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1100'],\nbody[data-aos-delay='1100'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1100'].aos-animate,\nbody[data-aos-delay='1100'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.1s;\n           transition-delay: 1.1s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1150'],\nbody[data-aos-duration='1150'] [data-aos] {\n   -webkit-transition-duration: 1.15s;\n           transition-duration: 1.15s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1150'],\nbody[data-aos-delay='1150'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1150'].aos-animate,\nbody[data-aos-delay='1150'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.15s;\n           transition-delay: 1.15s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1200'],\nbody[data-aos-duration='1200'] [data-aos] {\n   -webkit-transition-duration: 1.2s;\n           transition-duration: 1.2s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1200'],\nbody[data-aos-delay='1200'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1200'].aos-animate,\nbody[data-aos-delay='1200'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.2s;\n           transition-delay: 1.2s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1250'],\nbody[data-aos-duration='1250'] [data-aos] {\n   -webkit-transition-duration: 1.25s;\n           transition-duration: 1.25s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1250'],\nbody[data-aos-delay='1250'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1250'].aos-animate,\nbody[data-aos-delay='1250'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.25s;\n           transition-delay: 1.25s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1300'],\nbody[data-aos-duration='1300'] [data-aos] {\n   -webkit-transition-duration: 1.3s;\n           transition-duration: 1.3s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1300'],\nbody[data-aos-delay='1300'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1300'].aos-animate,\nbody[data-aos-delay='1300'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.3s;\n           transition-delay: 1.3s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1350'],\nbody[data-aos-duration='1350'] [data-aos] {\n   -webkit-transition-duration: 1.35s;\n           transition-duration: 1.35s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1350'],\nbody[data-aos-delay='1350'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1350'].aos-animate,\nbody[data-aos-delay='1350'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.35s;\n           transition-delay: 1.35s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1400'],\nbody[data-aos-duration='1400'] [data-aos] {\n   -webkit-transition-duration: 1.4s;\n           transition-duration: 1.4s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1400'],\nbody[data-aos-delay='1400'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1400'].aos-animate,\nbody[data-aos-delay='1400'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.4s;\n           transition-delay: 1.4s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1450'],\nbody[data-aos-duration='1450'] [data-aos] {\n   -webkit-transition-duration: 1.45s;\n           transition-duration: 1.45s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1450'],\nbody[data-aos-delay='1450'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1450'].aos-animate,\nbody[data-aos-delay='1450'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.45s;\n           transition-delay: 1.45s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1500'],\nbody[data-aos-duration='1500'] [data-aos] {\n   -webkit-transition-duration: 1.5s;\n           transition-duration: 1.5s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1500'],\nbody[data-aos-delay='1500'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1500'].aos-animate,\nbody[data-aos-delay='1500'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.5s;\n           transition-delay: 1.5s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1550'],\nbody[data-aos-duration='1550'] [data-aos] {\n   -webkit-transition-duration: 1.55s;\n           transition-duration: 1.55s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1550'],\nbody[data-aos-delay='1550'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1550'].aos-animate,\nbody[data-aos-delay='1550'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.55s;\n           transition-delay: 1.55s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1600'],\nbody[data-aos-duration='1600'] [data-aos] {\n   -webkit-transition-duration: 1.6s;\n           transition-duration: 1.6s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1600'],\nbody[data-aos-delay='1600'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1600'].aos-animate,\nbody[data-aos-delay='1600'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.6s;\n           transition-delay: 1.6s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1650'],\nbody[data-aos-duration='1650'] [data-aos] {\n   -webkit-transition-duration: 1.65s;\n           transition-duration: 1.65s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1650'],\nbody[data-aos-delay='1650'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1650'].aos-animate,\nbody[data-aos-delay='1650'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.65s;\n           transition-delay: 1.65s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1700'],\nbody[data-aos-duration='1700'] [data-aos] {\n   -webkit-transition-duration: 1.7s;\n           transition-duration: 1.7s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1700'],\nbody[data-aos-delay='1700'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1700'].aos-animate,\nbody[data-aos-delay='1700'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.7s;\n           transition-delay: 1.7s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1750'],\nbody[data-aos-duration='1750'] [data-aos] {\n   -webkit-transition-duration: 1.75s;\n           transition-duration: 1.75s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1750'],\nbody[data-aos-delay='1750'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1750'].aos-animate,\nbody[data-aos-delay='1750'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.75s;\n           transition-delay: 1.75s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1800'],\nbody[data-aos-duration='1800'] [data-aos] {\n   -webkit-transition-duration: 1.8s;\n           transition-duration: 1.8s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1800'],\nbody[data-aos-delay='1800'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1800'].aos-animate,\nbody[data-aos-delay='1800'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.8s;\n           transition-delay: 1.8s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1850'],\nbody[data-aos-duration='1850'] [data-aos] {\n   -webkit-transition-duration: 1.85s;\n           transition-duration: 1.85s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1850'],\nbody[data-aos-delay='1850'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1850'].aos-animate,\nbody[data-aos-delay='1850'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.85s;\n           transition-delay: 1.85s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1900'],\nbody[data-aos-duration='1900'] [data-aos] {\n   -webkit-transition-duration: 1.9s;\n           transition-duration: 1.9s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1900'],\nbody[data-aos-delay='1900'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1900'].aos-animate,\nbody[data-aos-delay='1900'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.9s;\n           transition-delay: 1.9s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='1950'],\nbody[data-aos-duration='1950'] [data-aos] {\n   -webkit-transition-duration: 1.95s;\n           transition-duration: 1.95s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1950'],\nbody[data-aos-delay='1950'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='1950'].aos-animate,\nbody[data-aos-delay='1950'] [data-aos].aos-animate {\n   -webkit-transition-delay: 1.95s;\n           transition-delay: 1.95s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2000'],\nbody[data-aos-duration='2000'] [data-aos] {\n   -webkit-transition-duration: 2s;\n           transition-duration: 2s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2000'],\nbody[data-aos-delay='2000'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2000'].aos-animate,\nbody[data-aos-delay='2000'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2s;\n           transition-delay: 2s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2050'],\nbody[data-aos-duration='2050'] [data-aos] {\n   -webkit-transition-duration: 2.05s;\n           transition-duration: 2.05s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2050'],\nbody[data-aos-delay='2050'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2050'].aos-animate,\nbody[data-aos-delay='2050'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.05s;\n           transition-delay: 2.05s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2100'],\nbody[data-aos-duration='2100'] [data-aos] {\n   -webkit-transition-duration: 2.1s;\n           transition-duration: 2.1s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2100'],\nbody[data-aos-delay='2100'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2100'].aos-animate,\nbody[data-aos-delay='2100'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.1s;\n           transition-delay: 2.1s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2150'],\nbody[data-aos-duration='2150'] [data-aos] {\n   -webkit-transition-duration: 2.15s;\n           transition-duration: 2.15s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2150'],\nbody[data-aos-delay='2150'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2150'].aos-animate,\nbody[data-aos-delay='2150'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.15s;\n           transition-delay: 2.15s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2200'],\nbody[data-aos-duration='2200'] [data-aos] {\n   -webkit-transition-duration: 2.2s;\n           transition-duration: 2.2s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2200'],\nbody[data-aos-delay='2200'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2200'].aos-animate,\nbody[data-aos-delay='2200'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.2s;\n           transition-delay: 2.2s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2250'],\nbody[data-aos-duration='2250'] [data-aos] {\n   -webkit-transition-duration: 2.25s;\n           transition-duration: 2.25s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2250'],\nbody[data-aos-delay='2250'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2250'].aos-animate,\nbody[data-aos-delay='2250'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.25s;\n           transition-delay: 2.25s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2300'],\nbody[data-aos-duration='2300'] [data-aos] {\n   -webkit-transition-duration: 2.3s;\n           transition-duration: 2.3s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2300'],\nbody[data-aos-delay='2300'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2300'].aos-animate,\nbody[data-aos-delay='2300'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.3s;\n           transition-delay: 2.3s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2350'],\nbody[data-aos-duration='2350'] [data-aos] {\n   -webkit-transition-duration: 2.35s;\n           transition-duration: 2.35s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2350'],\nbody[data-aos-delay='2350'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2350'].aos-animate,\nbody[data-aos-delay='2350'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.35s;\n           transition-delay: 2.35s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2400'],\nbody[data-aos-duration='2400'] [data-aos] {\n   -webkit-transition-duration: 2.4s;\n           transition-duration: 2.4s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2400'],\nbody[data-aos-delay='2400'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2400'].aos-animate,\nbody[data-aos-delay='2400'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.4s;\n           transition-delay: 2.4s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2450'],\nbody[data-aos-duration='2450'] [data-aos] {\n   -webkit-transition-duration: 2.45s;\n           transition-duration: 2.45s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2450'],\nbody[data-aos-delay='2450'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2450'].aos-animate,\nbody[data-aos-delay='2450'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.45s;\n           transition-delay: 2.45s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2500'],\nbody[data-aos-duration='2500'] [data-aos] {\n   -webkit-transition-duration: 2.5s;\n           transition-duration: 2.5s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2500'],\nbody[data-aos-delay='2500'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2500'].aos-animate,\nbody[data-aos-delay='2500'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.5s;\n           transition-delay: 2.5s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2550'],\nbody[data-aos-duration='2550'] [data-aos] {\n   -webkit-transition-duration: 2.55s;\n           transition-duration: 2.55s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2550'],\nbody[data-aos-delay='2550'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2550'].aos-animate,\nbody[data-aos-delay='2550'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.55s;\n           transition-delay: 2.55s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2600'],\nbody[data-aos-duration='2600'] [data-aos] {\n   -webkit-transition-duration: 2.6s;\n           transition-duration: 2.6s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2600'],\nbody[data-aos-delay='2600'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2600'].aos-animate,\nbody[data-aos-delay='2600'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.6s;\n           transition-delay: 2.6s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2650'],\nbody[data-aos-duration='2650'] [data-aos] {\n   -webkit-transition-duration: 2.65s;\n           transition-duration: 2.65s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2650'],\nbody[data-aos-delay='2650'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2650'].aos-animate,\nbody[data-aos-delay='2650'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.65s;\n           transition-delay: 2.65s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2700'],\nbody[data-aos-duration='2700'] [data-aos] {\n   -webkit-transition-duration: 2.7s;\n           transition-duration: 2.7s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2700'],\nbody[data-aos-delay='2700'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2700'].aos-animate,\nbody[data-aos-delay='2700'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.7s;\n           transition-delay: 2.7s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2750'],\nbody[data-aos-duration='2750'] [data-aos] {\n   -webkit-transition-duration: 2.75s;\n           transition-duration: 2.75s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2750'],\nbody[data-aos-delay='2750'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2750'].aos-animate,\nbody[data-aos-delay='2750'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.75s;\n           transition-delay: 2.75s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2800'],\nbody[data-aos-duration='2800'] [data-aos] {\n   -webkit-transition-duration: 2.8s;\n           transition-duration: 2.8s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2800'],\nbody[data-aos-delay='2800'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2800'].aos-animate,\nbody[data-aos-delay='2800'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.8s;\n           transition-delay: 2.8s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2850'],\nbody[data-aos-duration='2850'] [data-aos] {\n   -webkit-transition-duration: 2.85s;\n           transition-duration: 2.85s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2850'],\nbody[data-aos-delay='2850'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2850'].aos-animate,\nbody[data-aos-delay='2850'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.85s;\n           transition-delay: 2.85s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2900'],\nbody[data-aos-duration='2900'] [data-aos] {\n   -webkit-transition-duration: 2.9s;\n           transition-duration: 2.9s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2900'],\nbody[data-aos-delay='2900'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2900'].aos-animate,\nbody[data-aos-delay='2900'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.9s;\n           transition-delay: 2.9s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='2950'],\nbody[data-aos-duration='2950'] [data-aos] {\n   -webkit-transition-duration: 2.95s;\n           transition-duration: 2.95s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2950'],\nbody[data-aos-delay='2950'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='2950'].aos-animate,\nbody[data-aos-delay='2950'] [data-aos].aos-animate {\n   -webkit-transition-delay: 2.95s;\n           transition-delay: 2.95s;\n}\n\n\n[data-aos][data-aos][data-aos-duration='3000'],\nbody[data-aos-duration='3000'] [data-aos] {\n   -webkit-transition-duration: 3s;\n           transition-duration: 3s;\n}\n\n\n[data-aos][data-aos][data-aos-delay='3000'],\nbody[data-aos-delay='3000'] [data-aos] {\n   -webkit-transition-delay: 0;\n           transition-delay: 0;\n}\n\n\n[data-aos][data-aos][data-aos-delay='3000'].aos-animate,\nbody[data-aos-delay='3000'] [data-aos].aos-animate {\n   -webkit-transition-delay: 3s;\n           transition-delay: 3s;\n}\n\n\n[data-aos][data-aos][data-aos-easing=linear],\nbody[data-aos-easing=linear] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);\n           transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease],\nbody[data-aos-easing=ease] [data-aos] {\n   -webkit-transition-timing-function: ease;\n           transition-timing-function: ease;\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-in],\nbody[data-aos-easing=ease-in] [data-aos] {\n   -webkit-transition-timing-function: ease-in;\n           transition-timing-function: ease-in;\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-out],\nbody[data-aos-easing=ease-out] [data-aos] {\n   -webkit-transition-timing-function: ease-out;\n           transition-timing-function: ease-out;\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-in-out],\nbody[data-aos-easing=ease-in-out] [data-aos] {\n   -webkit-transition-timing-function: ease-in-out;\n           transition-timing-function: ease-in-out;\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-in-back],\nbody[data-aos-easing=ease-in-back] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);\n           transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-out-back],\nbody[data-aos-easing=ease-out-back] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n           transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-in-out-back],\nbody[data-aos-easing=ease-in-out-back] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n           transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-in-sine],\nbody[data-aos-easing=ease-in-sine] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\n           transition-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-out-sine],\nbody[data-aos-easing=ease-out-sine] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);\n           transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-in-out-sine],\nbody[data-aos-easing=ease-in-out-sine] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);\n           transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-in-quad],\nbody[data-aos-easing=ease-in-quad] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n           transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-out-quad],\nbody[data-aos-easing=ease-out-quad] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n           transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-in-out-quad],\nbody[data-aos-easing=ease-in-out-quad] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n           transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-in-cubic],\nbody[data-aos-easing=ease-in-cubic] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n           transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-out-cubic],\nbody[data-aos-easing=ease-out-cubic] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n           transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-in-out-cubic],\nbody[data-aos-easing=ease-in-out-cubic] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n           transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-in-quart],\nbody[data-aos-easing=ease-in-quart] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n           transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-out-quart],\nbody[data-aos-easing=ease-out-quart] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n           transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n\n[data-aos][data-aos][data-aos-easing=ease-in-out-quart],\nbody[data-aos-easing=ease-in-out-quart] [data-aos] {\n   -webkit-transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n           transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\n\n\n[data-aos^=fade][data-aos^=fade] {\n   opacity: 0;\n   -webkit-transition-property: opacity, -webkit-transform;\n   transition-property: opacity, -webkit-transform;\n   transition-property: opacity, transform;\n   transition-property: opacity, transform, -webkit-transform;\n}\n\n\n[data-aos^=fade][data-aos^=fade].aos-animate {\n   opacity: 1;\n   -webkit-transform: translate(0);\n           transform: translate(0);\n}\n\n\n[data-aos=fade-up] {\n   -webkit-transform: translateY(100px);\n           transform: translateY(100px);\n}\n\n\n[data-aos=fade-down] {\n   -webkit-transform: translateY(-100px);\n           transform: translateY(-100px);\n}\n\n\n[data-aos=fade-right] {\n   -webkit-transform: translate(-100px);\n           transform: translate(-100px);\n}\n\n\n[data-aos=fade-left] {\n   -webkit-transform: translate(100px);\n           transform: translate(100px);\n}\n\n\n[data-aos=fade-up-right] {\n   -webkit-transform: translate(-100px, 100px);\n           transform: translate(-100px, 100px);\n}\n\n\n[data-aos=fade-up-left] {\n   -webkit-transform: translate(100px, 100px);\n           transform: translate(100px, 100px);\n}\n\n\n[data-aos=fade-down-right] {\n   -webkit-transform: translate(-100px, -100px);\n           transform: translate(-100px, -100px);\n}\n\n\n[data-aos=fade-down-left] {\n   -webkit-transform: translate(100px, -100px);\n           transform: translate(100px, -100px);\n}\n\n\n[data-aos^=zoom][data-aos^=zoom] {\n   opacity: 0;\n   -webkit-transition-property: opacity, -webkit-transform;\n   transition-property: opacity, -webkit-transform;\n   transition-property: opacity, transform;\n   transition-property: opacity, transform, -webkit-transform;\n}\n\n\n[data-aos^=zoom][data-aos^=zoom].aos-animate {\n   opacity: 1;\n   -webkit-transform: translate(0) scale(1);\n           transform: translate(0) scale(1);\n}\n\n\n[data-aos=zoom-in] {\n   -webkit-transform: scale(0.6);\n           transform: scale(0.6);\n}\n\n\n[data-aos=zoom-in-up] {\n   -webkit-transform: translateY(100px) scale(0.6);\n           transform: translateY(100px) scale(0.6);\n}\n\n\n[data-aos=zoom-in-down] {\n   -webkit-transform: translateY(-100px) scale(0.6);\n           transform: translateY(-100px) scale(0.6);\n}\n\n\n[data-aos=zoom-in-right] {\n   -webkit-transform: translate(-100px) scale(0.6);\n           transform: translate(-100px) scale(0.6);\n}\n\n\n[data-aos=zoom-in-left] {\n   -webkit-transform: translate(100px) scale(0.6);\n           transform: translate(100px) scale(0.6);\n}\n\n\n[data-aos=zoom-out] {\n   -webkit-transform: scale(1.2);\n           transform: scale(1.2);\n}\n\n\n[data-aos=zoom-out-up] {\n   -webkit-transform: translateY(100px) scale(1.2);\n           transform: translateY(100px) scale(1.2);\n}\n\n\n[data-aos=zoom-out-down] {\n   -webkit-transform: translateY(-100px) scale(1.2);\n           transform: translateY(-100px) scale(1.2);\n}\n\n\n[data-aos=zoom-out-right] {\n   -webkit-transform: translate(-100px) scale(1.2);\n           transform: translate(-100px) scale(1.2);\n}\n\n\n[data-aos=zoom-out-left] {\n   -webkit-transform: translate(100px) scale(1.2);\n           transform: translate(100px) scale(1.2);\n}\n\n\n[data-aos^=slide][data-aos^=slide] {\n   -webkit-transition-property: -webkit-transform;\n   transition-property: -webkit-transform;\n   transition-property: transform;\n   transition-property: transform, -webkit-transform;\n}\n\n\n[data-aos^=slide][data-aos^=slide].aos-animate {\n   -webkit-transform: translate(0);\n           transform: translate(0);\n}\n\n\n[data-aos=slide-up] {\n   -webkit-transform: translateY(100%);\n           transform: translateY(100%);\n}\n\n\n[data-aos=slide-down] {\n   -webkit-transform: translateY(-100%);\n           transform: translateY(-100%);\n}\n\n\n[data-aos=slide-right] {\n   -webkit-transform: translateX(-100%);\n           transform: translateX(-100%);\n}\n\n\n[data-aos=slide-left] {\n   -webkit-transform: translateX(100%);\n           transform: translateX(100%);\n}\n\n\n[data-aos^=flip][data-aos^=flip] {\n   -webkit-backface-visibility: hidden;\n           backface-visibility: hidden;\n   -webkit-transition-property: -webkit-transform;\n   transition-property: -webkit-transform;\n   transition-property: transform;\n   transition-property: transform, -webkit-transform;\n}\n\n\n[data-aos=flip-left] {\n   -webkit-transform: perspective(2500px) rotateY(-100deg);\n           transform: perspective(2500px) rotateY(-100deg);\n}\n\n\n[data-aos=flip-left].aos-animate {\n   -webkit-transform: perspective(2500px) rotateY(0);\n           transform: perspective(2500px) rotateY(0);\n}\n\n\n[data-aos=flip-right] {\n   -webkit-transform: perspective(2500px) rotateY(100deg);\n           transform: perspective(2500px) rotateY(100deg);\n}\n\n\n[data-aos=flip-right].aos-animate {\n   -webkit-transform: perspective(2500px) rotateY(0);\n           transform: perspective(2500px) rotateY(0);\n}\n\n\n[data-aos=flip-up] {\n   -webkit-transform: perspective(2500px) rotateX(-100deg);\n           transform: perspective(2500px) rotateX(-100deg);\n}\n\n\n[data-aos=flip-up].aos-animate {\n   -webkit-transform: perspective(2500px) rotateX(0);\n           transform: perspective(2500px) rotateX(0);\n}\n\n\n[data-aos=flip-down] {\n   -webkit-transform: perspective(2500px) rotateX(100deg);\n           transform: perspective(2500px) rotateX(100deg);\n}\n\n\n[data-aos=flip-down].aos-animate {\n   -webkit-transform: perspective(2500px) rotateX(0);\n           transform: perspective(2500px) rotateX(0);\n}\n\n\n/*# sourceMappingURL=aos.css.map*/\n\n\n/* ===================================================================\n * # Slick Slider\n *\n * ------------------------------------------------------------------- */\n\n\n.slick-slider {\n   position: relative;\n   display: block;\n   -webkit-box-sizing: border-box;\n           box-sizing: border-box;\n   -webkit-touch-callout: none;\n   -webkit-user-select: none;\n   -moz-user-select: none;\n   -ms-user-select: none;\n   user-select: none;\n   -ms-touch-action: pan-y;\n   touch-action: pan-y;\n   -webkit-tap-highlight-color: transparent;\n}\n\n\n.slick-list {\n   position: relative;\n   overflow: hidden;\n   display: block;\n   margin: 0;\n   padding: 0;\n}\n\n\n.slick-list:focus {\n   outline: none;\n}\n\n\n.slick-list.dragging {\n   cursor: pointer;\n   cursor: hand;\n}\n\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n   -webkit-transform: translate3d(0, 0, 0);\n   transform: translate3d(0, 0, 0);\n}\n\n\n.slick-track {\n   position: relative;\n   left: 0;\n   top: 0;\n   display: block;\n}\n\n\n.slick-track:before,\n.slick-track:after {\n   content: \"\";\n   display: table;\n}\n\n\n.slick-track:after {\n   clear: both;\n}\n\n\n.slick-loading .slick-track {\n   visibility: hidden;\n}\n\n\n.slick-slide {\n   float: left;\n   height: 100%;\n   min-height: 1px;\n   display: none;\n}\n\n\n[dir=\"rtl\"] .slick-slide {\n   float: right;\n}\n\n\n.slick-slide img {\n   display: block;\n}\n\n\n.slick-slide.slick-loading img {\n   display: none;\n}\n\n\n.slick-slide.dragging img {\n   pointer-events: none;\n}\n\n\n.slick-initialized .slick-slide {\n   display: block;\n}\n\n\n.slick-loading .slick-slide {\n   visibility: hidden;\n}\n\n\n.slick-vertical .slick-slide {\n   display: block;\n   height: auto;\n   border: 1px solid transparent;\n}\n\n\n.slick-arrow.slick-hidden {\n   display: none;\n}\n\n\n/* ===================================================================\n * # MediaElement\n *\n * ------------------------------------------------------------------- */\n\n\n/* Accessibility: hide screen reader texts (and prefer \"top\" for RTL languages).\nReference: http://blog.rrwd.nl/2015/04/04/the-screen-reader-text-class-why-and-how/ */\n\n\n.mejs__offscreen {\n   border: 0;\n   clip: rect(1px, 1px, 1px, 1px);\n   -webkit-clip-path: inset(50%);\n   clip-path: inset(50%);\n   height: 1px;\n   margin: -1px;\n   overflow: hidden;\n   padding: 0;\n   position: absolute;\n   width: 1px;\n   word-wrap: normal;\n}\n\n\n.mejs__container {\n   background: #000;\n   -webkit-box-sizing: border-box;\n           box-sizing: border-box;\n   font-family: 'Helvetica', Arial, serif;\n   position: relative;\n   text-align: left;\n   text-indent: 0;\n   vertical-align: top;\n}\n\n\n.mejs__container * {\n   -webkit-box-sizing: border-box;\n           box-sizing: border-box;\n}\n\n\n/* Hide native play button and control bar from iOS to favor plugin button */\n\n\n.mejs__container video::-webkit-media-controls,\n.mejs__container video::-webkit-media-controls-panel,\n.mejs__container video::-webkit-media-controls-panel-container,\n.mejs__container video::-webkit-media-controls-start-playback-button {\n   -webkit-appearance: none;\n   display: none !important;\n}\n\n\n.mejs__fill-container,\n.mejs__fill-container .mejs__container {\n   height: 100%;\n   width: 100%;\n}\n\n\n.mejs__fill-container {\n   background: transparent;\n   margin: 0 auto;\n   overflow: hidden;\n   position: relative;\n}\n\n\n.mejs__container:focus {\n   outline: none;\n}\n\n\n.mejs__iframe-overlay {\n   height: 100%;\n   position: absolute;\n   width: 100%;\n}\n\n\n.mejs__embed,\n.mejs__embed body {\n   background: #000;\n   height: 100%;\n   margin: 0;\n   overflow: hidden;\n   padding: 0;\n   width: 100%;\n}\n\n\n.mejs__fullscreen {\n   overflow: hidden !important;\n}\n\n\n.mejs__container-fullscreen {\n   bottom: 0;\n   left: 0;\n   overflow: hidden;\n   position: fixed;\n   right: 0;\n   top: 0;\n   z-index: 1000;\n}\n\n\n.mejs__container-fullscreen .mejs__mediaelement,\n.mejs__container-fullscreen video {\n   height: 100% !important;\n   width: 100% !important;\n}\n\n\n/* Start: LAYERS */\n\n\n.mejs__background {\n   left: 0;\n   position: absolute;\n   top: 0;\n}\n\n\n.mejs__mediaelement {\n   height: 100%;\n   left: 0;\n   position: absolute;\n   top: 0;\n   width: 100%;\n   z-index: 0;\n}\n\n\n.mejs__poster {\n   background-position: 50% 50%;\n   background-repeat: no-repeat;\n   background-size: cover;\n   left: 0;\n   position: absolute;\n   top: 0;\n   z-index: 1;\n}\n\n\n:root .mejs__poster-img {\n   display: none;\n}\n\n\n.mejs__poster-img {\n   border: 0;\n   padding: 0;\n}\n\n\n.mejs__overlay {\n   -webkit-box-align: center;\n   -ms-flex-align: center;\n   align-items: center;\n   display: -webkit-box;\n   display: -ms-flexbox;\n   display: flex;\n   -webkit-box-pack: center;\n   -ms-flex-pack: center;\n   justify-content: center;\n   left: 0;\n   position: absolute;\n   top: 0;\n}\n\n\n.mejs__layer {\n   z-index: 1;\n}\n\n\n.mejs__overlay-play {\n   cursor: pointer;\n}\n\n\n.mejs__overlay-button {\n   \n   background-position: 0 -39px;\n   height: 80px;\n   width: 80px;\n}\n\n\n.mejs__overlay:hover > .mejs__overlay-button {\n   background-position: -80px -39px;\n}\n\n\n.mejs__overlay-loading {\n   height: 80px;\n   width: 80px;\n}\n\n\n.mejs__overlay-loading-bg-img {\n   -webkit-animation: mejs__loading-spinner 1s linear infinite;\n   animation: mejs__loading-spinner 1s linear infinite;\n   \n   display: block;\n   height: 80px;\n   width: 80px;\n   z-index: 1;\n}\n\n\n@-webkit-keyframes mejs__loading-spinner {\n   100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n   }\n\n}\n\n\n@keyframes mejs__loading-spinner {\n   100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n   }\n\n}\n\n\n/* End: LAYERS */\n\n\n/* Start: CONTROL BAR */\n\n\n.mejs__controls {\n   bottom: 0;\n   display: -webkit-box;\n   display: -ms-flexbox;\n   display: flex;\n   height: 40px;\n   left: 0;\n   list-style-type: none;\n   margin: 0;\n   padding: 0 10px;\n   position: absolute;\n   width: 100%;\n   z-index: 3;\n}\n\n\n.mejs__controls:not([style*='display:none']) {\n   background: rgba(255, 0, 0, 0.7);\n   background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.35)));\n   background: linear-gradient(transparent, rgba(0, 0, 0, 0.35));\n}\n\n\n.mejs__button,\n.mejs__time,\n.mejs__time-rail {\n   font-size: 10px;\n   height: 40px;\n   line-height: 10px;\n   margin: 0;\n   width: 32px;\n}\n\n\n.mejs__button > button {\n   border: 0;\n   cursor: pointer;\n   display: block;\n   font-size: 0;\n   height: 20px;\n   line-height: 0;\n   margin: 10px 6px;\n   overflow: hidden;\n   padding: 0;\n   position: absolute;\n   text-decoration: none;\n   width: 20px;\n}\n\n\n/* :focus for accessibility */\n\n\n.mejs__button > button:focus {\n   outline: dotted 1px #999;\n}\n\n\n.mejs__container-keyboard-inactive a,\n.mejs__container-keyboard-inactive a:focus,\n.mejs__container-keyboard-inactive button,\n.mejs__container-keyboard-inactive button:focus,\n.mejs__container-keyboard-inactive [role=slider],\n.mejs__container-keyboard-inactive [role=slider]:focus {\n   outline: 0;\n}\n\n\n/* End: CONTROL BAR */\n\n\n/* Start: Time (Current / Duration) */\n\n\n.mejs__time {\n   -webkit-box-sizing: content-box;\n           box-sizing: content-box;\n   color: #fff;\n   font-size: 11px;\n   font-weight: bold;\n   height: 24px;\n   overflow: hidden;\n   padding: 16px 6px 0;\n   text-align: center;\n   width: auto;\n}\n\n\n/* End: Time (Current / Duration) */\n\n\n/* Start: Play/Pause/Stop */\n\n\n.mejs__play > button {\n   background-position: 0 0;\n}\n\n\n.mejs__pause > button {\n   background-position: -20px 0;\n}\n\n\n.mejs__replay > button {\n   background-position: -160px 0;\n}\n\n\n/* End: Play/Pause/Stop */\n\n\n/* Start: Progress Bar */\n\n\n.mejs__time-rail {\n   direction: ltr;\n   -webkit-box-flex: 1;\n   -ms-flex-positive: 1;\n   flex-grow: 1;\n   height: 40px;\n   margin: 0 10px;\n   padding-top: 10px;\n   position: relative;\n}\n\n\n.mejs__time-total,\n.mejs__time-buffering,\n.mejs__time-loaded,\n.mejs__time-current,\n.mejs__time-float,\n.mejs__time-hovered,\n.mejs__time-float-current,\n.mejs__time-float-corner,\n.mejs__time-marker {\n   border-radius: 2px;\n   cursor: pointer;\n   display: block;\n   height: 10px;\n   position: absolute;\n}\n\n\n.mejs__time-total {\n   background: rgba(255, 255, 255, 0.3);\n   margin: 5px 0 0;\n   width: 100%;\n}\n\n\n.mejs__time-buffering {\n   -webkit-animation: buffering-stripes 2s linear infinite;\n   animation: buffering-stripes 2s linear infinite;\n   background: linear-gradient(-45deg, rgba(255, 255, 255, 0.4) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.4) 75%, transparent 75%, transparent);\n   background-size: 15px 15px;\n   width: 100%;\n}\n\n\n@-webkit-keyframes buffering-stripes {\n   from {\n      background-position: 0 0;\n   }\n\n   to {\n      background-position: 30px 0;\n   }\n\n}\n\n\n@keyframes buffering-stripes {\n   from {\n      background-position: 0 0;\n   }\n\n   to {\n      background-position: 30px 0;\n   }\n\n}\n\n\n.mejs__time-loaded {\n   background: rgba(255, 255, 255, 0.3);\n}\n\n\n.mejs__time-current,\n.mejs__time-handle-content {\n   background: rgba(255, 255, 255, 0.9);\n}\n\n\n.mejs__time-hovered {\n   background: rgba(255, 255, 255, 0.5);\n   z-index: 10;\n}\n\n\n.mejs__time-hovered.negative {\n   background: rgba(0, 0, 0, 0.2);\n}\n\n\n.mejs__time-current,\n.mejs__time-buffering,\n.mejs__time-loaded,\n.mejs__time-hovered {\n   left: 0;\n   -webkit-transform: scaleX(0);\n   transform: scaleX(0);\n   -webkit-transform-origin: 0 0;\n   transform-origin: 0 0;\n   -webkit-transition: 0.15s ease-in all;\n   transition: 0.15s ease-in all;\n   width: 100%;\n}\n\n\n.mejs__time-buffering {\n   -webkit-transform: scaleX(1);\n   transform: scaleX(1);\n}\n\n\n.mejs__time-hovered {\n   -webkit-transition: height 0.1s cubic-bezier(0.44, 0, 1, 1);\n   transition: height 0.1s cubic-bezier(0.44, 0, 1, 1);\n}\n\n\n.mejs__time-hovered.no-hover {\n   -webkit-transform: scaleX(0) !important;\n   transform: scaleX(0) !important;\n}\n\n\n.mejs__time-handle,\n.mejs__time-handle-content {\n   border: 4px solid transparent;\n   cursor: pointer;\n   left: 0;\n   position: absolute;\n   -webkit-transform: translateX(0);\n   transform: translateX(0);\n   z-index: 11;\n}\n\n\n.mejs__time-handle-content {\n   border: 4px solid rgba(255, 255, 255, 0.9);\n   border-radius: 50%;\n   height: 10px;\n   left: -7px;\n   top: -4px;\n   -webkit-transform: scale(0);\n   transform: scale(0);\n   width: 10px;\n}\n\n\n.mejs__time-rail:hover .mejs__time-handle-content,\n.mejs__time-rail .mejs__time-handle-content:focus,\n.mejs__time-rail .mejs__time-handle-content:active {\n   -webkit-transform: scale(1);\n   transform: scale(1);\n}\n\n\n.mejs__time-float {\n   background: #eee;\n   border: solid 1px #333;\n   bottom: 100%;\n   color: #111;\n   display: none;\n   height: 17px;\n   margin-bottom: 9px;\n   position: absolute;\n   text-align: center;\n   -webkit-transform: translateX(-50%);\n   transform: translateX(-50%);\n   width: 36px;\n}\n\n\n.mejs__time-float-current {\n   display: block;\n   left: 0;\n   margin: 2px;\n   text-align: center;\n   width: 30px;\n}\n\n\n.mejs__time-float-corner {\n   border: solid 5px #eee;\n   border-color: #eee transparent transparent;\n   border-radius: 0;\n   display: block;\n   height: 0;\n   left: 50%;\n   line-height: 0;\n   position: absolute;\n   top: 100%;\n   -webkit-transform: translateX(-50%);\n   transform: translateX(-50%);\n   width: 0;\n}\n\n\n.mejs__long-video .mejs__time-float {\n   margin-left: -23px;\n   width: 64px;\n}\n\n\n.mejs__long-video .mejs__time-float-current {\n   width: 60px;\n}\n\n\n.mejs__broadcast {\n   color: #fff;\n   height: 10px;\n   position: absolute;\n   top: 15px;\n   width: 100%;\n}\n\n\n/* End: Progress Bar */\n\n\n/* Start: Fullscreen */\n\n\n.mejs__fullscreen-button > button {\n   background-position: -80px 0;\n}\n\n\n.mejs__unfullscreen > button {\n   background-position: -100px 0;\n}\n\n\n/* End: Fullscreen */\n\n\n/* Start: Mute/Volume */\n\n\n.mejs__mute > button {\n   background-position: -60px 0;\n}\n\n\n.mejs__unmute > button {\n   background-position: -40px 0;\n}\n\n\n.mejs__volume-button {\n   position: relative;\n}\n\n\n.mejs__volume-button > .mejs__volume-slider {\n   -webkit-backface-visibility: hidden;\n   background: rgba(50, 50, 50, 0.7);\n   border-radius: 0;\n   bottom: 100%;\n   display: none;\n   height: 115px;\n   left: 50%;\n   margin: 0;\n   position: absolute;\n   -webkit-transform: translateX(-50%);\n   transform: translateX(-50%);\n   width: 25px;\n   z-index: 1;\n}\n\n\n.mejs__volume-button:hover {\n   border-radius: 0 0 4px 4px;\n}\n\n\n.mejs__volume-total {\n   background: rgba(255, 255, 255, 0.5);\n   height: 100px;\n   left: 50%;\n   margin: 0;\n   position: absolute;\n   top: 8px;\n   -webkit-transform: translateX(-50%);\n   transform: translateX(-50%);\n   width: 2px;\n}\n\n\n.mejs__volume-current {\n   background: rgba(255, 255, 255, 0.9);\n   left: 0;\n   margin: 0;\n   position: absolute;\n   width: 100%;\n}\n\n\n.mejs__volume-handle {\n   background: rgba(255, 255, 255, 0.9);\n   border-radius: 1px;\n   cursor: ns-resize;\n   height: 6px;\n   left: 50%;\n   position: absolute;\n   -webkit-transform: translateX(-50%);\n   transform: translateX(-50%);\n   width: 16px;\n}\n\n\n.mejs__horizontal-volume-slider {\n   display: block;\n   height: 36px;\n   position: relative;\n   vertical-align: middle;\n   width: 56px;\n}\n\n\n.mejs__horizontal-volume-total {\n   background: rgba(50, 50, 50, 0.8);\n   border-radius: 2px;\n   font-size: 1px;\n   height: 8px;\n   left: 0;\n   margin: 0;\n   padding: 0;\n   position: absolute;\n   top: 16px;\n   width: 50px;\n}\n\n\n.mejs__horizontal-volume-current {\n   background: rgba(255, 255, 255, 0.8);\n   border-radius: 2px;\n   font-size: 1px;\n   height: 100%;\n   left: 0;\n   margin: 0;\n   padding: 0;\n   position: absolute;\n   top: 0;\n   width: 100%;\n}\n\n\n.mejs__horizontal-volume-handle {\n   display: none;\n}\n\n\n/* End: Mute/Volume */\n\n\n/* Start: Track (Captions and Chapters) */\n\n\n.mejs__captions-button,\n.mejs__chapters-button {\n   position: relative;\n}\n\n\n.mejs__captions-button > button {\n   background-position: -140px 0;\n}\n\n\n.mejs__chapters-button > button {\n   background-position: -180px 0;\n}\n\n\n.mejs__captions-button > .mejs__captions-selector,\n.mejs__chapters-button > .mejs__chapters-selector {\n   background: rgba(50, 50, 50, 0.7);\n   border: solid 1px transparent;\n   border-radius: 0;\n   bottom: 100%;\n   margin-right: -43px;\n   overflow: hidden;\n   padding: 0;\n   position: absolute;\n   right: 50%;\n   visibility: visible;\n   width: 86px;\n}\n\n\n.mejs__chapters-button > .mejs__chapters-selector {\n   margin-right: -55px;\n   width: 110px;\n}\n\n\n.mejs__captions-selector-list,\n.mejs__chapters-selector-list {\n   list-style-type: none !important;\n   margin: 0;\n   overflow: hidden;\n   padding: 0;\n}\n\n\n.mejs__captions-selector-list-item,\n.mejs__chapters-selector-list-item {\n   color: #fff;\n   cursor: pointer;\n   display: block;\n   list-style-type: none !important;\n   margin: 0 0 6px;\n   overflow: hidden;\n   padding: 0;\n}\n\n\n.mejs__captions-selector-list-item:hover,\n.mejs__chapters-selector-list-item:hover {\n   background-color: #c8c8c8 !important;\n   background-color: rgba(255, 255, 255, 0.4) !important;\n}\n\n\n.mejs__captions-selector-input,\n.mejs__chapters-selector-input {\n   clear: both;\n   float: left;\n   left: -1000px;\n   margin: 3px 3px 0 5px;\n   position: absolute;\n}\n\n\n.mejs__captions-selector-label,\n.mejs__chapters-selector-label {\n   cursor: pointer;\n   float: left;\n   font-size: 10px;\n   line-height: 15px;\n   padding: 4px 10px 0;\n   width: 100%;\n}\n\n\n.mejs__captions-selected,\n.mejs__chapters-selected {\n   color: #21f8f8;\n}\n\n\n.mejs__captions-translations {\n   font-size: 10px;\n   margin: 0 0 5px;\n}\n\n\n.mejs__captions-layer {\n   bottom: 0;\n   color: #fff;\n   font-size: 16px;\n   left: 0;\n   line-height: 20px;\n   position: absolute;\n   text-align: center;\n}\n\n\n.mejs__captions-layer a {\n   color: #fff;\n   text-decoration: underline;\n}\n\n\n.mejs__captions-layer[lang=ar] {\n   font-size: 20px;\n   font-weight: normal;\n}\n\n\n.mejs__captions-position {\n   bottom: 15px;\n   left: 0;\n   position: absolute;\n   width: 100%;\n}\n\n\n.mejs__captions-position-hover {\n   bottom: 35px;\n}\n\n\n.mejs__captions-text,\n.mejs__captions-text * {\n   background: rgba(20, 20, 20, 0.5);\n   -webkit-box-shadow: 5px 0 0 rgba(20, 20, 20, 0.5), -5px 0 0 rgba(20, 20, 20, 0.5);\n           box-shadow: 5px 0 0 rgba(20, 20, 20, 0.5), -5px 0 0 rgba(20, 20, 20, 0.5);\n   padding: 0;\n   white-space: pre-wrap;\n}\n\n\n.mejs__container.mejs__hide-cues video::-webkit-media-text-track-container {\n   display: none;\n}\n\n\n/* End: Track (Captions and Chapters) */\n\n\n/* Start: Error */\n\n\n.mejs__overlay-error {\n   position: relative;\n}\n\n\n.mejs__overlay-error > img {\n   left: 0;\n   max-width: 100%;\n   position: absolute;\n   top: 0;\n   z-index: -1;\n}\n\n\n.mejs__cannotplay,\n.mejs__cannotplay a {\n   color: #fff;\n   font-size: 0.8em;\n}\n\n\n.mejs__cannotplay {\n   position: relative;\n}\n\n\n.mejs__cannotplay p,\n.mejs__cannotplay a {\n   display: inline-block;\n   padding: 0 15px;\n   width: 100%;\n}\n\n\n/* End: Error */\n\n\n/* ===================================================================\n * # prettyprint GitHub Theme \n *\n * ------------------------------------------------------------------- */\n\n\n.prettyprint {\n   background: #e5e5e5;\n   font-family: Menlo, 'Bitstream Vera Sans Mono', 'DejaVu Sans Mono', Monaco, Consolas, monospace;\n   font-size: 12px;\n   line-height: 1.5;\n   border-radius: 3px;\n   border: none;\n}\n\n\n.pln {\n   color: #333333;\n}\n\n\n@media screen {\n   .str {\n      color: #dd1144;\n   }\n\n   .kwd {\n      color: #333333;\n   }\n\n   .com {\n      color: #999988;\n   }\n\n   .typ {\n      color: #445588;\n   }\n\n   .lit {\n      color: #445588;\n   }\n\n   .pun {\n      color: #333333;\n   }\n\n   .opn {\n      color: #333333;\n   }\n\n   .clo {\n      color: #333333;\n   }\n\n   .tag {\n      color: navy;\n   }\n\n   .atn {\n      color: teal;\n   }\n\n   .atv {\n      color: #dd1144;\n   }\n\n   .dec {\n      color: #333333;\n   }\n\n   .var {\n      color: teal;\n   }\n\n   .fun {\n      color: #990000;\n   }\n\n}\n\n\n@media print, projection {\n   .str {\n      color: #006600;\n   }\n\n   .kwd {\n      color: #006;\n      font-weight: bold;\n   }\n\n   .com {\n      color: #600;\n      font-style: italic;\n   }\n\n   .typ {\n      color: #404;\n      font-weight: bold;\n   }\n\n   .lit {\n      color: #004444;\n   }\n\n   .pun,\n   .opn,\n   .clo {\n      color: #444400;\n   }\n\n   .tag {\n      color: #006;\n      font-weight: bold;\n   }\n\n   .atn {\n      color: #440044;\n   }\n\n   .atv {\n      color: #006600;\n   }\n\n}\n\n\n/* Specify class=linenums on a pre to get line numbering */\n\n\nol.linenums {\n   margin-top: 0;\n   margin-bottom: 0;\n}\n\n\n/* IE indents via margin-left */\n\n\nli.L0,\nli.L1,\nli.L2,\nli.L3,\nli.L4,\nli.L5,\nli.L6,\nli.L7,\nli.L8,\nli.L9 {\n\n   /* */\n}\n\n\n/* Alternate shading for lines */\n\n\nli.L1,\nli.L3,\nli.L5,\nli.L7,\nli.L9 {\n\n   /* */\n}\n\n\n/*# sourceMappingURL=vendor.css.map */\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map