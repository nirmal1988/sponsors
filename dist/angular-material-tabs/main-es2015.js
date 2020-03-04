(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\" class=\"main-container-div\">\n <mat-tab-group class=\"smooth-scroll-div\">\n  \n  <mat-tab *ngFor=\"let item of this._data; index as i;\" label={{item.menu}} id={{item.menu}}>\n\n   \n   <div *ngFor=\"let row of item.items; index as i; count as c\" class=\"loop-row-category\">\n      \n        \n        <span class=\"loop-category\">{{row.category}}</span>\n        <div class=\"category-container\">\n          <div *ngFor=\"let catRow of row.data; index as ci; count as cc\" class=\"loop-row\">\n\n            <li *ngIf=\"catRow.isCurrency\" class=\"cat-det-li cat-det-row\"><span [innerHTML]=\"catRow.type\"></span> - <span>{{catRow.value | currency : '$'}}</span></li>\n\n            <li *ngIf=\"!catRow.isCurrency && !catRow.isPaymentOption && !catRow.noBullet\" class=\"cat-det-li cat-det-row\">\n              <span [innerHTML]=\"catRow.type\"></span> <span *ngIf=\"catRow.value != ''\"> - </span><span [innerHTML]=\"catRow.value\"></span>\n            </li>\n\n            <div *ngIf=\"catRow.isPaymentOption\" class=\"\">\n              <img class=\"cat-row-payment-option cat-row-payment-option-{{catRow.type}}\" src=\"http://sponsorships.xitiz.net/dist/assets/img/{{catRow.value}}\" />\n            </div>\n\n            <div *ngIf=\"catRow.noBullet\" class=\"no-bullet cat-det-row\">\n              <div class=\"row-font-bold\" [innerHTML]=\"catRow.type\"></div> <div [innerHTML]=\"catRow.value\"></div>\n            </div>\n\n          </div>\n        </div>\n\n    </div>\n    <div class=\"bottom-spacer\"></div>\n  </mat-tab>\n\n</mat-tab-group>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");



