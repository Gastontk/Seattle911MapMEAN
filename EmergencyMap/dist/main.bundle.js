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
exports.push([module.i, ".open{\n\n\tcolor:green;\n}\n\n.closed{\n\tcolor: redx;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Map of Today's Seattle 911 Fire/Medical calls</h1>\n  <!-- <button class=\"btn btn-primary\" (click) = 'onSubmitToGoogle()'>Submit City for info from GoogleMaps</button> -->\n  <div class=\"row\">\n    <div class=\"col col-md-8\">\n      {{ positions.length }} of {{ addresses.length }} mapped\n      <ngui-map\n        class=\"img-responsive  \"\n        style=\"height:1000px;width:700px;\"\n        zoom=\"11\"\n        center=\"47.65, -122.3321\"\n        (mapReady$)=\"onMapReady($event)\"\n        (idle)=\"onIdle($event)\"\n        mapTypeId=\"SATELLITE\"\n      >\n        <marker\n          *ngFor=\"let pos of positions\"\n          [position]=\"pos\"\n          (initialized$)=\"onMarkerInit($event)\"\n        ></marker>\n      </ngui-map>\n    </div>\n\n    <div class=\"col col-md-4\">\n      <p\n        style=\"border:solid black 1px;height: 50px;padding: 5px;\"\n        [ngClass]=\"color\"\n      >\n        {{ message }}\n      </p>\n      <!-- <h3>Number of Addresses Mapped: {{ positions.length }}</h3>\n      <h3>Number of Addresses: {{ addresses.length }}</h3> -->\n\n      <ul>\n        <a\n          (click)=\"onclickAddress(i)\"\n          *ngFor=\"let add of addresses; let i = index\"\n        >\n          <li>{{ add }}</li></a\n        >\n      </ul>\n    </div>\n  </div>\n\n  <!-- <div innerHTML=\"{{htmlBody}}\"></div> -->\n</div>\n\n<!-- (mapClick)=\"onMapClick($event)\" -->\n"

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




// import { Ng}
var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.addresses = [];
        this.addressFix = [];
        this.message = "Welcome!";
        this.statuses = [];
        this.openOrClosed = [];
        this.color = "";
        //vars for google maps
        this.positions = [];
        this.problem = [];
        this.x = 0;
        this.getLatLong = function (address) { return __awaiter(_this, void 0, void 0, function () {
            var that;
            return __generator(this, function (_a) {
                that = this;
                setTimeout(function () {
                    that.http
                        .get("https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDs8PY-g7xhKpbRJEGbdagYMY2Ubu1TBN8&address=" +
                        address +
                        ", Seattle, WA")
                        .subscribe(
                    //push lat long positions into positions array for array of markers
                    function (x) {
                        console.log("asddfsdfsdfsasdfasdfasdafsdfa----------", x);
                        that.positions.push(x.json().results[0].geometry.location);
                    }, 
                    // x => console.log("onNext: %s", x.json().results[0].geometry.location),
                    function (e) { return console.log("onError: %s", e); }, function () { return console.log("onCompleted"); });
                }, (this.x += 150));
                return [2 /*return*/];
            });
        }); };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.get911Info();
        var that = this;
        console.log("Initting--------------------");
        // var that = this;
        // setInterval(
        // 	function(){
        // 		that.positions = []
        // 		that.get911Info();
        // 	},10000)
    };
    AppComponent.prototype.get911Info = function () {
        var _this = this;
        console.log("getting ");
        this.http.get("/test").subscribe(function (data) {
            console.log("Data returned from server", data);
            var htmlBody = data._body;
            console.log("HTMLBody", htmlBody);
            var arr = htmlBody.split(/<table/g);
            // console.log('arr[4] is', arr[4])
            var arrayHolder = arr[4];
            console.log("arrayHolder", arrayHolder);
            _this.individualRecord = arrayHolder.split(/">/);
            //make sure to replace number with below length so as to use all recordes
            // this.individualRecord.length;
            for (var x = 0; x < _this.individualRecord.length; x++) {
                console.log("first x", _this.individualRecord[x]);
                if (x % 6 == 0) {
                    var ind = _this.individualRecord[x];
                    var indexOfGreaterThan = ind;
                    _this.addresses.push(indexOfGreaterThan);
                    var status = _this.individualRecord[x + 1];
                    var alive = _this.individualRecord[x + 2];
                    //testing
                    var open = _this.individualRecord[x + 3];
                    if (open && open.includes("closed")) {
                        // console.log("CLOSED");
                        _this.openOrClosed.push("closed");
                    }
                    else if (open && open.includes("active")) {
                        // console.log("OPEN");
                        _this.openOrClosed.push("open");
                    }
                    //testing
                    var responder = _this.individualRecord[x + 5];
                    // console.log('status String is', status.substring(5,10))
                    var statusSubstring = status.substring(0, 22).split(/</g);
                    // console.log('Alive is ', alive);
                    _this.statuses.push(statusSubstring);
                    // const indexOf = this.responder.indexOf('<');
                    // console.log('Index of < is', indexOf)
                    _this.problem.push(responder);
                }
            }
            console.log("addresses", _this.addresses);
            //remove first entry in array as it is blank
            _this.addresses.splice(0, 1);
            _this.statuses.splice(0, 1);
            // console.log('this.addresses is:', this.addresses);
            for (var x = 0; x < _this.addresses.length; x++) {
                console.log("second x", x, _this.addresses[x]);
                //split off < to clean up back of address.
                // console.log(this.addresses[x].split(/</g));
                _this.addresses[x] = _this.addresses[x].split(/</g)[0];
                console.log("results, different positions", _this.addresses[x].split(/</g)[0]);
                //get lat long from address
                _this.getLatLong(_this.addresses[x]);
                // (data) =>{
                //            if(data.json().results[0].geometry != undefined){
                //              console.log('PUshing result')
                //               this.positions.push(data.json().results[0].geometry.location);
                //            }
                //            else{
                //              console.log('AN ERROR OCCURED')
                //            }
                //        },
                // )
            }
        });
    };
    //handle link for more info
    AppComponent.prototype.onclickAddress = function (i) {
        console.log(i, "clicked");
        var cut = this.problem[i];
        var cutIndex = cut.indexOf("<");
        this.color = this.openOrClosed[i];
        this.message =
            "Responders: " +
                cut.substring(0, cutIndex) +
                "\nEvent: " +
                this.statuses[i][0] +
                "   Status:  " +
                this.openOrClosed[i];
    };
    //google maps stuff and converting address into lat long
    AppComponent.prototype.onSubmitToGoogle = function () {
        this.http
            .get("https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDs8PY-g7xhKpbRJEGbdagYMY2Ubu1TBN8&address=9014 25th ave nw, seattle, wa")
            .subscribe(function (data) {
            // console.log("may", data.json().results[0].geometry.location);
        });
        // const	myMapInfo = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAKWE1JinLb5yLSoxHiEjiq1CMuOqbx_s4')
        // console.log('myMapInfo is:', myMapInfo);
    };
    // methods for ng2-ui/map for Google Maps
    AppComponent.prototype.onMapReady = function (map) {
        console.log("map", map);
        console.log("markers", map.markers); // to get all markers as an array
    };
    AppComponent.prototype.onIdle = function (event) {
        // console.log("map", event.target);
    };
    AppComponent.prototype.onMarkerInit = function (marker) {
        console.log("marker init", marker);
    };
    AppComponent.prototype.onMapClick = function (event) {
        // console.log(event.latLng);
        this.positions.push(event.latLng);
        event.target.panTo(event.latLng);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: "app-root",
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
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngui_map__["a" /* NguiMapModule */].forRoot({
                apiUrl: "https://maps.google.com/maps/api/js?key=AIzaSyDs8PY-g7xhKpbRJEGbdagYMY2Ubu1TBN8"
            })
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