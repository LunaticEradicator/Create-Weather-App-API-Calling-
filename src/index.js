import { slice } from 'lodash';
import './style.css';

const h1 = document.querySelector('h1');
// function comp() {
//     // Lodash, currently included via a script, is required for this line to work
//     // element.textContent = _.join(['Hello', 'webpack'], ' ');
//     // return element;
// }
// document.body.append(comp());


// function getApi() {
//     return fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=02aac3f8bc0f0ae8dc16cdcea142f857', { mode: 'cors' })
//         .then(resource => {
//             const arr = resource.json()
//             return (arr);
//         })
//         .then(data => {
//             console.log(data[0].name);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }
// getApi()

const mainSection = document.querySelector('.mainSection');
const inputCountry = document.querySelector('.inputCountry');
const submitBtn = document.querySelector('#submitBtn');
const temp1 = document.querySelector('.temp1');
const temp2 = document.querySelector('.temp2');
const element = document.createElement('div');

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


function capitalizeFirstLetterForPerDayWeather(data, numberIndex, description) {
    const descriptionUpperCased = description[0].toLocaleUpperCase();
    const descriptionToArray = description.split("")
    const descriptionAddCapitalLetterBack = descriptionToArray.splice(0, 1, descriptionUpperCased);
    const descriptionCapitalized = descriptionToArray.join('');
    return descriptionCapitalized;
}

async function getAPI(placeName, numberIndex) {
    // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&cnt=3&appid=02aac3f8bc0f0ae8dc16cdcea142f857`, { mode: 'cors' })
    // const data = await res.json();
    // console.log(currentData)
    try {
        const response = await Promise.all(
            [
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&cnt=3&appid=02aac3f8bc0f0ae8dc16cdcea142f857&units=metric`, { mode: 'cors' }),
                fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${placeName}&appid=02aac3f8bc0f0ae8dc16cdcea142f857&units=metric`, { mode: 'cors' })
            ]
        );
        const fetchAllUrl = Promise.all(response.map(each => each.json()));
        const data = await fetchAllUrl;
        console.log(data);
        locationName.textContent = `${data[0].name}, ${data[0].sys.country}`;

        console.log(data[0].weather[0].main)

        const descriptionValue = data[0].weather[0].description
        WeatherMain.textContent = `${capitalizeFirstLetterForPerDayWeather(data, numberIndex, descriptionValue)}`;// function calling 
        temperature.textContent = `${data[0].main.temp}℃`;
        temperatureMin.textContent = `${data[0].main.temp_min}℃`;
        temperatureMax.textContent = `${data[0].main.temp_max}℃`;

        humidity.textContent = `${data[0].main.humidity}%`;
        visibility.textContent = `${data[0].visibility / 1000} km`;
        wind.textContent = `${data[0].wind.speed} m/s`;
        pressure.textContent = `${data[0].main.pressure} h/Pa`;


        const offset = data[0].timezone * 1000;
        console.log(offset);
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

        // console.log(data[1].list[0].dt);
        perDayWeather(offset, data, 7, perDayOneName, perDayOneCondition, perDayOnePlace, perDayOneTemp, perDayOneHumidity, perDayOneWindSpeed);
        perDayWeather(offset, data, 15, perDayTwoName, perDayTwoCondition, perDayTwoPlace, perDayTwoTemp, perDayTwoHumidity, perDayTwoWindSpeed);
        perDayWeather(offset, data, 23, perDayThreeName, perDayThreeCondition, perDayThreePlace, perDayThreeTemp, perDayThreeHumidity, perDayThreeWindSpeed);
        perDayWeather(offset, data, 31, perDayFourName, perDayFourCondition, perDayFourPlace, perDayFourTemp, perDayFourHumidity, perDayFourWindSpeed);
        perDayWeather(offset, data, 39, perDayFiveName, perDayFiveCondition, perDayFivePlace, perDayFiveTemp, perDayFiveHumidity, perDayFiveWindSpeed);
    }
    catch (err) {
        throw new Error(err);
    }
}


function perDayWeather(offset, data, numberIndex, perDayItemName, perDayItemCondition, perDayItemPlace, perDayItemTemp, perDayItemHumidity, perDayItemWindSpeed) {
    const perDayValue = new Date(data[1].list[numberIndex].dt * 1000 + offset).toUTCString();
    const perDayValueSlice = perDayValue.slice(0, 16);
    console.log(perDayValueSlice)

    const descriptionValue = `${data[1].list[numberIndex].weather[0].description}`;
    perDayItemCondition.textContent = `${capitalizeFirstLetterForPerDayWeather(data, numberIndex, descriptionValue)}`; // function calling 

    perDayItemName.textContent = `${perDayValueSlice}`;
    perDayItemPlace.textContent = `${data[1].city.name}, ${data[1].city.country} `;
    perDayItemTemp.textContent = `${data[1].list[numberIndex].main.temp}℃`;
    perDayItemHumidity.textContent = `${data[1].list[numberIndex].main.humidity}%`;
    perDayItemWindSpeed.textContent = `${data[1].list[numberIndex].wind.speed} m/s`;


}

// function formatTime(s) {
//     const dtFormat = new Intl.DateTimeFormat('en-GB', {
//         timeStyle: 'medium',
//         timeZone: 'UTC'
//     });

//     return dtFormat.format(new Date(s * 1e3));
// }


async function getAPI1(name) {
    // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=02aac3f8bc0f0ae8dc16cdcea142f857&units=imperial`, { mode: 'cors' })
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&appid=02aac3f8bc0f0ae8dc16cdcea142f857`, { mode: 'cors' })
    const data = await res.json();
    console.log(data);
    element.textContent = data.main.temp;
    mainSection.body.append(element);
}

function submitBtnPressed() {
    submitBtn.addEventListener('click', e => {
        e.preventDefault();
        const getCountryName = inputCountry.value;
        console.log(getCountryName)
        getAPI(getCountryName)
        // time.textContent = '';
        // setTimeout(getAPI, 1000);


    })
}
function changeTemp() {
    temp2.addEventListener("click", async e => {
        // const element = document.createElement('div');
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=02aac3f8bc0f0ae8dc16cdcea142f857&units=metric`, { mode: 'cors' })
        // const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02aac3f8bc0f0ae8dc16cdcea142f857`, { mode: 'cors' })
        const data = await res.json();
        console.log(data);
        element.textContent = data.main.temp;
        // document.body.append(element);
    })

    temp1.addEventListener("click", async e => {
        // const element = document.createElement('div');
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=02aac3f8bc0f0ae8dc16cdcea142f857&units=imperial`, { mode: 'cors' })
        // const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02aac3f8bc0f0ae8dc16cdcea142f857`, { mode: 'cors' })
        const data = await res.json();
        console.log(data);
        element.textContent = data.main.temp;
        // document.body.append(element);
    })
}

// getAPI1()
changeTemp()
submitBtnPressed()