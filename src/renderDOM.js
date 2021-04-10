import domNodeCreator from './domNodeCreator';

const result = document.getElementById('result');

export const renderResult = ({
  temp, location, icon, weatherDesc, unit,
}) => {
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
};

export const renderError = () => {
  result.innerHTML = '';
  result.innerHTML = `
    <div class='invalid-feedback'> Please enter correct city </div>
  `;
};