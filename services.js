const apiKey = "9c5fbc3a3d5b5081be22851bdf876478";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".weather-type").innerHTML = data.weather[0].main;

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear-day.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloudy.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/heavy-showers.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/showers.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/fog.png";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "images/partly-cloudy-day.png";
    } else if (data.weather[0].main == "Thunderstorm") {
      weatherIcon.src = "images/thunderstorm-showers.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
