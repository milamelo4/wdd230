const currTemp = document.querySelector('#temperature')
const weatherIcon = document.querySelector('#weather-icon')
const condition = document.querySelector('#conditions')
const windSpeed = document.querySelector('#windSpeed')
const humidity = document.getElementById('humidity')

const curr = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,Ca,Us&units=imperial&appid=0a70f34193d2de88ea8b87770197b319"
const forecast = "https://api.openweathermap.org/data/2.5/forecast/?q=Carlsbad,Ca,Us&units=imperial&appid=0a70f34193d2de88ea8b87770197b319"

async function getWeather() {
    try {
        const response = await fetch(curr);
        if (response.ok) {
            const data = await response.json()
            displayWeather(data);
            //console.log(data)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}
getWeather();



function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') 
}

function displayWeather(weatherData) {
    currTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}°F`
    humidity.innerHTML = weatherData.main.humidity

    let icon = weatherData.weather[0].description

    if (icon == 'light rain' || icon == 'rain' || icon == 'heavy rain' || icon == 'shower' || icon == 'moderate rain') {
        iconsrc = './images/light-rain (1).webp'
    } else if (icon == 'clear sky' || icon == 'clear' || icon == 'sunny'){
        iconsrc = './images/sun.webp'

    } else if (icon == 'cloudy' || icon == 'few clouds' || icon == 'scattered clouds' || icon == 'overcast clouds' || icon == 'broken clouds') {
        iconsrc = './images/cloudy.webp'
    } else if (icon == 'snow' || icon == 'light snow' || icon == 'heavy snow' || icon == 'snow shower') {
        iconsrc = './images/snow.webp'
    } else if (icon == 'thunderstorm' || icon == 'storm') {
        iconsrc = './images/thunderstorm.webp'

    } else if (icon == 'mist') {
         iconsrc = './images/mist.webp'
       
    } else {
        iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
    }

    const desc = capitalize(weatherData.weather[0].description)
    const wind = weatherData.wind.speed
    windSpeed.innerHTML = `${wind} mph`
    //console.log(`speed${wind}`)

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc)
    weatherIcon.setAttribute('loading', 'lazy')
    weatherIcon.setAttribute('width', '64')
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

async function getForecast () {
    const response = await fetch(forecast);
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        let dayCount = 1;
        let currentDay = "day" + String(dayCount) + "-";
        for(i = 0; i < 24; i++) {

            getList = data.list[i]
            console.log(getList)
            if (getList.dt_txt.slice(-8) == "18:00:00" ) {
                let forecastDate = new Date(getList.dt * 1000);
                console.log(`test${forecastDate}`)
                let weekDays = formatDate(forecastDate);
                console.log(weekDays)
                let weekDay = (weekDays[forecastDate])
                console.log(weekDay)
                let forecastTemp = Math.round(getList.main.temp);
                console.log(forecastTemp)
                let forecastDescription = getList.weather[0].description;
                console.log(forecastDescription)
                let forecastIcon = getList.weather[0].icon;
                
                document.getElementById(currentDay + "week").innerText = weekDays;
                document.getElementById(currentDay + "temp").innerText = `${forecastTemp}°F`;
                document.getElementById(currentDay + "cond").innerText = `${capitalize(forecastDescription)}`;
                // let icon = `https://openweathermap.org/img/wn/${forecastIcon}.png`;
                
                
                if (forecastDescription == 'light rain' || forecastDescription == 'rain' || forecastDescription == 'heavy rain' || forecastDescription == 'shower' || forecastDescription == 'moderate rain') {
        iconsrc = './images/light-rain (1).webp'
                } else if (forecastDescription == 'clear sky' || forecastDescription == 'clear' || forecastDescription == 'sunny'){
                    iconsrc = './images/sun.webp'

                } else if (forecastDescription == 'cloudy' || forecastDescription == 'few clouds' || forecastDescription == 'scattered clouds' || forecastDescription == 'overcast clouds' || forecastDescription == 'broken clouds') {
                    iconsrc = './images/cloudy.webp'
                } else if (forecastDescription == 'snow' || forecastDescription == 'light snow' || forecastDescription == 'heavy snow' || forecastDescription == 'snow shower') {
                    iconsrc = './images/snow.webp'
                } else if (forecastDescription == 'thunderstorm' || forecastDescription == 'storm') {
                    iconsrc = './images/thunderstorm.webp'

                } else if (forecastDescription == 'mist') {
                    iconsrc = './images/mist.webp'
                
                } else {
                    iconsrc = `https://openweathermap.org/img/w/${forecastIcon}.png`
                }

                document.getElementById(currentDay + "icon").src = iconsrc;
                document.getElementById(currentDay + "icon").alt = forecastDescription;
                dayCount++;
                currentDay = "day" + String(dayCount) + "-";
                
            }
        }
    }

}

getForecast()


function formatDate(dateString) {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}/${day}`;
}


