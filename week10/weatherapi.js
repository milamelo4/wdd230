// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=0a70f34193d2de88ea8b87770197b319"

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();


//The split method splits the sentence into individual words. Use map to iterate over the charAt, which takes the first character that gets capitalized, then use join method to joi the sentence back together. Call the func anywhere I want to capitalize sentences
function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') 
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`
    let test = weatherData.weather[0].description
    if (test == 'overcast clouds') {
        iconsrc = 'overcast.png'
    }else {
       iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` 
    }
    
    const desc = capitalize(weatherData.weather[0].description);

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc)
    weatherIcon.setAttribute('loading', 'lazy')
    weatherIcon.setAttribute('width', '64')
    captionDesc.textContent = desc;
}
