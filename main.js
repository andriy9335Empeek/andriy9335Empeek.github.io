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

/***/ "./src/app/actions/add.tofavorite.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/actions/add.tofavorite.actions.ts ***!
  \***************************************************/
/*! exports provided: manageFavoriteEpic, getFavoriteEpic, AddToFavoriteActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageFavoriteEpic", function() { return manageFavoriteEpic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoriteEpic", function() { return getFavoriteEpic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToFavoriteActions", function() { return AddToFavoriteActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var manageFavoriteEpic = function (action$) { return action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_2__["ofType"])(AddToFavoriteActions.MANAGE_FAVORITE_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
    var favorites = localStorage.getItem('favorites');
    if (favorites) {
        var favoritesToJS = JSON.parse(favorites);
        var isAlreadyFavorite = favoritesToJS.some(function (el) { return el === action.contentId; });
        if (isAlreadyFavorite) {
            var filteredFavorites = favoritesToJS.filter(function (el) { return el !== action.contentId; });
            localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(filteredFavorites);
        }
        favoritesToJS.push(action.contentId);
        localStorage.setItem('favorites', JSON.stringify(favoritesToJS));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(favoritesToJS);
    }
    localStorage.setItem('favorites', JSON.stringify([action.contentId]));
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([action.contentId]);
}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
    return { type: AddToFavoriteActions.MANAGE_FAVORITE_ACTION_SUCCESS, favorites: response };
})); };
var getFavoriteEpic = function (action$) { return action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_2__["ofType"])(AddToFavoriteActions.GET_FAVORITES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
    var favorites = localStorage.getItem('favorites');
    var favoritesToJS = favorites ? JSON.parse(favorites) : [];
    return {
        type: AddToFavoriteActions.MANAGE_FAVORITE_ACTION_SUCCESS,
        favorites: favoritesToJS,
    };
})); };
var AddToFavoriteActions = /** @class */ (function () {
    function AddToFavoriteActions() {
    }
    AddToFavoriteActions_1 = AddToFavoriteActions;
    AddToFavoriteActions.prototype.manageFavorite = function (contentId) {
        return { type: AddToFavoriteActions_1.MANAGE_FAVORITE_ACTION, contentId: contentId };
    };
    AddToFavoriteActions.prototype.getFavorites = function () {
        return { type: AddToFavoriteActions_1.GET_FAVORITES };
    };
    var AddToFavoriteActions_1;
    AddToFavoriteActions.MANAGE_FAVORITE_ACTION = 'MANAGE_FAVORITE_ACTION';
    AddToFavoriteActions.MANAGE_FAVORITE_ACTION_SUCCESS = 'MANAGE_FAVORITE_ACTION_SUCCESS';
    AddToFavoriteActions.GET_FAVORITES = 'GET_FAVORITES';
    __decorate([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["dispatch"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Object)
    ], AddToFavoriteActions.prototype, "manageFavorite", null);
    __decorate([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["dispatch"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], AddToFavoriteActions.prototype, "getFavorites", null);
    AddToFavoriteActions = AddToFavoriteActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AddToFavoriteActions);
    return AddToFavoriteActions;
}());



/***/ }),

/***/ "./src/app/actions/epics.ts":
/*!**********************************!*\
  !*** ./src/app/actions/epics.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tasks_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.actions */ "./src/app/actions/tasks.actions.ts");
/* harmony import */ var _upload_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.actions */ "./src/app/actions/upload.actions.ts");
/* harmony import */ var _get_images_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get.images.actions */ "./src/app/actions/get.images.actions.ts");
/* harmony import */ var _add_tofavorite_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add.tofavorite.actions */ "./src/app/actions/add.tofavorite.actions.ts");




/* harmony default export */ __webpack_exports__["default"] = ([
    _tasks_actions__WEBPACK_IMPORTED_MODULE_0__["epic"],
    _upload_actions__WEBPACK_IMPORTED_MODULE_1__["epicUpload"],
    _get_images_actions__WEBPACK_IMPORTED_MODULE_2__["getImageEpic"],
    _add_tofavorite_actions__WEBPACK_IMPORTED_MODULE_3__["manageFavoriteEpic"],
    _add_tofavorite_actions__WEBPACK_IMPORTED_MODULE_3__["getFavoriteEpic"],
]);


/***/ }),

/***/ "./src/app/actions/get.images.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/actions/get.images.actions.ts ***!
  \***********************************************/
