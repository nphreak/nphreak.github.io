(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nphreak/Documentos/Projetos/Web/nasaphreak-source/src/main.ts */"zUnb");


/***/ }),

/***/ "8m3x":
/*!**********************************************************!*\
  !*** ./src/app/components/blog/lista/lista.component.ts ***!
  \**********************************************************/
/*! exports provided: ListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaComponent", function() { return ListaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ListaComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListaComponent.ɵfac = function ListaComponent_Factory(t) { return new (t || ListaComponent)(); };
ListaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaComponent, selectors: [["app-lista"]], decls: 2, vars: 0, template: function ListaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lista works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ "ELNm");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
        const options = {
            strings: ['Wake up, Neo...  ^2000<br>' +
                    'The Matrix has you...^2000<br>' +
                    'Follow the white rabbit.'],
            typeSpeed: 2,
            showCursor: true,
            cursorChar: '|'
        };
        const typed = new typed_js__WEBPACK_IMPORTED_MODULE_0___default.a('#typed-part', options);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 46, vars: 0, consts: [[1, "container"], [1, "card", "card-home"], [1, "spartakus", "title-home"], [1, "spartakus"], [1, "robotomono"], ["id", "foto-home-1", 1, "imagem-card-1"], [1, "typed-container"], ["id", "typed-part"], [1, "paragrafo-home"], ["href", "https://www.facebook.com/cursinhodompedro", "target", "_blank", "rel", "noreferrer"], ["href", "https://www.mundomaker.cc/", "target", "_blank", "rel", "noreferrer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " PT-BR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Meu nome \u00E9 Pedro Rodrigues, sou desenvolvedor web, ex-professor de f\u00EDsica e dou aulas como volunt\u00E1rio no cursinho comunit\u00E1rio preparat\u00F3rio para o ENEM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Cursinho Dom Pedro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ", com passagens pelo universo Maker utilizando Arduino, sendo \"instrutor maker\" ensinando e mentorando crian\u00E7as e adolescentes em projetos no ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Mundo Maker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Atualmente cursando Seguran\u00E7a da Informa\u00E7\u00E3o. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Apesar da base t\u00E9cnica em programa\u00E7\u00E3o, Psicologia e Engenharia Social t\u00EAm meu cora\u00E7\u00E3o. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " EN-US ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " I'm Pedro Rodrigues, a Web Developer, former Physics teacher, I also teach as a volunteer for a college prep course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Cursinho Dom Pedro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " aimed at low income students. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Also I got some maker background, doing stuff with Arduino and mentoring children/teenagers on projects at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Mundo Maker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Nowadays, I'm studying InfoSec on college. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Besides a technical background on programming, I'm in love with Social Engineering and Psicology. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".card-home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .card-home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .card-home[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    \n    color: #129116;\n}\n\n.card-home[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .card-home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n}\n\n.imagem-card-1[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 300px;\n    background-size: cover;\n    float: right;\n    margin: 10px\n}\n\n.paragrafo-home[_ngcontent-%COMP%] {\n    margin-top: 50px;\n}\n\n#typed-part[_ngcontent-%COMP%] {\n    height: 300px;\n}\n\n.card[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.5);\n    border: 3px rgb(18, 145, 23) solid;\n    padding: 20px 30px;\n    border-radius: 10px;\n    width: 50vw;\n    height: 80vh;\n    margin-right: auto;\n    margin-left: auto;\n    overflow-y: scroll;\n}\n\n\n\nhtml[_ngcontent-%COMP%] {\n    --scrollbarBG: rgba(0, 0, 0, 0.5);\n    --thumbBG: #035e18;\n}\n\n.card[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 20px;\n}\n\n.card[_ngcontent-%COMP%] {\n    scrollbar-width: thin;\n    scrollbar-color: var(--thumbBG) var(--scrollbarBG);\n}\n\n.card[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: var(--scrollbarBG);\n}\n\n.card[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background-color: var(--thumbBG);\n    border-radius: 6px;\n    border: 3px solid var(--scrollbarBG);\n}\n\n.typed-container[_ngcontent-%COMP%] {\n    height: 8vh;\n}\n\n@media (max-width:760px) {\n    \n}\n\n@media (max-width:1140px) {\n    .card[_ngcontent-%COMP%] {\n        background-color: rgba(0, 0, 0, 0.5);\n        border: 3px rgb(18, 145, 23) solid;\n        padding: 10px 10px;\n        border-radius: 10px;\n        width: 80vw;\n        height: 90vh;\n        margin-right: auto;\n        margin-left: auto;\n        overflow-y: scroll;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztBQUVBOztBQUVBO0lBQ0k7UUFDSSxvQ0FBb0M7UUFDcEMsa0NBQWtDO1FBQ2xDLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhvbWUgaDEsIC5jYXJkLWhvbWUgcCwgLmNhcmQtaG9tZSBzcGFuIHtcbiAgICAvKiBjb2xvcjojZTJlMmUyOyAqL1xuICAgIGNvbG9yOiAjMTI5MTE2O1xufVxuXG4uY2FyZC1ob21lIHNwYW4sIC5jYXJkLWhvbWUgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaW1hZ2VtLWNhcmQtMSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiAxMHB4XG59XG5cbi5wYXJhZ3JhZm8taG9tZSB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuI3R5cGVkLXBhcnQge1xuICAgIGhlaWdodDogMzAwcHg7XG59XG5cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgYm9yZGVyOiAzcHggcmdiKDE4LCAxNDUsIDIzKSBzb2xpZDtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogNTB2dztcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLyogU2Nyb2xsQmFyIHN0eWxlICovXG5cbmh0bWwge1xuICAgIC0tc2Nyb2xsYmFyQkc6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAtLXRodW1iQkc6ICMwMzVlMTg7XG59XG5cbi5jYXJkOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5jYXJkIHtcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS10aHVtYkJHKSB2YXIoLS1zY3JvbGxiYXJCRyk7XG59XG5cbi5jYXJkOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Nyb2xsYmFyQkcpO1xufVxuXG4uY2FyZDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRodW1iQkcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zY3JvbGxiYXJCRyk7XG59XG5cbi50eXBlZC1jb250YWluZXIge1xuICAgIGhlaWdodDogOHZoO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDo3NjBweCkge1xuICAgIFxufVxuXG5AbWVkaWEgKG1heC13aWR0aDoxMTQwcHgpIHtcbiAgICAuY2FyZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgYm9yZGVyOiAzcHggcmdiKDE4LCAxNDUsIDIzKSBzb2xpZDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgaGVpZ2h0OiA5MHZoO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "CCKP":
/*!*****************************************************!*\
  !*** ./src/app/components/sobre/sobre.component.ts ***!
  \*****************************************************/
