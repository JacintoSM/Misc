webpackJsonp([3],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeveloperDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeveloperDetailPage = /** @class */ (function () {
    function DeveloperDetailPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appList = [];
        this.data = this.navParams.get('developer');
        for (var key in this.data.apps) {
            // console.log(this.data.apps[key]);
            this.appList.push(this.data.apps[key]);
        }
    }
    // TODO: Method about app
    DeveloperDetailPage.prototype.aboutMiscApp = function (app) {
        var prompt = this.alertCtrl.create({
            title: app + ' Login',
            message: "Enter to key secret for " + app + " app",
            inputs: [
                {
                    name: 'secret',
                    placeholder: 'Key secret'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        console.log('Ok clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    DeveloperDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-developer-detail',template:/*ion-inline-start:"C:\Users\User\Downloads\misc_app\src\pages\developer-detail\developer-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ data.name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="text-center">\n    <img [src]="data.photo"/>\n    <ion-card>\n        <ion-card-content>\n          <ion-card-title>\n            {{ data.name }}\n            </ion-card-title>\n          <p>\n            Developer Apps\n            <ion-list>\n              <button ion-item *ngFor="let app of appList"\n                      (click)="aboutMiscApp(app)">\n                 {{ app }}\n              </button>\n            </ion-list>\n          </p>\n        </ion-card-content>\n      </ion-card>\n\n\n      <div class="text-primary">\n          I\n          <ion-icon\n              name="ionic"\n              class="fa-spin fa-2x">\n          </ion-icon>NIC\n      </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Downloads\misc_app\src\pages\developer-detail\developer-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DeveloperDetailPage);
    return DeveloperDetailPage;
}());

//# sourceMappingURL=developer-detail.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_misc_misc__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// TODO: Providers

var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, _miscProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._miscProvider = _miscProvider;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.developerList = [];
        this.list = [];
        var promise = new Promise(function (resolve, reject) {
            _this._miscProvider.items.subscribe(function (data) {
                if (data.length === 0) {
                    console.log('No hay datos!!');
                    reject();
                }
                else {
                    console.log('Los datos se ha recibido correctamente');
                    resolve(true);
                }
                _this.developerList = data;
                for (var key in data) {
                    _this.list.push(data[key]);
                }
            });
        }).catch(function (err) {
            console.log('Ha ocurrido un error!!!');
        });
    }
    // TODO: Method to add a new developer
    SettingsPage.prototype.addNew = function () {
        this._miscProvider.newDeveloper(this.id, this.name, this.position);
        this.clearArray(this.list);
    };
    // TODO: Method to clean an array
    SettingsPage.prototype.clearArray = function (array) {
        while (array.length) {
            array.pop();
        }
    };
    // TODO: Method to go at HomePage
    SettingsPage.prototype.goToRoot = function () {
        this.navCtrl.setRoot(this.homePage);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\User\Downloads\misc_app\src\pages\settings\settings.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title text-uppercase>Settings</ion-title>\n    <ion-buttons>\n        <button ion-button\n                icon-only\n                (click)="goToRoot()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n <div>\n    <ion-list-header text-center text-uppercase>\n        Register\n    </ion-list-header>\n    <ion-item>\n        <ion-input type="text" placeholder="Id" type="text" [(ngModel)]="id"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input type="text" placeholder="Name" type="text" [(ngModel)]="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="Position" type="text" [(ngModel)]="position"></ion-input>\n    </ion-item>\n</div>\n\n  <button ion-button block (click)="addNew()">\n    Set Developer\n  </button>\n\n  <ion-list-header text-center text-uppercase>\n      Firebase Developer List\n  </ion-list-header>\n\n  <ion-list>\n    <ion-item *ngFor="let developer of list">\n        <h2 color="primary">{{ developer.name | uppercase }}</h2>\n        <h3>{{ developer.position }}</h3>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Downloads\misc_app\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_misc_misc__["a" /* MiscProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppsPage = /** @class */ (function () {
    function AppsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
    }
    AppsPage.prototype.toBack = function () {
        this.navCtrl.pop();
    };
    AppsPage.prototype.goToRoot = function () {
        this.navCtrl.setRoot(this.homePage);
        // this.navCtrl.popToRoot();
    };
    AppsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-apps',template:/*ion-inline-start:"C:\Users\User\Downloads\misc_app\src\pages\apps\apps.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title text-uppercase>Cities</ion-title>\n    <ion-buttons>\n        <button ion-button\n                icon-only\n                (click)="goToRoot()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n\n    <ion-card>\n      <img src="assets/imgs/cities/saopaulo.jpg"/>\n      <div class="card-title">São Paulo</div>\n      <div class="card-subtitle">41 Listings</div>\n    </ion-card>\n\n    <ion-card>\n      <img src="assets/imgs/cities/amsterdam.jpg"/>\n      <div class="card-title">Amsterdam</div>\n      <div class="card-subtitle">64 Listings</div>\n    </ion-card>\n\n    <ion-card>\n      <img src="assets/imgs/cities/sanfrancisco.jpg"/>\n      <div class="card-title">San Francisco</div>\n      <div class="card-subtitle">72 Listings</div>\n    </ion-card>\n\n    <ion-card>\n      <img src="assets/imgs/cities/madison.jpg"/>\n      <div class="card-title">Madison</div>\n      <div class="card-subtitle">28 Listings</div>\n    </ion-card>\n\n  </ion-content>\n'/*ion-inline-end:"C:\Users\User\Downloads\misc_app\src\pages\apps\apps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AppsPage);
    return AppsPage;
}());

//# sourceMappingURL=apps.js.map

/***/ }),

/***/ 169:
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
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/apps/apps.module": [
		713,
		2
	],
	"../pages/developer-detail/developer-detail.module": [
		711,
		1
	],
	"../pages/settings/settings.module": [
		712,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiscProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MiscProvider = /** @class */ (function () {
    function MiscProvider(afDB) {
        this.afDB = afDB;
        this.dbRef = this.afDB.object('/db/');
        this.items = this.dbRef.valueChanges();
    }
    MiscProvider.prototype.newDeveloper = function (id, name, position) {
        this.afDB.object('db/' + id).set({
            name: name,
            position: position
        });
    };
    MiscProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MiscProvider);
    return MiscProvider;
}());

//# sourceMappingURL=misc.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(366);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_developer_detail_developer_detail__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_apps_apps__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__firebase_config__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_misc_misc__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// TODO: AngularFire2




// TODO: Providers

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_developer_detail_developer_detail__["a" /* DeveloperDetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_apps_apps__["a" /* AppsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/developer-detail/developer-detail.module#DeveloperDetailPageModule', name: 'DeveloperDetailPage', segment: 'developer-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apps/apps.module#AppsPageModule', name: 'AppsPage', segment: 'apps', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_13__firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["a" /* AngularFireAuthModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_developer_detail_developer_detail__["a" /* DeveloperDetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_apps_apps__["a" /* AppsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_misc_misc__["a" /* MiscProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEVELOPERS; });
var DEVELOPERS = [
    {
        name: 'Michael',
        position: 'Ionic Developer',
        photo: '../assets/imgs/people1.png',
        apps: {
            first_app: 'Whatsapp',
            second_app: 'Ionic View',
            third_app: 'Java'
        }
    },
    {
        name: 'Stephen',
        position: 'Java Developer',
        photo: '../assets/imgs/people2.png',
        apps: {
            first_app: 'Gmail',
            second_app: 'Chessmaster',
            third_app: 'Spotify'
        }
    },
    {
        name: 'Jake',
        position: 'Mobile Developer',
        photo: '../assets/imgs/people3.png',
        apps: {
            first_app: 'Outlook',
            second_app: 'Marca',
            third_app: 'VsCode'
        }
    },
    {
        name: 'Sasha',
        position: 'FullStack Developer',
        photo: '../assets/imgs/people4.png',
        apps: {
            first_app: 'Youtube',
            second_app: 'iTunes',
            third_app: 'Twitter'
        }
    },
    {
        name: 'Iori',
        position: 'Phyton Developer',
        photo: '../assets/imgs/people5.png',
        apps: {
            first_app: 'IA',
            second_app: 'Plants vs Zombies',
            third_app: 'FaceTime'
        }
    },
    {
        name: 'Darek',
        position: 'Oracle Developer',
        photo: '../assets/imgs/people6.jpg',
        apps: {
            first_app: 'Facebook',
            second_app: 'Messenger',
            third_app: 'Shazam'
        }
    }
];
//# sourceMappingURL=data.developers.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_apps_apps__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        // used for an example of ngFor and navigation
        this.pages = [
            {
                title: 'Apps',
                component: __WEBPACK_IMPORTED_MODULE_5__pages_apps_apps__["a" /* AppsPage */],
            },
            {
                title: 'Options',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */]
            },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\User\Downloads\misc_app\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n          <button menuClose ion-item *ngFor="let page of pages" (click)="openPage(page)">\n            {{page.title}}\n          </button>\n        </ion-list>\n\n    <!-- <ion-list>\n        <button ion-item\n          (click)="openAppsPage()">\n          <ion-avatar item-left>\n              <img src="../assets/imgs/home.png">\n          </ion-avatar>\n          Home\n        </button>\n        <button ion-item>\n          <ion-avatar item-left>\n              <img src="../assets/imgs/apps.png">\n          </ion-avatar>\n          Apps\n        </button>\n        <button ion-item>\n          <ion-avatar item-left>\n              <img src="../assets/imgs/settings.png">\n          </ion-avatar>\n          Options\n        </button>\n        <button ion-item>\n          <ion-avatar item-left>\n              <img src="../assets/imgs/close.png">\n          </ion-avatar>\n          Close\n        </button>\n    </ion-list> -->\n    </ion-content>\n\n  </ion-menu>\n\n  <ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\User\Downloads\misc_app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyBRSSFa0NMWt1StN6ZcDiGig-AF7BRjLuU",
    authDomain: "misc-c185c.firebaseapp.com",
    databaseURL: "https://misc-c185c.firebaseio.com",
    projectId: "misc-c185c",
    storageBucket: "misc-c185c.appspot.com",
    messagingSenderId: "1035617281016"
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_developers__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__developer_detail_developer_detail__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menuCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.developerList = [];
        this.counter = 0;
        // TODO: Use this variable to push Developer Page
        this.developerPage = __WEBPACK_IMPORTED_MODULE_3__developer_detail_developer_detail__["a" /* DeveloperDetailPage */];
        this.developerList = __WEBPACK_IMPORTED_MODULE_2__data_data_developers__["a" /* DEVELOPERS */].slice(0);
        this.counter = this.developerList.length;
    }
    // TODO: Method to navigate Developer Page and send data object
    HomePage.prototype.sendDeveloperData = function (developer) {
        this.navCtrl.push(this.developerPage, { 'developer': developer });
    };
    // TODO: Method to show/hide menu
    HomePage.prototype.showMenu = function () {
        this.menuCtrl.toggle();
    };
    // TODO: Method to show a custom alert
    HomePage.prototype.aboutMiscApp = function () {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: "\n      <img src=\"../../assets/imgs/logo.png\" height=\"100\" width=\"100\">\n      <h4 ion-text color=\"danger\">Misc App</h4>\n      <p>This app is only available per this course.</p>\n      <p>\n        <br> by Ionic Framework\n        <br><i ion-text color=\"primary\">(c)</i> copyleft 2018\n        <br>Madrid\n      </p>\n    ",
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\User\Downloads\misc_app\src\pages\home\home.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title text-uppercase>Misc App</ion-title>\n        <ion-buttons>\n            <button ion-button\n                    icon-only\n                    (click)="showMenu()">\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list-header text-center text-uppercase>\n        Developers\n    </ion-list-header>\n\n    <ion-list>\n      <button ion-item *ngFor="let developer of developerList"\n          (click)="sendDeveloperData(developer)">\n          <ion-thumbnail item-left>\n              <img [src]="developer.photo">\n          </ion-thumbnail>\n        {{ developer.name }}\n      </button>\n    </ion-list>\n\n    <ion-list-header text-center text-uppercase>\n        About Misc App\n    </ion-list-header>\n\n    <button ion-button\n            block\n            color="secondary"\n            (click)="aboutMiscApp()">\n      About\n    </button>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title> {{ counter }} developers </ion-title>\n  </ion-toolbar>\n</ion-footer>\n\n\n'/*ion-inline-end:"C:\Users\User\Downloads\misc_app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[361]);
//# sourceMappingURL=main.js.map