/*! exports provided: getImageEpic, GetImagesActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageEpic", function() { return getImageEpic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetImagesActions", function() { return GetImagesActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ "./src/app/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var getImageEpic = function (action$) { return action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_3__["ofType"])(GetImagesActions.GET_IMAGES_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) { return Object(_api__WEBPACK_IMPORTED_MODULE_4__["getDataAction"])("https://api.thecatapi.com/v1/images/?limit=20&page=" + action.pageNumber + "&order=DESC"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return ({ type: GetImagesActions.GET_IMAGES_SUCCESS, images: response.response }); })); };
var GetImagesActions = /** @class */ (function () {
    function GetImagesActions() {
    }
    GetImagesActions_1 = GetImagesActions;
    GetImagesActions.prototype.getImages = function (pageNumber) {
        return { type: GetImagesActions_1.GET_IMAGES_REQUEST, pageNumber: pageNumber };
    };
    var GetImagesActions_1;
    GetImagesActions.GET_IMAGES_REQUEST = 'GET_IMAGES_REQUEST';
    GetImagesActions.GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';
    GetImagesActions.GET_IMAGES_ERROR = 'GET_IMAGES_ERROR';
    __decorate([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["dispatch"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Object)
    ], GetImagesActions.prototype, "getImages", null);
    GetImagesActions = GetImagesActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], GetImagesActions);
    return GetImagesActions;
}());



/***/ }),

/***/ "./src/app/actions/tasks.actions.ts":
/*!******************************************!*\
  !*** ./src/app/actions/tasks.actions.ts ***!
  \******************************************/
/*! exports provided: epic, TodoActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epic", function() { return epic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoActions", function() { return TodoActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/ajax */ "./node_modules/rxjs/_esm5/ajax/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var fetchListFulfilled = function (payload) { return ({
    type: TodoActions.FETCH_LIST_FULFILLED,
    todos: payload
}); };
var epic = function (action$) { return action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_3__["ofType"])(TodoActions.FETCH_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
    return rxjs_ajax__WEBPACK_IMPORTED_MODULE_1__["ajax"].getJSON('https://www.mocky.io/v2/5a421404300000fe0c709d12');
} // Our API
), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return fetchListFulfilled(response); })); };
var TodoActions = /** @class */ (function () {
    function TodoActions() {
    }
    TodoActions_1 = TodoActions;
    TodoActions.prototype.fetchList = function () {
        return { type: TodoActions_1.FETCH_LIST };
    };
    TodoActions.prototype.addTodo = function (name, description) {
        return { type: TodoActions_1.ADD_TODO, name: name, description: description, date: new Date() };
    };
    TodoActions.prototype.removeTodo = function (index) {
        return { type: TodoActions_1.REMOVE_TODO, index: index };
    };
    var TodoActions_1;
    TodoActions.ADD_TODO = 'ADD_TODO';
    TodoActions.REMOVE_TODO = 'REMOVE_TODO';
    TodoActions.FETCH_LIST = 'FETCH_LIST';
    TodoActions.FETCH_LIST_FULFILLED = 'FETCH_LIST_FULFILLED';
    TodoActions = TodoActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TodoActions);
    return TodoActions;
}());



/***/ }),

/***/ "./src/app/actions/upload.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/actions/upload.actions.ts ***!
  \*******************************************/
/*! exports provided: epicUpload, UploadActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epicUpload", function() { return epicUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadActions", function() { return UploadActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ "./src/app/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var epicUpload = function (action$) { return action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_4__["ofType"])(UploadActions.UPLOAD_FILE_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
    var file = new FormData();
    file.append('file', action.file);
    return Object(_api__WEBPACK_IMPORTED_MODULE_5__["postDataActions"])('https://api.thecatapi.com/v1/images/upload', file, { 'Access-Control-Allow-Origin': '*' });
}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
    console.log(response);
    return { type: UploadActions.UPLOAD_FILE_SUCCESS, image: response.response };
}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (val) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])("I caught: " + val); })); };
var UploadActions = /** @class */ (function () {
    function UploadActions() {
    }
    UploadActions_1 = UploadActions;
    UploadActions.prototype.uploadFile = function (file) {
        return { type: UploadActions_1.UPLOAD_FILE_REQUEST, file: file };
    };
    var UploadActions_1;
    UploadActions.UPLOAD_FILE_REQUEST = 'UPLOAD_FILE_REQUEST';
    UploadActions.UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
    UploadActions.UPLOAD_FILE_ERROR = 'UPLOAD_FILE_ERROR';
    __decorate([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["dispatch"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], UploadActions.prototype, "uploadFile", null);
    UploadActions = UploadActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UploadActions);
    return UploadActions;
}());



/***/ }),

/***/ "./src/app/api/index.ts":
/*!******************************!*\
  !*** ./src/app/api/index.ts ***!
  \******************************/
