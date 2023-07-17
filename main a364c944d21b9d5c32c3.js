"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");

const inputCountryHidden = document.querySelector(".inputCountryHidden");
const inputCountry = document.querySelector(".inputCountry");
const submitBtn = document.querySelector("#submitBtn");
const fahrenheitUnit = document.querySelector(".fahrenheitUnit");
const celsiusUnit = document.querySelector(".celsiusUnit");
const locationName = document.querySelector(".locationName");
const dayTimeIcon = document.querySelector(".dayTimeIcon");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const wind = document.querySelector(".wind");
const sunRise = document.querySelector(".sunRise");
const sunSet = document.querySelector(".sunSet");
const pressure = document.querySelector(".pressure");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".visibility");
const weatherCondition = document.querySelector(".weatherCondition");
const weatherConditionIcon = document.querySelector(".weatherConditionIcon");
const temperature = document.querySelector(".temperature");
const temperatureMin = document.querySelector(".temperatureMin");
const temperatureMax = document.querySelector(".temperatureMax");
const perDayOneName = document.querySelector(".perDayOneName");
const perDayOneCondition = document.querySelector(".perDayOneCondition");
const perDayOnePlace = document.querySelector(".perDayOnePlace");
const perDayOneTemp = document.querySelector(".perDayOneTemp");
const perDayOneHumidity = document.querySelector(".perDayOneHumidity");
const perDayOneWindSpeed = document.querySelector(".perDayOneWindSpeed");
const perDayTwoName = document.querySelector(".perDayTwoName");
const perDayTwoCondition = document.querySelector(".perDayTwoCondition");
const perDayTwoPlace = document.querySelector(".perDayTwoPlace");
const perDayTwoTemp = document.querySelector(".perDayTwoTemp");
const perDayTwoHumidity = document.querySelector(".perDayTwoHumidity");
const perDayTwoWindSpeed = document.querySelector(".perDayTwoWindSpeed");
const perDayThreeName = document.querySelector(".perDayThreeName");
const perDayThreeCondition = document.querySelector(".perDayThreeCondition");
const perDayThreePlace = document.querySelector(".perDayThreePlace");
const perDayThreeTemp = document.querySelector(".perDayThreeTemp");
const perDayThreeHumidity = document.querySelector(".perDayThreeHumidity");
const perDayThreeWindSpeed = document.querySelector(".perDayThreeWindSpeed");
const perDayFourName = document.querySelector(".perDayFourName");
const perDayFourCondition = document.querySelector(".perDayFourCondition");
const perDayFourPlace = document.querySelector(".perDayFourPlace");
const perDayFourTemp = document.querySelector(".perDayFourTemp");
const perDayFourHumidity = document.querySelector(".perDayFourHumidity");
const perDayFourWindSpeed = document.querySelector(".perDayFourWindSpeed");
const perDayFiveName = document.querySelector(".perDayFiveName");
const perDayFiveCondition = document.querySelector(".perDayFiveCondition");
const perDayFivePlace = document.querySelector(".perDayFivePlace");
const perDayFiveTemp = document.querySelector(".perDayFiveTemp");
const perDayFiveHumidity = document.querySelector(".perDayFiveHumidity");
const perDayFiveWindSpeed = document.querySelector(".perDayFiveWindSpeed");
const perDayOneImage = document.querySelector(".perDayOneImage");
const perDayTwoImage = document.querySelector(".perDayTwoImage");
const perDayThreeImage = document.querySelector(".perDayThreeImage");
const perDayFourImage = document.querySelector(".perDayFourImage");
const perDayFiveImage = document.querySelector(".perDayFiveImage");
let getUserInput; // userInput from HTML
const storeUserInputArray = [];
function capitalizeFirstLetterOfWeatherCondition(data, numberIndex, description) {
  const descriptionUpperCased = description[0].toLocaleUpperCase();
  const descriptionSplit = description.split("");
  descriptionSplit.splice(0, 1, descriptionUpperCased);
  const descriptionCapitalized = descriptionSplit.join("");
  return descriptionCapitalized;
}
function weatherConditionImages(dateItem, itemToApplyBackground) {
  const checkWeather = dateItem.textContent.toLowerCase();
  // console.log(checkWeather)
  const weatherIcon = itemToApplyBackground;
  if (checkWeather.includes("clear")) {
    weatherIcon.classList.add("clear");
    weatherIcon.classList.remove("rain");
    weatherIcon.classList.remove("few");
    weatherIcon.classList.remove("scattered");
    weatherIcon.classList.remove("broken");
    weatherIcon.classList.remove("overcast");
    weatherIcon.classList.remove("shower");
    weatherIcon.classList.remove("thunderstorm");
    weatherIcon.classList.remove("snow");
    weatherIcon.classList.remove("mist");
  } else if (checkWeather.textContent === "rain") {
    weatherIcon.classList.remove("clear");
    weatherIcon.classList.add("rain");
    weatherIcon.classList.remove("few");
    weatherIcon.classList.remove("scattered");
    weatherIcon.classList.remove("broken");
    weatherIcon.classList.remove("overcast");
    weatherIcon.classList.remove("shower");
    weatherIcon.classList.remove("thunderstorm");
    weatherIcon.classList.remove("snow");
    weatherIcon.classList.remove("mist");

    // weatherIcon.style.background = `url('../img/condition/rain.png')no-repeat center/contain`;
  } else if (checkWeather.includes("few")) {
    weatherIcon.classList.remove("clear");
    weatherIcon.classList.remove("rain");
    weatherIcon.classList.add("few");
    weatherIcon.classList.remove("scattered");
    weatherIcon.classList.remove("broken");
    weatherIcon.classList.remove("overcast");
    weatherIcon.classList.remove("shower");
    weatherIcon.classList.remove("thunderstorm");
    weatherIcon.classList.remove("snow");
    weatherIcon.classList.remove("mist");

    // weatherIcon.style.background = `url('../img/condition/few.png')no-repeat center/contain`;
  } else if (checkWeather.includes("scattered")) {
    weatherIcon.classList.remove("clear");
    weatherIcon.classList.remove("rain");
    weatherIcon.classList.remove("few");
    weatherIcon.classList.add("scattered");
    weatherIcon.classList.remove("broken");
    weatherIcon.classList.remove("overcast");
    weatherIcon.classList.remove("shower");
    weatherIcon.classList.remove("thunderstorm");
    weatherIcon.classList.remove("snow");
    weatherIcon.classList.remove("mist");

    // weatherIcon.style.background = `url('../img/condition/scattered.png')no-repeat center/contain`;
  } else if (checkWeather.includes("broken")) {
    weatherIcon.classList.remove("clear");
    weatherIcon.classList.remove("rain");
    weatherIcon.classList.remove("few");
    weatherIcon.classList.remove("scattered");
    weatherIcon.classList.add("broken");
    weatherIcon.classList.remove("overcast");
    weatherIcon.classList.remove("shower");
    weatherIcon.classList.remove("thunderstorm");
    weatherIcon.classList.remove("snow");
    weatherIcon.classList.remove("mist");

    // weatherIcon.style.background = `url('../img/condition/broken.png')no-repeat center/contain`;
  } else if (checkWeather.includes("overcast")) {
    weatherIcon.classList.remove("clear");
    weatherIcon.classList.remove("rain");
    weatherIcon.classList.remove("few");
    weatherIcon.classList.remove("scattered");
    weatherIcon.classList.remove("broken");
    weatherIcon.classList.add("overcast");
    weatherIcon.classList.remove("shower");
    weatherIcon.classList.remove("thunderstorm");
    weatherIcon.classList.remove("snow");
    weatherIcon.classList.remove("mist");

    // weatherIcon.style.background = `url('../img/condition/overcast.png')no-repeat center/contain`;
  } else if (checkWeather.includes("shower") || checkWeather.includes("light rain")) {
    weatherIcon.classList.remove("clear");
    weatherIcon.classList.remove("rain");
    weatherIcon.classList.remove("few");
    weatherIcon.classList.remove("scattered");
    weatherIcon.classList.remove("broken");
    weatherIcon.classList.remove("overcast");
    weatherIcon.classList.add("shower");
    weatherIcon.classList.remove("thunderstorm");
    weatherIcon.classList.remove("snow");
    weatherIcon.classList.remove("mist");

    // weatherIcon.style.background = `url('../img/condition/shower.png')no-repeat center/contain`;
  } else if (checkWeather.includes("thunderstorm")) {
    weatherIcon.classList.remove("clear");
    weatherIcon.classList.remove("rain");
    weatherIcon.classList.remove("few");
    weatherIcon.classList.remove("scattered");
    weatherIcon.classList.remove("broken");
    weatherIcon.classList.remove("overcast");
    weatherIcon.classList.remove("shower");
    weatherIcon.classList.add("thunderstorm");
    weatherIcon.classList.remove("snow");
    weatherIcon.classList.remove("mist");

    // weatherIcon.style.background = `url('../img/condition/thunderstorm.png')no-repeat center/contain`;
  } else if (checkWeather.includes("snow")) {
    weatherIcon.classList.remove("clear");
    weatherIcon.classList.remove("rain");
    weatherIcon.classList.remove("few");
    weatherIcon.classList.remove("scattered");
    weatherIcon.classList.remove("broken");
    weatherIcon.classList.remove("overcast");
    weatherIcon.classList.remove("shower");
    weatherIcon.classList.remove("thunderstorm");
    weatherIcon.classList.add("snow");
    weatherIcon.classList.remove("mist");

    // weatherIcon.style.background = `url('../img/condition/snow.png')no-repeat center/contain`;
  } else if (checkWeather.includes("mist")) {
    weatherIcon.classList.remove("clear");
    weatherIcon.classList.remove("rain");
    weatherIcon.classList.remove("few");
    weatherIcon.classList.remove("scattered");
    weatherIcon.classList.remove("broken");
    weatherIcon.classList.remove("overcast");
    weatherIcon.classList.remove("shower");
    weatherIcon.classList.remove("thunderstorm");
    weatherIcon.classList.remove("snow");
    weatherIcon.classList.add("mist");

    // weatherIcon.style.background = `url('../img/condition/mist.png')no-repeat center/contain`;
  }
}

function fiveDayWeatherForecast(offset, data, numberIndex, fiveDayForecastDay, fiveDayForecastCondition, fiveDayForecastPlace, fiveDayForecastTemp, fiveDayForecastHumidity, fiveDayForecastWindSpeed, temperatureUnit, windSpeedUnit, perDayImage) {
  const perDayValue = new Date(data[1].list[numberIndex].dt * 1000 + offset).toUTCString();
  const perDayValueSlice = perDayValue.slice(0, 16);
  const weatherConditionName = `${data[1].list[numberIndex].weather[0].description}`; // weather condition
  fiveDayForecastCondition.textContent = `${capitalizeFirstLetterOfWeatherCondition(data, numberIndex, weatherConditionName)}`; // function calling and capitalize weather condition

  fiveDayForecastDay.textContent = `${perDayValueSlice}`;
  fiveDayForecastPlace.textContent = `${data[1].city.name}, ${data[1].city.country} `;
  fiveDayForecastTemp.textContent = `${data[1].list[numberIndex].main.temp}${temperatureUnit}`;
  fiveDayForecastHumidity.textContent = `${data[1].list[numberIndex].main.humidity}%`;
  fiveDayForecastWindSpeed.textContent = `${data[1].list[numberIndex].wind.speed} ${windSpeedUnit}`;
  weatherConditionImages(fiveDayForecastCondition, perDayImage); // show weatherCondition Icon
}

