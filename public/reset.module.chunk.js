webpackJsonp(["reset.module"],{

/***/ "../../../../../src/app/components/reset/reset.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=loading class=\"loading\">Loading&#8230;</div>\n\n<div class=\"login_wrapper\">\n\t\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row cf\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<div class=\"login_main01 animated fadeInUp\">\n\t\t\t\t\t\t<h1>Welcome To ThankMummy</h1>\n\t\t\t\t\t\t<h2>Reset Password</h2>\n\t\t\t\t\t\t<div *ngIf=\"error\" class=\"alert alert-danger\"><strong>{{error}}</strong></div>\n\t\t\t\t\t\t<div *ngIf=\"success\" class=\"alert alert-success\">{{success}}</div>\n\t\t\t\t\t\t<form  [formGroup]=\"form\" (ngSubmit)=\"onReset(form.value)\" id=\"myForm\" *ngIf=\"!success\">\n\t\t\t\t\t\t<div class=\"login_form01\">\n\t\t\t\t\t\t\t<input  type=\"password\"  formControlName=\"newPass\" placeholder=\" Enter New Password\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style=\"color:red\" *ngIf=\"newPass.touched && newPass.invalid\"  role=\"alert\">\n\t\t\t\t\t\t\t\t<div style=\"color:red\" *ngIf=\"newPass.errors.required\"><strong>New Password Is Required</strong> </div>\n\t\t\t\t\t\t\t\t<div style=\"color:red\" *ngIf=\"newPass.errors.invalidPassword\"><strong>Password should be valid</strong> </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"login_form01\">\n\t\t\t\t\t\t\t\t<input  type=\"password\"   formControlName=\"confirmPass\"  placeholder=\"Confirm  Password\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style=\"color:red\" *ngIf=\"confirmPass.touched && confirmPass.invalid\"  role=\"alert\">\n\t\t\t\t\t\t\t<div style=\"color:red\" *ngIf=\"confirmPass.errors.required\"><strong>Confirm Password Is Required</strong> </div>\n\t\t\t            </div>\n\t\t\t\t\t\t<div style=\"color:red\" *ngIf=\"confirmPass.touched && confirmPass.valid && newPass.value!=confirmPass.value\">Password Not Match</div>\n\t\t\t\t\t\t<div class=\"login_form01\">\n\t\t\t\t\t\t\t<input [disabled]=\"!form.valid\" type=\"submit\" value=\"Change Password\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\n\t</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/reset/reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_up_validators_form_validators__ = __webpack_require__("../../../../../src/app/components/sign-up/validators/form.validators.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResetComponent = /** @class */ (function () {
    function ResetComponent(route, authService, router, fb) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.loading = false;
        this.form = fb.group({
            newPass: ['', [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__sign_up_validators_form_validators__["a" /* FormValidator */].passwordValidator
                ],
            ],
            confirmPass: ['', [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required
                ],]
        }, { validator: this.passwordConfirming });
    }
    Object.defineProperty(ResetComponent.prototype, "newPass", {
        get: function () {
            return this.form.get('newPass');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetComponent.prototype, "confirmPass", {
        get: function () {
            return this.form.get('confirmPass');
        },
        enumerable: true,
        configurable: true
    });
    ResetComponent.prototype.passwordConfirming = function (c) {
        if (c.get('newPass').value !== c.get('confirmPass').value) {
            return { invalid: true };
        }
    };
    ResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (params) {
            _this.token = params.get('token');
        });
    };
    ResetComponent.prototype.onReset = function () {
        var _this = this;
        var form = this.form.value;
        this.loading = true;
        this.authService.resetPassword(this.token, form).subscribe(function (res) {
            _this.loading = false;
            if (res.success) {
                _this.success = res.msg;
                _this.loading = true;
                setTimeout(function () {
                    _this.loading = false;
                    _this.router.navigate(['/login']);
                }, 3000);
            }
            else {
                _this.error = res.msg;
            }
        });
    };
    ResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__("../../../../../src/app/components/reset/reset.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/reset/reset.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetModule", function() { return ResetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_component__ = __webpack_require__("../../../../../src/app/components/reset/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__reset_component__["a" /* ResetComponent */]
    }
];
var ResetModule = /** @class */ (function () {
    function ResetModule() {
    }
    ResetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__reset_component__["a" /* ResetComponent */],],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]]
        })
    ], ResetModule);
    return ResetModule;
}());



/***/ })

});
//# sourceMappingURL=reset.module.chunk.js.map