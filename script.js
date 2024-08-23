const apiKey = "96509125e21d68ea12ba5e183e3cebd3";

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
  const weatherConditionElement = document.querySelector(".greeting h2");
  switch (condition) {
    case "Clear":
      weatherConditionElement.textContent = "It's a clear day!";
      break;
    case "Clouds":
      weatherConditionElement.textContent = "It's cloudy.";
      break;
    case "Rain":
      weatherConditionElement.textContent = "It's raining.";
      break;
    case "Snow":
      weatherConditionElement.textContent = "It's snowing.";
      break;
    case "Thunderstorm":
      weatherConditionElement.textContent = "Thunderstorm is occurring.";
      break;
    case "Drizzle":
      weatherConditionElement.textContent = "Light rain or drizzle.";
      break;
    case "Mist":
      weatherConditionElement.textContent = "It's misty.";
      break;
    case "Fog":
      weatherConditionElement.textContent = "It's foggy.";
      break;
    case "Haze":
      weatherConditionElement.textContent = "It's hazy.";
      break;
    case "Dust":
      weatherConditionElement.textContent = "Dust is in the air.";
      break;
    case "Sand":
      weatherConditionElement.textContent = "It's sandy.";
      break;
    default:
      weatherConditionElement.textContent = "Weather condition not recognized.";
  }
}
document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter city name");
  }
});
getWeather();
