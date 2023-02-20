/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/1.png */ "./img/1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/weatherDetails/humidity.png */ "./img/weatherDetails/humidity.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/weatherDetails/visibility.png */ "./img/weatherDetails/visibility.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/weatherDetails/wind.png */ "./img/weatherDetails/wind.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/weatherDetails/pressure.png */ "./img/weatherDetails/pressure.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/weatherDetails/sunDetails.png */ "./img/weatherDetails/sunDetails.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body,\r\nhtml {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    /* background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../img/bg.jpg'); */\r\n\r\n}\r\n\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n    box-sizing: border-box;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-size: 3rem;\r\n    margin: 0;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    margin: 0;\r\n}\r\n\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    margin: 0;\r\n}\r\n\r\n\r\ninput,\r\nbutton {\r\n    padding: 5px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\nform {\r\n    display: inline-flex;\r\n    font-size: 1.2rem;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    border: 1px solid grey;\r\n    border-right: none;\r\n    border-radius: 5px;\r\n}\r\n\r\nbutton {\r\n    font-size: 2rem;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n#submitBtn {\r\n    border: 1px solid red;\r\n    border-radius: 5px;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 20px;\r\n    margin-top: 0px;\r\n}\r\n\r\n\r\n.headingSection {\r\n    /* display: flex; */\r\n    /* justify-content: space-between; */\r\n    /* align-items: center; */\r\n    /* gap: 10px; */\r\n}\r\n\r\n.submitBtn {\r\n    display: block;\r\n}\r\n\r\n\r\n.searchBar {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    /* margin-top: 10px; */\r\n    padding: 10px;\r\n    /* padding-right: 0; */\r\n    /* font-size: 1.2rem; */\r\n}\r\n\r\n\r\n.sectionOne {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 10px;\r\n    margin: 10px;\r\n}\r\n\r\n/* MainSection */\r\n\r\n.mainSection {\r\n    min-height: 87vh;\r\n    box-sizing: border-box;\r\n    /* border: 2px solid salmon; */\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n.sectionTwo {\r\n    /* display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    border-radius: 10px; */\r\n}\r\n\r\n\r\n/* ,.weatherIcon  */\r\n.weatherDetails {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    /* border: 2px solid rgb(4, 33, 131); */\r\n    padding: 10px;\r\n    margin: 10px;\r\n    margin-bottom: 0px;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n.locationDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 20px;\r\n}\r\n\r\n\r\n.weatherIcon,\r\n.perDayOneImage,\r\n.perDayTwoImage,\r\n.perDayThreeImage,\r\n.perDayFourImage,\r\n.perDayFiveImage {\r\n    min-height: 60px;\r\n    min-width: 100px;\r\n}\r\n\r\n.dayOneImage {\r\n    /* min-height: 100px;\r\n    max-width: 110px; */\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")no-repeat center/contain;\r\n    height: 100px;\r\n    /* background: url('../img/1.jpg')no-repeat center/cover; */\r\n    /* display: flex; */\r\n}\r\n\r\n.weatherDiv {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n    align-items: center;\r\n}\r\n\r\n\r\n.locationName {\r\n    font-size: 3.5rem;\r\n}\r\n\r\n.weatherCondition {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n}\r\n\r\n.humidity,\r\n.visibility,\r\n.wind,\r\n.pressure,\r\n.sunDetails,\r\n.temperatureMin,\r\n.temperatureMax {\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n\r\n.temperature {\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.temperatureDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.tempMinMaxDiv {\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n\r\n.otherDiv {\r\n    padding-top: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n\r\n.otherDetailsDiv {\r\n    font-size: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n\r\n.humidityDiv,\r\n.visibilityDiv,\r\n.windDiv,\r\n.pressureDiv,\r\n.sunDetailsDiv {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 10px;\r\n}\r\n\r\n.humidityIcon {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center/contain;\r\n    min-height: 40px;\r\n    min-width: 40px;\r\n}\r\n\r\n.visibilityIcon {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center/contain;\r\n    min-height: 40px;\r\n    min-width: 40px;\r\n}\r\n\r\n.windIcon {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center/contain;\r\n    min-height: 40px;\r\n    min-width: 40px;\r\n}\r\n\r\n.pressureIcon {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat center/contain;\r\n    min-height: 40px;\r\n    min-width: 40px;\r\n}\r\n\r\n.sunDetailsIcon {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat center/contain;\r\n    min-height: 40px;\r\n    min-width: 40px;\r\n}\r\n\r\n\r\n.temperatureMinDiv,\r\n.temperatureMaxDiv {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.time {\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.dateDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.sunDetails {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.dailyWeatherDetails {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n    justify-content: center;\r\n}\r\n\r\n.dailyWeatherDetails>div {\r\n    /* border: 2px solid blueviolet; */\r\n    height: 350px;\r\n    border-radius: 10px;\r\n    margin: 10px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.dayDetails {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n/* input [type=\"text\"]:focus::placeholder {\r\n    color: transparent;\r\n    border: 1px solid red;\r\n} */\r\n\r\ninput:focus::placeholder {\r\n    opacity: 0;\r\n}\r\n\r\ninput:active::placeholder {\r\n    opacity: 1;\r\n}\r\n\r\n/* .sectionFour {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 300px;\r\n    background: url('../img/sunrise.svg') no-repeat center/contain;\r\n} */\r\n\r\n.sectionFour {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nimg {\r\n    max-height: 300px;\r\n    max-width: 450px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body,\r\nhtml {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    /* background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../img/bg.jpg'); */\r\n\r\n}\r\n\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n    box-sizing: border-box;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-size: 3rem;\r\n    margin: 0;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    margin: 0;\r\n}\r\n\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    margin: 0;\r\n}\r\n\r\n\r\ninput,\r\nbutton {\r\n    padding: 5px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\nform {\r\n    display: inline-flex;\r\n    font-size: 1.2rem;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    border: 1px solid grey;\r\n    border-right: none;\r\n    border-radius: 5px;\r\n}\r\n\r\nbutton {\r\n    font-size: 2rem;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n#submitBtn {\r\n    border: 1px solid red;\r\n    border-radius: 5px;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 20px;\r\n    margin-top: 0px;\r\n}\r\n\r\n\r\n.headingSection {\r\n    /* display: flex; */\r\n    /* justify-content: space-between; */\r\n    /* align-items: center; */\r\n    /* gap: 10px; */\r\n}\r\n\r\n.submitBtn {\r\n    display: block;\r\n}\r\n\r\n\r\n.searchBar {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    /* margin-top: 10px; */\r\n    padding: 10px;\r\n    /* padding-right: 0; */\r\n    /* font-size: 1.2rem; */\r\n}\r\n\r\n\r\n.sectionOne {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 10px;\r\n    margin: 10px;\r\n}\r\n\r\n/* MainSection */\r\n\r\n.mainSection {\r\n    min-height: 87vh;\r\n    box-sizing: border-box;\r\n    /* border: 2px solid salmon; */\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n.sectionTwo {\r\n    /* display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    border-radius: 10px; */\r\n}\r\n\r\n\r\n/* ,.weatherIcon  */\r\n.weatherDetails {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    /* border: 2px solid rgb(4, 33, 131); */\r\n    padding: 10px;\r\n    margin: 10px;\r\n    margin-bottom: 0px;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n.locationDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 20px;\r\n}\r\n\r\n\r\n.weatherIcon,\r\n.perDayOneImage,\r\n.perDayTwoImage,\r\n.perDayThreeImage,\r\n.perDayFourImage,\r\n.perDayFiveImage {\r\n    min-height: 60px;\r\n    min-width: 100px;\r\n}\r\n\r\n.dayOneImage {\r\n    /* min-height: 100px;\r\n    max-width: 110px; */\r\n    background: url('../img/1.png')no-repeat center/contain;\r\n    height: 100px;\r\n    /* background: url('../img/1.jpg')no-repeat center/cover; */\r\n    /* display: flex; */\r\n}\r\n\r\n.weatherDiv {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n    align-items: center;\r\n}\r\n\r\n\r\n.locationName {\r\n    font-size: 3.5rem;\r\n}\r\n\r\n.weatherCondition {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n}\r\n\r\n.humidity,\r\n.visibility,\r\n.wind,\r\n.pressure,\r\n.sunDetails,\r\n.temperatureMin,\r\n.temperatureMax {\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n\r\n.temperature {\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.temperatureDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.tempMinMaxDiv {\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n\r\n.otherDiv {\r\n    padding-top: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n\r\n.otherDetailsDiv {\r\n    font-size: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n\r\n.humidityDiv,\r\n.visibilityDiv,\r\n.windDiv,\r\n.pressureDiv,\r\n.sunDetailsDiv {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 10px;\r\n}\r\n\r\n.humidityIcon {\r\n    background: url('../img/weatherDetails/humidity.png') no-repeat center/contain;\r\n    min-height: 40px;\r\n    min-width: 40px;\r\n}\r\n\r\n.visibilityIcon {\r\n    background: url('../img/weatherDetails/visibility.png') no-repeat center/contain;\r\n    min-height: 40px;\r\n    min-width: 40px;\r\n}\r\n\r\n.windIcon {\r\n    background: url('../img/weatherDetails/wind.png') no-repeat center/contain;\r\n    min-height: 40px;\r\n    min-width: 40px;\r\n}\r\n\r\n.pressureIcon {\r\n    background: url('../img/weatherDetails/pressure.png') no-repeat center/contain;\r\n    min-height: 40px;\r\n    min-width: 40px;\r\n}\r\n\r\n.sunDetailsIcon {\r\n    background: url('../img/weatherDetails/sunDetails.png') no-repeat center/contain;\r\n    min-height: 40px;\r\n    min-width: 40px;\r\n}\r\n\r\n\r\n.temperatureMinDiv,\r\n.temperatureMaxDiv {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.time {\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.dateDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.sunDetails {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.dailyWeatherDetails {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n    justify-content: center;\r\n}\r\n\r\n.dailyWeatherDetails>div {\r\n    /* border: 2px solid blueviolet; */\r\n    height: 350px;\r\n    border-radius: 10px;\r\n    margin: 10px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.dayDetails {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n/* input [type=\"text\"]:focus::placeholder {\r\n    color: transparent;\r\n    border: 1px solid red;\r\n} */\r\n\r\ninput:focus::placeholder {\r\n    opacity: 0;\r\n}\r\n\r\ninput:active::placeholder {\r\n    opacity: 1;\r\n}\r\n\r\n/* .sectionFour {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 300px;\r\n    background: url('../img/sunrise.svg') no-repeat center/contain;\r\n} */\r\n\r\n.sectionFour {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nimg {\r\n    max-height: 300px;\r\n    max-width: 450px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./img/1.png":
/*!*******************!*\
  !*** ./img/1.png ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80bcac103fd91b6e45f1.png";

/***/ }),

