import { renderResult, renderError } from './renderDOM';
import getWeatherdata from './weatherAPI';

async function cb() {
  const location = document.getElementById('city').value;
  const unit = document.querySelector('.switch input').checked;
  try {
    const weatherData = await getWeatherdata(location, (unit ? 'imperial' : 'metric'));
    renderResult(weatherData);
  } catch (e) {
    renderError();
  }
}

document.getElementById('submit').onclick = cb;