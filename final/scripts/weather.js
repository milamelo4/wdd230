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
};

function displayWeather(weatherData) {
    currTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}°F`
    humidity.innerHTML = `${weatherData.main.humidity}%`

    let icon = weatherData.weather[0].description

    if (icon == 'light rain' || icon == 'rain' || icon == 'heavy rain' || icon == 'shower' || icon == 'moderate rain') {
        iconsrc = './images/rain.webp'
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
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('loading', 'lazy');
    weatherIcon.setAttribute('width', '50');
    condition.textContent = desc;

}
async function forecastApi() {
    try {
        const response = await fetch(forecast)
        if (response.ok) {
            const data = await response.json()
            displayForecast(data)
            //console.log(data)
        } else {
            throw Error (await response.text())
        }
    } catch (error) {
        console.log(error)
    }
    
}
forecastApi();

const displayForecast = (forecastData) => {
    const cards = document.querySelector('div.cards');
        if (typeof forecastData.list === 'object' && forecastData.list !== null && Array.isArray(forecastData.list)) {
                for (i = 0; i < 24; i++) {
                    let getList = forecastData.list[i]
                    console.log(getList)
                    if (getList.dt_txt.slice(-8) == "12:00:00") {
                        let card = document.createElement('div')
                        let theDate = document.createElement('p')
                        let temperature = document.createElement('p')
                        let condition = document.createElement('p')
                        let icons = document.createElement('img')
                        let myIcon = getList.weather[0].description
                        let iconsrc;

                        if (myIcon == 'light rain' || myIcon == 'rain' || myIcon == 'heavy rain' || myIcon == 'shower' || myIcon == 'moderate rain') {
                            iconsrc = './images/rain.webp'
                        } else if (myIcon == 'clear sky' || myIcon == 'clear' || myIcon == 'sunny'){
                            iconsrc = './images/sun.webp'

                        } else if (myIcon == 'cloudy' || myIcon == 'few clouds' || myIcon == 'scattered clouds' || myIcon == 'overcast clouds' || myIcon == 'broken clouds') {
                            iconsrc = './images/cloudy.webp'
                        } else if (myIcon == 'snow' || myIcon == 'light snow' || myIcon == 'heavy snow' || myIcon == 'snow shower') {
                            iconsrc = './images/snow.webp'
                        } else if (myIcon == 'thunderstorm' || myIcon == 'storm') {
                            iconsrc = './images/thunderstorm.webp'

                        } else if (myIcon == 'mist') {
                            iconsrc = './images/mist.webp'
                        
                        } else {
                            iconsrc = `https://openweathermap.org/img/wn/${getList.weather[0].icon}.png`
                        }

                        let forecastDate = new Date(getList.dt * 1000);
                        theDate.textContent = formatDate(forecastDate)

                        temperature.textContent = `${(getList.main.temp).toFixed(0)}°F`;
                        condition.textContent = capitalize(getList.weather[0].description);
                        icons.setAttribute('src', iconsrc);
                        icons.setAttribute('alt', `${myIcon} for day ${forecastDate}`);
                        icons.setAttribute('width', '50');
                        icons.setAttribute('loading', 'lazy');
                        
                        card.appendChild(theDate);
                        card.appendChild(icons);
                        card.appendChild(temperature);
                        card.appendChild(condition);
                        cards.appendChild(card);
                    }
                }
    }
};
   
//Format timestamp from weather
function formatDate(dateString) {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}/${day}`;
};

let count = parseInt(localStorage.getItem('specialtyDrinksCount')) || 0;

// Update the count display on the page
const countDisplay = document.getElementById('specialty-drinks-count');
countDisplay.textContent = `You have made ${count} specialty drinks`;




