(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.title\r\n{\r\n    position: relative;\r\n    color: darkgreen;\r\n    font-size: 3em;\r\n    text-align: center;\r\n}\r\n.all\r\n{\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n.example-card{\r\n      margin-top: 4px;\r\n  }\r\n.example-header-image { \r\n    background-size: cover;\r\n  }\r\n.title{\r\n      font-weight: bold;\r\n  }\r\n.img-article{\r\n      position: relative;\r\n      height: 350px;\r\n      width: 50%;\r\n      left: 25%;\r\n  }\r\n.action-buttons{\r\n      text-align: center;\r\n  }\r\n.example-container {\r\n      /* position: relative; */\r\n      width: 100%;\r\n      height: 100%;\r\n      border: 1px solid rgba(111, 111, 111, 0.50);\r\n  }\r\n.example-sidenav-content {\r\n      display: flex;\r\n      height: 75%;\r\n      align-items: center;\r\n      justify-content: center;\r\n  }\r\n.example-sidenav {\r\n      padding: 20px;\r\n  }\r\n.source-name {\r\n      margin-left:5px; \r\n  }\r\n.list-item:hover{\r\n      cursor: pointer;\r\n      background-color: #3f51b5;\r\n      color: white;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n<!-- [class.dark-theme]=\"status\" -->\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.service */ "./src/app/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(newsapi) {
        this.newsapi = newsapi;
        this.title = 'alertingjsng';
        this.statuscolor = 'darkgreen';
        this.statustr = 'running';
        this.status = true;
        this.content = 0;
        console.log('app component constructor called');
    }
    AppComponent.prototype.ngOnInit = function () {
        this.options = ['Settings', 'Servers'];
    };
    AppComponent.prototype.changeStatus = function () {
        if (this.status) {
            this.status = false;
            this.statuscolor = 'red';
            this.statustr = 'down';
        }
        else {
            this.status = true;
            this.statuscolor = 'darkgreen';
            this.statustr = 'running';
        }
    };
    AppComponent.prototype.navPress = function (option) {
        if (option == "Settings") {
            this.content = 0;
        }
        else if (option == "Servers") {
            this.content = 1;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "./src/app/settings.service.ts");
/* harmony import */ var _servers_servers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servers/servers.service */ "./src/app/servers/servers.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _servers_servers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servers/servers.component */ "./src/app/servers/servers.component.ts");
/* harmony import */ var _serverdialog_serverdialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./serverdialog/serverdialog.component */ "./src/app/serverdialog/serverdialog.component.ts");
/* harmony import */ var _settingdialog_settingdialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settingdialog/settingdialog.component */ "./src/app/settingdialog/settingdialog.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _testingarea_testingarea_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./testingarea/testingarea.component */ "./src/app/testingarea/testingarea.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _groupdialog_groupdialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./groupdialog/groupdialog.component */ "./src/app/groupdialog/groupdialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { Field } from './servers/servers.component';








var appRoutes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_15__["MainComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"],
                _servers_servers_component__WEBPACK_IMPORTED_MODULE_11__["ServersComponent"],
                _serverdialog_serverdialog_component__WEBPACK_IMPORTED_MODULE_12__["ServerdialogComponent"],
                _settingdialog_settingdialog_component__WEBPACK_IMPORTED_MODULE_13__["SettingdialogComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_15__["MainComponent"],
                _testingarea_testingarea_component__WEBPACK_IMPORTED_MODULE_17__["TestingareaComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _groupdialog_groupdialog_component__WEBPACK_IMPORTED_MODULE_19__["GroupdialogComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes)
            ],
            entryComponents: [
                _serverdialog_serverdialog_component__WEBPACK_IMPORTED_MODULE_12__["ServerdialogComponent"],
                _settingdialog_settingdialog_component__WEBPACK_IMPORTED_MODULE_13__["SettingdialogComponent"],
                _groupdialog_groupdialog_component__WEBPACK_IMPORTED_MODULE_19__["GroupdialogComponent"]
            ],
            providers: [_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _servers_servers_service__WEBPACK_IMPORTED_MODULE_4__["ServersService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/groupdialog/groupdialog.component.css":
/*!*******************************************************!*\
  !*** ./src/app/groupdialog/groupdialog.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".middle\r\n{\r\n    text-align: center; \r\n}\r\n.example-spacer {\r\n    flex: 1 0 auto;\r\n  }\r\n.bot\r\n{\r\n    position: relative;\r\n    margin-bottom: 0;\r\n    top: 1em;\r\n    padding: 0;\r\n    margin: 0;\r\n    bottom: 0;\r\n}\r\n.field\r\n{\r\n    height: 100%;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/groupdialog/groupdialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/groupdialog/groupdialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title class=\"middle\">Change group for {{data.server}}</h1>\n<div mat-dialog-content class=\"middle\">\n  \n  <mat-form-field class=\"field\">\n        <!-- <input matInput [(ngModel)]=\"data.mails\"> -->\n        <!-- <textarea matInput placeholder=\"Type:\" [(ngModel)]=\"data.group\">{{data.group}}</textarea> -->\n        <!-- <mat-form-field> -->\n          <mat-label >current group: {{data.group}}</mat-label>\n          <mat-select [(ngModel)]=\"data.group\" #fontSize value=\"16px\" (selectionChange)=\"triggerResize($event)\">\n            <mat-option *ngFor=\"let a of data.grouplist\" [value]=\"a\">{{a}}</mat-option>\n          </mat-select>\n        <!-- </mat-form-field> -->\n        <mat-hint align=\"start\"><strong>Tag the server with group name</strong> </mat-hint>\n  </mat-form-field>\n</div>\n<div mat-dialog-actions class=\"bot\">\n    <!-- <button mat-button (click)=\"onNoClick()\">nvm</button> -->\n    <button mat-button mat-dialog-close>back</button>\n    <span class=\"example-spacer\"></span>\n    <button mat-button [mat-dialog-close]=\"data\">Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/groupdialog/groupdialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/groupdialog/groupdialog.component.ts ***!
  \******************************************************/
/*! exports provided: GroupdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupdialogComponent", function() { return GroupdialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var GroupdialogComponent = /** @class */ (function () {
    function GroupdialogComponent(dialogRef, data, ngZone) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.ngZone = ngZone;
    }
    GroupdialogComponent.prototype.ngOnInit = function () {
    };
    GroupdialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    // @ViewChild('autosize') autosize: CdkTextareaAutosize;
    GroupdialogComponent.prototype.triggerResize = function (data) {
        // Wait for changes to be applied, then trigger textarea resize.
        // this.ngZone.onStable.pipe(take(1))
        //     .subscribe(() => this.autosize.resizeToFitContent(true));
    };
    GroupdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-groupdialog',
            template: __webpack_require__(/*! ./groupdialog.component.html */ "./src/app/groupdialog/groupdialog.component.html"),
            styles: [__webpack_require__(/*! ./groupdialog.component.css */ "./src/app/groupdialog/groupdialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], GroupdialogComponent);
    return GroupdialogComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all\r\n{\r\n    /* position: absolute; */\r\n    overflow-y: hidden;\r\n    height: auto;\r\n}\r\n.title\r\n{\r\n    position: relative;\r\n    /* color: darkgreen; */\r\n    font-size: 2em;\r\n    text-align: center;\r\n}\r\n.subtitle\r\n{\r\n    position: relative;\r\n    /* color: darkgreen; */\r\n    font-size: 1em;\r\n    text-align: center;\r\n    /* text-overflow: ellipsis; */\r\n    /* max-width: 20%; */\r\n}\r\n.text-danger\r\n{\r\n    color:red;\r\n    font-weight: bold;\r\n}\r\n.middle\r\n{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\n\n    <p class=\"title\"> Welcome </p>\n\n    <p class=\"subtitle\">Alerting service will show you all the needed servers and their metrics, configure who will recieve mails on critical metrics and configure many other variables of the service.</p>\n    <p class=\"subtitle\">This is early buggy alpha, its probably usable but expect alot of bugs.</p>\n    <!-- <mat-divider></mat-divider> -->\n    <br>\n    <p class=\"subtitle\"> The service is running for {{hours}} hours and {{minutes}} minutes.</p>\n    <p class=\"subtitle\"> {{mails}} mails were sent.</p>\n    <p class=\"text-danger middle\" *ngIf=\"errormsg\">{{errormsg}}</p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeapi) {
        this.homeapi = homeapi;
        this.mails = 0;
        this.hours = 0;
        this.minutes = 0;
        this.errormsg = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeapi.getCount().subscribe(function (data) {
            console.log(data);
            // var x:number = (data.minutes)/60
            // this.hours = Number(x.toFixed(2));
            var datka = data.minutes;
            _this.hours = Math.floor(datka / 60);
            datka = datka - (_this.hours * 60);
            _this.minutes = datka;
        }, function (err) {
            console.log("Error contacting home service, server down? details: " + JSON.stringify(err));
            _this.errormsg = "Error getting data from database, try again soon.";
        });
        this.homeapi.getMails().subscribe(function (data) {
            console.log(data);
            _this.mails = data.mails;
        }, function (err) {
            console.log("Error contacting home service, server down? details: " + JSON.stringify(err));
            _this.errormsg = "Error getting data from database, try again soon.";
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var host = '';
var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getCount = function () {
        return this.http.get(host + '/api/count');
    };
    HomeService.prototype.getMails = function () {
        return this.http.get(host + '/api/mails');
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .cssmagic\r\n{\r\n     position: absolute;\r\n} */\r\n/* .example-card {\r\n    position: absolute;\r\n    left: 45%;\r\n    top: 35%;\r\n  } */\r\n.mycontainer {\r\n    position: absolute;\r\n    background-color: white;\r\n    width: 50%;\r\n    height: 35%;\r\n    left: 25%;\r\n    top: 25%;\r\n    min-height: 700px;\r\n    box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);\r\n    text-align: center;\r\n  }\r\n.myform\r\n  {\r\n    /* display:block;\r\n    position: absolute;\r\n    left: 25%;\r\n    text-align: center; */\r\n    padding-top: 5%;\r\n    width: 50%;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n  }\r\n.field\r\n  {\r\n    width: 100%;\r\n    margin-top: 5%;\r\n  }\r\n.btn\r\n  {\r\n    position: relative;\r\n    bottom: 0;\r\n    display: block;\r\n    /* margin: 0 auto; */\r\n    width: 25%;\r\n    height: 10%;\r\n  }\r\n.example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n.example-container > * {\r\n    width: 100%;\r\n  }\r\n.loginbox\r\n  {\r\n    display: flex;\r\n    position: absolute;\r\n    background-color: white;\r\n    width: 50%;\r\n    height: 45%;\r\n    left: 25%;\r\n    top: 20%;\r\n    min-height: 400px;\r\n    box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);\r\n    text-align: center;\r\n  }\r\n.err\r\n  {\r\n    color: red;\r\n  }\r\n.btn[disabled]\r\n  {\r\n    cursor: not-allowed;\r\n    background-color: lightgray;\r\n  }\r\n.aboveform\r\n  {\r\n    display: inline-block;\r\n    position: absolute;\r\n    width: 100%;\r\n    /* background-color: red; */\r\n    font-size: 2em;\r\n  }\r\n.avatar\r\n  {\r\n    position: absolute;\r\n    /* width: 5%; */\r\n    height: 100%;\r\n    left: 0;\r\n    display: inline-block;\r\n    /* margin: 0 auto; */\r\n  }\r\n.logo\r\n  {\r\n    height: 50%;\r\n    display: block;\r\n    margin: 0 auto;\r\n    padding-right: 20px;\r\n  }\r\n.title\r\n{\r\n  display: inline-block;\r\n  margin: 0;\r\n  padding: 0;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"cssmagic\">\n  <mat-card class=\"example-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>Shiba Inu</mat-card-title>\n        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n          bred for hunting.\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button>LIKE</button>\n        <button mat-button>SHARE</button>\n      </mat-card-actions>\n    </mat-card>\n</div> -->\n\n<!-- <div class=\"cssmagic\">\n  <div class=\"example-container\">\n      <mat-form-field>\n        <input matInput placeholder=\"Input\">\n      </mat-form-field>\n    \n      <mat-form-field>\n        <textarea matInput placeholder=\"Textarea\"></textarea>\n      </mat-form-field>\n    \n      <mat-form-field>\n        <mat-select placeholder=\"Select\">\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n      </mat-form-field>\n  </div>\n</div> -->\n\n<!-- <div class=\"cssmagic\">\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Login</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n        <form class=\"example-form\">\n            <table class=\"example-full-width\" cellspacing=\"0\">\n              <tr>\n                <td>\n                  <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\n                  </mat-form-field>\n                </td>\n              </tr>\n              <tr>\n              <td><mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Password\" [(ngModel)]=\"password\"type=\"password\" name=\"password\" required>\n              </mat-form-field></td>\n            </tr></table>\n          </form>\n      <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\n    </mat-card-actions>\n  </mat-card>\n</div> -->\n\n<!-- <div class=\"mycontainer\">\n  <form class=\"myform\">\n      <table class=\"field\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field class=\"field\">\n            <input matInput placeholder=\"Username\" class=\"field\" [(ngModel)]=\"username\" name=\"username\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n        <td><mat-form-field class=\"field\">\n          <input matInput placeholder=\"Password\" class=\"field\" [(ngModel)]=\"password\"type=\"password\" name=\"password\" required>\n        </mat-form-field></td>\n      </tr></table>\n      <button mat-raised-button (click)=\"login()\" color=\"primary\" class=\"btn\">Login</button>\n      <p>Message</p>\n    </form>\n</div> -->\n\n<div class=\"loginbox\">\n    <div class=\"aboveform\">\n      <img src=\"../../assets/images/alertpng.png\" class=\"avatar\">\n      <p class=\"title\">Hello</p>\n    </div>\n    <form class=\"myform\" #f=\"ngForm\">\n        <table class=\"field\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"field\">\n              <input matInput placeholder=\"Username\" id=\"user\" class=\"field\" [(ngModel)]=\"username\" name=\"username\" (input)=\"inputChanged($event)\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n          <td><mat-form-field class=\"field\">\n            <input matInput placeholder=\"Password\" id=\"pass\" class=\"field\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" (input)=\"inputChanged($event)\" required>\n          </mat-form-field></td>\n        </tr></table>\n        <button mat-raised-button (click)=\"login()\" color=\"primary\" class=\"btn\" [disabled]=\"!f.valid\">Login</button>\n        <p class=\"err\" *ngIf=\"err\">{{err}}</p>\n        <!-- [@slideInOut]=\"err\" -->\n      </form>\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http, loginservice) {
        this.router = router;
        this.http = http;
        this.loginservice = loginservice;
        this.valid = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log(this.valid);
    };
    LoginComponent.prototype.login = function () {
        // if(this.username == 'admin' && this.password == 'admin'){
        // this.router.navigate(["main"]);
        // }else {
        //   alert("Invalid credentials");
        // }
        var it = this;
        var req = this.http.post('/api/loginsubmit', {
            "user": this.username,
            "pass": this.password
        })
            .subscribe(function (res) {
            console.log(res);
            // var user = JSON.parse(res.user);
            if (res.auth) {
                //alert("Connecting..");
                it.router.navigate(["main"]);
            }
            else {
                //alert("Invalid credentials");
                it.err = "Invalid credentials";
            }
        }, function (err) {
            console.log("Error occured+ :: " + err);
            it.err = "Error connecting";
        });
    };
    LoginComponent.prototype.inputChanged = function ($event) {
        this.err = "";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "form", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(-5000%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0%)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var host = '';
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.postsmails = function (data) {
        return this.http.post(host + '/api/login', data);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    box-sizing: border-box;\r\n    display: block;\r\n    height: 100%;\r\n  }\r\n\r\n.title\r\n{\r\n    position: relative;\r\n    /* color: darkgreen; */\r\n    font-size: 3em;\r\n    text-align: center;\r\n}\r\n\r\n.all\r\n{\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n/* .maxheight\r\n{\r\n    height: 800px !important;\r\n} */\r\n\r\n#wrapper{\r\n    min-height: 100%; \r\n    height: 100%; \r\n    box-sizing: border-box;/*new*/\r\n  }\r\n\r\n/* .tab\r\n{\r\n    overflow: hidden;\r\n} */\r\n\r\n#tab-group{\r\n    height:90%;\r\n    /* overflow: hidden; */\r\n  }\r\n\r\n#tab-group mat-tab-body {\r\n    flex-grow: 1;\r\n  }\r\n\r\n.example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n/* .example-card{\r\n      margin-top: 4px;\r\n  } */\r\n\r\n.example-header-image { \r\n    background-size: cover;\r\n  }\r\n\r\n.title{\r\n      font-weight: bold;\r\n  }\r\n\r\n.img-article{\r\n      position: relative;\r\n      height: 350px;\r\n      width: 50%;\r\n      left: 25%;\r\n  }\r\n\r\n.action-buttons{\r\n      text-align: center;\r\n  }\r\n\r\n.example-container {\r\n      /* position: relative; */\r\n      width: 100%;\r\n      height: 100%;\r\n      /* border: 1px solid rgba(111, 111, 111, 0.50); */\r\n  }\r\n\r\n.example-sidenav-content {\r\n      display: flex;\r\n      height: 75%;\r\n      align-items: center;\r\n      justify-content: center;\r\n  }\r\n\r\n.example-sidenav {\r\n      padding: 20px;\r\n  }\r\n\r\n.source-name {\r\n      margin-left:15%; \r\n      font-size: 2em;\r\n  }\r\n\r\n.list-item\r\n  {\r\n      margin-bottom: 4%;\r\n  }\r\n\r\n.list-item:hover{\r\n      cursor: pointer;\r\n      background-color: #3f51b5;\r\n      color: white;\r\n  }\r\n\r\n.avatar\r\n  {\r\n      width: 30%;\r\n      height: 30%;\r\n      display: block;\r\n      margin: 0 auto;\r\n      padding-bottom: 10%;\r\n  }\r\n\r\n.logo\r\n  {\r\n    height: 50%;\r\n    display: block;\r\n    margin: 0 auto;\r\n    padding-right: 20px;\r\n  }"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- class all on this div -->\n<div id=\"wrapper\">\n  <mat-menu #appMenu=\"matMenu\">\n      <button mat-menu-item (click)=\"toggleTheme()\"> Switch theme </button>\n      <button mat-menu-item (click)=\"help()\"> Help </button>\n      <!-- <button mat-menu-item (click)=\"changeStatus()\"> Change status </button> -->\n      <button mat-menu-item (click)=\"logout()\"> Logout </button>\n    </mat-menu>\n    \n    \n   <mat-sidenav-container class=\"example-container\" >\n      <mat-toolbar color=\"primary\">\n        <!-- <button mat-button (click)=\"sidenav.open()\" ><mat-icon>menu</mat-icon></button> -->\n        <img src=\"../../assets/images/alertpng.png\" class=\"logo\">\n        <span>Alerting Service</span>  \n        <span class=\"example-spacer\"></span>\n        <p> buggy alpha</p>\n        <button mat-button [matMenuTriggerFor]=\"appMenu\"><mat-icon>settings</mat-icon></button>\n      </mat-toolbar>\n\n      <mat-tab-group id=\"tab-group\">\n          <mat-tab label=\"Home\" class=\"tab\">\n            <app-home></app-home>\n          </mat-tab>\n          <mat-tab label=\"Settings\" [disabled]=\"disabled\">\n            <app-settings></app-settings>\n          </mat-tab>\n          <mat-tab label=\"Servers\">\n            <app-servers></app-servers>\n          </mat-tab>\n          <!-- <mat-tab label=\"Testing area\">\n            <app-testingarea></app-testingarea>\n          </mat-tab> -->\n      </mat-tab-group>\n\n      <mat-sidenav #sidenav class=\"example-sidenav\">\n        <mat-list class=\"list-nav\">\n            <img src=\"../../assets/images/alertpng.png\" class=\"avatar\">\n            <mat-divider style=\"padding-top: 10%\"></mat-divider>\n            <mat-list-item class=\"list-item\" *ngFor=\"let source of options\" (click)=\"navPress(source[0]);sidenav.close();\">\n              <mat-icon>{{source[1]}}</mat-icon>\n              <span class=\"source-name\"> {{source[0]}}</span>\n            </mat-list-item>\n        </mat-list>\n      </mat-sidenav>\n        <!-- <p class=\"title\" color=\"primary\"> service is {{ statustr }} </p> -->\n        <!-- <app-settings *ngIf=\"content==0\"></app-settings>\n        <app-servers *ngIf=\"content==1\"></app-servers>\n        <app-testingarea *ngIf=\"content==2\"></app-testingarea> -->\n    </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var dark = 'dark-theme';
var light = 'default-theme';
var MainComponent = /** @class */ (function () {
    function MainComponent(http, router, overlayContainer) {
        this.http = http;
        this.router = router;
        this.overlayContainer = overlayContainer;
        this.host = '';
        this.title = 'alertingjsng';
        this.statuscolor = 'darkgreen';
        this.statustr = 'running';
        this.status = true;
        this.content = 0;
        this.darktheme = false;
        this.disabled = true;
        console.log('app component constructor called');
    }
    MainComponent.prototype.ngOnInit = function () {
        this.init();
    };
    MainComponent.prototype.init = function () {
        var _this = this;
        this.options = [['Settings', 'settings'], ['Servers', 'important_devices'], ['Testing area', 'brush']];
        var savedtheme = localStorage.getItem("theme");
        if (savedtheme == dark)
            this.toggleTheme();
        this.http.get(this.host + '/api/auth').subscribe(function (data) {
            if (data.admin)
                _this.disabled = false;
        });
    };
    MainComponent.prototype.changeStatus = function () {
        if (this.status) {
            this.status = false;
            this.statuscolor = 'red';
            this.statustr = 'down';
        }
        else {
            this.status = true;
            this.statuscolor = 'darkgreen';
            this.statustr = 'running';
        }
    };
    MainComponent.prototype.navPress = function (option) {
        if (option == "Settings") {
            this.content = 0;
        }
        else if (option == "Servers") {
            this.content = 1;
        }
        else if (option == "Testing area") {
            this.content = 2;
        }
        console.log(this.content);
    };
    MainComponent.prototype.toggleTheme = function () {
        // let dark = 'dark-theme';
        // let theme2 = 'light-theme';
        // let light = 'default-theme';
        this.darktheme = !this.darktheme;
        if (this.darktheme) {
            this.overlayContainer.getContainerElement().classList.add(dark);
            this.overlayContainer.getContainerElement().classList.remove(light);
            this.componentCssClass = dark;
            localStorage.setItem("theme", dark);
        }
        else {
            this.overlayContainer.getContainerElement().classList.add(light);
            this.overlayContainer.getContainerElement().classList.remove(dark);
            this.componentCssClass = light;
            localStorage.setItem("theme", light);
        }
    };
    MainComponent.prototype.logout = function () {
        var _this = this;
        this.http.get(this.host + '/api/logout').subscribe(function (data) {
            if (data.logout)
                _this.router.navigate([""]);
        });
    };
    MainComponent.prototype.help = function () {
        alert("no help in early alpha");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "componentCssClass", void 0);
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayContainer"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/serverdialog/serverdialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/serverdialog/serverdialog.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".middle\r\n{\r\n    text-align: center; \r\n}\r\n.example-spacer {\r\n    flex: 1 0 auto;\r\n  }\r\n.bot\r\n{\r\n    position: relative;\r\n    margin-bottom: 0;\r\n    top: 1em;\r\n    padding: 0;\r\n    margin: 0;\r\n    bottom: 0;\r\n}\r\n.field\r\n{\r\n    height: 100%;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/serverdialog/serverdialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/serverdialog/serverdialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title class=\"middle\">Change mail recievers for {{data.server}}</h1>\n<div mat-dialog-content class=\"middle\">\n  \n  <!-- <ul>\n    <li>\n      <span *ngIf=\"data.newmails === 'da'\">&#10003;</span> banana\n    </li>\n    <li>\n      <span *ngIf=\"data.newmails === '324'\">&#10003;</span> da\n    </li>\n    <li>\n      <span *ngIf=\"data.newmails === 'da'\">&#10003;</span> harta\n    </li>\n  </ul> -->\n  <mat-form-field class=\"field\">\n        <!-- <input matInput [(ngModel)]=\"data.mails\"> -->\n        <textarea matInput placeholder=\"Type:\" [(ngModel)]=\"data.mails\">{{data.mails}}</textarea>\n        <mat-hint align=\"start\"><strong>Include ' , ' between mails to make a list</strong> </mat-hint>\n  </mat-form-field>\n</div>\n<div mat-dialog-actions class=\"bot\">\n    <!-- <button mat-button (click)=\"onNoClick()\">nvm</button> -->\n    <button mat-button mat-dialog-close>back</button>\n    <span class=\"example-spacer\"></span>\n    <button mat-button [mat-dialog-close]=\"data\">Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/serverdialog/serverdialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/serverdialog/serverdialog.component.ts ***!
  \********************************************************/
/*! exports provided: ServerdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerdialogComponent", function() { return ServerdialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ServerdialogComponent = /** @class */ (function () {
    function ServerdialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ServerdialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ServerdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-serverdialog',
            template: __webpack_require__(/*! ./serverdialog.component.html */ "./src/app/serverdialog/serverdialog.component.html"),
            styles: [__webpack_require__(/*! ./serverdialog.component.css */ "./src/app/serverdialog/serverdialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ServerdialogComponent);
    return ServerdialogComponent;
}());

//public dialogRef: MatDialogRef<Field>,@Inject(MAT_DIALOG_DATA) public data: DialogData


/***/ }),

/***/ "./src/app/servers/servers.component.css":
/*!***********************************************!*\
  !*** ./src/app/servers/servers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all\r\n{\r\n    /* overflow-y: hidden; */\r\n    /* height: 100%;\r\n    width: 100%;\r\n    margin: 0; */\r\n}\r\n\r\ntable {\r\n    /* position: absolute; */\r\n    width: 100%;\r\n    /* left: 10%; */\r\n    /* max-height: 400px;\r\n    overflow-y: scroll; */\r\n  }\r\n\r\n.centered {\r\n    position: relative;\r\n    width: 80%;\r\n    left: 10%;\r\n  }\r\n\r\n.title\r\n{\r\n    position: relative;\r\n    /* color: darkgreen; */\r\n    font-size: 2em;\r\n    text-align: center;\r\n}\r\n\r\n.middle\r\n{\r\n    text-align: center; \r\n}\r\n\r\n.example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n.pagtool\r\n{\r\n    /* background-color: white; */\r\n}\r\n\r\n.mid\r\n{\r\n    position: fixed;\r\n    z-index: 999;\r\n    height: 2em;\r\n    width: 2em;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n.refreshbtn:hover\r\n{\r\n    color: lightblue;\r\n}\r\n\r\n.mailtd\r\n{\r\n    width: 60%;\r\n    max-width: 20em;\r\n    white-space: normal;\r\n    word-break: break-all;\r\n}\r\n\r\n.grouptd\r\n{\r\n    width: 9%;\r\n    max-width: 20em;\r\n    white-space: normal;\r\n    word-break: break-all;\r\n}\r\n\r\nhovering\r\n{\r\n\r\n}\r\n\r\n.hovering:hover\r\n{\r\n    cursor: pointer;\r\n    background-color: #3f51b5;\r\n    color: white;\r\n}\r\n\r\n/* .mailtd:hover\r\n{\r\n\r\n} */\r\n\r\n.text-danger\r\n{\r\n    color:red;\r\n    font-weight: bold;\r\n}\r\n\r\n.text-correct\r\n{\r\n    color:green;\r\n    font-weight: bold;\r\n}\r\n\r\n/* .refresh:hover\r\n{\r\n    cursor: pointer;\r\n    background-color: #3f51b5;\r\n} */\r\n\r\ntbody\r\n{\r\n    display: block;\r\n    height: 300px;\r\n    overflow: auto;\r\n}\r\n\r\nthead, tbody tr {\r\n    display:table;\r\n    width:100%;\r\n    table-layout:fixed;/* even columns width , fix width of table too*/\r\n}"

/***/ }),

/***/ "./src/app/servers/servers.component.html":
/*!************************************************!*\
  !*** ./src/app/servers/servers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- [@slideInOut] -->\n<div class=\"all\">\n  <p class=\"title\" *ngIf=\"animation\"> Servers list: </p>\n\n  <div class=\"mat-elevation-z8 centered centered\" color=\"primary\">\n    <!-- <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field> -->\n    <!-- [(ngModel)]=\"crap\" [checked]=\"false\" -->\n    <!-- <mat-checkbox *ngFor=\"let filter of filters\" style=\"margin-right: 10px;\" (change)=\"checkBoxClick(filter,$event.checked)\" color=\"warn\">{{filter}}</mat-checkbox> -->\n    <mat-checkbox *ngFor=\"let item of checklist\" [(ngModel)]=\"item.isSelected\" style=\"margin-right: 10px;\" (change)=\"checkBoxClick(item.value,$event.checked)\" color=\"warn\">{{item.value}}</mat-checkbox>\n  </div>\n  <br>\n  <div class=\"mat-elevation-z8 centered\" *ngIf=\"animation\">\n    <table mat-table [dataSource]=\"dataSource\">\n        \n        <ng-container matColumnDef=\"group\">\n          <th mat-header-cell *matHeaderCellDef> Group </th>\n          <td mat-cell *matCellDef=\"let server\" (click)=\"openGroupDialog(server.server,server.id,server.group)\" class=\"hovering grouptd\"> {{server.group}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"server\">\n            <th mat-header-cell *matHeaderCellDef> Server </th>\n            <td mat-cell *matCellDef=\"let server\"> {{server.server}} </td>\n        </ng-container>\n          \n        <ng-container matColumnDef=\"cpu\">\n          <th mat-header-cell *matHeaderCellDef> Cpu </th>\n          <td mat-cell *matCellDef=\"let server\" [class.text-danger]=\"server.cpu > peak\"> {{server.cpu}}% </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ram\">\n          <th mat-header-cell *matHeaderCellDef> Ram </th>\n          <td mat-cell *matCellDef=\"let server\" [class.text-danger]=\"server.ram > peak\" > {{server.ram}}% </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"overloaded\">\n          <th mat-header-cell *matHeaderCellDef> Overloaded? </th>\n            <td mat-cell *matCellDef=\"let server\" [class.text-danger]=\"server.overloaded\" \n            [class.text-correct]=\"!server.overloaded\">\n            <mat-icon *ngIf=\"!server.overloaded\">check</mat-icon>\n            <mat-icon *ngIf=\"server.overloaded\">priority_high</mat-icon>\n            {{server.overloaded}} </td>\n        </ng-container>\n        <!-- [ngStyle]=\"{'color:':server.overloaded === 'true' ? 'red' : 'green' }\" -->\n        <ng-container matColumnDef=\"mail\">\n          <th mat-header-cell *matHeaderCellDef> Mail receivers </th>\n          <td mat-cell *matCellDef=\"let server; let i=index\" (click)=\"openDialog(server.server,server.mail,server.id)\" class=\"hovering mailtd\"> {{server.mail}} </td>\n        </ng-container>\n\n        <thead>\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        </thead>\n        <tbody>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index\"></tr>\n        </tbody>\n      </table>\n      <mat-paginator [pageSizeOptions]=\"[10, 5, 3]\" showFirstLastButtons></mat-paginator>\n      <!-- <mat-toolbar class=\"pagtool\" color=\"accent\"> -->\n        <!-- <mat-toolbar-row> -->\n        <!--   <mat-icon (click)=\"updateTable()\" title=\"refresh\">refresh</mat-icon>\n            <span class=\"example-spacer\"></span>\n          <mat-paginator [pageSizeOptions]=\"[10, 5, 3]\" showFirstLastButtons></mat-paginator>-->\n        <!-- </mat-toolbar-row> -->\n      <!-- </mat-toolbar> -->\n      <button mat-icon-button style=\"position: absolute; bottom:10px; left:10px;\" color=\"primary\"><mat-icon (click)=\"updateTable()\" title=\"refresh\" class=\"refreshbtn\">refresh</mat-icon></button>\n      <mat-form-field style=\"position: absolute; bottom:-15px; left:80px;\">\n          <input matInput (keyup)=\"search($event.target.value)\" [disabled]=\"searchdisabled\" placeholder=\"Search\">\n      </mat-form-field>\n  </div>\n  <p class=\"text-danger middle\" *ngIf=\"errormsg\">{{errormsg}}</p>\n\n  <mat-spinner class=\"mid\" color=\"warn\" *ngIf=\"loading\"></mat-spinner>\n    <!-- <p *ngIf=\"newmails\">\n        You chose: <i>{{newmails}}</i>\n    </p> -->\n</div>"

/***/ }),

/***/ "./src/app/servers/servers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/servers/servers.component.ts ***!
  \**********************************************/
/*! exports provided: ServersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServersComponent", function() { return ServersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _serverdialog_serverdialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../serverdialog/serverdialog.component */ "./src/app/serverdialog/serverdialog.component.ts");
/* harmony import */ var _groupdialog_groupdialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../groupdialog/groupdialog.component */ "./src/app/groupdialog/groupdialog.component.ts");
/* harmony import */ var _servers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servers.service */ "./src/app/servers/servers.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings.service */ "./src/app/settings.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SERVER_DATA2 = [
    { id: 0, group: "group1", server: 'harta', cpu: 92, ram: 52, overloaded: true, mail: "dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com," +
            "dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com" },
    { id: 1, group: "group1", server: 'harta2', cpu: 22, ram: 12, overloaded: false, mail: "pringles@hey.com" },
    { id: 2, group: "group1", server: 'harta3', cpu: 62, ram: 42, overloaded: false, mail: "banan@outlook.com,jaja@bueno.nz" },
    { id: 3, group: "group1", server: 'harta324', cpu: 92, ram: 52, overloaded: true, mail: "dada@gmail.com,pringles@hey.com" },
    { id: 4, group: "group1", server: 'harta211', cpu: 22, ram: 12, overloaded: false, mail: "pringles@hey.com" }
];
var SERVER_DATA = [
    { id: 0, group: "group1", server: 'harta', cpu: 92, ram: 52, overloaded: true, mail: "dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com," +
            "dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com,dada@gmail.com,pringles@hey.com" },
    { id: 1, group: "group1", server: 'harta2', cpu: 22, ram: 12, overloaded: false, mail: "pringles@hey.com" },
    { id: 2, group: "group1", server: 'harta3', cpu: 62, ram: 42, overloaded: false, mail: "banan@outlook.com,jaja@bueno.nz" },
    { id: 3, group: "group1", server: 'harta324', cpu: 92, ram: 52, overloaded: true, mail: "dada@gmail.com,pringles@hey.com" },
    { id: 4, group: "group1", server: 'harta211', cpu: 22, ram: 12, overloaded: false, mail: "pringles@hey.com" },
    { id: 5, group: "group1", server: 'harta324', cpu: 62, ram: 42, overloaded: false, mail: "banan@outlook.com,jaja@bueno.nz" },
    { id: 6, group: "group1", server: 'harta342', cpu: 92, ram: 52, overloaded: true, mail: "dada@gmail.com,pringles@hey.com" },
    { id: 7, group: "group1", server: 'harta234', cpu: 22, ram: 12, overloaded: false, mail: "pringles@hey.com" },
    { id: 8, group: "group1", server: 'harta337', cpu: 62, ram: 42, overloaded: false, mail: "banan@outlook.com,jaja@bueno.nz" },
    { id: 9, group: "group1", server: 'harta', cpu: 92, ram: 52, overloaded: true, mail: "dada@gmail.com,pringles@hey.com" },
    { id: 10, group: "group1", server: 'harta777', cpu: 22, ram: 12, overloaded: false, mail: "pringles@hey.com" },
    { id: 11, group: "group1", server: 'harta3', cpu: 62, ram: 42, overloaded: false, mail: "banan@outlook.com,jaja@bueno.nz" },
    { id: 12, group: "group1", server: 'harta324', cpu: 92, ram: 52, overloaded: true, mail: "dada@gmail.com,pringles@hey.com" },
    { id: 13, group: "group1", server: 'harta555', cpu: 22, ram: 12, overloaded: false, mail: "pringles@hey.com" },
    { id: 14, group: "group1", server: 'harta322', cpu: 62, ram: 42, overloaded: false, mail: "banan@outlook.com,jaja@bueno.nz" }
];
var ServersComponent = /** @class */ (function () {
    function ServersComponent(dialog, serversapi, settingsapi) {
        this.dialog = dialog;
        this.serversapi = serversapi;
        this.settingsapi = settingsapi;
        // initdata:Server[]=[];
        // tempdata:Server[]=[];
        this.displayedColumns = ['group', 'server', 'cpu', 'ram', 'overloaded', 'mail'];
        this.filters = [];
        this.checkedfilters = [];
        this.checklist = [
            { value: 'Elenor Anderson', isSelected: false },
            { value: 'Caden Kunze', isSelected: true },
            { value: 'Ms. Hortense Zulauf', isSelected: true },
            { value: 'Grady Reichert', isSelected: false },
            { value: 'Dejon Olson', isSelected: false },
            { value: 'Jamir Pfannerstill', isSelected: false },
            { value: 'Aracely Renner DVM', isSelected: false },
            { value: 'Genoveva Luettgen', isSelected: false }
        ];
        this.grouplist = [];
        this.loading = false;
        this.first = true;
        this.yea = true;
        this.searchdisabled = false;
        this.crap = false;
        this.peak = 200;
        this.errormsg = "";
        this.animation = false;
    }
    ServersComponent.prototype.ngOnInit = function () {
        this.animation = true;
        //comment this pls before build, client side testing
        // this.dataSource  = new MatTableDataSource<Server>(SERVER_DATA);
        // setTimeout(() => this.dataSource.paginator = this.paginator);
        // this.grouplist = ['proservers','damoy','hamami','useless','amazing'];
        // this.makeFilters();
        // ------------------------------
        this.updateTable();
        this.first = false;
    };
    ServersComponent.prototype.updateTable = function () {
        var _this = this;
        if (!this.first)
            this.loading = true;
        this.serversapi.getServers().subscribe(function (data) {
            SERVER_DATA = data;
            SERVER_DATA.sort(function (a, b) {
                return a.id - b.id;
            });
            _this.getPeakValue();
            _this.getGroupsList();
            _this.makeFilters();
            // this.initdata= SERVER_DATA;
            // this.tempdata = SERVER_DATA;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](SERVER_DATA);
            _this.dataSource.paginator = _this.paginator;
            _this.errormsg = "";
            console.log("got new server data");
            setTimeout(function () { this.loading = false; }.bind(_this), 500);
        }, function (err) {
            console.log("Error contacting servers service, server down? details: " + JSON.stringify(err));
            _this.errormsg = "Error getting data from database, try again soon.";
            _this.loading = false;
        });
    };
    ServersComponent.prototype.makeFilters = function () {
        var group;
        this.filters = [];
        this.checklist = [];
        for (var i = 0; i < SERVER_DATA.length; i++) {
            group = SERVER_DATA[i].group;
            if (this.filters.indexOf(group) === -1) {
                this.filters.push(group);
                this.checklist.push({ value: group, isSelected: false });
            }
        }
        console.log("gwagwagwagwagwagwagwagw");
        console.log(this.filters);
    };
    ServersComponent.prototype.getPeakValue = function () {
        var _this = this;
        this.settingsapi.getSettings().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].name == "peak") {
                    var str = data[i].value;
                    var cropped = str.slice(0, str.length - 1);
                    _this.peak = Number(cropped);
                    console.log(_this.peak);
                }
            }
        }, function (err) {
            console.log("Error contacting settings service, server down? details: " + JSON.stringify(err));
            _this.errormsg = "Error getting some data from database, but overall ok";
        });
    };
    ServersComponent.prototype.getGroupsList = function () {
        var _this = this;
        var x = "proservers,damoy,hamami,useless,amazing";
        this.grouplist = x.split(',');
        this.settingsapi.getSettings().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].name == "groups") {
                    // let str = data[i].value;
                    // let cropped = str.slice(0,str.length-1)
                    _this.grouplist = data[i].value.split(',');
                    console.log(_this.grouplist);
                }
            }
        }, function (err) {
            console.log("Error contacting settings service, server down? details: " + JSON.stringify(err));
            _this.errormsg = "Error getting some data from database, but overall ok";
        });
    };
    ServersComponent.prototype.updateServers = function (data) {
        var _this = this;
        // this.makeFilters();
        this.serversapi.postmails(data).subscribe(function (res) {
            if (res.hack) {
                console.log("nice cheater");
                _this.errormsg = "Nice try, but it won't work";
            }
            else if (res.status) {
                // this.updateTable();
                console.log("succesful servers update!");
            }
            else {
                console.log("failed servers update.");
                _this.errormsg = "Error getting data from database, try again soon.";
            }
        });
    };
    ServersComponent.prototype.updateGroups = function (data) {
        var _this = this;
        this.makeFilters();
        this.serversapi.postgroups(data).subscribe(function (res) {
            if (res.hack) {
                console.log("nice cheater");
                _this.errormsg = "Nice try, but it won't work";
            }
            else if (res.status) {
                // this.updateTable();
                console.log("succesful servers update!");
            }
            else {
                console.log("failed servers update.");
                _this.errormsg = "Error getting data from database, try again soon.";
            }
        });
    };
    ServersComponent.prototype.parsemaildata = function (data) {
        var maildata = [];
        for (var i = 0; i < data.length; i++) {
            maildata.push({ server: data[i].server, mail: data[i].mail });
        }
        return maildata;
    };
    ServersComponent.prototype.openDialog = function (server, mails, index) {
        var _this = this;
        console.log(server + " " + mails + " " + index);
        var dialogRef = this.dialog.open(_serverdialog_serverdialog_component__WEBPACK_IMPORTED_MODULE_2__["ServerdialogComponent"], {
            width: '450px',
            data: { server: server, mails: mails, index: index }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result) {
                SERVER_DATA[result.index].mail = result.mails;
                _this.updateServers({ server: SERVER_DATA[result.index].server, mail: SERVER_DATA[result.index].mail });
            }
        });
    };
    ServersComponent.prototype.openGroupDialog = function (server, index, group) {
        var _this = this;
        var oldgroup = group;
        console.log(server + " " + group + " " + index);
        var dialogRef = this.dialog.open(_groupdialog_groupdialog_component__WEBPACK_IMPORTED_MODULE_3__["GroupdialogComponent"], {
            width: '450px',
            data: { server: server, index: index, group: group, grouplist: this.grouplist }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result) {
                _this.uncheckAll();
                _this.filters = [];
                _this.checkedfilters = [];
                console.log("??? " + _this.crap);
                SERVER_DATA[result.index].group = result.group;
                _this.updateGroups({ server: SERVER_DATA[result.index].server, group: SERVER_DATA[result.index].group });
                // let index = this.checkedfilters.indexOf(oldgroup);
                // this.checkedfilters.splice(index,1);
                console.log("WIPE NOW");
                // setTimeout(() => this.crap = false);
                _this.checkedfilters = [];
                console.log("aaaaaaaaaaaaAAAAAAAAAAAAAAA");
                console.log(_this.checkedfilters);
                console.log(_this.filters);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](SERVER_DATA);
                _this.dataSource.paginator = _this.paginator;
                setTimeout(function () { return _this.dataSource.paginator = _this.paginator; });
                // this.checkedfilters.push(result.group);
                // console.log("aaaaaaaaaaaaAAAAAAAAAAAAAAA");
                // console.log(this.checkedfilters);
                // this.makeFilters();
                // this.parseFilterData();
            }
        });
    };
    ServersComponent.prototype.parseFilterData = function () {
        var _this = this;
        var groups = [];
        var currentdata = SERVER_DATA;
        // this.tempdata = currentdata;
        var newdata = [];
        console.log("FUCK OFF PEICE OF SHIT " + this.checkedfilters);
        for (var i = 0; i < currentdata.length; i++) {
            for (var j = 0; j < this.checkedfilters.length; j++) {
                if (currentdata[i].group == this.checkedfilters[j]) {
                    newdata.push(currentdata[i]);
                }
            }
        }
        console.log("parsed new data");
        console.log(newdata);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](newdata);
        console.log(this.dataSource.paginator);
        console.log(this.paginator);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource.paginator);
        setTimeout(function () { return _this.dataSource.paginator = _this.paginator; });
        // setTimeout(this.poop.bind(this), 2000);
    };
    ServersComponent.prototype.checkBoxClick = function (filter, checked) {
        // let a = [];
        // a = this.dataSource.data;
        // a = a.filter((this.filterbyGroup(filter)))
        // console.log(a);
        var _this = this;
        if (checked) {
            console.log("HELLO?!?!?!? " + filter);
            this.checkedfilters.push(filter);
            for (var i = 0; i < this.checklist.length; i++) {
                if (this.checklist[i].value == filter) {
                    this.checklist[i].isSelected = true;
                }
            }
            console.log("You checked " + checked + " and here checked filters: " + this.checkedfilters);
            this.parseFilterData();
        }
        else {
            // console.log("You checked "+checked+" and here checked filters: "+this.checkedfilters);
            var index = this.checkedfilters.indexOf(filter);
            this.checkedfilters.splice(index, 1);
            for (var i = 0; i < this.checklist.length; i++) {
                if (this.checklist[i].value == filter) {
                    this.checklist[i].isSelected = false;
                }
            }
            console.log("You checked " + checked + " and here checked filters: " + this.checkedfilters);
            if (this.checkedfilters.length == 0) {
                console.log("here u should get init data..");
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](SERVER_DATA);
                setTimeout(function () { return _this.dataSource.paginator = _this.paginator; });
            }
            else {
                console.log("here u should get tmp data");
                // this.dataSource = new MatTableDataSource<Server>(this.tempdata);
                // this.dataSource.paginator = this.paginator;
                this.parseFilterData();
            }
        }
    };
    ServersComponent.prototype.uncheckAll = function () {
        for (var i = 0; i < this.checklist.length; i++) {
            this.checklist[i].isSelected = false;
        }
    };
    ServersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        console.log("HAHAH " + this.dataSource.filter);
    };
    ServersComponent.prototype.search = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        console.log("HAHAH " + this.dataSource.filter);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ServersComponent.prototype, "paginator", void 0);
    ServersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servers',
            template: __webpack_require__(/*! ./servers.component.html */ "./src/app/servers/servers.component.html"),
            styles: [__webpack_require__(/*! ./servers.component.css */ "./src/app/servers/servers.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateX(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateX(0%)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateX(0%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _servers_service__WEBPACK_IMPORTED_MODULE_4__["ServersService"], _settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])
    ], ServersComponent);
    return ServersComponent;
}());



