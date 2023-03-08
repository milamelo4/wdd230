const currTemp = document.querySelector('#temperature')
const weatherIcon = document.querySelector('#weather-icon')
const condition = document.querySelector('#conditions')
const windSpeed = document.querySelector('#windSpeed')

const url = "https://api.openweathermap.org/data/2.5/weather?q=Salt+Lake+City,Utah,Us&units=imperial&appid=0a70f34193d2de88ea8b87770197b319"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data)
            displayWeather(data)
        } else {
        throw Error(await response.text())
        }
        } catch (error) {
            console.log(error)
        }
}
apiFetch();

function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') 
}

function displayWeather(weatherData) {
    currTemp.innerHTML = weatherData.main.temp.toFixed(0)

    let icon = weatherData.weather[0].description

    if (icon == 'light rain' || icon == 'rain' || icon == 'heavy rain' || icon == 'shower') {
        iconsrc = './images/light-rain (1).webp'
    } else if (icon == 'clear sky' || icon == 'clear' || icon == 'sunny'){
        iconsrc = './images/sun.webp'

    } else if (icon == 'cloudy' || icon == 'few clouds' || icon == 'scattered clouds' || icon == 'overcast clouds' || icon == 'broken clouds') {
        iconsrc = './images/cloudy.webp'
    } else if (icon == 'snow' || icon == 'light snow' || icon == 'heavy snow' || icon == 'snow shower') {
        iconsrc = './images/snow.webp'
    } else if (icon == 'thunderstorm' || icon == 'storm') {
        iconsrc = './images/thunderstorm.webp'
    } else {
        iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
    }


    const desc = capitalize(weatherData.weather[0].description)
    const wind = weatherData.wind.speed
    windSpeed.innerHTML = `${wind} mph`
    //console.log(`speed${wind}`)

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc)
    condition.textContent = desc

    let temp = parseFloat(currTemp.textContent);
    let speed = parseFloat(windSpeed.textContent);

    if (temp <= 50 && speed > 3) {
        let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        
        document.querySelector('#windChill').innerHTML = `${windChill.toFixed(2)}°F`;
    
    }
    else {
        document.querySelector('#windChill').innerHTML = `N/A`;
    }   
   
}

