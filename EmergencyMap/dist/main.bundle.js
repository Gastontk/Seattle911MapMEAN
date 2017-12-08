webpackJsonp([2],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container\"> \n  <h1>Map of Today's Seattle 911 Fire/Medical calls</h1>\n  <!-- <button class=\"btn btn-primary\" (click) = 'onSubmitToGoogle()'>Submit City for info from GoogleMaps</button> -->\n  <div class=\"row\">\n    <div class=\"col col-md-8\">\n      {{positions.length}} of {{addresses.length}} mapped\n          <ngui-map \n          class = 'img-responsive  '\n          style = 'height:800px;widtht:100px;'\n          zoom=\"11\" \n          center=\"47.65, -122.3321\" \n          (mapReady$)=\"onMapReady($event)\"\n          \n          (idle)=\"onIdle($event)\"\n          mapTypeId='ROADMAP'>\n            <marker *ngFor=\"let pos of positions;\" \n              [position]=\"pos\"\n              (initialized$)=\"onMarkerInit($event)\"></marker>\n        </ngui-map>\n\n    </div>\n\n\n\n\n    <div class=\"col col-md-4\">\n      <p style = 'border:solid black 1px;height: 50px;padding: 5px;'>{{message}}</p>\n     <!--  <h3>Number of Addresses Mapped: {{positions.length}}</h3>\n      <h3>Number of Addresses: {{addresses.length}}</h3>\n -->\n      <ul>\n       <a (click) = \"onclickAddress(i)\" *ngFor = 'let add of addresses; let i = index'> <li >{{add}}</li></a>\n      </ul>\n    </div>\n\n    \n  </div>\n\n\n  <!-- <div innerHTML=\"{{htmlBody}}\"></div> -->\n\n</div>\n\n\n<!-- (mapClick)=\"onMapClick($event)\" -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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




// import { Ng}
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.addresses = [];
        this.addressFix = [];
        this.message = 'Welcome!';
        this.statuses = [];
        //vars for google maps
        this.positions = [];
        this.problem = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.get911Info();
        var that = this;
        // var that = this;
        // setInterval(
        // 	function(){
        // 		that.positions = []
        // 		that.get911Info();
        // 	},10000)
    };
    AppComponent.prototype.get911Info = function () {
        var _this = this;
        this.http.get('/test').subscribe(function (data) {
            // console.log('Data returned from server');
            var htmlBody = data._body;
            // console.log(htmlBody);
            var arr = htmlBody.split(/<table/g);
            // console.log('arr[4] is', arr[4])
            var arrayHolder = arr[4];
            // console.log(arrayHolder);
            _this.individualRecord = arrayHolder.split(/">/);
            //make sure to replace number with below length so as to use all recordes
            // this.individualRecord.length;
            for (var x = 0; x < _this.individualRecord.length; x++) {
                // console.log(x);
                if (x % 6 == 0) {
                    var ind = _this.individualRecord[x];
                    var indexOfGreaterThan = ind;
                    _this.addresses.push(indexOfGreaterThan);
                    var responder = _this.individualRecord[x + 5];
                    var status = _this.individualRecord[x + 1];
                    var alive = _this.individualRecord[x + 2];
                    // console.log('status String is', status.substring(5,10))
                    var statusSubstring = status.substring(0, 22).split(/</g);
                    console.log('Alive is ', alive);
                    _this.statuses.push(statusSubstring);
                    // const indexOf = this.responder.indexOf('<');
                    // console.log('Index of < is', indexOf)
                    _this.problem.push(responder);
                }
            }
            //remove first entry in array as it is blank
            _this.addresses.splice(0, 1);
            // console.log('this.addresses is:', this.addresses);
            for (var x = 0; x < _this.addresses.length; x++) {
                //split off < to clean up back of address.
                // console.log(this.addresses[x].split(/</g));
                _this.addresses[x] = (_this.addresses[x].split(/</g)[0]);
                // console.log('results, different positions', this.addresses[x].split(/</g)[3])
                //get lat long from address
                _this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + _this.addresses[x] + ', Seattle, WA').subscribe(
                //push lat long positions into positions array for array of markers
                function (data) {
                    if (data.json().results[0].geometry != undefined) {
                        _this.positions.push(data.json().results[0].geometry.location);
                    }
                });
            }
        });
    };
    //handle link for more info
    AppComponent.prototype.onclickAddress = function (i) {
        console.log(i, 'clicked');
        var cut = this.problem[i];
        var cutIndex = cut.indexOf('<');
        this.message = 'Responders: ' + cut.substring(0, cutIndex) + '\nEvent: ' + this.statuses[i][0];
    };
    //google maps stuff and converting address into lat long
    AppComponent.prototype.onSubmitToGoogle = function () {
        this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=9014 25th ave nw, seattle, wa').subscribe(function (data) {
            console.log(data.json().results[0].geometry.location);
        });
        // const	myMapInfo = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAKWE1JinLb5yLSoxHiEjiq1CMuOqbx_s4')
        // console.log('myMapInfo is:', myMapInfo);
    };
    // methods for ng2-ui/map for Google Maps
    AppComponent.prototype.onMapReady = function (map) {
        console.log('map', map);
        console.log('markers', map.markers); // to get all markers as an array 
    };
    AppComponent.prototype.onIdle = function (event) {
        console.log('map', event.target);
    };
    AppComponent.prototype.onMarkerInit = function (marker) {
        // console.log('marker', marker);
    };
    AppComponent.prototype.onMapClick = function (event) {
        console.log(event.latLng);
        this.positions.push(event.latLng);
        event.target.panTo(event.latLng);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngui_map__ = __webpack_require__("./node_modules/@ngui/map/dist/@ngui/map.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngui_map__["a" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAKWE1JinLb5yLSoxHiEjiq1CMuOqbx_s4' }),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map