/***/ }),

/***/ "./src/app/servers/servers.service.ts":
/*!********************************************!*\
  !*** ./src/app/servers/servers.service.ts ***!
  \********************************************/
/*! exports provided: ServersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServersService", function() { return ServersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var host = '';
var ServersService = /** @class */ (function () {
    function ServersService(http) {
        this.http = http;
    }
    ServersService.prototype.getServers = function () {
        return this.http.get(host + '/api/getservers');
    };
    ServersService.prototype.postservers = function (data) {
        return this.http.post(host + '/api/postservers', data);
    };
    ServersService.prototype.postmails = function (data) {
        return this.http.post(host + '/api/postmails', data);
    };
    ServersService.prototype.postgroups = function (data) {
        return this.http.post(host + '/api/postgroups', data);
    };
    ServersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServersService);
    return ServersService;
}());



/***/ }),

/***/ "./src/app/settingdialog/settingdialog.component.css":
/*!***********************************************************!*\
  !*** ./src/app/settingdialog/settingdialog.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".middle\r\n{\r\n    text-align: center; \r\n    /* background-color: lightblue; */\r\n}\r\n.example-spacer {\r\n    flex: 1 0 auto;\r\n  }\r\n.bot\r\n{\r\n    position: relative;\r\n    margin-bottom: 0;\r\n    top: 1em;\r\n    padding: 0;\r\n    margin: 0;\r\n    bottom: 0;\r\n    /* background-color: red; */\r\n}\r\ntextarea\r\n{\r\n    /* overflow-y: hidden; */\r\n    /* overflow-y: scroll; */\r\n}\r\n/* ::-webkit-scrollbar { \r\n    display: none; \r\n} */\r\n.field\r\n{\r\n    height: 100%;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/settingdialog/settingdialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/settingdialog/settingdialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title class=\"middle\">Change value of {{data.setting}}</h1>\n<div mat-dialog-content class=\"middle\">\n  <!-- type now -->\n  <!-- <ul>\n    <li>\n      <span *ngIf=\"data.newmails === 'da'\">&#10003;</span> banana\n    </li>\n    <li>\n      <span *ngIf=\"data.newmails === '324'\">&#10003;</span> da\n    </li>\n    <li>\n      <span *ngIf=\"data.newmails === 'da'\">&#10003;</span> harta\n    </li>\n  </ul> -->\n  <mat-form-field class=\"field\">\n        <!-- <input matInput [(ngModel)]=\"data.mails\"> -->\n        <textarea matInput placeholder=\"Type:\" [(ngModel)]=\"data.value\">{{data.value}}</textarea>\n        <!-- <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint> -->\n  </mat-form-field>\n</div>\n<div mat-dialog-actions class=\"bot\">\n    <!-- <button mat-button (click)=\"onNoClick()\">nvm</button> -->\n    <button mat-button mat-dialog-close>back</button>\n    <span class=\"example-spacer\"></span>\n    <button mat-button [mat-dialog-close]=\"data\">Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/settingdialog/settingdialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/settingdialog/settingdialog.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingdialogComponent", function() { return SettingdialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SettingdialogComponent = /** @class */ (function () {
    function SettingdialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    SettingdialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SettingdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settingdialog',
            template: __webpack_require__(/*! ./settingdialog.component.html */ "./src/app/settingdialog/settingdialog.component.html"),
            styles: [__webpack_require__(/*! ./settingdialog.component.css */ "./src/app/settingdialog/settingdialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], SettingdialogComponent);
    return SettingdialogComponent;
}());



/***/ }),

/***/ "./src/app/settings.service.ts":
/*!*************************************!*\
  !*** ./src/app/settings.service.ts ***!
  \*************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as config from './config.json';
var host = '';
// const dada:any = (<any>config);
var SettingsService = /** @class */ (function () {
    function SettingsService(http) {
        this.http = http;
    }
    SettingsService.prototype.getSettings = function () {
        return this.http.get(host + '/api/getsettings');
    };
    SettingsService.prototype.postsettings = function (data) {
        return this.http.post(host + '/api/postsettings', data);
    };
    SettingsService.prototype.resetSettings = function () {
        return this.http.get(host + '/api/initsettings');
    };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all\r\n{\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\ntable {\r\n    /* position: relative; */\r\n    width: 100%;\r\n    /* left: 10%; */\r\n  }\r\n\r\n.centered {\r\n    position: relative;\r\n    width: 80%;\r\n    left: 10%;\r\n  }\r\n\r\n.title\r\n{\r\n    position: relative;\r\n    /* color: darkgreen; */\r\n    font-size: 2em;\r\n    text-align: center;\r\n}\r\n\r\n.valuetd\r\n{\r\n    width: 80%;\r\n    max-width: 20em;\r\n    white-space: normal;\r\n    word-break: break-all;\r\n}\r\n\r\n.valuetd:hover\r\n{\r\n    cursor: pointer;\r\n    background-color: #3f51b5;\r\n    color: white;\r\n}\r\n\r\n.middle\r\n{\r\n    text-align: center; \r\n}\r\n\r\n.mid\r\n{\r\n    position: fixed;\r\n    z-index: 999;\r\n    height: 2em;\r\n    width: 2em;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n.refreshbtn:hover\r\n{\r\n    color: lightblue;\r\n}\r\n\r\n.text-danger\r\n{\r\n    color:red;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- [@slideInOut] -->\n<!-- <div class=\"all\"> -->\n  <p class=\"title\"  *ngIf=\"animation\"> Settings list: </p>\n  <div class=\"mat-elevation-z8 centered\"  *ngIf=\"animation\" >\n\n  <table mat-table [dataSource]=\"dataSource\">\n      <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Setting </th>\n          <td mat-cell *matCellDef=\"let setting\"> {{setting.name}} </td>\n      </ng-container>\n        \n      <ng-container matColumnDef=\"value\">\n        <th mat-header-cell *matHeaderCellDef> Value </th>\n        <td mat-cell *matCellDef=\"let setting; let i=index\" class=\"valuetd\" (click)=\"openDialog(setting.name,setting.value,i)\"> {{setting.value}} </td>\n      </ng-container>\n    \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index; let setting\"></tr>\n    </table>\n    <mat-paginator [pageSizeOptions]=\"[3, 5, 10]\" showFirstLastButtons></mat-paginator>\n    <button mat-icon-button style=\"position: absolute; bottom:10px; left:10px;\" color=\"primary\"><mat-icon (click)=\"updateTable()\" title=\"refresh\" class=\"refreshbtn\">refresh</mat-icon></button>\n    <button mat-icon-button style=\"position: absolute; bottom:10px; left:50px;\" color=\"primary\"><mat-icon (click)=\"resetSettings()\" title=\"reset settings\" class=\"refreshbtn\">build</mat-icon></button>\n  </div>\n  <p class=\"text-danger middle\" *ngIf=\"errormsg\">{{errormsg}}</p>\n<!-- </div> -->\n\n<mat-spinner class=\"mid\" color=\"warn\" *ngIf=\"loading\"></mat-spinner>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _settingdialog_settingdialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settingdialog/settingdialog.component */ "./src/app/settingdialog/settingdialog.component.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings.service */ "./src/app/settings.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SETTING_DATA = [
    { id: 0, name: 'ip', value: "34.324324.324324.324:3245" },
    { id: 1, name: 'peak', value: "90%" },
    { id: 2, name: 'logs', value: "/var/log/da.log" },
    { id: 3, name: 'json', value: "[\n    {\n      \"plates\": [\n        980202164,\n        \"anything\",\n        \"from\",\n        \"nodded\",\n        \"them\",\n        930041708.5745473\n      ],\n      \"cold\": -1490343731.0349832,\n      \"generally\": 759206740.9525161,\n      \"cent\": -1910939618,\n      \"any\": -1889045821.1710515,\n      \"acres\": true\n    },\n    true,\n    \"audience\",\n    true,\n    \"element\",\n    false\n  ]" }
];
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(dialog, settingsapi) {
        this.dialog = dialog;
        this.settingsapi = settingsapi;
        this.displayedColumns = ['name', 'value'];
        this.loading = false;
        this.first = true;
        this.animation = false;
        this.errormsg = "";
    }
    SettingsComponent.prototype.ngOnInit = function () {
        console.log("settings component init");
        this.animation = true;
        // this.dataSource = new MatTableDataSource<Setting>(SETTING_DATA);
        // setTimeout(() => this.dataSource.paginator = this.paginator);
        // this.dataSource.paginator = this.paginator;
        this.updateTable();
        this.first = false;
    };
    SettingsComponent.prototype.updateTable = function () {
        var _this = this;
        if (!this.first)
            this.loading = true;
        this.settingsapi.getSettings().subscribe(function (data) {
            SETTING_DATA = data;
            SETTING_DATA.sort(function (a, b) {
                return a.id - b.id;
            });
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](SETTING_DATA);
            _this.dataSource.paginator = _this.paginator;
            _this.errormsg = "";
            console.log("got new settings data");
            setTimeout(function () { this.loading = false; }.bind(_this), 500);
        }, function (err) {
            console.log("Error contacting settings service, server down? details: " + JSON.stringify(err));
            _this.errormsg = "Error getting data from database, try again soon.";
            _this.loading = false;
        });
    };
    SettingsComponent.prototype.openDialog = function (setting, value, index) {
        var _this = this;
        console.log("wawawaw " + index);
        var dialogRef = this.dialog.open(_settingdialog_settingdialog_component__WEBPACK_IMPORTED_MODULE_2__["SettingdialogComponent"], {
            width: '450px',
            data: { setting: setting, value: value, index: index }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result) {
                SETTING_DATA[result.index].value = result.value;
                _this.updateSettings(SETTING_DATA);
            }
        });
    };
    SettingsComponent.prototype.updateSettings = function (data) {
        var _this = this;
        this.settingsapi.postsettings(data).subscribe(function (res) {
            if (res.hack) {
                console.log("nice cheater");
                _this.errormsg = "Nice try, but it won't work";
            }
            else if (res.status) {
                // this.updateTable();
                console.log("succesful settings update!");
            }
            else {
                console.log("failed settings update.");
                _this.errormsg = "Error getting data from database, try again soon.";
            }
        });
    };
    SettingsComponent.prototype.resetSettings = function () {
        var _this = this;
        this.settingsapi.resetSettings().subscribe(function (res) {
            if (res.hack) {
                console.log("nice cheater");
                _this.errormsg = "Nice try, but it won't work";
            }
            else if (res.status) {
                _this.updateTable();
                console.log("succesful settings reset!");
            }
            else {
                console.log("failed settings reset.");
                _this.errormsg = "Error getting data from database, try again soon.";
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SettingsComponent.prototype, "paginator", void 0);
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0%)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/testingarea/testingarea.component.css":
/*!*******************************************************!*\
  !*** ./src/app/testingarea/testingarea.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div\r\n{\r\n    right: 50%;\r\n} */\r\n\r\ntable\r\n{\r\n    position: absolute;\r\n    right: 50%;\r\n}\r\n\r\n.da\r\n{\r\n    position: absolute;\r\n    width: 50%;\r\n    left: 25%;\r\n    text-align: center;\r\n}\r\n\r\n.example-margin {\r\n    margin: 0 10px;\r\n  }\r\n\r\n.mid\r\n{\r\n    /* position: fixed;\r\n    left: 25%;\r\n    top: 50%;\r\n    background-color: red;\r\n    width: 25%;\r\n    height: 25%; */\r\n    position: fixed;\r\n    z-index: 999;\r\n    height: 2em;\r\n    width: 2em;\r\n    overflow: visible;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    /* transform: translate(-50%,-50%); */\r\n}\r\n\r\n.example-viewport {\r\n    height: 200px;\r\n    width: 200px;\r\n    border: 1px solid black;\r\n  }\r\n\r\n.example-item {\r\n    height: 50px;\r\n  }"

/***/ }),

/***/ "./src/app/testingarea/testingarea.component.html":
/*!********************************************************!*\
  !*** ./src/app/testingarea/testingarea.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  testingarea works!\n</p>\n\n<!-- <button (click)=\"changeState()\">Change Size</button>\n<div [@EnterLeave]=currentState>da</div> -->\n\n\n<!-- <h3>Enter and Leave animation</h3>\n<button (click)=\"addItem()\">Add List</button>\n<button (click)=\"removeItem()\">Remove List</button>\n<div style=\"width:200px; margin-left: 20px\">\n  <ul>\n    <li *ngFor=\"let list of listItem\" [@EnterLeave]=\"'flyIn'\">\n      {{list}}\n    </li>\n  </ul>\n</div> -->\n\n<!-- <div [@EnterLeave]=\"test\">\n  dadada\n</div> -->\n\n<!-- <table [@EnterLeave]=\"'flyIn'\">\n<tr>\n  <td>hey</td>\n</tr>\n</table> -->\n<button (click)=\"changeState()\">Change Size</button>\n<br>\n<br>\n<br>\n<!-- [@slideInOut] -->\n<div class=\"mat-elevation-z8 centered da\" *ngIf=\"visible\" >\nmeme\n</div>\n\n<!-- <mat-progress-spinner\nclass=\"example-margin\"\n[color]=\"color\"\n[mode]=\"mode\"\n[value]=\"value\">\n</mat-progress-spinner> -->\n\n<mat-spinner class=\"mid\" color=\"warn\"></mat-spinner>\n\n<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>"

/***/ }),

/***/ "./src/app/testingarea/testingarea.component.ts":
/*!******************************************************!*\
  !*** ./src/app/testingarea/testingarea.component.ts ***!
  \******************************************************/
/*! exports provided: TestingareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingareaComponent", function() { return TestingareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// animations: [
//   trigger('EnterLeave', [
//     state('flyIn', style({ transform: 'translateX(0)' })),
//     transition(':enter', [
//       style({ transform: 'translateX(-6000%)' }),
//       animate('0.5s 300ms ease-in')
//     ]),
//     transition(':leave', [
//       animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
//     ])
//   ])
// ]
var TestingareaComponent = /** @class */ (function () {
    function TestingareaComponent() {
        this.items = Array.from({ length: 100 }).map(function (_, i) { return "Item #" + i; });
        this.visible = false;
        this.currentState = 'initial';
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.listItem = [];
        this.list_order = 1;
    }
    TestingareaComponent.prototype.ngOnInit = function () {
        this.visible = true;
        //this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
        // this.visible = true;
        console.log("hey");
    };
    TestingareaComponent.prototype.addItem = function () {
        var listitem = "ListItem " + this.list_order;
        this.list_order++;
        this.listItem.push(listitem);
    };
    TestingareaComponent.prototype.removeItem = function () {
        this.listItem.length -= 1;
    };
    // currentState = 'initial';
    TestingareaComponent.prototype.changeState = function () {
        //this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
        //this.test = this.test === 'flyIn';
    };
    TestingareaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testingarea',
            template: __webpack_require__(/*! ./testingarea.component.html */ "./src/app/testingarea/testingarea.component.html"),
            styles: [__webpack_require__(/*! ./testingarea.component.css */ "./src/app/testingarea/testingarea.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TestingareaComponent);
    return TestingareaComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Grisha\Desktop\alertingjsng\alertingjsng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map