/*! exports provided: getDataAction, postDataActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataAction", function() { return getDataAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postDataActions", function() { return postDataActions; });
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/ajax */ "./node_modules/rxjs/_esm5/ajax/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassLD = /** @class */ (function () {
    function ClassLD() {
    }
    ClassLD.prototype.progress = function () {
        return {
            type: 'sadas',
        };
    };
    __decorate([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ClassLD.prototype, "progress", null);
    return ClassLD;
}());
var v = new ClassLD();
function dataAction(method, url, params, headers) {
    if (params === void 0) { params = null; }
    if (headers === void 0) { headers = {}; }
    var progressSubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscriber"](function (progressEvent) { v.progress(); });
    return Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_0__["ajax"])({
        method: method,
        url: url,
        body: method === 'put' || method === 'post' || method === 'path' || method === 'patch' ? params : null,
        headers: Object.assign({}, headers, { 'x-api-key': '9800a6db-8633-4af5-82b1-d9c983ba5e25' }),
        progressSubscriber: progressSubscriber,
    });
}
function getDataAction(url, params, headers) {
    if (params === void 0) { params = null; }
    if (headers === void 0) { headers = {}; }
    return dataAction('get', url, params, headers);
}
function postDataActions(url, params, headers) {
    if (params === void 0) { params = null; }
    if (headers === void 0) { headers = {}; }
    return dataAction('post', url, params, headers);
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".catImage {\n  width: 200px;\n  height: 200px;\n}\nbody {\n  padding-top: 54px;\n}\n@media (min-width: 992px) {\n  body {\n    padding-top: 56px;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-images\n  (fileChange)=\"fileChange($event)\"\n  (manageTakePhoto)=\"manageModal($event)\"\n>\n</app-images>\n<app-take-photo\n  (fileChange)=\"fileChange($event)\"\n  *ngIf=\"takePhoto\"\n  (manageTakePhoto)=\"manageModal($event)\"\n>\n</app-take-photo>\n"

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
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_tasks_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/tasks.actions */ "./src/app/actions/tasks.actions.ts");
/* harmony import */ var _actions_upload_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/upload.actions */ "./src/app/actions/upload.actions.ts");
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
    function AppComponent(ngRedux, actions, uploadActions) {
        var _this = this;
        this.ngRedux = ngRedux;
        this.actions = actions;
        this.uploadActions = uploadActions;
        this.takePhoto = false;
        this.subscriptionImages = ngRedux.select(['catsImagesState', 'catsImages'])
            .subscribe(function (data) { return _this.catImages = data; });
    }
    AppComponent.prototype.manageModal = function (takePhoto) {
        this.takePhoto = takePhoto;
    };
    AppComponent.prototype.fileChange = function (event) {
        var _this = this;
        Array.prototype.forEach.call(event.target.files, function (el) {
            _this.uploadActions.uploadFile(el);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"],
            _actions_tasks_actions__WEBPACK_IMPORTED_MODULE_2__["TodoActions"],
            _actions_upload_actions__WEBPACK_IMPORTED_MODULE_3__["UploadActions"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _actions_tasks_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/tasks.actions */ "./src/app/actions/tasks.actions.ts");
/* harmony import */ var _actions_upload_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/upload.actions */ "./src/app/actions/upload.actions.ts");
/* harmony import */ var _store_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/module */ "./src/app/store/module.ts");
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/images.component */ "./src/app/images/images.component.ts");
/* harmony import */ var _actions_get_images_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions/get.images.actions */ "./src/app/actions/get.images.actions.ts");
/* harmony import */ var _actions_add_tofavorite_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/add.tofavorite.actions */ "./src/app/actions/add.tofavorite.actions.ts");
/* harmony import */ var _images_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/image.component */ "./src/app/images/image.component.ts");
/* harmony import */ var _takephoto_takephoto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./takephoto/takephoto.component */ "./src/app/takephoto/takephoto.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! mousetrap */ "./node_modules/mousetrap/mousetrap.js");
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-modal-gallery */ "./node_modules/angular-modal-gallery/angular-modal-gallery.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__["ModalGalleryModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _store_module__WEBPACK_IMPORTED_MODULE_6__["StoreModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _images_images_component__WEBPACK_IMPORTED_MODULE_7__["ImagesComponent"],
                _images_image_component__WEBPACK_IMPORTED_MODULE_10__["ImageComponent"],
                _takephoto_takephoto_component__WEBPACK_IMPORTED_MODULE_11__["TakePhotoComponent"],
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            providers: [
                _actions_tasks_actions__WEBPACK_IMPORTED_MODULE_4__["TodoActions"],
                _actions_upload_actions__WEBPACK_IMPORTED_MODULE_5__["UploadActions"],
                _actions_get_images_actions__WEBPACK_IMPORTED_MODULE_8__["GetImagesActions"],
                _actions_add_tofavorite_actions__WEBPACK_IMPORTED_MODULE_9__["AddToFavoriteActions"],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/images/image.component.ts":
/*!*******************************************!*\
  !*** ./src/app/images/image.component.ts ***!
  \*******************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
    }
    ImageComponent.prototype.ngOnChanges = function () {
    };
    ImageComponent.prototype.imageLoad = function (event) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imgeRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImageComponent.prototype, "imgeRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImageComponent.prototype, "imageUrl", void 0);
    ImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! ./image.html */ "./src/app/images/image.html"),
            styleUrls: [],
        }),
        __metadata("design:paramtypes", [])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/images/image.html":
