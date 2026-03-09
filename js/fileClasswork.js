let cityAstana = "https://api.open-meteo.com/v1/forecast?latitude=51.1&longitude=71.26&hourly=temperature_2m&current=temperature_2m,precipitation&timezone=auto";
let cityAlmaty = "https://api.open-meteo.com/v1/forecast?latitude=43.25&longitude=76.9&hourly=temperature_2m&current=temperature_2m,precipitation";
let cityKaraganda = "https://api.open-meteo.com/v1/forecast?latitude=49.8028&longitude=73.0877&hourly=temperature_2m&current=temperature_2m,precipitation&timezone=auto";
let city;

let selectCity = document.getElementById("city_select");
let containerSelect  = document.querySelector(".container_select");
let btnSelect = document.querySelector(".btn_select");
let weatherInfo = document.querySelector(".weather_info");
let imgWeather = document.querySelector(".container_img");

btnSelect.addEventListener("click", () => {
  if (selectCity.value === "Astana") city = cityAstana;
  if (selectCity.value === "Almaty") city = cityAlmaty;
  if (selectCity.value === "Karaganda") city = cityKaraganda;

  fetch(city)
    .then((response) => response.json())
    .then((json) => {
      let currentTemp = json.current["temperature_2m"];

      if (currentTemp >= 0) {
        weatherInfo.innerText = `${selectCity.value}: +${currentTemp}${json.current_units["temperature_2m"]}`;
        imgWeather.innerHTML = '<img class="image_weather" src="./image/sun.png" alt="warm weather">';
        containerSelect.style.background = 'linear-gradient(to bottom, #833AB4, #FD1D1D, #FCB045)'
      } else {
        weatherInfo.innerText = `${selectCity.value}: ${currentTemp}${json.current_units["temperature_2m"]}`;
        imgWeather.innerHTML ='<img class="image_weather" src="./image/cold.png" alt="warm weather">';
        containerSelect.style.background = 'linear-gradient(to bottom, #020024, #090979, #00D4FF)'

      }
    });
});
