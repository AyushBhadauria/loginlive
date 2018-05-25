webpackJsonp(["profile.module"],{

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\" class=\"loading\">Loading&#8230;</div>\n    <div *ngIf=\"!loading\" class=\"mom_story_wrapper animated fadeIn\">\n\t\n      <div class=\"container\">\n          <div class=\"momstory_heading\">\n            <span><i class=\"fa fa-user\"></i></span>\n              <h1>Profile</h1>\n              <h2>Welcome {{user?.name}}</h2>\n          </div>\n      </div>\n      \n    <div class=\"container\">\n        <div class=\"row cf\">\n            <div class=\"col-12\">\n                <div class=\"userprofile_main cf\">\n                  <div class=\"userprofile_right\">\n                    <div class=\"user_form_main01 cf\">\n                        <div class=\"user_form_main01_left cf\">\n                          <label>Full Name</label>\n                          <span> {{user?.name}}</span>\n                          </div>\n                          <div class=\"user_form_main01_right cf\">\n                          <label>Email</label>\n                        <span> {{user?.email}}</span>\n                          </div>\n                      </div>\n                      <div class=\"user_form_main01 cf\">\n                        <div class=\"user_form_main01_left cf\">\n                          <label>Contact</label>\n                          <span>{{user?.contact}}</span>\n                          </div>\n                          <div class=\"user_form_main01_left cf\">\n                            <label>Date of joining</label>\n                            <span>{{user?.date | date}}</span>\n                            </div>\n                      </div>\n                      \n                      \n                      \n                  </div>\n                  </div>\n                  \n                  \n              </div>\n      </div>\n      </div>\n  \n  </div>\n  <br>\n  <br>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
    function ProfileComponent(authService) {
        this.authService = authService;
        this.user = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn() == true) {
            this.getProfile();
        }
    };
    ProfileComponent.prototype.getProfile = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
        component: __WEBPACK_IMPORTED_MODULE_1__profile_component__["a" /* ProfileComponent */]
    }
];
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__profile_component__["a" /* ProfileComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map