/*!***********************************!*\
  !*** ./src/app/images/image.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"img-fluid img-thumbnail img\" *ngIf=\"imageUrl\" (load)=\"imageLoad($event)\" src={{imageUrl}} alt=\"\" #imgeRef>\n\n"

/***/ }),

/***/ "./src/app/images/images.component.css":
/*!*********************************************!*\
  !*** ./src/app/images/images.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iconTimesWrapper {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n}\n.iconTimes {\n  color: white;\n}\n.myfile {\n  width: 109px;\n}\n"

/***/ }),

/***/ "./src/app/images/images.component.ts":
/*!********************************************!*\
  !*** ./src/app/images/images.component.ts ***!
  \********************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_upload_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/upload.actions */ "./src/app/actions/upload.actions.ts");
/* harmony import */ var _actions_get_images_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/get.images.actions */ "./src/app/actions/get.images.actions.ts");
/* harmony import */ var _actions_add_tofavorite_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/add.tofavorite.actions */ "./src/app/actions/add.tofavorite.actions.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(ngRedux, uploadActions, getImagesAgtions, manageFaforite) {
        var _this = this;
        this.ngRedux = ngRedux;
        this.uploadActions = uploadActions;
        this.getImagesAgtions = getImagesAgtions;
        this.manageFaforite = manageFaforite;
        this.fileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.manageTakePhoto = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.favorites = [];
        this.isLoading = false;
        this.imagePage = 0;
        this.imageId = '';
        this.isFavorite = false;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"];
        this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSpinner"];
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faHeart"];
        this.subscriptionImages = ngRedux.select(['catsImagesState', 'catsImages'])
            .subscribe(function (data) { return _this.images = data; });
        this.subscriptionLoading = ngRedux.select(['catsImagesState', 'loading'])
            .subscribe(function (data) {
            _this.isLoading = data;
        });
        this.subscriptionFavorites = ngRedux.select(['favoritesState', 'favorites'])
            .subscribe(function (data) {
            _this.favorites = data;
        });
        this.subscribeIsFavorite = ngRedux.select(['favoritesState', 'favorites'])
            .subscribe(function (data) {
            if (data && data.some) {
                _this.isFavorite = data.some(function (el) { return el === _this.imageId; });
            }
        });
    }
    ImagesComponent.prototype.selectImg = function (select, imageId) {
        var _this = this;
        if (!select) {
            this.isFavorite = false;
        }
        this.imageActive = select;
        this.imageId = imageId;
        this.modal.nativeElement.style.display = select ? 'block' : 'none';
        if (select && this.favorites) {
            this.isFavorite = this.favorites.some(function (el) { return el === _this.imageId; });
        }
    };
    ImagesComponent.prototype.ngOnInit = function () {
        this.getImages();
        this.manageFaforite.getFavorites();
        this.imagesWrapper.nativeElement.style.height = window.innerHeight - 29 + 'px';
    };
    ImagesComponent.prototype.ngOnDestroy = function () {
        this.subscriptionImages.unsubscribe();
        this.subscriptionLoading.unsubscribe();
        this.subscriptionFavorites.unsubscribe();
        this.subscribeIsFavorite.unsubscribe();
    };
    ImagesComponent.prototype.ngOnChanges = function () {
        console.dir('ngOnChanges');
    };
    ImagesComponent.prototype.filesChange = function (event) {
        this.fileChange.emit(event);
    };
    ImagesComponent.prototype.scrollContent = function (event) {
        var _a = event.target, scrollHeight = _a.scrollHeight, scrollTop = _a.scrollTop, clientHeight = _a.clientHeight;
        var isCloseToBottom = scrollHeight - scrollTop === clientHeight;
        if (isCloseToBottom) {
            this.getImages();
        }
    };
    ImagesComponent.prototype.markAsFavorite = function () {
        this.manageFaforite.manageFavorite(this.imageId);
    };
    ImagesComponent.prototype.getImages = function () {
        this.getImagesAgtions.getImages(this.imagePage);
        this.imagePage++;
    };
    ImagesComponent.prototype.openTakePhoto = function () {
        this.manageTakePhoto.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imagesWrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImagesComponent.prototype, "imagesWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImagesComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ImagesComponent.prototype, "fileChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ImagesComponent.prototype, "manageTakePhoto", void 0);
    ImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.html */ "./src/app/images/images.html"),
            styles: [__webpack_require__(/*! ./images.component.css */ "./src/app/images/images.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"],
            _actions_upload_actions__WEBPACK_IMPORTED_MODULE_2__["UploadActions"],
            _actions_get_images_actions__WEBPACK_IMPORTED_MODULE_3__["GetImagesActions"],
            _actions_add_tofavorite_actions__WEBPACK_IMPORTED_MODULE_4__["AddToFavoriteActions"]])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/images/images.html":