/***/ "./img/weatherDetails/humidity.png":
/*!*****************************************!*\
  !*** ./img/weatherDetails/humidity.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d40aa0c483a872e8b0ca.png";

/***/ }),

/***/ "./img/weatherDetails/pressure.png":
/*!*****************************************!*\
  !*** ./img/weatherDetails/pressure.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "231e6d4641e6822ac242.png";

/***/ }),

/***/ "./img/weatherDetails/sunDetails.png":
/*!*******************************************!*\
  !*** ./img/weatherDetails/sunDetails.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cee55a51f0e9a0fe7761.png";

/***/ }),

/***/ "./img/weatherDetails/visibility.png":
/*!*******************************************!*\
  !*** ./img/weatherDetails/visibility.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d22b92dd4f5960afada.png";

/***/ }),

/***/ "./img/weatherDetails/wind.png":
/*!*************************************!*\
  !*** ./img/weatherDetails/wind.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0e01327646ba6e107dc.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const inputCountryHidden = document.querySelector('.inputCountryHidden');
const inputCountry = document.querySelector('.inputCountry');

const submitBtn = document.querySelector('#submitBtn');
const fahrenheitUnit = document.querySelector('.fahrenheitUnit');
const celsiusUnit = document.querySelector('.celsiusUnit');

const locationName = document.querySelector('.locationName');
const humidity = document.querySelector('.humidity');
const visibility = document.querySelector('.visibility');


const weatherCondition = document.querySelector('.weatherCondition');
const weatherIcon = document.querySelector('.weatherIcon');
const temperature = document.querySelector('.temperature');
const temperatureMin = document.querySelector('.temperatureMin');
const temperatureMax = document.querySelector('.temperatureMax');


const time = document.querySelector('.time');
const date = document.querySelector('.date');
const wind = document.querySelector('.wind');
const sunRise = document.querySelector('.sunRise');
const sunSet = document.querySelector('.sunSet');
const pressure = document.querySelector('.pressure');


const perDayOneName = document.querySelector('.perDayOneName');
const perDayOneCondition = document.querySelector('.perDayOneCondition');
const perDayOnePlace = document.querySelector('.perDayOnePlace');
const perDayOneTemp = document.querySelector('.perDayOneTemp');
const perDayOneHumidity = document.querySelector('.perDayOneHumidity');
const perDayOneWindSpeed = document.querySelector('.perDayOneWindSpeed');

const perDayTwoName = document.querySelector('.perDayTwoName');
const perDayTwoCondition = document.querySelector('.perDayTwoCondition');
const perDayTwoPlace = document.querySelector('.perDayTwoPlace');
const perDayTwoTemp = document.querySelector('.perDayTwoTemp');
const perDayTwoHumidity = document.querySelector('.perDayTwoHumidity');
const perDayTwoWindSpeed = document.querySelector('.perDayTwoWindSpeed');

const perDayThreeName = document.querySelector('.perDayThreeName');
const perDayThreeCondition = document.querySelector('.perDayThreeCondition');
const perDayThreePlace = document.querySelector('.perDayThreePlace');
const perDayThreeTemp = document.querySelector('.perDayThreeTemp');
const perDayThreeHumidity = document.querySelector('.perDayThreeHumidity');
const perDayThreeWindSpeed = document.querySelector('.perDayThreeWindSpeed');

const perDayFourName = document.querySelector('.perDayFourName');
const perDayFourCondition = document.querySelector('.perDayFourCondition');
const perDayFourPlace = document.querySelector('.perDayFourPlace');
const perDayFourTemp = document.querySelector('.perDayFourTemp');
const perDayFourHumidity = document.querySelector('.perDayFourHumidity');
const perDayFourWindSpeed = document.querySelector('.perDayFourWindSpeed');

const perDayFiveName = document.querySelector('.perDayFiveName');
const perDayFiveCondition = document.querySelector('.perDayFiveCondition');
const perDayFivePlace = document.querySelector('.perDayFivePlace');
const perDayFiveTemp = document.querySelector('.perDayFiveTemp');
const perDayFiveHumidity = document.querySelector('.perDayFiveHumidity');
const perDayFiveWindSpeed = document.querySelector('.perDayFiveWindSpeed');

const perDayOneImage = document.querySelector('.perDayOneImage');
const perDayTwoImage = document.querySelector('.perDayTwoImage');
const perDayThreeImage = document.querySelector('.perDayThreeImage');
const perDayFourImage = document.querySelector('.perDayFourImage');
const perDayFiveImage = document.querySelector('.perDayFiveImage');

const image = document.querySelector('.nice');

let getCountryName // userInput from HTML

function capitalizeFirstLetterForPerDayWeather(data, numberIndex, description) {
    const descriptionUpperCased = description[0].toLocaleUpperCase();
    const descriptionToArray = description.split("");
    descriptionToArray.splice(0, 1, descriptionUpperCased);
    const descriptionCapitalized = descriptionToArray.join('');
    return descriptionCapitalized;
}

function weatherConditionImages(dateItem, itemToApplyBackground) {
    const checkWeather = dateItem.textContent.toLowerCase();
    // console.log(checkWeather)

    if (checkWeather.includes("clear")) {
        itemToApplyBackground.style.background = `url('../img/clear.png')no-repeat center/contain`;
    }
    else if (checkWeather.includes("few")) {
        itemToApplyBackground.style.background = `url('../img/few.png')no-repeat center/contain`;
    }
    else if (checkWeather.includes("scattered")) {
        itemToApplyBackground.style.background = `url('../img/scattered.png')no-repeat center/contain`;
    }
    else if (checkWeather.includes("broken")) {
        itemToApplyBackground.style.background = `url('../img/broken.png')no-repeat center/contain`;
    }
    else if (checkWeather.includes("overcast")) {
        itemToApplyBackground.style.background = `url('../img/overcast.png')no-repeat center/contain`;
    }
    else if (checkWeather.includes("shower") || checkWeather.includes("light rain")) {
        itemToApplyBackground.style.background = `url('../img/shower.png')no-repeat center/contain`;
    }
    else if (checkWeather.textContent === "rain") {
        itemToApplyBackground.style.background = `url('../img/rain.png')no-repeat center/contain`;
    }
    else if (checkWeather.includes("thunderstorm")) {
        itemToApplyBackground.style.background = `url('../img/thunderstorm.png')no-repeat center/contain`;
    }
    else if (checkWeather.includes("snow")) {
        itemToApplyBackground.style.background = `url('../img/snow.png')no-repeat center/contain`;
    }
    else if (checkWeather.includes("mist")) {
        itemToApplyBackground.style.background = `url('../img/mist.png')no-repeat center/contain`;
    }
}

function fiveDayWeatherForecast(offset, data, numberIndex,
    fiveDayForecastDay, fiveDayForecastCondition, fiveDayForecastPlace, fiveDayForecastTemp, fiveDayForecastHumidity, fiveDayForecastWindSpeed,
    temperatureUnit, windSpeedUnit, perDayImage) {

    const perDayValue = new Date(data[1].list[numberIndex].dt * 1000 + offset).toUTCString();
    const perDayValueSlice = perDayValue.slice(0, 16);
    const descriptionValue = `${data[1].list[numberIndex].weather[0].description}`; // weather condition 
    fiveDayForecastCondition.textContent = `${capitalizeFirstLetterForPerDayWeather(data, numberIndex, descriptionValue)}`; // function calling and capitalize weather condition 

    fiveDayForecastDay.textContent = `${perDayValueSlice}`;
    fiveDayForecastPlace.textContent = `${data[1].city.name}, ${data[1].city.country} `;
    fiveDayForecastTemp.textContent = `${data[1].list[numberIndex].main.temp}${temperatureUnit}`;
    fiveDayForecastHumidity.textContent = `${data[1].list[numberIndex].main.humidity}%`;
    fiveDayForecastWindSpeed.textContent = `${data[1].list[numberIndex].wind.speed} ${windSpeedUnit}`;
    weatherConditionImages(fiveDayForecastCondition, perDayImage) // show weatherCondition Image
}


async function getAPI(placeName, unit, temperatureUnit, windSpeedUnit) {
    try {
        const response = await Promise.all(
            [
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&cnt=3&appid=02aac3f8bc0f0ae8dc16cdcea142f857&units=${unit}`, { mode: 'cors' }),
                fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${placeName}&appid=02aac3f8bc0f0ae8dc16cdcea142f857&units=${unit}`, { mode: 'cors' })
            ]
        );
        const fetchAllUrl = Promise.all(response.map(each => each.json()));
        const data = await fetchAllUrl;
        console.log(data);
        // console.log(data[0].weather[0].main)



        const descriptionValue = data[0].weather[0].description
        locationName.textContent = `${data[0].name}, ${data[0].sys.country}`;
        weatherCondition.textContent = `${capitalizeFirstLetterForPerDayWeather(data, undefined, descriptionValue)}`;// undefined since it is only need for fiveDayWeatherForecast
        temperature.textContent = `${data[0].main.temp}${temperatureUnit}`;
        temperatureMin.textContent = `${data[0].main.temp_min}${temperatureUnit}`;
        temperatureMax.textContent = `${data[0].main.temp_max}${temperatureUnit}`;

        humidity.textContent = `${data[0].main.humidity}%`;
        visibility.textContent = `${data[0].visibility / 1000} km`;
        wind.textContent = `${data[0].wind.speed} ${windSpeedUnit}`;
        pressure.textContent = `${data[0].main.pressure} h/Pa`;
        weatherConditionImages(weatherCondition, weatherIcon); // show weatherCondition Image



        const offset = data[0].timezone * 1000;
        // console.log(offset);

        if (offset > 0) {
            const timeValue = new Date(data[0].dt * 1000 + offset).toUTCString();
            const sliceTime = timeValue.slice(17, 22);
            const hour = sliceTime.slice(0, 2);
            const sliceDay = timeValue.slice(0, 16);

            const sunRiseValue = new Date(data[0].sys.sunrise * 1000 + offset).toUTCString();
            const sliceSunRiseTime = sunRiseValue.slice(17, 22);

            const sunSetValue = new Date(data[0].sys.sunset * 1000 + offset).toUTCString();
            const sliceSunSetTime = sunSetValue.slice(17, 22);

            if (hour >= 0 && hour < 12) {
                time.textContent = `${sliceTime}am`;
                sunRise.textContent = `${sliceSunRiseTime}am &`;
                sunSet.textContent = `\u00A0${sliceSunSetTime}pm`;
                image.src = '../img/sunrise1.png'
            }
            else if (hour >= 12 && hour <= 18) {
                time.textContent = `${sliceTime}am`;
                sunRise.textContent = `${sliceSunRiseTime}am &`;
                sunSet.textContent = `\u00A0${sliceSunSetTime}pm`;
                image.src = '../img/sunrise3.png'
            }
            else {
                time.textContent = `${sliceTime}pm`;
                sunRise.textContent = `${sliceSunRiseTime}am &`;
                sunSet.textContent = `\u00A0${sliceSunSetTime}pm`;
                image.src = '../img/night.png'
            }
            date.textContent = sliceDay;
        }
        else {
            // const sike = formatTime(data[0].dt - offset);
            const timeValue = new Date(data[0].dt * 1000 - -offset).toUTCString();
            const sliceTime = timeValue.slice(17, 22)
            const hour = sliceTime.slice(0, 2);
            const sliceDay = timeValue.slice(0, 16);

            const sunRiseValue = new Date(data[0].sys.sunrise * 1000 + offset).toUTCString();
            const sliceSunRiseTime = sunRiseValue.slice(17, 22);

            const sunSetValue = new Date(data[0].sys.sunset * 1000 + offset).toUTCString();
            const sliceSunSetTime = sunSetValue.slice(17, 22);
            // console.log(sliceDay);

            if (hour >= 0 && hour < 12) {
                time.textContent = `${sliceTime}am`;
                sunRise.textContent = `${sliceSunRiseTime}am &`;
                sunSet.textContent = `\u00A0${sliceSunSetTime}pm`;
                image.src = '../img/sunrise1.png'
            }
            else if (hour >= 12 && hour < 18) {
                time.textContent = `${sliceTime}am`;
                sunRise.textContent = `${sliceSunRiseTime}am &`;
                sunSet.textContent = `\u00A0${sliceSunSetTime}pm`;
                image.src = '../img/sunrise3.png'
            }
            else {
                time.textContent = `${sliceTime}pm`;
                sunRise.textContent = `${sliceSunRiseTime}am &`;
                sunSet.textContent = `\u00A0${sliceSunSetTime}pm`;
                image.src = '../img/night1.png'
            }
            date.textContent = sliceDay;
        }

        // For displaying fiveDayWeatherForecast  
        fiveDayWeatherForecast(offset, data, 7, perDayOneName, perDayOneCondition, perDayOnePlace, perDayOneTemp, perDayOneHumidity, perDayOneWindSpeed, temperatureUnit, windSpeedUnit, perDayOneImage);
        fiveDayWeatherForecast(offset, data, 15, perDayTwoName, perDayTwoCondition, perDayTwoPlace, perDayTwoTemp, perDayTwoHumidity, perDayTwoWindSpeed, temperatureUnit, windSpeedUnit, perDayTwoImage);
        fiveDayWeatherForecast(offset, data, 23, perDayThreeName, perDayThreeCondition, perDayThreePlace, perDayThreeTemp, perDayThreeHumidity, perDayThreeWindSpeed, temperatureUnit, windSpeedUnit, perDayThreeImage);
        fiveDayWeatherForecast(offset, data, 31, perDayFourName, perDayFourCondition, perDayFourPlace, perDayFourTemp, perDayFourHumidity, perDayFourWindSpeed, temperatureUnit, windSpeedUnit, perDayFourImage);
        fiveDayWeatherForecast(offset, data, 39, perDayFiveName, perDayFiveCondition, perDayFivePlace, perDayFiveTemp, perDayFiveHumidity, perDayFiveWindSpeed, temperatureUnit, windSpeedUnit, perDayFiveImage);
    }
    catch (err) {
        throw new Error(err);
    }
}

function changeTemp() {
    getCountryName = inputCountry.value;
    fahrenheitUnit.addEventListener("click", async e => {
        getAPI(getCountryName, 'imperial', '°F', 'mi/h');
    })
    celsiusUnit.addEventListener("click", async e => {
        getAPI(getCountryName, 'metric', '°C', 'm/s');
    })
}

function submitBtnPressed() {
    submitBtn.addEventListener('click', e => {
        inputCountryHidden.remove();
        // inputCountry.style.color = 'transparent';
        e.preventDefault();
        getCountryName = inputCountry.value; // userInput from HTML
        getAPI(getCountryName, 'metric', '°C', 'm/s');
        changeTemp();
        console.clear();
    })
}

function changeTempPredefined() {
    getCountryName = inputCountryHidden.value;
    fahrenheitUnit.addEventListener("click", async e => {
        getAPI(getCountryName, 'imperial', '°F', 'mi/h');
    })
    celsiusUnit.addEventListener("click", async e => {
        getAPI(getCountryName, 'metric', '°C', 'm/s');
    })
}


submitBtnPressed();
// predefined weather data temperature
getAPI('kerala', 'metric', '°C', 'm/s');
changeTempPredefined();

image.src = '../img/night.png'


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvMS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvd2VhdGhlckRldGFpbHMvaHVtaWRpdHkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nL3dlYXRoZXJEZXRhaWxzL3Zpc2liaWxpdHkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1nL3dlYXRoZXJEZXRhaWxzL3dpbmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1nL3dlYXRoZXJEZXRhaWxzL3ByZXNzdXJlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltZy93ZWF0aGVyRGV0YWlscy9zdW5EZXRhaWxzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSxcXHJcXG5odG1sIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNCksIHJnYmEoMCwgMCwgMCwgMC40KSksIHVybCgnLi4vaW1nL2JnLmpwZycpOyAqL1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4qLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0QnRuIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmhlYWRpbmdTZWN0aW9uIHtcXHJcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXHJcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcclxcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcclxcbiAgICAvKiBnYXA6IDEwcHg7ICovXFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdG4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNlYXJjaEJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC8qIG1hcmdpbi10b3A6IDEwcHg7ICovXFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDA7ICovXFxyXFxuICAgIC8qIGZvbnQtc2l6ZTogMS4ycmVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2VjdGlvbk9uZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluU2VjdGlvbiAqL1xcclxcblxcclxcbi5tYWluU2VjdGlvbiB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDg3dmg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHNhbG1vbjsgKi9cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNlY3Rpb25Ud28ge1xcclxcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogLC53ZWF0aGVySWNvbiAgKi9cXHJcXG4ud2VhdGhlckRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZ2IoNCwgMzMsIDEzMSk7ICovXFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubG9jYXRpb25EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ud2VhdGhlckljb24sXFxyXFxuLnBlckRheU9uZUltYWdlLFxcclxcbi5wZXJEYXlUd29JbWFnZSxcXHJcXG4ucGVyRGF5VGhyZWVJbWFnZSxcXHJcXG4ucGVyRGF5Rm91ckltYWdlLFxcclxcbi5wZXJEYXlGaXZlSW1hZ2Uge1xcclxcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGF5T25lSW1hZ2Uge1xcclxcbiAgICAvKiBtaW4taGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMTBweDsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKW5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuLi9pbWcvMS5qcGcnKW5vLXJlcGVhdCBjZW50ZXIvY292ZXI7ICovXFxyXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5sb2NhdGlvbk5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXJDb25kaXRpb24ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bWlkaXR5LFxcclxcbi52aXNpYmlsaXR5LFxcclxcbi53aW5kLFxcclxcbi5wcmVzc3VyZSxcXHJcXG4uc3VuRGV0YWlscyxcXHJcXG4udGVtcGVyYXR1cmVNaW4sXFxyXFxuLnRlbXBlcmF0dXJlTWF4IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRlbXBlcmF0dXJlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50ZW1wZXJhdHVyZURpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZW1wTWluTWF4RGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3RoZXJEaXYge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ub3RoZXJEZXRhaWxzRGl2IHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaHVtaWRpdHlEaXYsXFxyXFxuLnZpc2liaWxpdHlEaXYsXFxyXFxuLndpbmREaXYsXFxyXFxuLnByZXNzdXJlRGl2LFxcclxcbi5zdW5EZXRhaWxzRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bWlkaXR5SWNvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlci9jb250YWluO1xcclxcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi52aXNpYmlsaXR5SWNvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlci9jb250YWluO1xcclxcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi53aW5kSWNvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlci9jb250YWluO1xcclxcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcmVzc3VyZUljb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcXHJcXG4gICAgbWluLWhlaWdodDogNDBweDtcXHJcXG4gICAgbWluLXdpZHRoOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VuRGV0YWlsc0ljb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcXHJcXG4gICAgbWluLWhlaWdodDogNDBweDtcXHJcXG4gICAgbWluLXdpZHRoOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGVtcGVyYXR1cmVNaW5EaXYsXFxyXFxuLnRlbXBlcmF0dXJlTWF4RGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUge1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGVEaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bkRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5V2VhdGhlckRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseVdlYXRoZXJEZXRhaWxzPmRpdiB7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsdWV2aW9sZXQ7ICovXFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRheURldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGlucHV0IFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxufSAqL1xcclxcblxcclxcbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmFjdGl2ZTo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuc2VjdGlvbkZvdXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy9zdW5yaXNlLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcXHJcXG59ICovXFxyXFxuXFxyXFxuLnNlY3Rpb25Gb3VyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwrR0FBK0c7O0FBRW5IOzs7QUFHQTs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTs7OztJQUlJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsU0FBUztBQUNiOzs7QUFHQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJ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bnRlbnRcIjpbXCJib2R5LFxcclxcbmh0bWwge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40KSwgcmdiYSgwLCAwLCAwLCAwLjQpKSwgdXJsKCcuLi9pbWcvYmcuanBnJyk7ICovXFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbiosXFxyXFxuKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXRCdG4ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaGVhZGluZ1NlY3Rpb24ge1xcclxcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcclxcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxyXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxyXFxuICAgIC8qIGdhcDogMTBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ0biB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoQmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgLyogcGFkZGluZy1yaWdodDogMDsgKi9cXHJcXG4gICAgLyogZm9udC1zaXplOiAxLjJyZW07ICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi5zZWN0aW9uT25lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW5TZWN0aW9uICovXFxyXFxuXFxyXFxuLm1haW5TZWN0aW9uIHtcXHJcXG4gICAgbWluLWhlaWdodDogODd2aDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgc2FsbW9uOyAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2VjdGlvblR3byB7XFxyXFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiAsLndlYXRoZXJJY29uICAqL1xcclxcbi53ZWF0aGVyRGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJnYig0LCAzMywgMTMxKTsgKi9cXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5sb2NhdGlvbkRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi53ZWF0aGVySWNvbixcXHJcXG4ucGVyRGF5T25lSW1hZ2UsXFxyXFxuLnBlckRheVR3b0ltYWdlLFxcclxcbi5wZXJEYXlUaHJlZUltYWdlLFxcclxcbi5wZXJEYXlGb3VySW1hZ2UsXFxyXFxuLnBlckRheUZpdmVJbWFnZSB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5kYXlPbmVJbWFnZSB7XFxyXFxuICAgIC8qIG1pbi1oZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDExMHB4OyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy8xLnBuZycpbm8tcmVwZWF0IGNlbnRlci9jb250YWluO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy8xLmpwZycpbm8tcmVwZWF0IGNlbnRlci9jb3ZlcjsgKi9cXHJcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXJEaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmxvY2F0aW9uTmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlckNvbmRpdGlvbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHksXFxyXFxuLnZpc2liaWxpdHksXFxyXFxuLndpbmQsXFxyXFxuLnByZXNzdXJlLFxcclxcbi5zdW5EZXRhaWxzLFxcclxcbi50ZW1wZXJhdHVyZU1pbixcXHJcXG4udGVtcGVyYXR1cmVNYXgge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGVtcGVyYXR1cmUge1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBlcmF0dXJlRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBNaW5NYXhEaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5vdGhlckRpdiB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5vdGhlckRldGFpbHNEaXYge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5odW1pZGl0eURpdixcXHJcXG4udmlzaWJpbGl0eURpdixcXHJcXG4ud2luZERpdixcXHJcXG4ucHJlc3N1cmVEaXYsXFxyXFxuLnN1bkRldGFpbHNEaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHlJY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWcvd2VhdGhlckRldGFpbHMvaHVtaWRpdHkucG5nJykgbm8tcmVwZWF0IGNlbnRlci9jb250YWluO1xcclxcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi52aXNpYmlsaXR5SWNvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1nL3dlYXRoZXJEZXRhaWxzL3Zpc2liaWxpdHkucG5nJykgbm8tcmVwZWF0IGNlbnRlci9jb250YWluO1xcclxcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi53aW5kSWNvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1nL3dlYXRoZXJEZXRhaWxzL3dpbmQucG5nJykgbm8tcmVwZWF0IGNlbnRlci9jb250YWluO1xcclxcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcmVzc3VyZUljb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy93ZWF0aGVyRGV0YWlscy9wcmVzc3VyZS5wbmcnKSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bkRldGFpbHNJY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWcvd2VhdGhlckRldGFpbHMvc3VuRGV0YWlscy5wbmcnKSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRlbXBlcmF0dXJlTWluRGl2LFxcclxcbi50ZW1wZXJhdHVyZU1heERpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zdW5EZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseVdlYXRoZXJEZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHlXZWF0aGVyRGV0YWlscz5kaXYge1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibHVldmlvbGV0OyAqL1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5kYXlEZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBpbnB1dCBbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbn0gKi9cXHJcXG5cXHJcXG5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDphY3RpdmU6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLnNlY3Rpb25Gb3VyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWcvc3VucmlzZS5zdmcnKSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XFxyXFxufSAqL1xcclxcblxcclxcbi5zZWN0aW9uRm91ciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IGlucHV0Q291bnRyeUhpZGRlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dENvdW50cnlIaWRkZW4nKTtcclxuY29uc3QgaW5wdXRDb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Q291bnRyeScpO1xyXG5cclxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdEJ0bicpO1xyXG5jb25zdCBmYWhyZW5oZWl0VW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWhyZW5oZWl0VW5pdCcpO1xyXG5jb25zdCBjZWxzaXVzVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZWxzaXVzVW5pdCcpO1xyXG5cclxuY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uTmFtZScpO1xyXG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xyXG5jb25zdCB2aXNpYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpc2liaWxpdHknKTtcclxuXHJcblxyXG5jb25zdCB3ZWF0aGVyQ29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJDb25kaXRpb24nKTtcclxuY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlckljb24nKTtcclxuY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcclxuY29uc3QgdGVtcGVyYXR1cmVNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVNaW4nKTtcclxuY29uc3QgdGVtcGVyYXR1cmVNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVNYXgnKTtcclxuXHJcblxyXG5jb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKTtcclxuY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XHJcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpO1xyXG5jb25zdCBzdW5SaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1blJpc2UnKTtcclxuY29uc3Qgc3VuU2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1blNldCcpO1xyXG5jb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZScpO1xyXG5cclxuXHJcbmNvbnN0IHBlckRheU9uZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyRGF5T25lTmFtZScpO1xyXG5jb25zdCBwZXJEYXlPbmVDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyRGF5T25lQ29uZGl0aW9uJyk7XHJcbmNvbnN0IHBlckRheU9uZVBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlckRheU9uZVBsYWNlJyk7XHJcbmNvbnN0IHBlckRheU9uZVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyRGF5T25lVGVtcCcpO1xyXG5jb25zdCBwZXJEYXlPbmVIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJEYXlPbmVIdW1pZGl0eScpO1xyXG5jb25zdCBwZXJEYXlPbmVXaW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyRGF5T25lV2luZFNwZWVkJyk7XHJcblxyXG5jb25zdCBwZXJEYXlUd29OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlckRheVR3b05hbWUnKTtcclxuY29uc3QgcGVyRGF5VHdvQ29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlckRheVR3b0NvbmRpdGlvbicpO1xyXG5jb25zdCBwZXJEYXlUd29QbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJEYXlUd29QbGFjZScpO1xyXG5jb25zdCBwZXJEYXlUd29UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlckRheVR3b1RlbXAnKTtcclxuY29uc3QgcGVyRGF5VHdvSHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyRGF5VHdvSHVtaWRpdHknKTtcclxuY29uc3QgcGVyRGF5VHdvV2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlckRheVR3b1dpbmRTcGVlZCcpO1xyXG5cclxuY29uc3QgcGVyRGF5VGhyZWVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlckRheVRocmVlTmFtZScpO1xyXG5jb25zdCBwZXJEYXlUaHJlZUNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJEYXlUaHJlZUNvbmRpdGlvbicpO1xyXG5jb25zdCBwZXJEYXlUaHJlZVBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlckRheVRocmVlUGxhY2UnKTtcclxuY29uc3QgcGVyRGF5VGhyZWVUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlckRheVRocmVlVGVtcCcpO1xyXG5jb25zdCBwZXJEYXlUaHJlZUh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlckRheVRocmVlSHVtaWRpdHknKTtcclxuY29uc3QgcGVyRGF5VGhyZWVXaW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyRGF5VGhyZWVXaW5kU3BlZWQnKTtcclxuXHJcbmNvbnN0IHBlckRheUZvdXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlckRheUZvdXJOYW1lJyk7XHJcbmNvbnN0IHBlckRheUZvdXJDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyRGF5Rm91ckNvbmRpdGlvbicpO1xyXG5jb25zdCBwZXJEYXlGb3VyUGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyRGF5Rm91clBsYWNlJyk7XHJcbmNvbnN0IHBlckRheUZvdXJUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlckRheUZvdXJUZW1wJyk7XHJcbmNvbnN0IHBlckRheUZvdXJIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJEYXlGb3VySHVtaWRpdHknKTtcclxuY29uc3QgcGVyRGF5Rm91cldpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJEYXlGb3VyV2luZFNwZWVkJyk7XHJcblxyXG5jb25zdCBwZXJEYXlGaXZlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJEYXlGaXZlTmFtZScpO1xyXG5jb25zdCBwZXJEYXlGaXZlQ29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlckRheUZpdmVDb25kaXRpb24nKTtcclxuY29uc3QgcGVyRGF5Rml2ZVBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlckRheUZpdmVQbGFjZScpO1xyXG5jb25zdCBwZXJEYXlGaXZlVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJEYXlGaXZlVGVtcCcpO1xyXG5jb25zdCBwZXJEYXlGaXZlSHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyRGF5Rml2ZUh1bWlkaXR5Jyk7XHJcbmNvbnN0IHBlckRheUZpdmVXaW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyRGF5Rml2ZVdpbmRTcGVlZCcpO1xyXG5cclxuY29uc3QgcGVyRGF5T25lSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyRGF5T25lSW1hZ2UnKTtcclxuY29uc3QgcGVyRGF5VHdvSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyRGF5VHdvSW1hZ2UnKTtcclxuY29uc3QgcGVyRGF5VGhyZWVJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJEYXlUaHJlZUltYWdlJyk7XHJcbmNvbnN0IHBlckRheUZvdXJJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJEYXlGb3VySW1hZ2UnKTtcclxuY29uc3QgcGVyRGF5Rml2ZUltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlckRheUZpdmVJbWFnZScpO1xyXG5cclxuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmljZScpO1xyXG5cclxubGV0IGdldENvdW50cnlOYW1lIC8vIHVzZXJJbnB1dCBmcm9tIEhUTUxcclxuXHJcbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlckZvclBlckRheVdlYXRoZXIoZGF0YSwgbnVtYmVySW5kZXgsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblVwcGVyQ2FzZWQgPSBkZXNjcmlwdGlvblswXS50b0xvY2FsZVVwcGVyQ2FzZSgpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Ub0FycmF5ID0gZGVzY3JpcHRpb24uc3BsaXQoXCJcIik7XHJcbiAgICBkZXNjcmlwdGlvblRvQXJyYXkuc3BsaWNlKDAsIDEsIGRlc2NyaXB0aW9uVXBwZXJDYXNlZCk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNhcGl0YWxpemVkID0gZGVzY3JpcHRpb25Ub0FycmF5LmpvaW4oJycpO1xyXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uQ2FwaXRhbGl6ZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdlYXRoZXJDb25kaXRpb25JbWFnZXMoZGF0ZUl0ZW0sIGl0ZW1Ub0FwcGx5QmFja2dyb3VuZCkge1xyXG4gICAgY29uc3QgY2hlY2tXZWF0aGVyID0gZGF0ZUl0ZW0udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNoZWNrV2VhdGhlcilcclxuXHJcbiAgICBpZiAoY2hlY2tXZWF0aGVyLmluY2x1ZGVzKFwiY2xlYXJcIikpIHtcclxuICAgICAgICBpdGVtVG9BcHBseUJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJy4uL2ltZy9jbGVhci5wbmcnKW5vLXJlcGVhdCBjZW50ZXIvY29udGFpbmA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjaGVja1dlYXRoZXIuaW5jbHVkZXMoXCJmZXdcIikpIHtcclxuICAgICAgICBpdGVtVG9BcHBseUJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJy4uL2ltZy9mZXcucG5nJyluby1yZXBlYXQgY2VudGVyL2NvbnRhaW5gO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2hlY2tXZWF0aGVyLmluY2x1ZGVzKFwic2NhdHRlcmVkXCIpKSB7XHJcbiAgICAgICAgaXRlbVRvQXBwbHlCYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcuLi9pbWcvc2NhdHRlcmVkLnBuZycpbm8tcmVwZWF0IGNlbnRlci9jb250YWluYDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNoZWNrV2VhdGhlci5pbmNsdWRlcyhcImJyb2tlblwiKSkge1xyXG4gICAgICAgIGl0ZW1Ub0FwcGx5QmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnLi4vaW1nL2Jyb2tlbi5wbmcnKW5vLXJlcGVhdCBjZW50ZXIvY29udGFpbmA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjaGVja1dlYXRoZXIuaW5jbHVkZXMoXCJvdmVyY2FzdFwiKSkge1xyXG4gICAgICAgIGl0ZW1Ub0FwcGx5QmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnLi4vaW1nL292ZXJjYXN0LnBuZycpbm8tcmVwZWF0IGNlbnRlci9jb250YWluYDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNoZWNrV2VhdGhlci5pbmNsdWRlcyhcInNob3dlclwiKSB8fCBjaGVja1dlYXRoZXIuaW5jbHVkZXMoXCJsaWdodCByYWluXCIpKSB7XHJcbiAgICAgICAgaXRlbVRvQXBwbHlCYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcuLi9pbWcvc2hvd2VyLnBuZycpbm8tcmVwZWF0IGNlbnRlci9jb250YWluYDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNoZWNrV2VhdGhlci50ZXh0Q29udGVudCA9PT0gXCJyYWluXCIpIHtcclxuICAgICAgICBpdGVtVG9BcHBseUJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJy4uL2ltZy9yYWluLnBuZycpbm8tcmVwZWF0IGNlbnRlci9jb250YWluYDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNoZWNrV2VhdGhlci5pbmNsdWRlcyhcInRodW5kZXJzdG9ybVwiKSkge1xyXG4gICAgICAgIGl0ZW1Ub0FwcGx5QmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnLi4vaW1nL3RodW5kZXJzdG9ybS5wbmcnKW5vLXJlcGVhdCBjZW50ZXIvY29udGFpbmA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjaGVja1dlYXRoZXIuaW5jbHVkZXMoXCJzbm93XCIpKSB7XHJcbiAgICAgICAgaXRlbVRvQXBwbHlCYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcuLi9pbWcvc25vdy5wbmcnKW5vLXJlcGVhdCBjZW50ZXIvY29udGFpbmA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjaGVja1dlYXRoZXIuaW5jbHVkZXMoXCJtaXN0XCIpKSB7XHJcbiAgICAgICAgaXRlbVRvQXBwbHlCYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcuLi9pbWcvbWlzdC5wbmcnKW5vLXJlcGVhdCBjZW50ZXIvY29udGFpbmA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpdmVEYXlXZWF0aGVyRm9yZWNhc3Qob2Zmc2V0LCBkYXRhLCBudW1iZXJJbmRleCxcclxuICAgIGZpdmVEYXlGb3JlY2FzdERheSwgZml2ZURheUZvcmVjYXN0Q29uZGl0aW9uLCBmaXZlRGF5Rm9yZWNhc3RQbGFjZSwgZml2ZURheUZvcmVjYXN0VGVtcCwgZml2ZURheUZvcmVjYXN0SHVtaWRpdHksIGZpdmVEYXlGb3JlY2FzdFdpbmRTcGVlZCxcclxuICAgIHRlbXBlcmF0dXJlVW5pdCwgd2luZFNwZWVkVW5pdCwgcGVyRGF5SW1hZ2UpIHtcclxuXHJcbiAgICBjb25zdCBwZXJEYXlWYWx1ZSA9IG5ldyBEYXRlKGRhdGFbMV0ubGlzdFtudW1iZXJJbmRleF0uZHQgKiAxMDAwICsgb2Zmc2V0KS50b1VUQ1N0cmluZygpO1xyXG4gICAgY29uc3QgcGVyRGF5VmFsdWVTbGljZSA9IHBlckRheVZhbHVlLnNsaWNlKDAsIDE2KTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVmFsdWUgPSBgJHtkYXRhWzFdLmxpc3RbbnVtYmVySW5kZXhdLndlYXRoZXJbMF0uZGVzY3JpcHRpb259YDsgLy8gd2VhdGhlciBjb25kaXRpb24gXHJcbiAgICBmaXZlRGF5Rm9yZWNhc3RDb25kaXRpb24udGV4dENvbnRlbnQgPSBgJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXJGb3JQZXJEYXlXZWF0aGVyKGRhdGEsIG51bWJlckluZGV4LCBkZXNjcmlwdGlvblZhbHVlKX1gOyAvLyBmdW5jdGlvbiBjYWxsaW5nIGFuZCBjYXBpdGFsaXplIHdlYXRoZXIgY29uZGl0aW9uIFxyXG5cclxuICAgIGZpdmVEYXlGb3JlY2FzdERheS50ZXh0Q29udGVudCA9IGAke3BlckRheVZhbHVlU2xpY2V9YDtcclxuICAgIGZpdmVEYXlGb3JlY2FzdFBsYWNlLnRleHRDb250ZW50ID0gYCR7ZGF0YVsxXS5jaXR5Lm5hbWV9LCAke2RhdGFbMV0uY2l0eS5jb3VudHJ5fSBgO1xyXG4gICAgZml2ZURheUZvcmVjYXN0VGVtcC50ZXh0Q29udGVudCA9IGAke2RhdGFbMV0ubGlzdFtudW1iZXJJbmRleF0ubWFpbi50ZW1wfSR7dGVtcGVyYXR1cmVVbml0fWA7XHJcbiAgICBmaXZlRGF5Rm9yZWNhc3RIdW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGFbMV0ubGlzdFtudW1iZXJJbmRleF0ubWFpbi5odW1pZGl0eX0lYDtcclxuICAgIGZpdmVEYXlGb3JlY2FzdFdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2RhdGFbMV0ubGlzdFtudW1iZXJJbmRleF0ud2luZC5zcGVlZH0gJHt3aW5kU3BlZWRVbml0fWA7XHJcbiAgICB3ZWF0aGVyQ29uZGl0aW9uSW1hZ2VzKGZpdmVEYXlGb3JlY2FzdENvbmRpdGlvbiwgcGVyRGF5SW1hZ2UpIC8vIHNob3cgd2VhdGhlckNvbmRpdGlvbiBJbWFnZVxyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QVBJKHBsYWNlTmFtZSwgdW5pdCwgdGVtcGVyYXR1cmVVbml0LCB3aW5kU3BlZWRVbml0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7cGxhY2VOYW1lfSZjbnQ9MyZhcHBpZD0wMmFhYzNmOGJjMGYwYWU4ZGMxNmNkY2VhMTQyZjg1NyZ1bml0cz0ke3VuaXR9YCwgeyBtb2RlOiAnY29ycycgfSksXHJcbiAgICAgICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtwbGFjZU5hbWV9JmFwcGlkPTAyYWFjM2Y4YmMwZjBhZThkYzE2Y2RjZWExNDJmODU3JnVuaXRzPSR7dW5pdH1gLCB7IG1vZGU6ICdjb3JzJyB9KVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBmZXRjaEFsbFVybCA9IFByb21pc2UuYWxsKHJlc3BvbnNlLm1hcChlYWNoID0+IGVhY2guanNvbigpKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoQWxsVXJsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFbMF0ud2VhdGhlclswXS5tYWluKVxyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVmFsdWUgPSBkYXRhWzBdLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cclxuICAgICAgICBsb2NhdGlvbk5hbWUudGV4dENvbnRlbnQgPSBgJHtkYXRhWzBdLm5hbWV9LCAke2RhdGFbMF0uc3lzLmNvdW50cnl9YDtcclxuICAgICAgICB3ZWF0aGVyQ29uZGl0aW9uLnRleHRDb250ZW50ID0gYCR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyRm9yUGVyRGF5V2VhdGhlcihkYXRhLCB1bmRlZmluZWQsIGRlc2NyaXB0aW9uVmFsdWUpfWA7Ly8gdW5kZWZpbmVkIHNpbmNlIGl0IGlzIG9ubHkgbmVlZCBmb3IgZml2ZURheVdlYXRoZXJGb3JlY2FzdFxyXG4gICAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7ZGF0YVswXS5tYWluLnRlbXB9JHt0ZW1wZXJhdHVyZVVuaXR9YDtcclxuICAgICAgICB0ZW1wZXJhdHVyZU1pbi50ZXh0Q29udGVudCA9IGAke2RhdGFbMF0ubWFpbi50ZW1wX21pbn0ke3RlbXBlcmF0dXJlVW5pdH1gO1xyXG4gICAgICAgIHRlbXBlcmF0dXJlTWF4LnRleHRDb250ZW50ID0gYCR7ZGF0YVswXS5tYWluLnRlbXBfbWF4fSR7dGVtcGVyYXR1cmVVbml0fWA7XHJcblxyXG4gICAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YVswXS5tYWluLmh1bWlkaXR5fSVgO1xyXG4gICAgICAgIHZpc2liaWxpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhWzBdLnZpc2liaWxpdHkgLyAxMDAwfSBrbWA7XHJcbiAgICAgICAgd2luZC50ZXh0Q29udGVudCA9IGAke2RhdGFbMF0ud2luZC5zcGVlZH0gJHt3aW5kU3BlZWRVbml0fWA7XHJcbiAgICAgICAgcHJlc3N1cmUudGV4dENvbnRlbnQgPSBgJHtkYXRhWzBdLm1haW4ucHJlc3N1cmV9IGgvUGFgO1xyXG4gICAgICAgIHdlYXRoZXJDb25kaXRpb25JbWFnZXMod2VhdGhlckNvbmRpdGlvbiwgd2VhdGhlckljb24pOyAvLyBzaG93IHdlYXRoZXJDb25kaXRpb24gSW1hZ2VcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdCBvZmZzZXQgPSBkYXRhWzBdLnRpbWV6b25lICogMTAwMDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvZmZzZXQpO1xyXG5cclxuICAgICAgICBpZiAob2Zmc2V0ID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lVmFsdWUgPSBuZXcgRGF0ZShkYXRhWzBdLmR0ICogMTAwMCArIG9mZnNldCkudG9VVENTdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2xpY2VUaW1lID0gdGltZVZhbHVlLnNsaWNlKDE3LCAyMik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBzbGljZVRpbWUuc2xpY2UoMCwgMik7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlRGF5ID0gdGltZVZhbHVlLnNsaWNlKDAsIDE2KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN1blJpc2VWYWx1ZSA9IG5ldyBEYXRlKGRhdGFbMF0uc3lzLnN1bnJpc2UgKiAxMDAwICsgb2Zmc2V0KS50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCBzbGljZVN1blJpc2VUaW1lID0gc3VuUmlzZVZhbHVlLnNsaWNlKDE3LCAyMik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdW5TZXRWYWx1ZSA9IG5ldyBEYXRlKGRhdGFbMF0uc3lzLnN1bnNldCAqIDEwMDAgKyBvZmZzZXQpLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlU3VuU2V0VGltZSA9IHN1blNldFZhbHVlLnNsaWNlKDE3LCAyMik7XHJcblxyXG4gICAgICAgICAgICBpZiAoaG91ciA+PSAwICYmIGhvdXIgPCAxMikge1xyXG4gICAgICAgICAgICAgICAgdGltZS50ZXh0Q29udGVudCA9IGAke3NsaWNlVGltZX1hbWA7XHJcbiAgICAgICAgICAgICAgICBzdW5SaXNlLnRleHRDb250ZW50ID0gYCR7c2xpY2VTdW5SaXNlVGltZX1hbSAmYDtcclxuICAgICAgICAgICAgICAgIHN1blNldC50ZXh0Q29udGVudCA9IGBcXHUwMEEwJHtzbGljZVN1blNldFRpbWV9cG1gO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gJy4uL2ltZy9zdW5yaXNlMS5wbmcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaG91ciA+PSAxMiAmJiBob3VyIDw9IDE4KSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lLnRleHRDb250ZW50ID0gYCR7c2xpY2VUaW1lfWFtYDtcclxuICAgICAgICAgICAgICAgIHN1blJpc2UudGV4dENvbnRlbnQgPSBgJHtzbGljZVN1blJpc2VUaW1lfWFtICZgO1xyXG4gICAgICAgICAgICAgICAgc3VuU2V0LnRleHRDb250ZW50ID0gYFxcdTAwQTAke3NsaWNlU3VuU2V0VGltZX1wbWA7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSAnLi4vaW1nL3N1bnJpc2UzLnBuZydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBgJHtzbGljZVRpbWV9cG1gO1xyXG4gICAgICAgICAgICAgICAgc3VuUmlzZS50ZXh0Q29udGVudCA9IGAke3NsaWNlU3VuUmlzZVRpbWV9YW0gJmA7XHJcbiAgICAgICAgICAgICAgICBzdW5TZXQudGV4dENvbnRlbnQgPSBgXFx1MDBBMCR7c2xpY2VTdW5TZXRUaW1lfXBtYDtcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9ICcuLi9pbWcvbmlnaHQucG5nJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBzbGljZURheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHNpa2UgPSBmb3JtYXRUaW1lKGRhdGFbMF0uZHQgLSBvZmZzZXQpO1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lVmFsdWUgPSBuZXcgRGF0ZShkYXRhWzBdLmR0ICogMTAwMCAtIC1vZmZzZXQpLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlVGltZSA9IHRpbWVWYWx1ZS5zbGljZSgxNywgMjIpXHJcbiAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBzbGljZVRpbWUuc2xpY2UoMCwgMik7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlRGF5ID0gdGltZVZhbHVlLnNsaWNlKDAsIDE2KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN1blJpc2VWYWx1ZSA9IG5ldyBEYXRlKGRhdGFbMF0uc3lzLnN1bnJpc2UgKiAxMDAwICsgb2Zmc2V0KS50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCBzbGljZVN1blJpc2VUaW1lID0gc3VuUmlzZVZhbHVlLnNsaWNlKDE3LCAyMik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdW5TZXRWYWx1ZSA9IG5ldyBEYXRlKGRhdGFbMF0uc3lzLnN1bnNldCAqIDEwMDAgKyBvZmZzZXQpLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlU3VuU2V0VGltZSA9IHN1blNldFZhbHVlLnNsaWNlKDE3LCAyMik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNsaWNlRGF5KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChob3VyID49IDAgJiYgaG91ciA8IDEyKSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lLnRleHRDb250ZW50ID0gYCR7c2xpY2VUaW1lfWFtYDtcclxuICAgICAgICAgICAgICAgIHN1blJpc2UudGV4dENvbnRlbnQgPSBgJHtzbGljZVN1blJpc2VUaW1lfWFtICZgO1xyXG4gICAgICAgICAgICAgICAgc3VuU2V0LnRleHRDb250ZW50ID0gYFxcdTAwQTAke3NsaWNlU3VuU2V0VGltZX1wbWA7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSAnLi4vaW1nL3N1bnJpc2UxLnBuZydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChob3VyID49IDEyICYmIGhvdXIgPCAxOCkge1xyXG4gICAgICAgICAgICAgICAgdGltZS50ZXh0Q29udGVudCA9IGAke3NsaWNlVGltZX1hbWA7XHJcbiAgICAgICAgICAgICAgICBzdW5SaXNlLnRleHRDb250ZW50ID0gYCR7c2xpY2VTdW5SaXNlVGltZX1hbSAmYDtcclxuICAgICAgICAgICAgICAgIHN1blNldC50ZXh0Q29udGVudCA9IGBcXHUwMEEwJHtzbGljZVN1blNldFRpbWV9cG1gO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gJy4uL2ltZy9zdW5yaXNlMy5wbmcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lLnRleHRDb250ZW50ID0gYCR7c2xpY2VUaW1lfXBtYDtcclxuICAgICAgICAgICAgICAgIHN1blJpc2UudGV4dENvbnRlbnQgPSBgJHtzbGljZVN1blJpc2VUaW1lfWFtICZgO1xyXG4gICAgICAgICAgICAgICAgc3VuU2V0LnRleHRDb250ZW50ID0gYFxcdTAwQTAke3NsaWNlU3VuU2V0VGltZX1wbWA7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSAnLi4vaW1nL25pZ2h0MS5wbmcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHNsaWNlRGF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRm9yIGRpc3BsYXlpbmcgZml2ZURheVdlYXRoZXJGb3JlY2FzdCAgXHJcbiAgICAgICAgZml2ZURheVdlYXRoZXJGb3JlY2FzdChvZmZzZXQsIGRhdGEsIDcsIHBlckRheU9uZU5hbWUsIHBlckRheU9uZUNvbmRpdGlvbiwgcGVyRGF5T25lUGxhY2UsIHBlckRheU9uZVRlbXAsIHBlckRheU9uZUh1bWlkaXR5LCBwZXJEYXlPbmVXaW5kU3BlZWQsIHRlbXBlcmF0dXJlVW5pdCwgd2luZFNwZWVkVW5pdCwgcGVyRGF5T25lSW1hZ2UpO1xyXG4gICAgICAgIGZpdmVEYXlXZWF0aGVyRm9yZWNhc3Qob2Zmc2V0LCBkYXRhLCAxNSwgcGVyRGF5VHdvTmFtZSwgcGVyRGF5VHdvQ29uZGl0aW9uLCBwZXJEYXlUd29QbGFjZSwgcGVyRGF5VHdvVGVtcCwgcGVyRGF5VHdvSHVtaWRpdHksIHBlckRheVR3b1dpbmRTcGVlZCwgdGVtcGVyYXR1cmVVbml0LCB3aW5kU3BlZWRVbml0LCBwZXJEYXlUd29JbWFnZSk7XHJcbiAgICAgICAgZml2ZURheVdlYXRoZXJGb3JlY2FzdChvZmZzZXQsIGRhdGEsIDIzLCBwZXJEYXlUaHJlZU5hbWUsIHBlckRheVRocmVlQ29uZGl0aW9uLCBwZXJEYXlUaHJlZVBsYWNlLCBwZXJEYXlUaHJlZVRlbXAsIHBlckRheVRocmVlSHVtaWRpdHksIHBlckRheVRocmVlV2luZFNwZWVkLCB0ZW1wZXJhdHVyZVVuaXQsIHdpbmRTcGVlZFVuaXQsIHBlckRheVRocmVlSW1hZ2UpO1xyXG4gICAgICAgIGZpdmVEYXlXZWF0aGVyRm9yZWNhc3Qob2Zmc2V0LCBkYXRhLCAzMSwgcGVyRGF5Rm91ck5hbWUsIHBlckRheUZvdXJDb25kaXRpb24sIHBlckRheUZvdXJQbGFjZSwgcGVyRGF5Rm91clRlbXAsIHBlckRheUZvdXJIdW1pZGl0eSwgcGVyRGF5Rm91cldpbmRTcGVlZCwgdGVtcGVyYXR1cmVVbml0LCB3aW5kU3BlZWRVbml0LCBwZXJEYXlGb3VySW1hZ2UpO1xyXG4gICAgICAgIGZpdmVEYXlXZWF0aGVyRm9yZWNhc3Qob2Zmc2V0LCBkYXRhLCAzOSwgcGVyRGF5Rml2ZU5hbWUsIHBlckRheUZpdmVDb25kaXRpb24sIHBlckRheUZpdmVQbGFjZSwgcGVyRGF5Rml2ZVRlbXAsIHBlckRheUZpdmVIdW1pZGl0eSwgcGVyRGF5Rml2ZVdpbmRTcGVlZCwgdGVtcGVyYXR1cmVVbml0LCB3aW5kU3BlZWRVbml0LCBwZXJEYXlGaXZlSW1hZ2UpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUZW1wKCkge1xyXG4gICAgZ2V0Q291bnRyeU5hbWUgPSBpbnB1dENvdW50cnkudmFsdWU7XHJcbiAgICBmYWhyZW5oZWl0VW5pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZ2V0QVBJKGdldENvdW50cnlOYW1lLCAnaW1wZXJpYWwnLCAnwrBGJywgJ21pL2gnKTtcclxuICAgIH0pXHJcbiAgICBjZWxzaXVzVW5pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZ2V0QVBJKGdldENvdW50cnlOYW1lLCAnbWV0cmljJywgJ8KwQycsICdtL3MnKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdEJ0blByZXNzZWQoKSB7XHJcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBpbnB1dENvdW50cnlIaWRkZW4ucmVtb3ZlKCk7XHJcbiAgICAgICAgLy8gaW5wdXRDb3VudHJ5LnN0eWxlLmNvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZ2V0Q291bnRyeU5hbWUgPSBpbnB1dENvdW50cnkudmFsdWU7IC8vIHVzZXJJbnB1dCBmcm9tIEhUTUxcclxuICAgICAgICBnZXRBUEkoZ2V0Q291bnRyeU5hbWUsICdtZXRyaWMnLCAnwrBDJywgJ20vcycpO1xyXG4gICAgICAgIGNoYW5nZVRlbXAoKTtcclxuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUZW1wUHJlZGVmaW5lZCgpIHtcclxuICAgIGdldENvdW50cnlOYW1lID0gaW5wdXRDb3VudHJ5SGlkZGVuLnZhbHVlO1xyXG4gICAgZmFocmVuaGVpdFVuaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGdldEFQSShnZXRDb3VudHJ5TmFtZSwgJ2ltcGVyaWFsJywgJ8KwRicsICdtaS9oJyk7XHJcbiAgICB9KVxyXG4gICAgY2Vsc2l1c1VuaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGdldEFQSShnZXRDb3VudHJ5TmFtZSwgJ21ldHJpYycsICfCsEMnLCAnbS9zJyk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuc3VibWl0QnRuUHJlc3NlZCgpO1xyXG4vLyBwcmVkZWZpbmVkIHdlYXRoZXIgZGF0YSB0ZW1wZXJhdHVyZVxyXG5nZXRBUEkoJ2tlcmFsYScsICdtZXRyaWMnLCAnwrBDJywgJ20vcycpO1xyXG5jaGFuZ2VUZW1wUHJlZGVmaW5lZCgpO1xyXG5cclxuaW1hZ2Uuc3JjID0gJy4uL2ltZy9uaWdodC5wbmcnXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=