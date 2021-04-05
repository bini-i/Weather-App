function constructurl(location, unit) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=786b74dc8fce162462303a21c3e890c0&units=${unit}`;
}

const result = document.getElementById('result');

function renderresult(temp, location) {
  const tempResult = document.createElement('p');
  tempResult.textContent = temp;
  const locationResult = document.createElement('p');
  locationResult.textContent = location;
  result.appendChild(tempResult);
  result.appendChild(locationResult);
}

function getweatherdatafor(location, unit) {
  const url = constructurl(location, unit);
  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      const { temp } = data.main;
      renderresult(temp, location, unit);
    });
}

document.getElementById('submit').addEventListener('click', () => {
  const location = document.getElementById('location').value;
  const unit = document.getElementById('unit').value;
  getweatherdatafor(location, unit);
});
