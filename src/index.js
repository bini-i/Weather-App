import domNodeCreator from './domNodeCreator';

function constructURL(location, unit) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=786b74dc8fce162462303a21c3e890c0&units=${unit}`;
}

const result = document.getElementById('result');

function renderResult(temp, location, icon, weatherDesc, unit) {
  result.innerHTML = '';
  const imgSrc = `http://openweathermap.org/img/wn/${icon}@4x.png`;
  const locationResultEle = domNodeCreator('p', { class: 'location' }, location.toUpperCase());
  const weatherIconEle = domNodeCreator('img', { src: imgSrc, alt: 'weather icon', class: 'weather-icon' });
  const weatherDescEle = domNodeCreator('p', { class: 'weather-desc' }, weatherDesc);
  const tempResultEle = domNodeCreator('p', { class: 'temp' }, temp);
  const unitEle = domNodeCreator('sup', { class: 'unit' }, `${unit === 'metric' ? '°C' : '°F'}`);
  result.appendChild(locationResultEle);
  result.appendChild(weatherIconEle);
  result.appendChild(weatherDescEle);
  tempResultEle.appendChild(unitEle);
  result.appendChild(tempResultEle);
}

function getweatherdatafor(location, unit) {
  const url = constructURL(location, unit);
  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      const { temp } = data.main;
      const { icon } = data.weather[0];
      const weatherDesc = data.weather[0].description;
      renderResult(temp, location, icon, weatherDesc, unit);
    });
}

document.getElementById('submit').addEventListener('click', () => {
  const location = document.getElementById('city').value;
  const unit = document.querySelector('.switch input').checked;
  getweatherdatafor(location, (unit ? 'imperial' : 'metric'));
});
