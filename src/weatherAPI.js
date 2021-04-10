const weatherAPI = (() => {
  function constructURL(location, unit) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=786b74dc8fce162462303a21c3e890c0&units=${unit}`;
  }

  function getWeatherdata(location, unit) {
    return new Promise((resolve, reject) => {
      const url = constructURL(location, unit);
      fetch(url, { mode: 'cors' })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Please provide the correct city');
          }
          return response.json();
        })
        .then((data) => {
          const { temp } = data.main;
          const { icon } = data.weather[0];
          const weatherDesc = data.weather[0].description;
          resolve({
            temp, location, icon, weatherDesc, unit,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  return getWeatherdata;
})();

export default weatherAPI;