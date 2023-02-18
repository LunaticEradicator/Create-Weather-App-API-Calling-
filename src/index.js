import './style.css';

const inputCountry = document.querySelector('.inputCountry');
const submitBtn = document.querySelector('#submitBtn');
const fahrenheitUnit = document.querySelector('.fahrenheitUnit');
const celsiusUnit = document.querySelector('.celsiusUnit');

const locationName = document.querySelector('.locationName');
const humidity = document.querySelector('.humidity');
const visibility = document.querySelector('.visibility');


const WeatherMain = document.querySelector('.WeatherMain');
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

let getCountryName // userInput from HTML


function capitalizeFirstLetterForPerDayWeather(data, numberIndex, description) {
    const descriptionUpperCased = description[0].toLocaleUpperCase();
    const descriptionToArray = description.split("");
    descriptionToArray.splice(0, 1, descriptionUpperCased);
    const descriptionCapitalized = descriptionToArray.join('');
    return descriptionCapitalized;
}


function fiveDayWeatherForecast(offset, data, numberIndex,
    perDayItemName, perDayItemCondition, perDayItemPlace, perDayItemTemp, perDayItemHumidity, perDayItemWindSpeed,
    temperatureUnit, windSpeedUnit) {
    const perDayValue = new Date(data[1].list[numberIndex].dt * 1000 + offset).toUTCString();
    const perDayValueSlice = perDayValue.slice(0, 16);
    // console.log(perDayValueSlice)

    const descriptionValue = `${data[1].list[numberIndex].weather[0].description}`;
    perDayItemCondition.textContent = `${capitalizeFirstLetterForPerDayWeather(data, numberIndex, descriptionValue)}`; // function calling 

    perDayItemName.textContent = `${perDayValueSlice}`;
    perDayItemPlace.textContent = `${data[1].city.name}, ${data[1].city.country} `;
    perDayItemTemp.textContent = `${data[1].list[numberIndex].main.temp}${temperatureUnit}`;
    perDayItemHumidity.textContent = `${data[1].list[numberIndex].main.humidity}%`;
    perDayItemWindSpeed.textContent = `${data[1].list[numberIndex].wind.speed} ${windSpeedUnit}`;

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
        WeatherMain.textContent = `${capitalizeFirstLetterForPerDayWeather(data, undefined, descriptionValue)}`;// undefined since it is only need for fiveDayWeatherForecast
        temperature.textContent = `${data[0].main.temp}${temperatureUnit}`;
        temperatureMin.textContent = `${data[0].main.temp_min}${temperatureUnit}`;
        temperatureMax.textContent = `${data[0].main.temp_max}${temperatureUnit}`;

        humidity.textContent = `${data[0].main.humidity}%`;
        visibility.textContent = `${data[0].visibility / 1000} km`;
        wind.textContent = `${data[0].wind.speed} ${windSpeedUnit}`;
        pressure.textContent = `${data[0].main.pressure} h/Pa`;


        const offset = data[0].timezone * 1000;
        // console.log(offset);
        if (offset > 0) {
            // const sike = formatTime(data[0].dt + offset);
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
            }
            else {
                console.log(hour);
                time.textContent = `${sliceTime}pm`;
                sunRise.textContent = `${sliceSunRiseTime}am &`;
                sunSet.textContent = `\u00A0${sliceSunSetTime}pm`;
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
            }
            else {
                time.textContent = `${sliceTime}pm`;
                sunRise.textContent = `${sliceSunRiseTime}am &`;
                sunSet.textContent = `\u00A0${sliceSunSetTime}pm`;
            }
            date.textContent = sliceDay;
        }

        // For displaying fiveDayWeatherForecast  
        fiveDayWeatherForecast(offset, data, 7, perDayOneName, perDayOneCondition, perDayOnePlace, perDayOneTemp, perDayOneHumidity, perDayOneWindSpeed, temperatureUnit, windSpeedUnit);
        fiveDayWeatherForecast(offset, data, 15, perDayTwoName, perDayTwoCondition, perDayTwoPlace, perDayTwoTemp, perDayTwoHumidity, perDayTwoWindSpeed, temperatureUnit, windSpeedUnit);
        fiveDayWeatherForecast(offset, data, 23, perDayThreeName, perDayThreeCondition, perDayThreePlace, perDayThreeTemp, perDayThreeHumidity, perDayThreeWindSpeed, temperatureUnit, windSpeedUnit);
        fiveDayWeatherForecast(offset, data, 31, perDayFourName, perDayFourCondition, perDayFourPlace, perDayFourTemp, perDayFourHumidity, perDayFourWindSpeed, temperatureUnit, windSpeedUnit);
        fiveDayWeatherForecast(offset, data, 39, perDayFiveName, perDayFiveCondition, perDayFivePlace, perDayFiveTemp, perDayFiveHumidity, perDayFiveWindSpeed, temperatureUnit, windSpeedUnit);
    }
    catch (err) {
        throw new Error(err);
    }
}

function submitBtnPressed() {
    submitBtn.addEventListener('click', e => {
        e.preventDefault();
        getCountryName = inputCountry.value; // userInput from HTML
        getAPI(getCountryName, 'metric', '°C', 'm/s');
    })
}

function changeTemp() {
    fahrenheitUnit.addEventListener("click", async e => {
        getCountryName = inputCountry.value; // userInput from HTML
        getAPI(getCountryName, 'imperial', '°F', 'mi/h');

        // // const element = document.createElement('div');
        // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=02aac3f8bc0f0ae8dc16cdcea142f857&units=imperial`, { mode: 'cors' })
        // // const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02aac3f8bc0f0ae8dc16cdcea142f857`, { mode: 'cors' })
        // const data = await res.json();
        // console.log(data);
        // element.textContent = data.main.temp;
        // // document.body.append(element);
    })

    celsiusUnit.addEventListener("click", async e => {
        getCountryName = inputCountry.value; // userInput from HTML
        getAPI(getCountryName, 'metric', '°C', 'm/s');
        // // const element = document.createElement('div');
        // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=02aac3f8bc0f0ae8dc16cdcea142f857&units=metric`, { mode: 'cors' })
        // // const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02aac3f8bc0f0ae8dc16cdcea142f857`, { mode: 'cors' })
        // const data = await res.json();
        // console.log(data);
        // element.textContent = data.main.temp;
        // // document.body.append(element);
    })
}

changeTemp()
submitBtnPressed()


// async function getAPI1(name) {
//     // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=02aac3f8bc0f0ae8dc16cdcea142f857&units=imperial`, { mode: 'cors' })
//     const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&appid=02aac3f8bc0f0ae8dc16cdcea142f857`, { mode: 'cors' })
//     const data = await res.json();
//     console.log(data);
//     element.textContent = data.main.temp;
//     mainSection.body.append(element);
// }

// getAPI1()