let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"]],
        exports: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"]]
    })
], AngularMaterialModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container-div{\r\n \r\n}\n\n.loop-row-category{\r\n  padding-top:20px;\r\n  text-align:center;\r\n}\n\n.loop-category{\r\n  font-weight:bold;\r\n  font-size:50px;\r\n}\n\n.category-container{\r\n  width:70%;\r\n  margin:auto 15% auto auto;\r\n}\n\n.loop-row{\r\n    height:auto;\r\n    border: none;\r\n    padding:6px;\r\n    font-size:40px;\r\n  }\n\n.smooth-scroll-div{\r\n  scroll-behavior: smooth;\r\n  z-index:0;\r\n  background-image: url(http://sponsorships.xitiz.net/dist/assets/img/Foyer%20PPT%20Backgrounds/Blue.jpg);\r\n  height:100%;\r\n  width:100%;\r\n  background-repeat:no-repeat;\r\n  background-size:cover;\r\n  background-attachment: fixed;\r\n  min-height:100%;\r\n}\n\n.bottom-spacer{\r\n  height:200px;\r\n  display:block;\r\n}\n\n.cat-det-li{\r\n  text-align:left;\r\n}\n\n.cat-row-payment-option{\r\n  width:100px;\r\n  height:100px;\r\n  float:left;\r\n  margin-left:20px;\r\n}\n\n.cat-row-payment-option-cash{\r\n  margin-left:200px;\r\n}\n\n.cat-row-payment-option-check{\r\n  margin-top:-12px;\r\n}\n\n.cat-row-payment-option-card{\r\n  margin-top:-20px;\r\n}\n\n.row-font-bold{\r\n  font-weight:bold;\r\n}\n\n.no-bullet{\r\n  text-align:center;\r\n  width: 107%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QseUJBQXlCO0FBQzNCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztFQUNoQjs7QUFFRjtFQUNFLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsdUdBQXVHO0VBQ3ZHLFdBQVc7RUFDWCxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyLWRpdntcclxuIFxyXG59XG5cbi5sb29wLXJvdy1jYXRlZ29yeXtcclxuICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XG4ubG9vcC1jYXRlZ29yeXtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIGZvbnQtc2l6ZTo1MHB4O1xyXG59XG4uY2F0ZWdvcnktY29udGFpbmVye1xyXG4gIHdpZHRoOjcwJTtcclxuICBtYXJnaW46YXV0byAxNSUgYXV0byBhdXRvO1xyXG59XG4ubG9vcC1yb3d7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6NnB4O1xyXG4gICAgZm9udC1zaXplOjQwcHg7XHJcbiAgfVxyXG5cclxuLnNtb290aC1zY3JvbGwtZGl2e1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gIHotaW5kZXg6MDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL3Nwb25zb3JzaGlwcy54aXRpei5uZXQvZGlzdC9hc3NldHMvaW1nL0ZveWVyJTIwUFBUJTIwQmFja2dyb3VuZHMvQmx1ZS5qcGcpO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIG1pbi1oZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuLmJvdHRvbS1zcGFjZXJ7XHJcbiAgaGVpZ2h0OjIwMHB4O1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuXHJcbi5jYXQtZGV0LWxpe1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxufVxyXG4uY2F0LXJvdy1wYXltZW50LW9wdGlvbntcclxuICB3aWR0aDoxMDBweDtcclxuICBoZWlnaHQ6MTAwcHg7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICBtYXJnaW4tbGVmdDoyMHB4O1xyXG59XHJcbi5jYXQtcm93LXBheW1lbnQtb3B0aW9uLWNhc2h7XHJcbiAgbWFyZ2luLWxlZnQ6MjAwcHg7XHJcbn1cclxuLmNhdC1yb3ctcGF5bWVudC1vcHRpb24tY2hlY2t7XHJcbiAgbWFyZ2luLXRvcDotMTJweDtcclxufVxyXG4uY2F0LXJvdy1wYXltZW50LW9wdGlvbi1jYXJke1xyXG4gIG1hcmdpbi10b3A6LTIwcHg7XHJcbn1cclxuLnJvdy1mb250LWJvbGR7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG4ubm8tYnVsbGV0e1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIHdpZHRoOiAxMDclO1xyXG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



//import { setTimeout } from 'timers';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-material-tabs';
        this.pageNumber = 0;
        this.pageSize = 5;
        this._mainLoopTimer = 8000;
        this._menuId = 0;
        this.scrollInterval = 7000; //milliseconds
        this.doNotScroll = false;
        this._data1 = [{
                menu: 'one', items: [
                    { row: 1, content: 'AAAAA AAAAA' },
                    { row: 2, content: 'AAAAA AAAAA' },
                    { row: 3, content: 'AAAAA AAAAA' },
                    { row: 4, content: 'AAAAA AAAAA' },
                    { row: 5, content: 'AAAAA AAAAA' },
                    { row: 6, content: 'AAAAA AAAAA' },
                    { row: 7, content: 'AAAAA AAAAA' },
                    { row: 8, content: 'AAAAA AAAAA' },
                    { row: 9, content: 'AAAAA AAAAA' },
                    { row: 10, content: 'AAAAA AAAAA' },
                    { row: 11, content: 'AAAAA AAAAA' },
                    { row: 12, content: 'AAAAA AAAAA' },
                    { row: 13, content: 'AAAAA AAAAA' },
                    { row: 14, content: 'AAAAA AAAAA' },
                    { row: 15, content: 'AAAAA AAAAA' },
                    { row: 16, content: 'AAAAA AAAAA' },
                    { row: 17, content: 'AAAAA AAAAA' },
                    { row: 18, content: 'AAAAA AAAAA' },
                    { row: 19, content: 'AAAAA AAAAA' },
                    { row: 20, content: 'AAAAA AAAAA' },
                    { row: 21, content: 'AAAAA AAAAA' },
                    { row: 22, content: 'AAAAA AAAAA' },
                    { row: 23, content: 'AAAAA AAAAA' },
                    { row: 24, content: 'AAAAA AAAAA' },
                    { row: 25, content: 'AAAAA AAAAA' },
                    { row: 26, content: 'AAAAA AAAAA' },
                    { row: 27, content: 'AAAAA AAAAA' },
                ]
            }, {
                menu: 'two', items: [{ row: 1, content: 'AAAAA AAAAA' },
                    { row: 2, content: 'AAAAA AAAAA' },
                    { row: 3, content: 'AAAAA AAAAA' },
                    { row: 4, content: 'AAAAA AAAAA' },
                    { row: 5, content: 'AAAAA AAAAA' },
                    { row: 6, content: 'AAAAA AAAAA' },
                    { row: 7, content: 'AAAAA AAAAA' }
                ]
            }, {
                menu: 'three', items: [{ row: 1, content: 'AAAAA AAAAA' },
                    { row: 2, content: 'AAAAA AAAAA' },
                    { row: 3, content: 'AAAAA AAAAA' }
                ]
            }];
        this._data = [{
                menu: 'Sponsorship Opportunity', items: [
                    {
                        category: 'Annual Sponsorships', data: [
                            { type: 'All Ravi Sabhas', value: 11001, isCurrency: true },
                            { type: 'All Samaiya', value: 7001, isCurrency: true },
                            { type: 'All Mahila Samaiya', value: 7001, isCurrency: true }
                        ]
                    },
                    {
                        category: 'Event Sponsorships', data: [
                            { type: 'Ravi Sabha', value: 351, isCurrency: true },
                            { type: 'Parayan', value: 501, isCurrency: true },
                            { type: 'Thakorji Monthly Thal', value: 501, isCurrency: true }
                        ]
                    },
                    {
                        category: 'Samaiya Sponsorships', data: [
                            { type: 'Swaminarayan Jayanti | Ram Navami', value: 701, isCurrency: true },
                            { type: 'Janmashtami', value: 701, isCurrency: true },
                            { type: 'Mahant Swami Maharaj Jayanti', value: 701, isCurrency: true },
                            { type: 'Pramukh Swami Maharaj Jayanti', value: 701, isCurrency: true },
                            { type: 'Other Samaiya', value: 551, isCurrency: true },
                            { type: 'Mahila Samaiya', value: 351, isCurrency: true }
                        ]
                    },
                    {
                        category: 'Diwali Samaiya Sponsorships', data: [
                            { type: 'Grand Sponsorship', value: 10001, isCurrency: true },
                            { type: 'Platinum Sponsorship', value: 5001, isCurrency: true },
                            { type: 'Diamond Sponsorship', value: 2501, isCurrency: true },
                            { type: 'Gold Sponsorship', value: 2001, isCurrency: true },
                            { type: 'Silver Sponsorship', value: 1501, isCurrency: true }
                        ]
                    },
                    {
                        category: 'Payment Options', data: [
                            { type: 'cash', value: 'payby_cash.png', isPaymentOption: true },
                            { type: 'check', value: 'payby_check.png', isPaymentOption: true },
                            { type: 'card', value: 'payby_card.png', isPaymentOption: true }
                        ]
                    }
                ]
            },
            {
                menu: 'Annual Ravi Sabha', items: [
                    {
                        category: 'Annual Ravi Sabha', data: [
                            { type: 'Kailasben B Patel And Family(Lancaster)', value: '' },
                            { type: 'Kaushikbhai & Sangitaben Patel(Waxhaw) <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nehalbhai & Sonalben Patel', value: '' },
                        ]
                    }
                ]
            },
            {
                menu: 'Annual Samaiya', items: [
                    {
                        category: 'Annual Samaiya', data: [
                            { type: 'Atulbhai & Chandrikaben Patel(Charlotte) <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rajbhai Patel ', value: '' },
                            { type: 'Chandreshbhai & Alpaben Patel(Waxhaw) <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bholabhai & Shantaben Patel', value: '' },
                            { type: 'Dr.Vasantbhai & Nehalben Patel(Rock Hill)', value: '' },
                            { type: 'Kailasben B Patel And Family(Lancaster)', value: '' },
                            { type: 'Kaushikbhai & Sangitaben Patel(Waxhaw) <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nehalbhai & Sonalben Patel', value: '' },
                            { type: 'Mahendrabhai & Purnimaben Patel(Fort Mill) <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suryakantbhai & Meenaben <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gunvantbhai & Kokilaben <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nileshbhai & Nimitaben <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Priteshbhai & Toralben', value: '' },
                            { type: 'Nitinbhai & Pravinaben Patel(Monroe) <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arpanbhai Patel', value: '' }
                        ]
                    }
                ]
            },
            {
                menu: 'Annual Maha Puja', items: [
                    {
                        category: 'Annual Maha Puja', data: [
                            { type: 'Ashokbhai & Snehaben Patel(Charlotte)', value: '' },
                            { type: 'Chetanbhai & Diptiben Desai(Matthews)', value: '' },
                            { type: 'Hardikbhai & Zalakben Panchal(Charlotte)', value: '' },
                            { type: 'Mahendrabhai & Purnimaben Patel(Fort Mill)', value: '' },
                            { type: 'Pareshbhai & Sangitaben Sutariya(Charlotte)', value: '' },
                            { type: 'Vipinbhai & Kusumben Patel(Matthews)', value: '' }
                        ]
                    }
                ]
            },
            {
                menu: 'Sunday Activities Schedule', items: [
                    {
                        category: 'Sunday Activities Schedule', data: [
                            { type: 'Daily Ārti', value: '7: 30am & 6: 30pm', noBullet: true },
                            { type: 'Bāl Mandal(Boys Aged 5 - 13)', value: 'Gujarāti Class – 3: 00pm | Bāl Sabhā – 4: 30pm', noBullet: true },
                            { type: 'Bālikā Mandal(Girls Aged 5 - 13)', value: 'Gujarāti Class – 3: 00pm | Bālikā Sabhā – 4: 30pm', noBullet: true },
                            { type: 'Kishore–Kishori Mandal(Teenage Boys & Girls Aged 14 - 22)', value: 'Kishore Sabhā – 2: 30pm | Kishori Sabhā – 4: 00pm', noBullet: true },
                            { type: 'Yuvak–Yuvati Mandal(Men & Women Aged 23 - 35)', value: 'Yuvak Sabhā – 3: 00pm | Yuvati Sabhā – 2: 30pm', noBullet: true },
                            { type: 'Sanyukta–Premvati Mandal(Men & Women Aged above 35)', value: 'Sanyukta Sabhā – 4: 00pm | Premvati Sabhā – 3: 00pm', noBullet: true },
                            { type: 'Monthly Punam Māhāpujā & Bi - Monthly Ekādashi Sabhā - 7: 30pm', value: '', noBullet: true }
                        ]
                    }
                ]
            }
        ];
        this.scrollInitially();
        console.log(this._data);
        this.changeInterval();
        this.swithchMenu();
        this.startPaging();
    }
    scrollInitially() {
        setTimeout(() => {
            this.animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, 0, 0, true);
        }, 500);
    }
    swithchMenu() {
        setTimeout(() => {
            let selectedMenu = document.getElementsByClassName('mat-tab-label-active')[0];
            console.log(selectedMenu);
            console.log('next---', selectedMenu.nextElementSibling);
            if (selectedMenu.nextElementSibling) {
                let scrollFrom = 0;
                if (this.prevScrollEle)
                    scrollFrom = this.prevScrollEle.offsetTop;
                this.scrollInitially();
                this.prevScrollEle = null;
                this.pageNumber = 0;
                this._menuId = this._menuId + 1;
                this.changeInterval();
                this.doNotScroll = true;
                setTimeout(() => {
                    this.doNotScroll = false;
                }, (this.scrollInterval - 2000));
                let nextEle = selectedMenu.nextElementSibling;
                nextEle.click();
            }
            else {
                console.log('reload');
                window.location.reload();
            }
            this.swithchMenu();
        }, this.mainLoopTimer());
    }
    startPaging() {
        setTimeout(() => {
            this.pageNumber = this.pageNumber + 1;
            console.log('this.pageNumber', this.pageNumber);
            let scrollFrom = 0;
            if (this.prevScrollEle)
                scrollFrom = this.prevScrollEle.offsetTop;
            let nextPage;
            //nextPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
            //new stuff
            console.log('new stuff');
            let allRows = document.getElementsByClassName('cat-det-row');
            console.log('allRows', allRows);
            for (var _ri = 0; _ri < allRows.length; _ri++) {
                if (allRows[_ri].offsetTop > (scrollFrom + 200)) {
                    nextPage = allRows[_ri];
                    console.log('next ele changed', nextPage.offsetTop);
                    break;
                }
            }
            //new stull
            if (this.doNotScroll == false)
                this.prevScrollEle = nextPage;
            if (nextPage && nextPage.offsetTop)
                this.animate(document.scrollingElement || document.documentElement, "scrollTop", "", scrollFrom, nextPage.offsetTop, 1000, true);
            this.startPaging();
        }, this.scrollInterval);
    }
    mainLoopTimer() {
        return this._mainLoopTimer;
    }
    changeInterval() {
        let itemsCount = 0;
        this._data[this._menuId].items.forEach((_cat) => {
            itemsCount += _cat.data.length;
        });
        if (itemsCount < 5)
            itemsCount = 5;
        console.log(itemsCount);
        var newInterval = Math.ceil(itemsCount) * 2000; // double seconds than number of rows
        console.log('newInterval', newInterval);
        this._mainLoopTimer = newInterval;
        console.log('this._data[this._menuId].items.length', this._data[this._menuId].items.length);
        console.log('this._menuId', this._menuId);
        console.log('newInterval', newInterval);
    }
    animate(elem, style, unit, from, to, time, prop) {
        if (this.doNotScroll == true)
            return;
        if (!elem) {
            return;
        }
        var start = new Date().getTime(), timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from)) + unit;
            }
            else {
                elem.style[style] = (from + step * (to - from)) + unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 25);
        if (prop) {
            elem[style] = from + unit;
        }
        else {
            elem.style[style] = from + unit;
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('inOutAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nirmalpatel/Apps/Angular/sponsors/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map