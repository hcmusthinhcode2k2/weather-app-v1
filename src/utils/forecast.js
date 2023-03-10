const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=2200a0aa2e6ee4190c2693d2eacca621&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Not found url', undefined);
    } else if (body.error) {
      callback('Not found location', undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]} . This temperature current is ${body.current.temperature} degree out. Feels like is ${body.current.feelslike} degree out`
      );
    }
  });
};

module.exports = forecast;