/*!************************************!*\
  !*** ./src/app/images/images.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"upload_wrapper\">\n  <input\n    multiple type=\"file\"\n    class=\"form-control-file myfile\"\n    (change)=\"filesChange($event)\"\n    id=\"exampleFormControlFile1\"\n  >\n  <button\n    type=\"button\"\n    class=\"btn btn-primary\"\n    (click)=\"openTakePhoto()\"\n  >\n    Take a photo\n  </button>\n</div>\n<div (scroll)=\"scrollContent($event)\" class=\"container images\" #imagesWrapper>\n  <div class=\"row text-center text-lg-left\">\n    <div *ngFor=\"let image of images\" class=\"col-lg-3 col-md-4 col-xs-6\">\n      <a\n        class=\"d-block mb-4 h-100 aaa\"\n        href=\"#\"\n        (click)=\"selectImg(image.url, image.id)\"\n        data-toggle=\"lightbox\"\n        data-gallery=\"example-gallery\"\n      >\n        <app-image [imageUrl]=\"image.url\"></app-image>\n      </a>\n    </div>\n  </div>\n</div>\n<div id=\"myModal\" #modal class=\"modal\">\n  <span class=\"close\" (click)=\"selectImg()\">&times;</span>\n  <div>\n    <img class=\"modal-content\" src={{imageActive}} id=\"img01\">\n  </div>\n  <div id=\"caption\"></div>\n  <div\n    class=\"iconTrashWrapper\"\n  >\n    <fa-icon class=\"iconTrash\" [icon]=\"faTrash\"></fa-icon>\n  </div>\n  <div\n    class=\"favoriteIconWrapper\"\n    (click)=\"markAsFavorite()\"\n  >\n    <fa-icon [class.iconHeartHover]=\"!isFavorite\" [class.iconHeart]=\"isFavorite\" class=\"iconTrash\" [icon]=\"faHeart\"></fa-icon>\n  </div>\n</div>\n\n<div *ngIf=\"isLoading\" class=\"coverLoading\">\n  <fa-icon class=\"loading\" [icon]=\"faSpinner\" size=\"10x\" [pulse]=\"true\"></fa-icon>\n</div>\n"

/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: rootReducer, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _reducers_cats_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/cats.images */ "./src/app/store/reducers/cats.images.ts");
/* harmony import */ var _reducers_favorites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/favorites */ "./src/app/store/reducers/favorites.ts");


function rootReducer(state, action) {
    console.dir(action);
    return {
        favoritesState: Object(_reducers_favorites__WEBPACK_IMPORTED_MODULE_1__["favoritesState"])(state.favoritesState, action),
        catsImagesState: Object(_reducers_cats_images__WEBPACK_IMPORTED_MODULE_0__["catsImagesState"])(state.catsImagesState, action),
    };
}
var initialState = {
    favoritesState: _reducers_favorites__WEBPACK_IMPORTED_MODULE_1__["favoritesInitState"],
    catsImagesState: _reducers_cats_images__WEBPACK_IMPORTED_MODULE_0__["initialCatsImagesState"],
};


/***/ }),

/***/ "./src/app/store/module.ts":
/*!*********************************!*\
  !*** ./src/app/store/module.ts ***!
  \*********************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_epics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/epics */ "./src/app/actions/epics.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ */ "./src/app/store/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var epicMid = Object(redux_observable__WEBPACK_IMPORTED_MODULE_1__["createEpicMiddleware"])();
var StoreModule = /** @class */ (function () {
    function StoreModule(ngRedux) {
        ngRedux.configureStore(___WEBPACK_IMPORTED_MODULE_4__["rootReducer"], ___WEBPACK_IMPORTED_MODULE_4__["initialState"], [epicMid], [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]);
        epicMid.run(redux_observable__WEBPACK_IMPORTED_MODULE_1__["combineEpics"].apply(void 0, _actions_epics__WEBPACK_IMPORTED_MODULE_3__["default"]));
    }
    StoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgReduxModule"]],
            declarations: [],
            bootstrap: [],
            providers: []
        }),
        __metadata("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"]])
    ], StoreModule);
    return StoreModule;
}());



/***/ }),

/***/ "./src/app/store/reducers/cats.images.ts":
/*!***********************************************!*\
  !*** ./src/app/store/reducers/cats.images.ts ***!
  \***********************************************/
