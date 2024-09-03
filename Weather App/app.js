const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; //+ {city name}&appid={API key}
const key = "cab2b725b681ef569ba62a043a011450";
const searchBox = document.querySelector(".details input");
const searchBtn = document.querySelector(".details button");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city) {
  const responce = await fetch(URL + city + `&appid=${key}`);
  var data = await responce.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed} Km/h`;

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "cloud.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "sunny.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "summer.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "haze.png";
  }

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