/*! exports provided: SobreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreComponent", function() { return SobreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SobreComponent {
    constructor() { }
    ngOnInit() {
    }
}
SobreComponent.ɵfac = function SobreComponent_Factory(t) { return new (t || SobreComponent)(); };
SobreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SobreComponent, selectors: [["app-sobre"]], decls: 65, vars: 0, consts: [[1, "container"], [1, "card", "card-home"], [1, "spartakus", "title-home"], [1, "spartakus"], [1, "modeseven"], ["id", "foto-home-1", 1, "imagem-card-1"], ["id", "typed-part"], [1, "paragrafo-home"], ["href", "https://www.facebook.com/cursinhodompedro", "target", "_blank", "rel", "noreferrer"], ["href", "https://www.mundomaker.cc/", "target", "_blank", "rel", "noreferrer"]], template: function SobreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " PT-BR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Meu nome \u00E9 Pedro Rodrigues, sou desenvolvedor web, ex-professor de f\u00EDsica e dou aulas como volunt\u00E1rio no cursinho comunit\u00E1rio preparat\u00F3rio para o ENEM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cursinho Dom Pedro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ", com passagens pelo universo Maker utilizando Arduino, sendo \"instrutor maker\" ensinando e mentorando crian\u00E7as e adolescentes em projetos no ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Mundo Maker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Atualmente cursando Seguran\u00E7a da Informa\u00E7\u00E3o. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Apesar da base t\u00E9cnica em programa\u00E7\u00E3o, Psicologia e Engenharia Social t\u00EAm meu cora\u00E7\u00E3o. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " EN-US ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " I'm Pedro Rodrigues, a Web Developer, former Physics teacher, I also teach as a volunteer for a college prep course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cursinho Dom Pedro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " aimed at low income students. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Also I got some maker background, doing stuff with Arduino and mentoring children/teenagers on projects at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Mundo Maker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Nowadays, I'm studying InfoSec on college. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Besides a technical background on programming, I'm in love with Social Engineering and Psicology. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " EN-US ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " I'm Pedro Rodrigues, a Web Developer, former Physics teacher, I also teach as a volunteer for a college prep course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cursinho Dom Pedro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " aimed at low income students. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Also I got some maker background, doing stuff with Arduino and mentoring children/teenagers on projects at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Mundo Maker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Nowadays, I'm studying InfoSec on college. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Besides a technical background on programming, I'm in love with Social Engineering and Psicology. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card-home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .card-home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .card-home[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    \n    color: #129116;\n}\n\n.card-home[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .card-home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n}\n\n.imagem-card-1[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 300px;\n    background-size: cover;\n    float: right;\n    margin: 10px\n}\n\n.paragrafo-home[_ngcontent-%COMP%] {\n    margin-top: 50px;\n}\n\n#typed-part[_ngcontent-%COMP%] {\n    height: 300px;\n}\n\n.card[_ngcontent-%COMP%]{\n    background-color: rgba(0, 0, 0, 0.5);\n    border: 3px  rgb(18, 145, 23) solid;\n    padding: 20px 30px;\n    border-radius: 10px;\n    width: 50vw;\n    height: 80vh;\n    margin-right: auto;\n    margin-left: auto;\n    overflow-y: scroll;\n}\n\n\n\nhtml[_ngcontent-%COMP%] {\n    --scrollbarBG: rgba(0, 0, 0, 0.5);\n    --thumbBG: #035e18;\n}\n\n.card[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 20px;\n}\n\n.card[_ngcontent-%COMP%] {\n    scrollbar-width: thin;\n    scrollbar-color: var(--thumbBG) var(--scrollbarBG);\n}\n\n.card[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: var(--scrollbarBG);\n}\n\n.card[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background-color: var(--thumbBG);\n    border-radius: 6px;\n    border: 3px solid var(--scrollbarBG);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvYnJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzb2JyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaG9tZSBoMSwgLmNhcmQtaG9tZSBwLCAuY2FyZC1ob21lIHNwYW4ge1xuICAgIC8qIGNvbG9yOiNlMmUyZTI7ICovXG4gICAgY29sb3I6ICMxMjkxMTY7XG59XG5cbi5jYXJkLWhvbWUgc3BhbiwgLmNhcmQtaG9tZSBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pbWFnZW0tY2FyZC0xIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW46IDEwcHhcbn1cblxuLnBhcmFncmFmby1ob21lIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4jdHlwZWQtcGFydCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJvcmRlcjogM3B4ICByZ2IoMTgsIDE0NSwgMjMpIHNvbGlkO1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGhlaWdodDogODB2aDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4vKiBTY3JvbGxCYXIgc3R5bGUgKi9cblxuaHRtbCB7XG4gICAgLS1zY3JvbGxiYXJCRzogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIC0tdGh1bWJCRzogIzAzNWUxODtcbn1cblxuLmNhcmQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLmNhcmQge1xuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXRodW1iQkcpIHZhcigtLXNjcm9sbGJhckJHKTtcbn1cblxuLmNhcmQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zY3JvbGxiYXJCRyk7XG59XG5cbi5jYXJkOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGh1bWJCRyk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNjcm9sbGJhckJHKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _templates_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/menu/menu.component */ "fZTv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'nasaphreak';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_templates_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _templates_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/menu/menu.component */ "fZTv");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sobre/sobre.component */ "CCKP");
/* harmony import */ var _components_blog_post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/blog/post/post.component */ "udoL");
/* harmony import */ var _components_blog_lista_lista_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/blog/lista/lista.component */ "8m3x");
/* harmony import */ var _components_redes_redes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/redes/redes.component */ "exBr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _templates_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _components_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_6__["SobreComponent"],
        _components_blog_post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"],
        _components_blog_lista_lista_component__WEBPACK_IMPORTED_MODULE_8__["ListaComponent"],
        _components_redes_redes_component__WEBPACK_IMPORTED_MODULE_9__["RedesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]] }); })();


/***/ }),