/*! exports provided: initialCatsImagesState, catsImagesState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCatsImagesState", function() { return initialCatsImagesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catsImagesState", function() { return catsImagesState; });
/* harmony import */ var _actions_upload_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/upload.actions */ "./src/app/actions/upload.actions.ts");
/* harmony import */ var _actions_get_images_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/get.images.actions */ "./src/app/actions/get.images.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialCatsImagesState = {
    loading: false,
    catsImages: [],
    error: false,
};
var c = [
    {
        breed_ids: null,
        category_ids: null,
        created_at: '2018-10-10T09:16:04.000Z',
        id: 'SnEEhpzHh',
        original_filename: '09-posterization-opt.jpg',
        sub_id: null,
        url: 'https://cdn2.thecatapi.com/images/SnEEhpzHh.jpg',
    },
    {
        breed_ids: null,
        category_ids: null,
        created_at: '2018-10-09T22:18:39.000Z',
        id: 'T7aSGs9HBO',
        original_filename: 'ice.jpg',
        sub_id: null,
        url: 'https://cdn2.thecatapi.com/images/T7aSGs9HBO.jpg',
    },
    {
        breed_ids: null,
        category_ids: null,
        created_at: '2018-10-09T22:18:39.000Z',
        id: 'ufCiHPbwMY',
        original_filename: '09-posterization-opt.jpg',
        sub_id: null,
        url: 'https://cdn2.thecatapi.com/images/ufCiHPbwMY.jpg',
    },
    {
        breed_ids: null,
        category_ids: null,
        created_at: '2018-10-09T22:18:38.000Z',
        id: 'jaQo90SZl',
        original_filename: 'cat.jpg',
        sub_id: null,
        url: 'https://cdn2.thecatapi.com/images/jaQo90SZl.jpg',
    },
    {
        breed_ids: null,
        category_ids: null,
        created_at: '2018-10-09T22:06:23.000Z',
        id: 'RZAwLc6d8',
        original_filename: '09-posterization-opt.jpg',
        sub_id: null,
        url: 'https://cdn2.thecatapi.com/images/RZAwLc6d8.jpg'
    },
];
function catsImagesState(state, action) {
    if (state === void 0) { state = initialCatsImagesState; }
    var _a;
    return (_a = {},
        _a[_actions_upload_actions__WEBPACK_IMPORTED_MODULE_0__["UploadActions"].UPLOAD_FILE_REQUEST] = {
            loading: true,
            catsImages: state.catsImages.map(function (el) { return (__assign({}, el)); }),
            error: false,
        },
        _a[_actions_upload_actions__WEBPACK_IMPORTED_MODULE_0__["UploadActions"].UPLOAD_FILE_SUCCESS] = {
            loading: false,
            catsImages: [action.image].concat(state.catsImages.map(function (el) { return (__assign({}, el)); })),
            error: false,
        },
        _a[_actions_upload_actions__WEBPACK_IMPORTED_MODULE_0__["UploadActions"].UPLOAD_FILE_ERROR] = {
            loading: false,
            catsImages: state.catsImages.map(function (el) { return (__assign({}, el)); }),
            error: true,
        },
        _a[_actions_get_images_actions__WEBPACK_IMPORTED_MODULE_1__["GetImagesActions"].GET_IMAGES_REQUEST] = {
            loading: true,
            catsImages: state.catsImages.map(function (el) { return (__assign({}, el)); }),
            error: false,
        },
        _a[_actions_get_images_actions__WEBPACK_IMPORTED_MODULE_1__["GetImagesActions"].GET_IMAGES_SUCCESS] = {
            loading: false,
            catsImages: state.catsImages.map(function (el) { return (__assign({}, el)); }).concat(action.images),
            error: false,
        },
        _a[_actions_get_images_actions__WEBPACK_IMPORTED_MODULE_1__["GetImagesActions"].GET_IMAGES_ERROR] = {
            loading: false,
            catsImages: state.catsImages.map(function (el) { return (__assign({}, el)); }),
            error: true,
        },
        _a['default'] = state,
        _a)[_actions_get_images_actions__WEBPACK_IMPORTED_MODULE_1__["GetImagesActions"][action.type] || _actions_upload_actions__WEBPACK_IMPORTED_MODULE_0__["UploadActions"][action.type] || 'default'];
}
function cats(state, action) {
    if (state === void 0) { state = initialCatsImagesState; }
    switch (action.type) {
        case _actions_upload_actions__WEBPACK_IMPORTED_MODULE_0__["UploadActions"].UPLOAD_FILE_REQUEST:
            return {
                loading: true,
                catsImages: state.catsImages.map(function (el) { return (__assign({}, el)); }),
                error: false,
            };
        case _actions_upload_actions__WEBPACK_IMPORTED_MODULE_0__["UploadActions"].UPLOAD_FILE_SUCCESS:
            return {
                loading: false,
                catsImages: state.catsImages.map(function (el) { return (__assign({}, el)); }).concat([action.image]),
                error: false,
            };
        case _actions_upload_actions__WEBPACK_IMPORTED_MODULE_0__["UploadActions"].UPLOAD_FILE_ERROR:
            return {
                loading: false,
                catsImages: state.catsImages.map(function (el) { return (__assign({}, el)); }),
                error: true,
            };
        case _actions_get_images_actions__WEBPACK_IMPORTED_MODULE_1__["GetImagesActions"].GET_IMAGES_REQUEST:
            return {
                loading: true,
                catsImages: state.catsImages.map(function (el) { return (__assign({}, el)); }),
                error: false,
            };
        case _actions_get_images_actions__WEBPACK_IMPORTED_MODULE_1__["GetImagesActions"].GET_IMAGES_SUCCESS:
            return {
                loading: false,
                catsImages: state.catsImages.map(function (el) { return (__assign({}, el)); }).concat(action.images),
                error: false,
            };
        case _actions_get_images_actions__WEBPACK_IMPORTED_MODULE_1__["GetImagesActions"].GET_IMAGES_ERROR:
            return {
                loading: false,
                catsImages: state.catsImages.map(function (el) { return (__assign({}, el)); }),
                error: true,
            };
        default:
            return state;
    }
}
// const  startCatsImagesState = +new Date();
console.time('catsImagesState #1');
catsImagesState(initialCatsImagesState, { type: _actions_get_images_actions__WEBPACK_IMPORTED_MODULE_1__["GetImagesActions"].GET_IMAGES_SUCCESS, images: c });
console.timeEnd('catsImagesState #1');
// const durationCatsImagesState = +new Date() - startCatsImagesState;
// const  startCats = +new Date();
console.time('cats #1');
cats(initialCatsImagesState, { type: _actions_get_images_actions__WEBPACK_IMPORTED_MODULE_1__["GetImagesActions"].GET_IMAGES_SUCCESS, images: c });
console.timeEnd('cats #1');
// const durationCats = +new Date() - startCats;
// console.log({
//   durationCatsImagesState,
//   durationCats,
//   difference: durationCats - durationCatsImagesState,
// }, 'DURATIONS');