function displayWeatherUI(data, temperatureUnit, windSpeedUnit) {
  const weatherConditionName = data[0].weather[0].description;
  locationName.textContent = `${data[0].name}, ${data[0].sys.country}`;
  weatherCondition.textContent = `${capitalizeFirstLetterOfWeatherCondition(data, undefined, weatherConditionName)}`; // undefined since it is only need for fiveDayWeatherForecast
  temperature.textContent = `${data[0].main.temp}${temperatureUnit}`;
  temperatureMin.textContent = `${data[0].main.temp_min}${temperatureUnit}`;
  temperatureMax.textContent = `${data[0].main.temp_max}${temperatureUnit}`;
  humidity.textContent = `${data[0].main.humidity}%`;
  visibility.textContent = `${data[0].visibility / 1000} km`;
  wind.textContent = `${data[0].wind.speed} ${windSpeedUnit}`;
  pressure.textContent = `${data[0].main.pressure} h/Pa`;
  weatherConditionImages(weatherCondition, weatherConditionIcon); // show weatherCondition Image
}

function displayDateAndTime(data, offset, timeValue) {
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
    dayTimeIcon.classList.add("morning");
    dayTimeIcon.classList.remove("afternoon");
    dayTimeIcon.classList.remove("night");
  } else if (hour >= 12 && hour <= 18) {
    time.textContent = `${sliceTime}pm`;
    sunRise.textContent = `${sliceSunRiseTime}am &`;
    sunSet.textContent = `\u00A0${sliceSunSetTime}pm`;
    dayTimeIcon.classList.remove("morning");
    dayTimeIcon.classList.add("afternoon");
    dayTimeIcon.classList.remove("night");
  } else {
    time.textContent = `${sliceTime}pm`;
    sunRise.textContent = `${sliceSunRiseTime}am &`;
    sunSet.textContent = `\u00A0${sliceSunSetTime}pm`;
    dayTimeIcon.classList.remove("morning");
    dayTimeIcon.classList.remove("afternoon");
    dayTimeIcon.classList.add("night");
  }
  date.textContent = sliceDay;
}
async function getAPI(placeName, unit, temperatureUnit, windSpeedUnit) {
  try {
    const response = await Promise.all([fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&cnt=3&appid=02aac3f8bc0f0ae8dc16cdcea142f857&units=${unit}`, {
      mode: "cors"
    }), fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${placeName}&appid=02aac3f8bc0f0ae8dc16cdcea142f857&units=${unit}`, {
      mode: "cors"
    })]);
    const fetchAllUrl = Promise.all(response.map(each => each.json()));
    const data = await fetchAllUrl;
    displayWeatherUI(data, temperatureUnit, windSpeedUnit);
    const offset = data[0].timezone * 1000;
    if (offset > 0) {
      const timeValue = new Date(data[0].dt * 1000 + offset).toUTCString();
      displayDateAndTime(data, offset, timeValue);
    } else {
      const timeValue = new Date(data[0].dt * 1000 - -offset).toUTCString();
      displayDateAndTime(data, offset, timeValue);
    }

    // For displaying fiveDayWeatherForecast
    fiveDayWeatherForecast(offset, data, 7, perDayOneName, perDayOneCondition, perDayOnePlace, perDayOneTemp, perDayOneHumidity, perDayOneWindSpeed, temperatureUnit, windSpeedUnit, perDayOneImage);
    fiveDayWeatherForecast(offset, data, 15, perDayTwoName, perDayTwoCondition, perDayTwoPlace, perDayTwoTemp, perDayTwoHumidity, perDayTwoWindSpeed, temperatureUnit, windSpeedUnit, perDayTwoImage);
    fiveDayWeatherForecast(offset, data, 23, perDayThreeName, perDayThreeCondition, perDayThreePlace, perDayThreeTemp, perDayThreeHumidity, perDayThreeWindSpeed, temperatureUnit, windSpeedUnit, perDayThreeImage);
    fiveDayWeatherForecast(offset, data, 31, perDayFourName, perDayFourCondition, perDayFourPlace, perDayFourTemp, perDayFourHumidity, perDayFourWindSpeed, temperatureUnit, windSpeedUnit, perDayFourImage);
    fiveDayWeatherForecast(offset, data, 39, perDayFiveName, perDayFiveCondition, perDayFivePlace, perDayFiveTemp, perDayFiveHumidity, perDayFiveWindSpeed, temperatureUnit, windSpeedUnit, perDayFiveImage);
  } catch (err) {
    alert("Enter a location");
    // throw new Error(err);
  }
}

function changeTemp() {
  getUserInput = storeUserInputArray[0];
  fahrenheitUnit.addEventListener("click", async e => {
    console.log(`fahrenheitUnit Pressed`);
    console.log(storeUserInputArray);
    getAPI(getUserInput, "imperial", "°F", "mi/h");
  });
  celsiusUnit.addEventListener("click", async e => {
    console.log(`celsiusUnit Pressed`);
    console.log(storeUserInputArray);
    getAPI(getUserInput, "metric", "°C", "m/s");
  });
}
function submitBtnPressed() {
  // if (storeUserInputArray !== "") {
  submitBtn.addEventListener("click", e => {
    e.preventDefault();
    inputCountryHidden.remove(); // removes it after the user searches for an location
    storeUserInputArray.unshift(inputCountry.value); // add the userInput to an array

    const [firstValue] = storeUserInputArray; // arrayDestructs and gets the first value
    getAPI(firstValue, "metric", "°C", "m/s");
    changeTemp();
    inputCountry.value = ""; // remove the value after submit

    console.clear();
    // console.log(storeUserInputArray)
    console.log(firstValue);
  });
  // }
}

function changeTempPredefined() {
  getUserInput = inputCountryHidden.value; // adds a hidden input element to get a predefined city location
  fahrenheitUnit.addEventListener("click", async e => {
    getAPI(getUserInput, "imperial", "°F", "mi/h");
  });
  celsiusUnit.addEventListener("click", async e => {
    getAPI(getUserInput, "metric", "°C", "m/s");
  });
}
getAPI("kerala", "metric", "°C", "m/s");
submitBtnPressed();
changeTempPredefined();
// predefined weather data

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg1.jpg */ "./src/assets/bg1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/condition/1.png */ "./src/assets/condition/1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/weatherDetails/humidity.png */ "./src/assets/weatherDetails/humidity.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/weatherDetails/visibility.png */ "./src/assets/weatherDetails/visibility.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/weatherDetails/wind.png */ "./src/assets/weatherDetails/wind.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/weatherDetails/pressure.png */ "./src/assets/weatherDetails/pressure.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/weatherDetails/sunDetails.png */ "./src/assets/weatherDetails/sunDetails.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/afternoon.png */ "./src/assets/afternoon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/morning.png */ "./src/assets/morning.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/night.png */ "./src/assets/night.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/condition/clear.png */ "./src/assets/condition/clear.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/condition/rain.png */ "./src/assets/condition/rain.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/condition/few.png */ "./src/assets/condition/few.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/condition/scattered.png */ "./src/assets/condition/scattered.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/condition/broken.png */ "./src/assets/condition/broken.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/condition/overcast.png */ "./src/assets/condition/overcast.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/condition/shower.png */ "./src/assets/condition/shower.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/condition/thunderstorm.png */ "./src/assets/condition/thunderstorm.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/condition/snow.png */ "./src/assets/condition/snow.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/condition/mist.png */ "./src/assets/condition/mist.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Itim&family=Quicksand&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body,
html {
  margin: 0;
  padding: 0;
}

body {
  /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: center;
  color: white;
  font-family: "Itim", cursive;
  font-family: "Quicksand", sans-serif;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin: 0;
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin: 0;
}

h3,
h4,
h5,
h6 {
  text-align: center;
  font-size: 1.5rem;
  margin: 0;
}

input {
  background-color: black;
  color: white;
}

form {
  display: inline-flex;
  font-size: 1rem;
}

input[type=text] {
  border: 1px solid grey;
  border-right: none;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
}

button {
  color: white;
  background-color: rgb(0, 0, 0);
  padding: 5px;
  font-size: 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid rgb(255, 255, 255);
  transition: 0.5s;
}

img {
  max-height: 300px;
  max-width: 450px;
}

.mainSection {
  box-sizing: border-box;
  border-radius: 10px;
}

.container {
  display: flex;
  flex-direction: column;
  margin: 20px;
  margin-top: 0px;
}

.searchBar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
}

#submitBtn {
  padding: 5px;
  font-family: "Itim", cursive;
  font-family: "Quicksand", sans-serif;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 5px;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  transition: 0.5s;
}

.sectionOne {
  display: flex;
  justify-content: center;
  align-items: center;
}

.temperatureUnitDetails {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin: 10px;
}

.sectionTwo {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
}
@media (max-width: 43.75em) {
  .sectionTwo {
    gap: 15px;
  }
}

.weatherDetails {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 10px;
  margin: 10px;
  margin-bottom: 0px;
  border-radius: 10px;
}

.weatherConditionIcon,
.perDayOneImage,
.perDayTwoImage,
.perDayThreeImage,
.perDayFourImage,
.perDayFiveImage {
  min-height: 60px;
  min-width: 100px;
}

.dayOneImage {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center/contain;
  height: 100px;
}

.weatherConditionDiv {
  display: flex;
  flex-direction: column-reverse;
}

.locationName {
  font-size: 2.8rem;
  font-weight: bold;
}

.weatherCondition {
  text-align: center;
  font-size: 2rem;
}

.humidity,
.visibility,
.wind,
.pressure,
.sunDetails,
.temperatureMin,
.temperatureMax {
  text-align: center;
  font-size: 1.5rem;
}

.temperature {
  font-size: 2.5rem;
}

.temperatureDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tempMinMaxDiv {
  display: flex;
  gap: 20px;
}

.otherWeatherDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 43.75em) {
  .otherWeatherDetails {
    padding-top: 10px;
  }
}

.otherWeatherDetailsEach {
  font-size: 2.2rem;
  display: flex;
  flex-direction: column;
}

.humidityDiv,
.visibilityDiv,
.windDiv,
.pressureDiv,
.sunDetailsDiv {
  display: flex;
  align-items: flex-start;
  gap: 5px;
}

.humidityIcon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat center/contain;
  min-height: 40px;
  min-width: 40px;
}

.visibilityIcon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) no-repeat center/contain;
  min-height: 40px;
  min-width: 40px;
}

.windIcon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) no-repeat center/contain;
  min-height: 40px;
  min-width: 40px;
}

.pressureIcon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) no-repeat center/contain;
  min-height: 40px;
  min-width: 40px;
}

.sunDetailsIcon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) no-repeat center/contain;
  min-height: 40px;
  min-width: 40px;
}

.temperatureMinDiv,
.temperatureMaxDiv {
  display: flex;
  align-items: center;
}

.time {
  font-size: 2.5rem;
}

.dateDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
}

.sunDetails {
  display: flex;
  justify-content: center;
}

.fiveDayWeatherDetails {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
}

.fiveDayWeatherDetails > div {
  border-radius: 10px;
  margin: 10px;
  margin-top: 30px;
  border: 2px solid white;
  padding: 10px;
}

.dayDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

input:focus::placeholder {
  opacity: 0;
}

input:active::placeholder {
  opacity: 1;
}

button:hover,
#submitBtn:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(236, 0, 0);
  border: 1px solid rgb(0, 0, 0);
}

.afternoon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_7___}) no-repeat center/contain;
  min-width: 350px;
  min-height: 350px;
}
@media (max-width: 43.75em) {
  .afternoon {
    min-width: 250px;
    min-height: 250px;
  }
}

.morning {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_8___}) no-repeat center/contain;
  min-width: 350px;
  min-height: 350px;
}
@media (max-width: 43.75em) {
  .morning {
    min-width: 250px;
    min-height: 250px;
  }
}

.night {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_9___}) no-repeat center/contain;
  min-width: 350px;
  min-height: 350px;
}
@media (max-width: 43.75em) {
  .night {
    min-width: 250px;
    min-height: 250px;
  }
}

