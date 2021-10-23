async function getWeather(lang, cityName = 'Minsk') {
  const weather = document.querySelector('.city');
  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=${lang}&appid=fe59c3c352d57dba47fd1f628111e65d&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  const urlLang = '../assets/data/language.json';
  const resLang = await fetch(urlLang);
  const dataLang = await resLang.json();


  weather.value = `${cityName}`;
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = dataLang.weather[lang][0] + ` : ${data.wind.speed} m/s`;
  humidity.textContent = dataLang.weather[lang][1] + ` : ${data.main.humidity}%`;
}

export default getWeather;
