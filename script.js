// Import the API key from config.js
import CONFIG from "./config.js"; 

const apiKey = CONFIG.API_KEY; //  so that api could be secured 

function getLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    } else {
      reject(new Error("Geolocation is not available"));
      return;
    }
  });
}

async function getWeather(city = null) {
  try {
    let apiUrl;
    if (city) {
      apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    } else {
      const position = await getLocation();
      console.log(position);
      const { latitude, longitude } = position.coords;
      apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    const temprature = data.main.temp;
    console.log(temprature);
    const temp = document.querySelector(".temp h1");
    temp.textContent = `${temprature}°C`;

    const cityName = data.name;
    console.log(cityName);
    const cityNameElement = document.querySelector("#cityName");
    cityNameElement.textContent = cityName;

    const weatherCondition = data.weather[0].main;
    console.log(weatherCondition);
    handleweather(weatherCondition);
  } catch (error) {
    console.error("Error fetching weather data", error);
  }
}

function handleweather(condition) {
  const imageElement = document.getElementById("dynamicImage");
  const weatherConditionElement = document.querySelector(".greeting h2");
  switch (condition) {
    case "Clear":
      weatherConditionElement.textContent = "It's a clear day!";
      imageElement.src = "sun-hot.png";
      break;
      case "Clouds":
        weatherConditionElement.textContent = "It's cloudy.";
        imageElement.src = 'cloudy.png';
        break;
        case "Rain":
          imageElement.src = "rain.png";
          weatherConditionElement.textContent = "It's raining.";
          break;
          case "Snow":
            weatherConditionElement.textContent = "It's snowing.";
            imageElement.src = "snow.png";
            break;
            case "Thunderstorm":
              imageElement.src = "thunderstorms.png";
              weatherConditionElement.textContent = "Thunderstorm is occurring.";
              
              break;
              case "Drizzle":
                weatherConditionElement.textContent = "Light rain or drizzle.";
                break;
                case "Mist":
                  weatherConditionElement.textContent = "It's misty.";
                  break;
                  case "Fog":
        imageElement.src = "extreme-fog.png";
        weatherConditionElement.textContent = "It's foggy.";
        break;
        case "Haze":
          imageElement.src = "extreme-haze.png";
          weatherConditionElement.textContent = "It's hazy.";
          break;
          case "Dust":
            imageElement.src = "dust.png";
            weatherConditionElement.textContent = "Dust is in the air.";
            break;
            case "Sand":
              weatherConditionElement.textContent = "It's sandy.";
              break;
              default:
      imageElement.src = "sun-hot.png";
      weatherConditionElement.textContent = "Weather condition not recognized.";
  
    }
}

// Event listener for the button click
document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter city name");
  }
});

// Event listener for Enter key press 
document.getElementById("cityInput").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); 
    const city = document.getElementById("cityInput").value;
    if (city) {
      getWeather(city);
    } else {
      alert("Please enter city name");
    }
  }
});


getWeather();