.clear {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_10___}) no-repeat center/contain;
  min-height: 60px;
  min-width: 100px;
}

.rain {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_11___}) no-repeat center/contain;
  min-height: 60px;
  min-width: 100px;
}

.few {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_12___}) no-repeat center/contain;
  min-height: 60px;
  min-width: 100px;
}

.scattered {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_13___}) no-repeat center/contain;
  min-height: 60px;
  min-width: 100px;
}

.broken {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_14___}) no-repeat center/contain;
  min-height: 60px;
  min-width: 100px;
}

.overcast {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_15___}) no-repeat center/contain;
  min-height: 60px;
  min-width: 100px;
}

.shower {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_16___}) no-repeat center/contain;
  min-height: 60px;
  min-width: 100px;
}

.thunderstorm {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_17___}) no-repeat center/contain;
  min-height: 60px;
  min-width: 100px;
}

.snow {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_18___}) no-repeat center/contain;
  min-height: 60px;
  min-width: 100px;
}

.mist {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_19___}) no-repeat center/contain;
  min-height: 60px;
  min-width: 100px;
}`, "",{"version":3,"sources":["webpack://./src/sass/style.scss","webpack://./src/sass/utilities/breakpoint.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"./utilities\" as ut;\r\n@import url(\"https://fonts.googleapis.com/css2?family=Itim&family=Quicksand&display=swap\");\r\nbody,\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */\r\n  background-image: linear-gradient(\r\n      to right,\r\n      rgba(0, 0, 0, 0.4),\r\n      rgba(0, 0, 0, 0.4)\r\n    ),\r\n    url(\"../assets/bg1.jpg\");\r\n  background-position: center;\r\n  color: white;\r\n  font-family: \"Itim\", cursive;\r\n  font-family: \"Quicksand\", sans-serif;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n  margin: 0;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  margin: 0;\r\n}\r\n\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  margin: 0;\r\n}\r\n\r\ninput {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\nform {\r\n  display: inline-flex;\r\n  font-size: 1rem;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  border: 1px solid grey;\r\n  border-right: none;\r\n  border-radius: 5px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\nbutton {\r\n  color: white;\r\n  background-color: rgb(0, 0, 0);\r\n  padding: 5px;\r\n  // font-size: 2rem;\r\n  font-size: 1.5rem;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  border: 1px solid rgb(255, 255, 255);\r\n  transition: 0.5s;\r\n}\r\n\r\nimg {\r\n  max-height: 300px;\r\n  max-width: 450px;\r\n}\r\n\r\n.mainSection {\r\n  // min-height: 87vh;\r\n  box-sizing: border-box;\r\n  border-radius: 10px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 20px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.searchBar {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  padding: 10px;\r\n}\r\n\r\n#submitBtn {\r\n  padding: 5px;\r\n  font-family: \"Itim\", cursive;\r\n  font-family: \"Quicksand\", sans-serif;\r\n  border: 1px solid rgb(255, 255, 255);\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  // font-size: 2rem;\r\n  transition: 0.5s;\r\n}\r\n\r\n.sectionOne {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.temperatureUnitDetails {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.sectionTwo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  gap: 20px;\r\n  @include ut.breakpoint(medium) {\r\n    gap: 15px;\r\n    // align-items: flex-start;\r\n  }\r\n}\r\n\r\n.weatherDetails {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: flex-start;\r\n  flex-wrap: wrap;\r\n  padding: 10px;\r\n  margin: 10px;\r\n  margin-bottom: 0px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.weatherConditionIcon,\r\n.perDayOneImage,\r\n.perDayTwoImage,\r\n.perDayThreeImage,\r\n.perDayFourImage,\r\n.perDayFiveImage {\r\n  min-height: 60px;\r\n  min-width: 100px;\r\n}\r\n\r\n.dayOneImage {\r\n  background: url(\"../assets/condition/1.png\") no-repeat center/contain;\r\n  height: 100px;\r\n}\r\n\r\n.weatherConditionDiv {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n}\r\n\r\n.locationName {\r\n  font-size: 2.8rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.weatherCondition {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n}\r\n\r\n.humidity,\r\n.visibility,\r\n.wind,\r\n.pressure,\r\n.sunDetails,\r\n.temperatureMin,\r\n.temperatureMax {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.temperature {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.temperatureDiv {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.tempMinMaxDiv {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n.otherWeatherDetails {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  // gap: 10px;\r\n  @include ut.breakpoint(medium) {\r\n    padding-top: 10px;\r\n    // align-items: flex-start;\r\n  }\r\n}\r\n\r\n.otherWeatherDetailsEach {\r\n  font-size: 2.2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.humidityDiv,\r\n.visibilityDiv,\r\n.windDiv,\r\n.pressureDiv,\r\n.sunDetailsDiv {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 5px;\r\n}\r\n\r\n.humidityIcon {\r\n  background: url(\"../assets/weatherDetails/humidity.png\") no-repeat\r\n    center/contain;\r\n  min-height: 40px;\r\n  min-width: 40px;\r\n}\r\n\r\n.visibilityIcon {\r\n  background: url(\"../assets/weatherDetails/visibility.png\") no-repeat\r\n    center/contain;\r\n  min-height: 40px;\r\n  min-width: 40px;\r\n}\r\n\r\n.windIcon {\r\n  background: url(\"../assets/weatherDetails/wind.png\") no-repeat center/contain;\r\n  min-height: 40px;\r\n  min-width: 40px;\r\n}\r\n\r\n.pressureIcon {\r\n  background: url(\"../assets/weatherDetails/pressure.png\") no-repeat\r\n    center/contain;\r\n  min-height: 40px;\r\n  min-width: 40px;\r\n}\r\n\r\n.sunDetailsIcon {\r\n  background: url(\"../assets/weatherDetails/sunDetails.png\") no-repeat\r\n    center/contain;\r\n  min-height: 40px;\r\n  min-width: 40px;\r\n}\r\n\r\n.temperatureMinDiv,\r\n.temperatureMaxDiv {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.time {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.dateDiv {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.sunDetails {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.fiveDayWeatherDetails {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  justify-content: center;\r\n}\r\n\r\n.fiveDayWeatherDetails > div {\r\n  // height: 380px;\r\n  // padding-top: 20px;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n  margin-top: 30px;\r\n  border: 2px solid white;\r\n  padding: 10px;\r\n}\r\n\r\n.dayDetails {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\ninput:focus::placeholder {\r\n  opacity: 0;\r\n}\r\n\r\ninput:active::placeholder {\r\n  opacity: 1;\r\n}\r\n\r\nbutton:hover,\r\n#submitBtn:hover {\r\n  background-color: rgb(255, 255, 255);\r\n  color: rgb(236, 0, 0);\r\n  border: 1px solid rgb(0, 0, 0);\r\n}\r\n\r\n.afternoon {\r\n  background: url(\"../assets/afternoon.png\") no-repeat center/contain;\r\n  min-width: 350px;\r\n  min-height: 350px;\r\n  @include ut.breakpoint(medium) {\r\n    min-width: 250px;\r\n    min-height: 250px;\r\n  }\r\n}\r\n\r\n.morning {\r\n  background: url(\"../assets/morning.png\") no-repeat center/contain;\r\n  min-width: 350px;\r\n  min-height: 350px;\r\n  @include ut.breakpoint(medium) {\r\n    min-width: 250px;\r\n    min-height: 250px;\r\n  }\r\n}\r\n\r\n.night {\r\n  background: url(\"../assets/night.png\") no-repeat center/contain;\r\n  min-width: 350px;\r\n  min-height: 350px;\r\n  @include ut.breakpoint(medium) {\r\n    min-width: 250px;\r\n    min-height: 250px;\r\n  }\r\n}\r\n\r\n.clear {\r\n  background: url(\"../assets/condition/clear.png\") no-repeat center/contain;\r\n  min-height: 60px;\r\n  min-width: 100px;\r\n}\r\n\r\n.rain {\r\n  background: url(\"../assets/condition/rain.png\") no-repeat center/contain;\r\n  min-height: 60px;\r\n  min-width: 100px;\r\n}\r\n\r\n.few {\r\n  background: url(\"../assets/condition/few.png\") no-repeat center/contain;\r\n  min-height: 60px;\r\n  min-width: 100px;\r\n}\r\n\r\n.scattered {\r\n  background: url(\"../assets/condition/scattered.png\") no-repeat center/contain;\r\n  min-height: 60px;\r\n  min-width: 100px;\r\n}\r\n\r\n.broken {\r\n  background: url(\"../assets/condition/broken.png\") no-repeat center/contain;\r\n  min-height: 60px;\r\n  min-width: 100px;\r\n}\r\n\r\n.overcast {\r\n  background: url(\"../assets/condition/overcast.png\") no-repeat center/contain;\r\n  min-height: 60px;\r\n  min-width: 100px;\r\n}\r\n\r\n.shower {\r\n  background: url(\"../assets/condition/shower.png\") no-repeat center/contain;\r\n  min-height: 60px;\r\n  min-width: 100px;\r\n}\r\n\r\n.thunderstorm {\r\n  background: url(\"../assets/condition/thunderstorm.png\") no-repeat\r\n    center/contain;\r\n  min-height: 60px;\r\n  min-width: 100px;\r\n}\r\n\r\n.snow {\r\n  background: url(\"../assets/condition/snow.png\") no-repeat center/contain;\r\n  min-height: 60px;\r\n  min-width: 100px;\r\n}\r\n\r\n.mist {\r\n  background: url(\"../assets/condition/mist.png\") no-repeat center/contain;\r\n  min-height: 60px;\r\n  min-width: 100px;\r\n}\r\n","$breakpoints: (\r\n  \"medium\": 43.75em,\r\n  \"large\": 56.25em,\r\n  \"xLarge\": 90em,\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n  @media (max-width: map-get($breakpoints,$size)) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/assets/afternoon.png":
/*!**********************************!*\
  !*** ./src/assets/afternoon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afternoon .png";

/***/ }),

/***/ "./src/assets/bg1.jpg":
/*!****************************!*\
  !*** ./src/assets/bg1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bg1 .jpg";

/***/ }),

/***/ "./src/assets/condition/1.png":
/*!************************************!*\
  !*** ./src/assets/condition/1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1 .png";

/***/ }),

/***/ "./src/assets/condition/broken.png":
/*!*****************************************!*\
  !*** ./src/assets/condition/broken.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "broken .png";

/***/ }),

/***/ "./src/assets/condition/clear.png":
/*!****************************************!*\
  !*** ./src/assets/condition/clear.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "clear .png";

/***/ }),

/***/ "./src/assets/condition/few.png":
/*!**************************************!*\
  !*** ./src/assets/condition/few.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "few .png";

/***/ }),

/***/ "./src/assets/condition/mist.png":
/*!***************************************!*\
  !*** ./src/assets/condition/mist.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mist .png";

/***/ }),

/***/ "./src/assets/condition/overcast.png":
/*!*******************************************!*\
  !*** ./src/assets/condition/overcast.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "overcast .png";

/***/ }),

/***/ "./src/assets/condition/rain.png":
/*!***************************************!*\
  !*** ./src/assets/condition/rain.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rain .png";

/***/ }),

/***/ "./src/assets/condition/scattered.png":
/*!********************************************!*\
  !*** ./src/assets/condition/scattered.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "scattered .png";

/***/ }),

/***/ "./src/assets/condition/shower.png":
/*!*****************************************!*\
  !*** ./src/assets/condition/shower.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "shower .png";

/***/ }),

/***/ "./src/assets/condition/snow.png":
/*!***************************************!*\
  !*** ./src/assets/condition/snow.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "snow .png";

/***/ }),

/***/ "./src/assets/condition/thunderstorm.png":
/*!***********************************************!*\
  !*** ./src/assets/condition/thunderstorm.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "thunderstorm .png";

/***/ }),

/***/ "./src/assets/morning.png":
/*!********************************!*\
  !*** ./src/assets/morning.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "morning .png";

/***/ }),

/***/ "./src/assets/night.png":
/*!******************************!*\
  !*** ./src/assets/night.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "night .png";

/***/ }),

/***/ "./src/assets/weatherDetails/humidity.png":
/*!************************************************!*\
  !*** ./src/assets/weatherDetails/humidity.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "humidity .png";

/***/ }),

/***/ "./src/assets/weatherDetails/pressure.png":
/*!************************************************!*\
  !*** ./src/assets/weatherDetails/pressure.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pressure .png";

/***/ }),

/***/ "./src/assets/weatherDetails/sunDetails.png":
/*!**************************************************!*\
  !*** ./src/assets/weatherDetails/sunDetails.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sunDetails .png";

/***/ }),

/***/ "./src/assets/weatherDetails/visibility.png":
/*!**************************************************!*\
  !*** ./src/assets/weatherDetails/visibility.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "visibility .png";

/***/ }),

/***/ "./src/assets/weatherDetails/wind.png":
/*!********************************************!*\
  !*** ./src/assets/weatherDetails/wind.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "wind .png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9DQUFvQztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isb0NBQW9DO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvQ0FBb0M7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9DQUFvQztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isb0NBQW9DO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvQ0FBb0M7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9DQUFvQztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isb0NBQW9DO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvQ0FBb0M7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9DQUFvQztBQUN4RDtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdJQUF3SSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxRQUFRLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLFNBQVMsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxX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Ly93ZWF0aGVyLWFwcC8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz80ZDM3Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zYXNzL3N0eWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IGlucHV0Q291bnRyeUhpZGRlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRDb3VudHJ5SGlkZGVuXCIpO1xyXG5jb25zdCBpbnB1dENvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0Q291bnRyeVwiKTtcclxuXHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0QnRuXCIpO1xyXG5jb25zdCBmYWhyZW5oZWl0VW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmFocmVuaGVpdFVuaXRcIik7XHJcbmNvbnN0IGNlbHNpdXNVbml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZWxzaXVzVW5pdFwiKTtcclxuXHJcbmNvbnN0IGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25OYW1lXCIpO1xyXG5jb25zdCBkYXlUaW1lSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF5VGltZUljb25cIik7XHJcblxyXG5jb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lXCIpO1xyXG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpO1xyXG5jb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kXCIpO1xyXG5jb25zdCBzdW5SaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW5SaXNlXCIpO1xyXG5jb25zdCBzdW5TZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1blNldFwiKTtcclxuY29uc3QgcHJlc3N1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXNzdXJlXCIpO1xyXG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XHJcbmNvbnN0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpc2liaWxpdHlcIik7XHJcbmNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJDb25kaXRpb25cIik7XHJcbmNvbnN0IHdlYXRoZXJDb25kaXRpb25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyQ29uZGl0aW9uSWNvblwiKTtcclxuY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlXCIpO1xyXG5jb25zdCB0ZW1wZXJhdHVyZU1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGVyYXR1cmVNaW5cIik7XHJcbmNvbnN0IHRlbXBlcmF0dXJlTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZU1heFwiKTtcclxuXHJcbmNvbnN0IHBlckRheU9uZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlckRheU9uZU5hbWVcIik7XHJcbmNvbnN0IHBlckRheU9uZUNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVyRGF5T25lQ29uZGl0aW9uXCIpO1xyXG5jb25zdCBwZXJEYXlPbmVQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVyRGF5T25lUGxhY2VcIik7XHJcbmNvbnN0IHBlckRheU9uZVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlckRheU9uZVRlbXBcIik7XHJcbmNvbnN0IHBlckRheU9uZUh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZXJEYXlPbmVIdW1pZGl0eVwiKTtcclxuY29uc3QgcGVyRGF5T25lV2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZXJEYXlPbmVXaW5kU3BlZWRcIik7XHJcblxyXG5jb25zdCBwZXJEYXlUd29OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZXJEYXlUd29OYW1lXCIpO1xyXG5jb25zdCBwZXJEYXlUd29Db25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlckRheVR3b0NvbmRpdGlvblwiKTtcclxuY29uc3QgcGVyRGF5VHdvUGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlckRheVR3b1BsYWNlXCIpO1xyXG5jb25zdCBwZXJEYXlUd29UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZXJEYXlUd29UZW1wXCIpO1xyXG5jb25zdCBwZXJEYXlUd29IdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVyRGF5VHdvSHVtaWRpdHlcIik7XHJcbmNvbnN0IHBlckRheVR3b1dpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVyRGF5VHdvV2luZFNwZWVkXCIpO1xyXG5cclxuY29uc3QgcGVyRGF5VGhyZWVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZXJEYXlUaHJlZU5hbWVcIik7XHJcbmNvbnN0IHBlckRheVRocmVlQ29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZXJEYXlUaHJlZUNvbmRpdGlvblwiKTtcclxuY29uc3QgcGVyRGF5VGhyZWVQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVyRGF5VGhyZWVQbGFjZVwiKTtcclxuY29uc3QgcGVyRGF5VGhyZWVUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZXJEYXlUaHJlZVRlbXBcIik7XHJcbmNvbnN0IHBlckRheVRocmVlSHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlckRheVRocmVlSHVtaWRpdHlcIik7XHJcbmNvbnN0IHBlckRheVRocmVlV2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZXJEYXlUaHJlZVdpbmRTcGVlZFwiKTtcclxuXHJcbmNvbnN0IHBlckRheUZvdXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZXJEYXlGb3VyTmFtZVwiKTtcclxuY29uc3QgcGVyRGF5Rm91ckNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVyRGF5Rm91ckNvbmRpdGlvblwiKTtcclxuY29uc3QgcGVyRGF5Rm91clBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZXJEYXlGb3VyUGxhY2VcIik7XHJcbmNvbnN0IHBlckRheUZvdXJUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZXJEYXlGb3VyVGVtcFwiKTtcclxuY29uc3QgcGVyRGF5Rm91ckh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZXJEYXlGb3VySHVtaWRpdHlcIik7XHJcbmNvbnN0IHBlckRheUZvdXJXaW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlckRheUZvdXJXaW5kU3BlZWRcIik7XHJcblxyXG5jb25zdCBwZXJEYXlGaXZlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVyRGF5Rml2ZU5hbWVcIik7XHJcbmNvbnN0IHBlckRheUZpdmVDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlckRheUZpdmVDb25kaXRpb25cIik7XHJcbmNvbnN0IHBlckRheUZpdmVQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVyRGF5Rml2ZVBsYWNlXCIpO1xyXG5jb25zdCBwZXJEYXlGaXZlVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVyRGF5Rml2ZVRlbXBcIik7XHJcbmNvbnN0IHBlckRheUZpdmVIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVyRGF5Rml2ZUh1bWlkaXR5XCIpO1xyXG5jb25zdCBwZXJEYXlGaXZlV2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZXJEYXlGaXZlV2luZFNwZWVkXCIpO1xyXG5cclxuY29uc3QgcGVyRGF5T25lSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlckRheU9uZUltYWdlXCIpO1xyXG5jb25zdCBwZXJEYXlUd29JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVyRGF5VHdvSW1hZ2VcIik7XHJcbmNvbnN0IHBlckRheVRocmVlSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlckRheVRocmVlSW1hZ2VcIik7XHJcbmNvbnN0IHBlckRheUZvdXJJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVyRGF5Rm91ckltYWdlXCIpO1xyXG5jb25zdCBwZXJEYXlGaXZlSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlckRheUZpdmVJbWFnZVwiKTtcclxuXHJcbmxldCBnZXRVc2VySW5wdXQ7IC8vIHVzZXJJbnB1dCBmcm9tIEhUTUxcclxuY29uc3Qgc3RvcmVVc2VySW5wdXRBcnJheSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyT2ZXZWF0aGVyQ29uZGl0aW9uKFxyXG4gIGRhdGEsXHJcbiAgbnVtYmVySW5kZXgsXHJcbiAgZGVzY3JpcHRpb25cclxuKSB7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25VcHBlckNhc2VkID0gZGVzY3JpcHRpb25bMF0udG9Mb2NhbGVVcHBlckNhc2UoKTtcclxuICBjb25zdCBkZXNjcmlwdGlvblNwbGl0ID0gZGVzY3JpcHRpb24uc3BsaXQoXCJcIik7XHJcbiAgZGVzY3JpcHRpb25TcGxpdC5zcGxpY2UoMCwgMSwgZGVzY3JpcHRpb25VcHBlckNhc2VkKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbkNhcGl0YWxpemVkID0gZGVzY3JpcHRpb25TcGxpdC5qb2luKFwiXCIpO1xyXG4gIHJldHVybiBkZXNjcmlwdGlvbkNhcGl0YWxpemVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3ZWF0aGVyQ29uZGl0aW9uSW1hZ2VzKGRhdGVJdGVtLCBpdGVtVG9BcHBseUJhY2tncm91bmQpIHtcclxuICBjb25zdCBjaGVja1dlYXRoZXIgPSBkYXRlSXRlbS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG4gIC8vIGNvbnNvbGUubG9nKGNoZWNrV2VhdGhlcilcclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGl0ZW1Ub0FwcGx5QmFja2dyb3VuZDtcclxuICBpZiAoY2hlY2tXZWF0aGVyLmluY2x1ZGVzKFwiY2xlYXJcIikpIHtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJjbGVhclwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJyYWluXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcImZld1wiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzY2F0dGVyZWRcIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYnJva2VuXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJjYXN0XCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcInNob3dlclwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aHVuZGVyc3Rvcm1cIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic25vd1wiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJtaXN0XCIpO1xyXG4gIH0gZWxzZSBpZiAoY2hlY2tXZWF0aGVyLnRleHRDb250ZW50ID09PSBcInJhaW5cIikge1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcImNsZWFyXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcInJhaW5cIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmV3XCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcInNjYXR0ZXJlZFwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJicm9rZW5cIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlcmNhc3RcIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd2VyXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcInRodW5kZXJzdG9ybVwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzbm93XCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcIm1pc3RcIik7XHJcblxyXG4gICAgLy8gd2VhdGhlckljb24uc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJy4uL2ltZy9jb25kaXRpb24vcmFpbi5wbmcnKW5vLXJlcGVhdCBjZW50ZXIvY29udGFpbmA7XHJcbiAgfSBlbHNlIGlmIChjaGVja1dlYXRoZXIuaW5jbHVkZXMoXCJmZXdcIikpIHtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGVhclwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJyYWluXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImZld1wiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzY2F0dGVyZWRcIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYnJva2VuXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJjYXN0XCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcInNob3dlclwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aHVuZGVyc3Rvcm1cIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic25vd1wiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJtaXN0XCIpO1xyXG5cclxuICAgIC8vIHdlYXRoZXJJY29uLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcuLi9pbWcvY29uZGl0aW9uL2Zldy5wbmcnKW5vLXJlcGVhdCBjZW50ZXIvY29udGFpbmA7XHJcbiAgfSBlbHNlIGlmIChjaGVja1dlYXRoZXIuaW5jbHVkZXMoXCJzY2F0dGVyZWRcIikpIHtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGVhclwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJyYWluXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcImZld1wiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJzY2F0dGVyZWRcIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYnJva2VuXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJjYXN0XCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcInNob3dlclwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aHVuZGVyc3Rvcm1cIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic25vd1wiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJtaXN0XCIpO1xyXG5cclxuICAgIC8vIHdlYXRoZXJJY29uLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcuLi9pbWcvY29uZGl0aW9uL3NjYXR0ZXJlZC5wbmcnKW5vLXJlcGVhdCBjZW50ZXIvY29udGFpbmA7XHJcbiAgfSBlbHNlIGlmIChjaGVja1dlYXRoZXIuaW5jbHVkZXMoXCJicm9rZW5cIikpIHtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGVhclwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJyYWluXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcImZld1wiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzY2F0dGVyZWRcIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiYnJva2VuXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJjYXN0XCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcInNob3dlclwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aHVuZGVyc3Rvcm1cIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic25vd1wiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJtaXN0XCIpO1xyXG5cclxuICAgIC8vIHdlYXRoZXJJY29uLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcuLi9pbWcvY29uZGl0aW9uL2Jyb2tlbi5wbmcnKW5vLXJlcGVhdCBjZW50ZXIvY29udGFpbmA7XHJcbiAgfSBlbHNlIGlmIChjaGVja1dlYXRoZXIuaW5jbHVkZXMoXCJvdmVyY2FzdFwiKSkge1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcImNsZWFyXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcInJhaW5cIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmV3XCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcInNjYXR0ZXJlZFwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJicm9rZW5cIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKFwib3ZlcmNhc3RcIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd2VyXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcInRodW5kZXJzdG9ybVwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzbm93XCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcIm1pc3RcIik7XHJcblxyXG4gICAgLy8gd2VhdGhlckljb24uc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJy4uL2ltZy9jb25kaXRpb24vb3ZlcmNhc3QucG5nJyluby1yZXBlYXQgY2VudGVyL2NvbnRhaW5gO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBjaGVja1dlYXRoZXIuaW5jbHVkZXMoXCJzaG93ZXJcIikgfHxcclxuICAgIGNoZWNrV2VhdGhlci5pbmNsdWRlcyhcImxpZ2h0IHJhaW5cIilcclxuICApIHtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGVhclwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJyYWluXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcImZld1wiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzY2F0dGVyZWRcIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYnJva2VuXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJjYXN0XCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcInNob3dlclwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aHVuZGVyc3Rvcm1cIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic25vd1wiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJtaXN0XCIpO1xyXG5cclxuICAgIC8vIHdlYXRoZXJJY29uLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcuLi9pbWcvY29uZGl0aW9uL3Nob3dlci5wbmcnKW5vLXJlcGVhdCBjZW50ZXIvY29udGFpbmA7XHJcbiAgfSBlbHNlIGlmIChjaGVja1dlYXRoZXIuaW5jbHVkZXMoXCJ0aHVuZGVyc3Rvcm1cIikpIHtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGVhclwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJyYWluXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcImZld1wiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzY2F0dGVyZWRcIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYnJva2VuXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJjYXN0XCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcInNob3dlclwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJ0aHVuZGVyc3Rvcm1cIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic25vd1wiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJtaXN0XCIpO1xyXG5cclxuICAgIC8vIHdlYXRoZXJJY29uLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcuLi9pbWcvY29uZGl0aW9uL3RodW5kZXJzdG9ybS5wbmcnKW5vLXJlcGVhdCBjZW50ZXIvY29udGFpbmA7XHJcbiAgfSBlbHNlIGlmIChjaGVja1dlYXRoZXIuaW5jbHVkZXMoXCJzbm93XCIpKSB7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xlYXJcIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwicmFpblwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJmZXdcIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2NhdHRlcmVkXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcImJyb2tlblwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVyY2FzdFwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93ZXJcIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwidGh1bmRlcnN0b3JtXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcInNub3dcIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwibWlzdFwiKTtcclxuXHJcbiAgICAvLyB3ZWF0aGVySWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnLi4vaW1nL2NvbmRpdGlvbi9zbm93LnBuZycpbm8tcmVwZWF0IGNlbnRlci9jb250YWluYDtcclxuICB9IGVsc2UgaWYgKGNoZWNrV2VhdGhlci5pbmNsdWRlcyhcIm1pc3RcIikpIHtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGVhclwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJyYWluXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcImZld1wiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzY2F0dGVyZWRcIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYnJva2VuXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJjYXN0XCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LnJlbW92ZShcInNob3dlclwiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aHVuZGVyc3Rvcm1cIik7XHJcbiAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic25vd1wiKTtcclxuICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJtaXN0XCIpO1xyXG5cclxuICAgIC8vIHdlYXRoZXJJY29uLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcuLi9pbWcvY29uZGl0aW9uL21pc3QucG5nJyluby1yZXBlYXQgY2VudGVyL2NvbnRhaW5gO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZml2ZURheVdlYXRoZXJGb3JlY2FzdChcclxuICBvZmZzZXQsXHJcbiAgZGF0YSxcclxuICBudW1iZXJJbmRleCxcclxuICBmaXZlRGF5Rm9yZWNhc3REYXksXHJcbiAgZml2ZURheUZvcmVjYXN0Q29uZGl0aW9uLFxyXG4gIGZpdmVEYXlGb3JlY2FzdFBsYWNlLFxyXG4gIGZpdmVEYXlGb3JlY2FzdFRlbXAsXHJcbiAgZml2ZURheUZvcmVjYXN0SHVtaWRpdHksXHJcbiAgZml2ZURheUZvcmVjYXN0V2luZFNwZWVkLFxyXG4gIHRlbXBlcmF0dXJlVW5pdCxcclxuICB3aW5kU3BlZWRVbml0LFxyXG4gIHBlckRheUltYWdlXHJcbikge1xyXG4gIGNvbnN0IHBlckRheVZhbHVlID0gbmV3IERhdGUoXHJcbiAgICBkYXRhWzFdLmxpc3RbbnVtYmVySW5kZXhdLmR0ICogMTAwMCArIG9mZnNldFxyXG4gICkudG9VVENTdHJpbmcoKTtcclxuICBjb25zdCBwZXJEYXlWYWx1ZVNsaWNlID0gcGVyRGF5VmFsdWUuc2xpY2UoMCwgMTYpO1xyXG4gIGNvbnN0IHdlYXRoZXJDb25kaXRpb25OYW1lID0gYCR7ZGF0YVsxXS5saXN0W251bWJlckluZGV4XS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWA7IC8vIHdlYXRoZXIgY29uZGl0aW9uXHJcbiAgZml2ZURheUZvcmVjYXN0Q29uZGl0aW9uLnRleHRDb250ZW50ID0gYCR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyT2ZXZWF0aGVyQ29uZGl0aW9uKFxyXG4gICAgZGF0YSxcclxuICAgIG51bWJlckluZGV4LFxyXG4gICAgd2VhdGhlckNvbmRpdGlvbk5hbWVcclxuICApfWA7IC8vIGZ1bmN0aW9uIGNhbGxpbmcgYW5kIGNhcGl0YWxpemUgd2VhdGhlciBjb25kaXRpb25cclxuXHJcbiAgZml2ZURheUZvcmVjYXN0RGF5LnRleHRDb250ZW50ID0gYCR7cGVyRGF5VmFsdWVTbGljZX1gO1xyXG4gIGZpdmVEYXlGb3JlY2FzdFBsYWNlLnRleHRDb250ZW50ID0gYCR7ZGF0YVsxXS5jaXR5Lm5hbWV9LCAke2RhdGFbMV0uY2l0eS5jb3VudHJ5fSBgO1xyXG4gIGZpdmVEYXlGb3JlY2FzdFRlbXAudGV4dENvbnRlbnQgPSBgJHtkYXRhWzFdLmxpc3RbbnVtYmVySW5kZXhdLm1haW4udGVtcH0ke3RlbXBlcmF0dXJlVW5pdH1gO1xyXG4gIGZpdmVEYXlGb3JlY2FzdEh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YVsxXS5saXN0W251bWJlckluZGV4XS5tYWluLmh1bWlkaXR5fSVgO1xyXG4gIGZpdmVEYXlGb3JlY2FzdFdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2RhdGFbMV0ubGlzdFtudW1iZXJJbmRleF0ud2luZC5zcGVlZH0gJHt3aW5kU3BlZWRVbml0fWA7XHJcblxyXG4gIHdlYXRoZXJDb25kaXRpb25JbWFnZXMoZml2ZURheUZvcmVjYXN0Q29uZGl0aW9uLCBwZXJEYXlJbWFnZSk7IC8vIHNob3cgd2VhdGhlckNvbmRpdGlvbiBJY29uXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyVUkoZGF0YSwgdGVtcGVyYXR1cmVVbml0LCB3aW5kU3BlZWRVbml0KSB7XHJcbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbk5hbWUgPSBkYXRhWzBdLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgbG9jYXRpb25OYW1lLnRleHRDb250ZW50ID0gYCR7ZGF0YVswXS5uYW1lfSwgJHtkYXRhWzBdLnN5cy5jb3VudHJ5fWA7XHJcbiAgd2VhdGhlckNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGAke2NhcGl0YWxpemVGaXJzdExldHRlck9mV2VhdGhlckNvbmRpdGlvbihcclxuICAgIGRhdGEsXHJcbiAgICB1bmRlZmluZWQsXHJcbiAgICB3ZWF0aGVyQ29uZGl0aW9uTmFtZVxyXG4gICl9YDsgLy8gdW5kZWZpbmVkIHNpbmNlIGl0IGlzIG9ubHkgbmVlZCBmb3IgZml2ZURheVdlYXRoZXJGb3JlY2FzdFxyXG4gIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7ZGF0YVswXS5tYWluLnRlbXB9JHt0ZW1wZXJhdHVyZVVuaXR9YDtcclxuICB0ZW1wZXJhdHVyZU1pbi50ZXh0Q29udGVudCA9IGAke2RhdGFbMF0ubWFpbi50ZW1wX21pbn0ke3RlbXBlcmF0dXJlVW5pdH1gO1xyXG4gIHRlbXBlcmF0dXJlTWF4LnRleHRDb250ZW50ID0gYCR7ZGF0YVswXS5tYWluLnRlbXBfbWF4fSR7dGVtcGVyYXR1cmVVbml0fWA7XHJcblxyXG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YVswXS5tYWluLmh1bWlkaXR5fSVgO1xyXG4gIHZpc2liaWxpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhWzBdLnZpc2liaWxpdHkgLyAxMDAwfSBrbWA7XHJcbiAgd2luZC50ZXh0Q29udGVudCA9IGAke2RhdGFbMF0ud2luZC5zcGVlZH0gJHt3aW5kU3BlZWRVbml0fWA7XHJcbiAgcHJlc3N1cmUudGV4dENvbnRlbnQgPSBgJHtkYXRhWzBdLm1haW4ucHJlc3N1cmV9IGgvUGFgO1xyXG4gIHdlYXRoZXJDb25kaXRpb25JbWFnZXMod2VhdGhlckNvbmRpdGlvbiwgd2VhdGhlckNvbmRpdGlvbkljb24pOyAvLyBzaG93IHdlYXRoZXJDb25kaXRpb24gSW1hZ2VcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheURhdGVBbmRUaW1lKGRhdGEsIG9mZnNldCwgdGltZVZhbHVlKSB7XHJcbiAgY29uc3Qgc2xpY2VUaW1lID0gdGltZVZhbHVlLnNsaWNlKDE3LCAyMik7XHJcbiAgY29uc3QgaG91ciA9IHNsaWNlVGltZS5zbGljZSgwLCAyKTtcclxuICBjb25zdCBzbGljZURheSA9IHRpbWVWYWx1ZS5zbGljZSgwLCAxNik7XHJcblxyXG4gIGNvbnN0IHN1blJpc2VWYWx1ZSA9IG5ldyBEYXRlKFxyXG4gICAgZGF0YVswXS5zeXMuc3VucmlzZSAqIDEwMDAgKyBvZmZzZXRcclxuICApLnRvVVRDU3RyaW5nKCk7XHJcbiAgY29uc3Qgc2xpY2VTdW5SaXNlVGltZSA9IHN1blJpc2VWYWx1ZS5zbGljZSgxNywgMjIpO1xyXG5cclxuICBjb25zdCBzdW5TZXRWYWx1ZSA9IG5ldyBEYXRlKFxyXG4gICAgZGF0YVswXS5zeXMuc3Vuc2V0ICogMTAwMCArIG9mZnNldFxyXG4gICkudG9VVENTdHJpbmcoKTtcclxuICBjb25zdCBzbGljZVN1blNldFRpbWUgPSBzdW5TZXRWYWx1ZS5zbGljZSgxNywgMjIpO1xyXG5cclxuICBpZiAoaG91ciA+PSAwICYmIGhvdXIgPCAxMikge1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IGAke3NsaWNlVGltZX1hbWA7XHJcbiAgICBzdW5SaXNlLnRleHRDb250ZW50ID0gYCR7c2xpY2VTdW5SaXNlVGltZX1hbSAmYDtcclxuICAgIHN1blNldC50ZXh0Q29udGVudCA9IGBcXHUwMEEwJHtzbGljZVN1blNldFRpbWV9cG1gO1xyXG4gICAgZGF5VGltZUljb24uY2xhc3NMaXN0LmFkZChcIm1vcm5pbmdcIik7XHJcbiAgICBkYXlUaW1lSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWZ0ZXJub29uXCIpO1xyXG4gICAgZGF5VGltZUljb24uY2xhc3NMaXN0LnJlbW92ZShcIm5pZ2h0XCIpO1xyXG4gIH0gZWxzZSBpZiAoaG91ciA+PSAxMiAmJiBob3VyIDw9IDE4KSB7XHJcbiAgICB0aW1lLnRleHRDb250ZW50ID0gYCR7c2xpY2VUaW1lfXBtYDtcclxuICAgIHN1blJpc2UudGV4dENvbnRlbnQgPSBgJHtzbGljZVN1blJpc2VUaW1lfWFtICZgO1xyXG4gICAgc3VuU2V0LnRleHRDb250ZW50ID0gYFxcdTAwQTAke3NsaWNlU3VuU2V0VGltZX1wbWA7XHJcbiAgICBkYXlUaW1lSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwibW9ybmluZ1wiKTtcclxuICAgIGRheVRpbWVJY29uLmNsYXNzTGlzdC5hZGQoXCJhZnRlcm5vb25cIik7XHJcbiAgICBkYXlUaW1lSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwibmlnaHRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUudGV4dENvbnRlbnQgPSBgJHtzbGljZVRpbWV9cG1gO1xyXG4gICAgc3VuUmlzZS50ZXh0Q29udGVudCA9IGAke3NsaWNlU3VuUmlzZVRpbWV9YW0gJmA7XHJcbiAgICBzdW5TZXQudGV4dENvbnRlbnQgPSBgXFx1MDBBMCR7c2xpY2VTdW5TZXRUaW1lfXBtYDtcclxuICAgIGRheVRpbWVJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJtb3JuaW5nXCIpO1xyXG4gICAgZGF5VGltZUljb24uY2xhc3NMaXN0LnJlbW92ZShcImFmdGVybm9vblwiKTtcclxuICAgIGRheVRpbWVJY29uLmNsYXNzTGlzdC5hZGQoXCJuaWdodFwiKTtcclxuICB9XHJcbiAgZGF0ZS50ZXh0Q29udGVudCA9IHNsaWNlRGF5O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBUEkocGxhY2VOYW1lLCB1bml0LCB0ZW1wZXJhdHVyZVVuaXQsIHdpbmRTcGVlZFVuaXQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7cGxhY2VOYW1lfSZjbnQ9MyZhcHBpZD0wMmFhYzNmOGJjMGYwYWU4ZGMxNmNkY2VhMTQyZjg1NyZ1bml0cz0ke3VuaXR9YCxcclxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cclxuICAgICAgKSxcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7cGxhY2VOYW1lfSZhcHBpZD0wMmFhYzNmOGJjMGYwYWU4ZGMxNmNkY2VhMTQyZjg1NyZ1bml0cz0ke3VuaXR9YCxcclxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cclxuICAgICAgKSxcclxuICAgIF0pO1xyXG4gICAgY29uc3QgZmV0Y2hBbGxVcmwgPSBQcm9taXNlLmFsbChyZXNwb25zZS5tYXAoKGVhY2gpID0+IGVhY2guanNvbigpKSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBbGxVcmw7XHJcbiAgICBkaXNwbGF5V2VhdGhlclVJKGRhdGEsIHRlbXBlcmF0dXJlVW5pdCwgd2luZFNwZWVkVW5pdCk7XHJcblxyXG4gICAgY29uc3Qgb2Zmc2V0ID0gZGF0YVswXS50aW1lem9uZSAqIDEwMDA7XHJcbiAgICBpZiAob2Zmc2V0ID4gMCkge1xyXG4gICAgICBjb25zdCB0aW1lVmFsdWUgPSBuZXcgRGF0ZShkYXRhWzBdLmR0ICogMTAwMCArIG9mZnNldCkudG9VVENTdHJpbmcoKTtcclxuICAgICAgZGlzcGxheURhdGVBbmRUaW1lKGRhdGEsIG9mZnNldCwgdGltZVZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHRpbWVWYWx1ZSA9IG5ldyBEYXRlKGRhdGFbMF0uZHQgKiAxMDAwIC0gLW9mZnNldCkudG9VVENTdHJpbmcoKTtcclxuICAgICAgZGlzcGxheURhdGVBbmRUaW1lKGRhdGEsIG9mZnNldCwgdGltZVZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgZGlzcGxheWluZyBmaXZlRGF5V2VhdGhlckZvcmVjYXN0XHJcbiAgICBmaXZlRGF5V2VhdGhlckZvcmVjYXN0KFxyXG4gICAgICBvZmZzZXQsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIDcsXHJcbiAgICAgIHBlckRheU9uZU5hbWUsXHJcbiAgICAgIHBlckRheU9uZUNvbmRpdGlvbixcclxuICAgICAgcGVyRGF5T25lUGxhY2UsXHJcbiAgICAgIHBlckRheU9uZVRlbXAsXHJcbiAgICAgIHBlckRheU9uZUh1bWlkaXR5LFxyXG4gICAgICBwZXJEYXlPbmVXaW5kU3BlZWQsXHJcbiAgICAgIHRlbXBlcmF0dXJlVW5pdCxcclxuICAgICAgd2luZFNwZWVkVW5pdCxcclxuICAgICAgcGVyRGF5T25lSW1hZ2VcclxuICAgICk7XHJcbiAgICBmaXZlRGF5V2VhdGhlckZvcmVjYXN0KFxyXG4gICAgICBvZmZzZXQsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIDE1LFxyXG4gICAgICBwZXJEYXlUd29OYW1lLFxyXG4gICAgICBwZXJEYXlUd29Db25kaXRpb24sXHJcbiAgICAgIHBlckRheVR3b1BsYWNlLFxyXG4gICAgICBwZXJEYXlUd29UZW1wLFxyXG4gICAgICBwZXJEYXlUd29IdW1pZGl0eSxcclxuICAgICAgcGVyRGF5VHdvV2luZFNwZWVkLFxyXG4gICAgICB0ZW1wZXJhdHVyZVVuaXQsXHJcbiAgICAgIHdpbmRTcGVlZFVuaXQsXHJcbiAgICAgIHBlckRheVR3b0ltYWdlXHJcbiAgICApO1xyXG4gICAgZml2ZURheVdlYXRoZXJGb3JlY2FzdChcclxuICAgICAgb2Zmc2V0LFxyXG4gICAgICBkYXRhLFxyXG4gICAgICAyMyxcclxuICAgICAgcGVyRGF5VGhyZWVOYW1lLFxyXG4gICAgICBwZXJEYXlUaHJlZUNvbmRpdGlvbixcclxuICAgICAgcGVyRGF5VGhyZWVQbGFjZSxcclxuICAgICAgcGVyRGF5VGhyZWVUZW1wLFxyXG4gICAgICBwZXJEYXlUaHJlZUh1bWlkaXR5LFxyXG4gICAgICBwZXJEYXlUaHJlZVdpbmRTcGVlZCxcclxuICAgICAgdGVtcGVyYXR1cmVVbml0LFxyXG4gICAgICB3aW5kU3BlZWRVbml0LFxyXG4gICAgICBwZXJEYXlUaHJlZUltYWdlXHJcbiAgICApO1xyXG4gICAgZml2ZURheVdlYXRoZXJGb3JlY2FzdChcclxuICAgICAgb2Zmc2V0LFxyXG4gICAgICBkYXRhLFxyXG4gICAgICAzMSxcclxuICAgICAgcGVyRGF5Rm91ck5hbWUsXHJcbiAgICAgIHBlckRheUZvdXJDb25kaXRpb24sXHJcbiAgICAgIHBlckRheUZvdXJQbGFjZSxcclxuICAgICAgcGVyRGF5Rm91clRlbXAsXHJcbiAgICAgIHBlckRheUZvdXJIdW1pZGl0eSxcclxuICAgICAgcGVyRGF5Rm91cldpbmRTcGVlZCxcclxuICAgICAgdGVtcGVyYXR1cmVVbml0LFxyXG4gICAgICB3aW5kU3BlZWRVbml0LFxyXG4gICAgICBwZXJEYXlGb3VySW1hZ2VcclxuICAgICk7XHJcbiAgICBmaXZlRGF5V2VhdGhlckZvcmVjYXN0KFxyXG4gICAgICBvZmZzZXQsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIDM5LFxyXG4gICAgICBwZXJEYXlGaXZlTmFtZSxcclxuICAgICAgcGVyRGF5Rml2ZUNvbmRpdGlvbixcclxuICAgICAgcGVyRGF5Rml2ZVBsYWNlLFxyXG4gICAgICBwZXJEYXlGaXZlVGVtcCxcclxuICAgICAgcGVyRGF5Rml2ZUh1bWlkaXR5LFxyXG4gICAgICBwZXJEYXlGaXZlV2luZFNwZWVkLFxyXG4gICAgICB0ZW1wZXJhdHVyZVVuaXQsXHJcbiAgICAgIHdpbmRTcGVlZFVuaXQsXHJcbiAgICAgIHBlckRheUZpdmVJbWFnZVxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGFsZXJ0KFwiRW50ZXIgYSBsb2NhdGlvblwiKTtcclxuICAgIC8vIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGVtcCgpIHtcclxuICBnZXRVc2VySW5wdXQgPSBzdG9yZVVzZXJJbnB1dEFycmF5WzBdO1xyXG4gIGZhaHJlbmhlaXRVbml0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYGZhaHJlbmhlaXRVbml0IFByZXNzZWRgKTtcclxuICAgIGNvbnNvbGUubG9nKHN0b3JlVXNlcklucHV0QXJyYXkpO1xyXG4gICAgZ2V0QVBJKGdldFVzZXJJbnB1dCwgXCJpbXBlcmlhbFwiLCBcIsKwRlwiLCBcIm1pL2hcIik7XHJcbiAgfSk7XHJcbiAgY2Vsc2l1c1VuaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgY2Vsc2l1c1VuaXQgUHJlc3NlZGApO1xyXG4gICAgY29uc29sZS5sb2coc3RvcmVVc2VySW5wdXRBcnJheSk7XHJcbiAgICBnZXRBUEkoZ2V0VXNlcklucHV0LCBcIm1ldHJpY1wiLCBcIsKwQ1wiLCBcIm0vc1wiKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0QnRuUHJlc3NlZCgpIHtcclxuICAvLyBpZiAoc3RvcmVVc2VySW5wdXRBcnJheSAhPT0gXCJcIikge1xyXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlucHV0Q291bnRyeUhpZGRlbi5yZW1vdmUoKTsgLy8gcmVtb3ZlcyBpdCBhZnRlciB0aGUgdXNlciBzZWFyY2hlcyBmb3IgYW4gbG9jYXRpb25cclxuICAgIHN0b3JlVXNlcklucHV0QXJyYXkudW5zaGlmdChpbnB1dENvdW50cnkudmFsdWUpOyAvLyBhZGQgdGhlIHVzZXJJbnB1dCB0byBhbiBhcnJheVxyXG5cclxuICAgIGNvbnN0IFtmaXJzdFZhbHVlXSA9IHN0b3JlVXNlcklucHV0QXJyYXk7IC8vIGFycmF5RGVzdHJ1Y3RzIGFuZCBnZXRzIHRoZSBmaXJzdCB2YWx1ZVxyXG4gICAgZ2V0QVBJKGZpcnN0VmFsdWUsIFwibWV0cmljXCIsIFwiwrBDXCIsIFwibS9zXCIpO1xyXG4gICAgY2hhbmdlVGVtcCgpO1xyXG4gICAgaW5wdXRDb3VudHJ5LnZhbHVlID0gXCJcIjsgLy8gcmVtb3ZlIHRoZSB2YWx1ZSBhZnRlciBzdWJtaXRcclxuXHJcbiAgICBjb25zb2xlLmNsZWFyKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdG9yZVVzZXJJbnB1dEFycmF5KVxyXG4gICAgY29uc29sZS5sb2coZmlyc3RWYWx1ZSk7XHJcbiAgfSk7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUZW1wUHJlZGVmaW5lZCgpIHtcclxuICBnZXRVc2VySW5wdXQgPSBpbnB1dENvdW50cnlIaWRkZW4udmFsdWU7IC8vIGFkZHMgYSBoaWRkZW4gaW5wdXQgZWxlbWVudCB0byBnZXQgYSBwcmVkZWZpbmVkIGNpdHkgbG9jYXRpb25cclxuICBmYWhyZW5oZWl0VW5pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgIGdldEFQSShnZXRVc2VySW5wdXQsIFwiaW1wZXJpYWxcIiwgXCLCsEZcIiwgXCJtaS9oXCIpO1xyXG4gIH0pO1xyXG4gIGNlbHNpdXNVbml0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZ2V0QVBJKGdldFVzZXJJbnB1dCwgXCJtZXRyaWNcIiwgXCLCsENcIiwgXCJtL3NcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmdldEFQSShcImtlcmFsYVwiLCBcIm1ldHJpY1wiLCBcIsKwQ1wiLCBcIm0vc1wiKTtcclxuc3VibWl0QnRuUHJlc3NlZCgpO1xyXG5jaGFuZ2VUZW1wUHJlZGVmaW5lZCgpO1xyXG4vLyBwcmVkZWZpbmVkIHdlYXRoZXIgZGF0YVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2JnMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvY29uZGl0aW9uLzEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3dlYXRoZXJEZXRhaWxzL2h1bWlkaXR5LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy93ZWF0aGVyRGV0YWlscy92aXNpYmlsaXR5LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy93ZWF0aGVyRGV0YWlscy93aW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy93ZWF0aGVyRGV0YWlscy9wcmVzc3VyZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvd2VhdGhlckRldGFpbHMvc3VuRGV0YWlscy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvYWZ0ZXJub29uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9tb3JuaW5nLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9uaWdodC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2NvbmRpdGlvbi9jbGVhci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2NvbmRpdGlvbi9yYWluLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvY29uZGl0aW9uL2Zldy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2NvbmRpdGlvbi9zY2F0dGVyZWQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9jb25kaXRpb24vYnJva2VuLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvY29uZGl0aW9uL292ZXJjYXN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvY29uZGl0aW9uL3Nob3dlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2NvbmRpdGlvbi90aHVuZGVyc3Rvcm0ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9jb25kaXRpb24vc25vdy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2NvbmRpdGlvbi9taXN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SXRpbSZmYW1pbHk9UXVpY2tzYW5kJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHksXG5odG1sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgLyogZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmOyAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40KSwgcmdiYSgwLCAwLCAwLCAwLjQpKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiSXRpbVwiLCBjdXJzaXZlO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbn1cblxuKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW46IDA7XG59XG5cbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG5pbWcge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbn1cblxuLm1haW5TZWN0aW9uIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uc2VhcmNoQmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuI3N1Ym1pdEJ0biB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiSXRpbVwiLCBjdXJzaXZlO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uc2VjdGlvbk9uZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGVtcGVyYXR1cmVVbml0RGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uc2VjdGlvblR3byB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuc2VjdGlvblR3byB7XG4gICAgZ2FwOiAxNXB4O1xuICB9XG59XG5cbi53ZWF0aGVyRGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLndlYXRoZXJDb25kaXRpb25JY29uLFxuLnBlckRheU9uZUltYWdlLFxuLnBlckRheVR3b0ltYWdlLFxuLnBlckRheVRocmVlSW1hZ2UsXG4ucGVyRGF5Rm91ckltYWdlLFxuLnBlckRheUZpdmVJbWFnZSB7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi5kYXlPbmVJbWFnZSB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi53ZWF0aGVyQ29uZGl0aW9uRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xufVxuXG4ubG9jYXRpb25OYW1lIHtcbiAgZm9udC1zaXplOiAyLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ud2VhdGhlckNvbmRpdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uaHVtaWRpdHksXG4udmlzaWJpbGl0eSxcbi53aW5kLFxuLnByZXNzdXJlLFxuLnN1bkRldGFpbHMsXG4udGVtcGVyYXR1cmVNaW4sXG4udGVtcGVyYXR1cmVNYXgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udGVtcGVyYXR1cmUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLnRlbXBlcmF0dXJlRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRlbXBNaW5NYXhEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG59XG5cbi5vdGhlcldlYXRoZXJEZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gIC5vdGhlcldlYXRoZXJEZXRhaWxzIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxufVxuXG4ub3RoZXJXZWF0aGVyRGV0YWlsc0VhY2gge1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmh1bWlkaXR5RGl2LFxuLnZpc2liaWxpdHlEaXYsXG4ud2luZERpdixcbi5wcmVzc3VyZURpdixcbi5zdW5EZXRhaWxzRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogNXB4O1xufVxuXG4uaHVtaWRpdHlJY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbWluLXdpZHRoOiA0MHB4O1xufVxuXG4udmlzaWJpbGl0eUljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgbm8tcmVwZWF0IGNlbnRlci9jb250YWluO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBtaW4td2lkdGg6IDQwcHg7XG59XG5cbi53aW5kSWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1pbi13aWR0aDogNDBweDtcbn1cblxuLnByZXNzdXJlSWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1pbi13aWR0aDogNDBweDtcbn1cblxuLnN1bkRldGFpbHNJY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbWluLXdpZHRoOiA0MHB4O1xufVxuXG4udGVtcGVyYXR1cmVNaW5EaXYsXG4udGVtcGVyYXR1cmVNYXhEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGltZSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uZGF0ZURpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uc3VuRGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZml2ZURheVdlYXRoZXJEZXRhaWxzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZml2ZURheVdlYXRoZXJEZXRhaWxzID4gZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmRheURldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbmlucHV0OmFjdGl2ZTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG5idXR0b246aG92ZXIsXG4jc3VibWl0QnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBjb2xvcjogcmdiKDIzNiwgMCwgMCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcbn1cblxuLmFmdGVybm9vbiB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX199KSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmFmdGVybm9vbiB7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgfVxufVxuXG4ubW9ybmluZyB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX199KSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLm1vcm5pbmcge1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgbWluLWhlaWdodDogMjUwcHg7XG4gIH1cbn1cblxuLm5pZ2h0IHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fX30pIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgbWluLWhlaWdodDogMzUwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAubmlnaHQge1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgbWluLWhlaWdodDogMjUwcHg7XG4gIH1cbn1cblxuLmNsZWFyIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX199KSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi5yYWluIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX199KSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi5mZXcge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fX30pIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLnNjYXR0ZXJlZCB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19ffSkgbm8tcmVwZWF0IGNlbnRlci9jb250YWluO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4uYnJva2VuIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX199KSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi5vdmVyY2FzdCB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19ffSkgbm8tcmVwZWF0IGNlbnRlci9jb250YWluO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4uc2hvd2VyIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX199KSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi50aHVuZGVyc3Rvcm0ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fX30pIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLnNub3cge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fX30pIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLm1pc3Qge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fX30pIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3V0aWxpdGllcy9icmVha3BvaW50LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7O0VBRUUsU0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLHlKQUFBO0VBQ0EsNEhBQUE7RUFNQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0FBTEY7O0FBUUE7OztFQUdFLHNCQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBTEY7O0FBUUE7Ozs7RUFJRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUxGOztBQVFBO0VBQ0UsdUJBQUE7RUFD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QUFnQkE7O0VBRUUsb0NBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsNEVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBYkY7QUN6VEU7RURtVUY7SUFLSSxnQkFBQTtJQUNBLGlCQUFBO0VBWEY7QUFDRjs7QUFjQTtFQUNFLDRFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVhGO0FDclVFO0VENlVGO0lBS0ksZ0JBQUE7SUFDQSxpQkFBQTtFQVRGO0FBQ0Y7O0FBWUE7RUFDRSw0RUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFURjtBQ2pWRTtFRHVWRjtJQUtJLGdCQUFBO0lBQ0EsaUJBQUE7RUFQRjtBQUNGOztBQVVBO0VBQ0UsNkVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSw2RUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLDZFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UsNkVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSw2RUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLDZFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UsNkVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSw2RUFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLDZFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UsNkVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi91dGlsaXRpZXNcXFwiIGFzIHV0O1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0aW0mZmFtaWx5PVF1aWNrc2FuZCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5ib2R5LFxcclxcbmh0bWwge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAvKiBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgdG8gcmlnaHQsXFxyXFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjQpLFxcclxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC40KVxcclxcbiAgICApLFxcclxcbiAgICB1cmwoXFxcIi4uL2Fzc2V0cy9iZzEuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkl0aW1cXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICAvLyBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpblNlY3Rpb24ge1xcclxcbiAgLy8gbWluLWhlaWdodDogODd2aDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoQmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXRCdG4ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJdGltXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAvLyBmb250LXNpemU6IDJyZW07XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbk9uZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcGVyYXR1cmVVbml0RGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25Ud28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIC8vIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlckRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXJDb25kaXRpb25JY29uLFxcclxcbi5wZXJEYXlPbmVJbWFnZSxcXHJcXG4ucGVyRGF5VHdvSW1hZ2UsXFxyXFxuLnBlckRheVRocmVlSW1hZ2UsXFxyXFxuLnBlckRheUZvdXJJbWFnZSxcXHJcXG4ucGVyRGF5Rml2ZUltYWdlIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxyXFxuICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGF5T25lSW1hZ2Uge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvY29uZGl0aW9uLzEucG5nXFxcIikgbm8tcmVwZWF0IGNlbnRlci9jb250YWluO1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXJDb25kaXRpb25EaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uTmFtZSB7XFxyXFxuICBmb250LXNpemU6IDIuOHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlckNvbmRpdGlvbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eSxcXHJcXG4udmlzaWJpbGl0eSxcXHJcXG4ud2luZCxcXHJcXG4ucHJlc3N1cmUsXFxyXFxuLnN1bkRldGFpbHMsXFxyXFxuLnRlbXBlcmF0dXJlTWluLFxcclxcbi50ZW1wZXJhdHVyZU1heCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBlcmF0dXJlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcGVyYXR1cmVEaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcE1pbk1heERpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3RoZXJXZWF0aGVyRGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAvLyBnYXA6IDEwcHg7XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgLy8gYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5vdGhlcldlYXRoZXJEZXRhaWxzRWFjaCB7XFxyXFxuICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHlEaXYsXFxyXFxuLnZpc2liaWxpdHlEaXYsXFxyXFxuLndpbmREaXYsXFxyXFxuLnByZXNzdXJlRGl2LFxcclxcbi5zdW5EZXRhaWxzRGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHlJY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYXNzZXRzL3dlYXRoZXJEZXRhaWxzL2h1bWlkaXR5LnBuZ1xcXCIpIG5vLXJlcGVhdFxcclxcbiAgICBjZW50ZXIvY29udGFpbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxuICBtaW4td2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi52aXNpYmlsaXR5SWNvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy93ZWF0aGVyRGV0YWlscy92aXNpYmlsaXR5LnBuZ1xcXCIpIG5vLXJlcGVhdFxcclxcbiAgICBjZW50ZXIvY29udGFpbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxuICBtaW4td2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi53aW5kSWNvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy93ZWF0aGVyRGV0YWlscy93aW5kLnBuZ1xcXCIpIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxuICBtaW4td2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcmVzc3VyZUljb24ge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvd2VhdGhlckRldGFpbHMvcHJlc3N1cmUucG5nXFxcIikgbm8tcmVwZWF0XFxyXFxuICAgIGNlbnRlci9jb250YWluO1xcclxcbiAgbWluLWhlaWdodDogNDBweDtcXHJcXG4gIG1pbi13aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bkRldGFpbHNJY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYXNzZXRzL3dlYXRoZXJEZXRhaWxzL3N1bkRldGFpbHMucG5nXFxcIikgbm8tcmVwZWF0XFxyXFxuICAgIGNlbnRlci9jb250YWluO1xcclxcbiAgbWluLWhlaWdodDogNDBweDtcXHJcXG4gIG1pbi13aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBlcmF0dXJlTWluRGl2LFxcclxcbi50ZW1wZXJhdHVyZU1heERpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlRGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VuRGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5maXZlRGF5V2VhdGhlckRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5maXZlRGF5V2VhdGhlckRldGFpbHMgPiBkaXYge1xcclxcbiAgLy8gaGVpZ2h0OiAzODBweDtcXHJcXG4gIC8vIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5kYXlEZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmFjdGl2ZTo6cGxhY2Vob2xkZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyLFxcclxcbiNzdWJtaXRCdG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgY29sb3I6IHJnYigyMzYsIDAsIDApO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uYWZ0ZXJub29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYXNzZXRzL2FmdGVybm9vbi5wbmdcXFwiKSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XFxyXFxuICBtaW4td2lkdGg6IDM1MHB4O1xcclxcbiAgbWluLWhlaWdodDogMzUwcHg7XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1vcm5pbmcge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvbW9ybmluZy5wbmdcXFwiKSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XFxyXFxuICBtaW4td2lkdGg6IDM1MHB4O1xcclxcbiAgbWluLWhlaWdodDogMzUwcHg7XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm5pZ2h0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYXNzZXRzL25pZ2h0LnBuZ1xcXCIpIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcXHJcXG4gIG1pbi13aWR0aDogMzUwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiAzNTBweDtcXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXIge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvY29uZGl0aW9uL2NsZWFyLnBuZ1xcXCIpIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxyXFxuICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmFpbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9jb25kaXRpb24vcmFpbi5wbmdcXFwiKSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XFxyXFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcclxcbiAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZldyB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9jb25kaXRpb24vZmV3LnBuZ1xcXCIpIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxyXFxuICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NhdHRlcmVkIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYXNzZXRzL2NvbmRpdGlvbi9zY2F0dGVyZWQucG5nXFxcIikgbm8tcmVwZWF0IGNlbnRlci9jb250YWluO1xcclxcbiAgbWluLWhlaWdodDogNjBweDtcXHJcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5icm9rZW4ge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvY29uZGl0aW9uL2Jyb2tlbi5wbmdcXFwiKSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XFxyXFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcclxcbiAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJjYXN0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYXNzZXRzL2NvbmRpdGlvbi9vdmVyY2FzdC5wbmdcXFwiKSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XFxyXFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcclxcbiAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3dlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9jb25kaXRpb24vc2hvd2VyLnBuZ1xcXCIpIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxyXFxuICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGh1bmRlcnN0b3JtIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYXNzZXRzL2NvbmRpdGlvbi90aHVuZGVyc3Rvcm0ucG5nXFxcIikgbm8tcmVwZWF0XFxyXFxuICAgIGNlbnRlci9jb250YWluO1xcclxcbiAgbWluLWhlaWdodDogNjBweDtcXHJcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zbm93IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYXNzZXRzL2NvbmRpdGlvbi9zbm93LnBuZ1xcXCIpIG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxyXFxuICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzdCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9jb25kaXRpb24vbWlzdC5wbmdcXFwiKSBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW47XFxyXFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcclxcbiAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXCIsXCIkYnJlYWtwb2ludHM6IChcXHJcXG4gIFxcXCJtZWRpdW1cXFwiOiA0My43NWVtLFxcclxcbiAgXFxcImxhcmdlXFxcIjogNTYuMjVlbSxcXHJcXG4gIFxcXCJ4TGFyZ2VcXFwiOiA5MGVtLFxcclxcbik7XFxyXFxuXFxyXFxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUpIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywkc2l6ZSkpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJpbnB1dENvdW50cnlIaWRkZW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dENvdW50cnkiLCJzdWJtaXRCdG4iLCJmYWhyZW5oZWl0VW5pdCIsImNlbHNpdXNVbml0IiwibG9jYXRpb25OYW1lIiwiZGF5VGltZUljb24iLCJ0aW1lIiwiZGF0ZSIsIndpbmQiLCJzdW5SaXNlIiwic3VuU2V0IiwicHJlc3N1cmUiLCJodW1pZGl0eSIsInZpc2liaWxpdHkiLCJ3ZWF0aGVyQ29uZGl0aW9uIiwid2VhdGhlckNvbmRpdGlvbkljb24iLCJ0ZW1wZXJhdHVyZSIsInRlbXBlcmF0dXJlTWluIiwidGVtcGVyYXR1cmVNYXgiLCJwZXJEYXlPbmVOYW1lIiwicGVyRGF5T25lQ29uZGl0aW9uIiwicGVyRGF5T25lUGxhY2UiLCJwZXJEYXlPbmVUZW1wIiwicGVyRGF5T25lSHVtaWRpdHkiLCJwZXJEYXlPbmVXaW5kU3BlZWQiLCJwZXJEYXlUd29OYW1lIiwicGVyRGF5VHdvQ29uZGl0aW9uIiwicGVyRGF5VHdvUGxhY2UiLCJwZXJEYXlUd29UZW1wIiwicGVyRGF5VHdvSHVtaWRpdHkiLCJwZXJEYXlUd29XaW5kU3BlZWQiLCJwZXJEYXlUaHJlZU5hbWUiLCJwZXJEYXlUaHJlZUNvbmRpdGlvbiIsInBlckRheVRocmVlUGxhY2UiLCJwZXJEYXlUaHJlZVRlbXAiLCJwZXJEYXlUaHJlZUh1bWlkaXR5IiwicGVyRGF5VGhyZWVXaW5kU3BlZWQiLCJwZXJEYXlGb3VyTmFtZSIsInBlckRheUZvdXJDb25kaXRpb24iLCJwZXJEYXlGb3VyUGxhY2UiLCJwZXJEYXlGb3VyVGVtcCIsInBlckRheUZvdXJIdW1pZGl0eSIsInBlckRheUZvdXJXaW5kU3BlZWQiLCJwZXJEYXlGaXZlTmFtZSIsInBlckRheUZpdmVDb25kaXRpb24iLCJwZXJEYXlGaXZlUGxhY2UiLCJwZXJEYXlGaXZlVGVtcCIsInBlckRheUZpdmVIdW1pZGl0eSIsInBlckRheUZpdmVXaW5kU3BlZWQiLCJwZXJEYXlPbmVJbWFnZSIsInBlckRheVR3b0ltYWdlIiwicGVyRGF5VGhyZWVJbWFnZSIsInBlckRheUZvdXJJbWFnZSIsInBlckRheUZpdmVJbWFnZSIsImdldFVzZXJJbnB1dCIsInN0b3JlVXNlcklucHV0QXJyYXkiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXJPZldlYXRoZXJDb25kaXRpb24iLCJkYXRhIiwibnVtYmVySW5kZXgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uVXBwZXJDYXNlZCIsInRvTG9jYWxlVXBwZXJDYXNlIiwiZGVzY3JpcHRpb25TcGxpdCIsInNwbGl0Iiwic3BsaWNlIiwiZGVzY3JpcHRpb25DYXBpdGFsaXplZCIsImpvaW4iLCJ3ZWF0aGVyQ29uZGl0aW9uSW1hZ2VzIiwiZGF0ZUl0ZW0iLCJpdGVtVG9BcHBseUJhY2tncm91bmQiLCJjaGVja1dlYXRoZXIiLCJ0ZXh0Q29udGVudCIsInRvTG93ZXJDYXNlIiwid2VhdGhlckljb24iLCJpbmNsdWRlcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImZpdmVEYXlXZWF0aGVyRm9yZWNhc3QiLCJvZmZzZXQiLCJmaXZlRGF5Rm9yZWNhc3REYXkiLCJmaXZlRGF5Rm9yZWNhc3RDb25kaXRpb24iLCJmaXZlRGF5Rm9yZWNhc3RQbGFjZSIsImZpdmVEYXlGb3JlY2FzdFRlbXAiLCJmaXZlRGF5Rm9yZWNhc3RIdW1pZGl0eSIsImZpdmVEYXlGb3JlY2FzdFdpbmRTcGVlZCIsInRlbXBlcmF0dXJlVW5pdCIsIndpbmRTcGVlZFVuaXQiLCJwZXJEYXlJbWFnZSIsInBlckRheVZhbHVlIiwiRGF0ZSIsImxpc3QiLCJkdCIsInRvVVRDU3RyaW5nIiwicGVyRGF5VmFsdWVTbGljZSIsInNsaWNlIiwid2VhdGhlckNvbmRpdGlvbk5hbWUiLCJ3ZWF0aGVyIiwiY2l0eSIsIm5hbWUiLCJjb3VudHJ5IiwibWFpbiIsInRlbXAiLCJzcGVlZCIsImRpc3BsYXlXZWF0aGVyVUkiLCJzeXMiLCJ1bmRlZmluZWQiLCJ0ZW1wX21pbiIsInRlbXBfbWF4IiwiZGlzcGxheURhdGVBbmRUaW1lIiwidGltZVZhbHVlIiwic2xpY2VUaW1lIiwiaG91ciIsInNsaWNlRGF5Iiwic3VuUmlzZVZhbHVlIiwic3VucmlzZSIsInNsaWNlU3VuUmlzZVRpbWUiLCJzdW5TZXRWYWx1ZSIsInN1bnNldCIsInNsaWNlU3VuU2V0VGltZSIsImdldEFQSSIsInBsYWNlTmFtZSIsInVuaXQiLCJyZXNwb25zZSIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsIm1vZGUiLCJmZXRjaEFsbFVybCIsIm1hcCIsImVhY2giLCJqc29uIiwidGltZXpvbmUiLCJlcnIiLCJhbGVydCIsImNoYW5nZVRlbXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXRCdG5QcmVzc2VkIiwicHJldmVudERlZmF1bHQiLCJ1bnNoaWZ0IiwidmFsdWUiLCJmaXJzdFZhbHVlIiwiY2xlYXIiLCJjaGFuZ2VUZW1wUHJlZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=