/***/ }),

/***/ "./src/app/store/reducers/favorites.ts":
/*!*********************************************!*\
  !*** ./src/app/store/reducers/favorites.ts ***!
  \*********************************************/
/*! exports provided: favoritesInitState, favoritesState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoritesInitState", function() { return favoritesInitState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoritesState", function() { return favoritesState; });
/* harmony import */ var _actions_add_tofavorite_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/add.tofavorite.actions */ "./src/app/actions/add.tofavorite.actions.ts");

var favoritesInitState = {
    favorites: [],
};
function favoritesState(state, action) {
    if (state === void 0) { state = favoritesInitState; }
    var _a;
    return (_a = {},
        _a[_actions_add_tofavorite_actions__WEBPACK_IMPORTED_MODULE_0__["AddToFavoriteActions"].MANAGE_FAVORITE_ACTION_SUCCESS] = {
            favorites: action.favorites,
        },
        _a['default'] = state,
        _a)[_actions_add_tofavorite_actions__WEBPACK_IMPORTED_MODULE_0__["AddToFavoriteActions"][action.type] || 'default'];
}


/***/ }),

/***/ "./src/app/takephoto/takephoto.component.css":
/*!***************************************************!*\
  !*** ./src/app/takephoto/takephoto.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".takePhotoWrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(215,215,215, .9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.videoWrapper {\n  width: 640px;\n  height: 480px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 7px 8px 80px 0px rgba(0,0,0,0.75);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.video {\n  width: 640px;\n  height: 480px;\n  background-color: black;\n}\n.iconTimesWrapper {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n}\n.iconTimes {\n  color: white;\n}\n.take {\n  position: absolute;\n  bottom: 20px;\n}\n.video {\n  width: 640px;\n  height: 480px;\n  background-color: black;\n}\n.videoCompo {\n  height: 0;\n  overflow: hidden;\n}\n.photoCompo {\n  height: 0;\n  overflow: hidden;\n}\n.iconSaveWrapper {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 999;\n}\n.iconTrashWrappera {\n  position: absolute;\n  top: 10px;\n  right: 40px;\n  z-index: 999;\n}\n.faSave {\n  color: white;\n  z-index: 999;\n}\n.faSave:hover {\n  color: skyblue;\n}\n.faTrash {\n  color: white;\n  z-index: 999;\n}\n.faTrash:hover {\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/takephoto/takephoto.component.html":
/*!****************************************************!*\
  !*** ./src/app/takephoto/takephoto.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"takePhotoWrapper\">\n  <div (click)=\"closeMenu()\" class=\"iconTimesWrapper\">\n    <fa-icon class=\"iconTimes\" [icon]=\"faTimes\"></fa-icon>\n  </div>\n  <div #videoWrapper class=\"videoWrapper\">\n    <div (click)=\"savePhoto()\" *ngIf=\"isPhotoSrc\" class=\"iconSaveWrapper\">\n      <fa-icon class=\"faSave\" [icon]=\"faSave\"></fa-icon>\n    </div>\n    <div (click)=\"clearPhoto()\" *ngIf=\"isPhotoSrc\"  class=\"iconTrashWrappera\">\n      <fa-icon class=\"faTrash\" [icon]=\"faTrash\"></fa-icon>\n    </div>\n    <video #videoComponent class=\"video\" [class.videoCompo]=\"isPhotoSrc\"></video>\n    <canvas #canvasComponent width=\"640\" height=\"480\" [class.photoCompo]=\"!isPhotoSrc\"></canvas>\n    <!--<img *ngIf=\"isPhotoSrc\" src=\"photoSrc\" alt=\"\">-->\n  </div>\n  <button (click)=\"takePhoto()\" type=\"button\" class=\"btn btn-primary take\">Take</button>\n</div>\n"

/***/ }),

