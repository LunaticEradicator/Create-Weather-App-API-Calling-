import './style.css';

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

