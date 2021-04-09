import renderResult from './renderDOM';
import getWeatherdata from './weatherAPI';

async function cb() {
  const location = document.getElementById('city').value;
  const unit = document.querySelector('.switch input').checked;
  const weatherData = await getWeatherdata(location, (unit ? 'imperial' : 'metric'));
  renderResult(weatherData);
}

document.getElementById('submit').onclick = cb;