/***/ "./src/app/takephoto/takephoto.component.ts":
/*!**************************************************!*\
  !*** ./src/app/takephoto/takephoto.component.ts ***!
  \**************************************************/
/*! exports provided: TakePhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakePhotoComponent", function() { return TakePhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _actions_upload_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/upload.actions */ "./src/app/actions/upload.actions.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TakePhotoComponent = /** @class */ (function () {
    function TakePhotoComponent(uploadActions) {
        this.uploadActions = uploadActions;
        this.fileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.manageTakePhoto = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
        this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSave"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"];
        this.isPhotoSrc = false;
    }
    TakePhotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canvasContext = this.canvasComponent.nativeElement.getContext('2d');
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                _this.stream = stream;
                _this.videoComponent.nativeElement.src = window.URL.createObjectURL(stream);
                _this.videoComponent.nativeElement.play();
            });
        }
    };
    TakePhotoComponent.prototype.ngOnDestroy = function () {
        this.videoComponent.nativeElement.pause();
    };
    TakePhotoComponent.prototype.takePhoto = function () {
        var _this = this;
        var _a = this.videoComponent.nativeElement, videoHeight = _a.videoHeight, videoWidth = _a.videoWidth;
        var percentWidth = (640 * 100) / videoWidth * 0.01;
        var newImageHeight = percentWidth * videoHeight;
        this.canvasComponent.nativeElement.height = newImageHeight;
        this.videoWrapper.nativeElement.style.height = newImageHeight + "px";
        this.canvasContext.drawImage(this.videoComponent.nativeElement, 0, 0, 640, newImageHeight);
        this.showPhoto = setTimeout(function () { _this.isPhotoSrc = true; }, 100);
    };
    TakePhotoComponent.prototype.clearPhoto = function () {
        this.isPhotoSrc = false;
        var _a = this.videoComponent.nativeElement, width = _a.width, height = _a.height;
        this.canvasContext.clearRect(0, 0, width, height);
    };
    TakePhotoComponent.prototype.savePhoto = function () {
        var url = this.canvasComponent.nativeElement.toDataURL();
        var readyToSaveData = atob(url.split(',')[1]);
        var fileBuffer = [];
        for (var i = 0; i < readyToSaveData.length; i++) {
            fileBuffer.push(readyToSaveData.charCodeAt(i));
        }
        var uintArray = new Uint8Array(fileBuffer);
        var file = new Blob([uintArray], { type: 'image/jpeg' });
        this.closeMenu();
        this.fileChange.emit({
            target: {
                files: [file]
            }
        });
    };
    TakePhotoComponent.prototype.closeMenu = function () {
        this.stream.getTracks().forEach(function (track) { return track.stop(); });
        this.manageTakePhoto.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoComponent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TakePhotoComponent.prototype, "videoComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvasComponent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TakePhotoComponent.prototype, "canvasComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoWrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TakePhotoComponent.prototype, "videoWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TakePhotoComponent.prototype, "fileChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TakePhotoComponent.prototype, "manageTakePhoto", void 0);
    TakePhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-take-photo',
            template: __webpack_require__(/*! ./takephoto.component.html */ "./src/app/takephoto/takephoto.component.html"),
            styles: [__webpack_require__(/*! ./takephoto.component.css */ "./src/app/takephoto/takephoto.component.css")]
        }),
        __metadata("design:paramtypes", [_actions_upload_actions__WEBPACK_IMPORTED_MODULE_1__["UploadActions"]])
    ], TakePhotoComponent);
    return TakePhotoComponent;
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

module.exports = __webpack_require__(/*! /Users/andriitereshchuk/Documents/cats/cats/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map