/***/ "exBr":
/*!*****************************************************!*\
  !*** ./src/app/components/redes/redes.component.ts ***!
  \*****************************************************/
/*! exports provided: RedesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedesComponent", function() { return RedesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RedesComponent {
    constructor() { }
    ngOnInit() {
    }
}
RedesComponent.ɵfac = function RedesComponent_Factory(t) { return new (t || RedesComponent)(); };
RedesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RedesComponent, selectors: [["app-redes"]], decls: 2, vars: 0, template: function RedesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "redes works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWRlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "fZTv":
/*!**************************************************!*\
  !*** ./src/app/templates/menu/menu.component.ts ***!
  \**************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 17, vars: 0, consts: [[1, "navbar", "fixed-top", "navbar-expand-md", "main-menu"], ["type", "button", "data-toggle", "collapse", "data-target", "#menuprincipal", "aria-controls", "menuprincipal", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "menuprincipal", 1, "collapse", "navbar-collapse", "spartakus"], [1, "navbar-nav", "ml-auto", "mr-auto", "mt-2", "mt-lg-0"], [1, "nav-item", "active"], ["routerLink", "/home", 1, "nav-link"], [1, "nav-item"], ["routerLink", "/sobre", 1, "nav-link"], ["routerLink", "/blog", 1, "nav-link"], ["routerLink", "/redes", 1, "nav-link"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sobre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Redes Sociais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["html[_ngcontent-%COMP%] {\n    --scrollbarBG: rgba(0, 0, 0, 0.5);\n    --thumbBG: #035e18;\n}\n\n.card[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 20px;\n}\n\n.card[_ngcontent-%COMP%] {\n    scrollbar-width: thin;\n    scrollbar-color: var(--thumbBG) var(--scrollbarBG);\n}\n\n.card[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: var(--scrollbarBG);\n}\n\n.card[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background-color: var(--thumbBG);\n    border-radius: 6px;\n    border: 3px solid var(--scrollbarBG);\n}\n\n.main-menu[_ngcontent-%COMP%] {\n    background-color: rgb(0, 0, 0);\n    width: 100vw;\n}\n\n.main-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: rgb(18, 145, 23);\n}\n\n.main-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: rgb(101, 172, 104);\n}\n\n@media (max-width:763) {\n    .main-menu[_ngcontent-%COMP%] {\n        z-index: 100;\n        position: absolute;\n    }\n}\n\n@media (max-width:1140px) {}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7O0FBRXBCO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUlBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUEsMkJBQTJCIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNjcm9sbEJhciBzdHlsZSAqL1xuXG5odG1sIHtcbiAgICAtLXNjcm9sbGJhckJHOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgLS10aHVtYkJHOiAjMDM1ZTE4O1xufVxuXG4uY2FyZDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4uY2FyZCB7XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICAgIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tdGh1bWJCRykgdmFyKC0tc2Nyb2xsYmFyQkcpO1xufVxuXG4uY2FyZDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNjcm9sbGJhckJHKTtcbn1cblxuLmNhcmQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aHVtYkJHKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc2Nyb2xsYmFyQkcpO1xufVxuXG4ubWFpbi1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ubWFpbi1tZW51IGEge1xuICAgIGNvbG9yOiByZ2IoMTgsIDE0NSwgMjMpO1xufVxuXG4ubWFpbi1tZW51IGE6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMTAxLCAxNzIsIDEwNCk7XG59XG5cblxuXG5AbWVkaWEgKG1heC13aWR0aDo3NjMpIHtcbiAgICAubWFpbi1tZW51IHtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDoxMTQwcHgpIHt9Il19 */"] });


/***/ }),

/***/ "udoL":
/*!********************************************************!*\
  !*** ./src/app/components/blog/post/post.component.ts ***!
  \********************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PostComponent {
    constructor() { }
    ngOnInit() {
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], decls: 2, vars: 0, template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "post works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_blog_lista_lista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/blog/lista/lista.component */ "8m3x");
/* harmony import */ var _components_blog_post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/blog/post/post.component */ "udoL");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_redes_redes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/redes/redes.component */ "exBr");
/* harmony import */ var _components_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sobre/sobre.component */ "CCKP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'sobre', component: _components_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_5__["SobreComponent"] },
    {
        path: 'blog', children: [
            { path: 'post', component: _components_blog_post_post_component__WEBPACK_IMPORTED_MODULE_2__["PostComponent"] },
            { path: 'lista', component: _components_blog_lista_lista_component__WEBPACK_IMPORTED_MODULE_1__["ListaComponent"] },
        ]
    },
    { path: 'redes', component: _components_redes_redes_component__WEBPACK_IMPORTED_MODULE_4__["RedesComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map