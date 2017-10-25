webpackJsonp([1,4],{

/***/ 344:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 344;


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(453);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/AngularJSProjects/my-app/src/main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(454);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'Welcome, Visitor!';
    }
    AppComponent.prototype.getServer2Status = function () {
        var _this = this;
        this.server2Status = 'idle waiting for request';
        this._httpService.getServer2Status().
            subscribe(function (data) { return _this.server2Status = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished"); });
    };
    AppComponent.prototype.getServer12Status = function () {
        var _this = this;
        this.server12Status = 'idle waiting for request';
        this._httpService.getServer12Status().
            subscribe(function (data) { return _this.server12Status = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished"); });
    };
    AppComponent.prototype.getServer21Status = function () {
        var _this = this;
        this.server21Status = 'idle waiting for request';
        this._httpService.getServer21Status().
            subscribe(function (data) { return _this.server21Status = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished"); });
    };
    AppComponent.prototype.getServer1Status = function () {
        var _this = this;
        console.log("inside getserver1");
        this._httpService.getServer1Status().
            subscribe(function (data) { return _this.server1Status = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished"); });
    };
    AppComponent.prototype.post = function () {
        var _this = this;
        this.postData = 'caluated tax is $560';
        this._httpService.post().
            subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished"); });
    };
    AppComponent.prototype.move = function () {
        var _this = this;
        this.moveData = 'moving data to server2....';
        this._httpService.move().
            subscribe(function (data) { return _this.moveData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished"); });
    };
    AppComponent.prototype.report = function () {
        var _this = this;
        console.log(this.zipcode);
        this._httpService.report(this.zipcode).
            subscribe(function (data) { return _this.moveData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished"); });
    };
    AppComponent.prototype.forcast = function () {
        var _this = this;
        console.log(this.city);
        this._httpService.forcast(this.city, this.days).
            subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished"); });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(611),
            styles: [__webpack_require__(610)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/AngularJSProjects/my-app/src/app.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(452);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/AngularJSProjects/my-app/src/app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppService = (function () {
    function AppService(_http) {
        this._http = _http;
    }
    AppService.prototype.getCurrentTime = function () {
        return this._http.get('http://date.jsontest.com')
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.getServer12Status = function () {
        return this._http.get('http://localhost:8080/server2status')
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.getServer2Status = function () {
        return this._http.get('http://10.104.102.122:9090/status')
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.getServer1Status = function () {
        return this._http.get('http://localhost:8080/status')
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.move = function () {
        return this._http.get('http://localhost:8080/move')
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.post = function () {
        return this._http.get('http://10.104.98.230:9090/add')
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.report = function (zipcode) {
        return this._http.get('http://localhost:8080/report/' + zipcode)
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.forcast = function (city, days) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        //var body = "City:" + city + "days:" + days
        var body = new FormData();
        body.append('City', city);
        body.append('days', days);
        console.log(body);
        return this._http.post('http://localhost:8080/forcast', body)
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.getServer21Status = function () {
        return this._http.get('http://localhost:9090/server1status')
            .map(function (res) { return res.json(); });
    };
    AppService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], AppService);
    return AppService;
    var _a;
}());
//# sourceMappingURL=C:/AngularJSProjects/my-app/src/app.service.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/AngularJSProjects/my-app/src/environment.js.map

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    color: #369;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 250%;\r\n  }"

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n    <h3>\n        {{title}}\n      </h3>\n    <div class=\"panel-group\">\n      \n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\"> Server 2 Communication</div>\n          <div class=\"panel-body\">Panel Content\n            <div class=\"form-group\">\n                <label for=\"server12status\">Server2 status from Server1</label>\n                <button (click)=\"getServer12Status()\" type=\"submit\" class=\"btn btn-primary\"id=\"server12status\">Get Status</button>\n                 <p></p>\n                <div class=\"alert alert-info\" role=\"alert\">\n                  Output:{{server12Status}}\n                </div>\n                \n\n                <label for=\"server2status\">Server2 status from Server2</label>\n                <button (click)=\"getServer2Status()\" type=\"submit\" class=\"btn btn-primary\" id=\"server2status\">Get Status</button>\n                <p ></p>\n                <div class=\"alert alert-info\" role=\"alert\">\n                    Output:{{server2Status}}\n                  </div>\n            </div>\n          </div>\n  </div>\n\n    <hr>\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">Weather Reporting and Forecasting</div>\n        <div class=\"panel-body\">\n                <div class=\"form-inline\">\n\n                      <label for=\"report\">Weather Reporting for specific area</label>\n                      <br><br>\n                      ZipCode: <input [(ngModel)]=\"zipcode\" type=\"number\" name=\"zipcode\" class=\"form-control\"><br>\n                      <p ></p>\n                      <div class=\"alert alert-success\" role=\"alert\">\n                          Report:{{moveData}}\n                        </div>\n\n                      <button  (click)=\"report()\" type=\"submit\" class=\"btn btn-primary\" id=\"report\"> Weather Report</button><br><br>\n\n\n                      <label for=\"forecast\">Weather forecast for the specific city</label>\n                      <br><br>\n                      City: <input [(ngModel)]=\"city\" type=\"text\" name=\"city\" class=\"form-control\"><br><br>\n                      Days: <input [(ngModel)]=\"days\" type=\"number\" name=\"days\" class=\"form-control\"><br><br>\n\n                      <p ></p>\n                      <div class=\"alert alert-success\" role=\"alert\" >\n                          Weather forcast after {{days}} days for your entered city {{city}}:{{postData}}\n                        </div>\n                        <button  (click)=\"forcast()\" type=\"submit\" class=\"btn btn-primary\" id=\"forecast\">Weather forecast</button>\n                </div>\n          </div>\n      </div>\n      <hr>\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\"> Server1 Communication</div>\n\n          <div class=\"panel-body\">\n          <div class=\"form-group\">\n         \n\n                <label for=\"server1status\">Server1 status from Server1</label>\n                <button  (click)=\"getServer1Status()\" type=\"submit\" class=\"btn btn-primary\" id=\"server1status\"> Get  Status</button>\n                <p ></p>\n                <div class=\"alert alert-info\" role=\"alert\">\n                    Output:{{server1Status}}\n                  </div>\n\n                <label for=\"server21status\">Server1 status from Server2</label>\n                <button  (click)=\"getServer21Status()\" type=\"submit\" class=\"btn btn-primary\" id=\"server21status\">Get  Status </button>\n                <p></p>\n                <div class=\"alert alert-info\" role=\"alert\">\n                    Output:{{server21Status}}\n                  </div>\n              </div>\n          </div>\n      </div>\n\n  </div> \n</div> "

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(345);


/***/ })

},[626]);
//# sourceMappingURL=main.bundle.map