import "./sass/style.scss";

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

function capitalizeFirstLetterOfWeatherCondition(
  data,
  numberIndex,
  description
) {
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
  } else if (
    checkWeather.includes("shower") ||
    checkWeather.includes("light rain")
  ) {
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

function fiveDayWeatherForecast(
  offset,
  data,
  numberIndex,
  fiveDayForecastDay,
  fiveDayForecastCondition,
  fiveDayForecastPlace,
  fiveDayForecastTemp,
  fiveDayForecastHumidity,
  fiveDayForecastWindSpeed,
  temperatureUnit,
  windSpeedUnit,
  perDayImage
) {
  const perDayValue = new Date(
    data[1].list[numberIndex].dt * 1000 + offset
  ).toUTCString();
  const perDayValueSlice = perDayValue.slice(0, 16);
  const weatherConditionName = `${data[1].list[numberIndex].weather[0].description}`; // weather condition
  fiveDayForecastCondition.textContent = `${capitalizeFirstLetterOfWeatherCondition(
    data,
    numberIndex,
    weatherConditionName
  )}`; // function calling and capitalize weather condition

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
  weatherCondition.textContent = `${capitalizeFirstLetterOfWeatherCondition(
    data,
    undefined,
    weatherConditionName
  )}`; // undefined since it is only need for fiveDayWeatherForecast
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

  const sunRiseValue = new Date(
    data[0].sys.sunrise * 1000 + offset
  ).toUTCString();
  const sliceSunRiseTime = sunRiseValue.slice(17, 22);

  const sunSetValue = new Date(
    data[0].sys.sunset * 1000 + offset
  ).toUTCString();
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
    const response = await Promise.all([
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&cnt=3&appid=02aac3f8bc0f0ae8dc16cdcea142f857&units=${unit}`,
        { mode: "cors" }
      ),
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${placeName}&appid=02aac3f8bc0f0ae8dc16cdcea142f857&units=${unit}`,
        { mode: "cors" }
      ),
    ]);
    const fetchAllUrl = Promise.all(response.map((each) => each.json()));
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
    fiveDayWeatherForecast(
      offset,
      data,
      7,
      perDayOneName,
      perDayOneCondition,
      perDayOnePlace,
      perDayOneTemp,
      perDayOneHumidity,
      perDayOneWindSpeed,
      temperatureUnit,
      windSpeedUnit,
      perDayOneImage
    );
    fiveDayWeatherForecast(
      offset,
      data,
      15,
      perDayTwoName,
      perDayTwoCondition,
      perDayTwoPlace,
      perDayTwoTemp,
      perDayTwoHumidity,
      perDayTwoWindSpeed,
      temperatureUnit,
      windSpeedUnit,
      perDayTwoImage
    );
    fiveDayWeatherForecast(
      offset,
      data,
      23,
      perDayThreeName,
      perDayThreeCondition,
      perDayThreePlace,
      perDayThreeTemp,
      perDayThreeHumidity,
      perDayThreeWindSpeed,
      temperatureUnit,
      windSpeedUnit,
      perDayThreeImage
    );
    fiveDayWeatherForecast(
      offset,
      data,
      31,
      perDayFourName,
      perDayFourCondition,
      perDayFourPlace,
      perDayFourTemp,
      perDayFourHumidity,
      perDayFourWindSpeed,
      temperatureUnit,
      windSpeedUnit,
      perDayFourImage
    );
    fiveDayWeatherForecast(
      offset,
      data,
      39,
      perDayFiveName,
      perDayFiveCondition,
      perDayFivePlace,
      perDayFiveTemp,
      perDayFiveHumidity,
      perDayFiveWindSpeed,
      temperatureUnit,
      windSpeedUnit,
      perDayFiveImage
    );
  } catch (err) {
    alert("Enter a location");
    // throw new Error(err);
  }
}

function changeTemp() {
  getUserInput = storeUserInputArray[0];
  fahrenheitUnit.addEventListener("click", async (e) => {
    console.log(`fahrenheitUnit Pressed`);
    console.log(storeUserInputArray);
    getAPI(getUserInput, "imperial", "°F", "mi/h");
  });
  celsiusUnit.addEventListener("click", async (e) => {
    console.log(`celsiusUnit Pressed`);
    console.log(storeUserInputArray);
    getAPI(getUserInput, "metric", "°C", "m/s");
  });
}

function submitBtnPressed() {
  // if (storeUserInputArray !== "") {
  submitBtn.addEventListener("click", (e) => {
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
  fahrenheitUnit.addEventListener("click", async (e) => {
    getAPI(getUserInput, "imperial", "°F", "mi/h");
  });
  celsiusUnit.addEventListener("click", async (e) => {
    getAPI(getUserInput, "metric", "°C", "m/s");
  });
}

getAPI("kerala", "metric", "°C", "m/s");
submitBtnPressed();
changeTempPredefined();
// predefined weather data
