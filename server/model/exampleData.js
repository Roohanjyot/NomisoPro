let exampleData =  {
  coord: { lon: 75.1667, lat: 30.8 },
  weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' } ],
  base: 'stations',
  main: {
    temp: 298.15,
    feels_like: 298.61,
    temp_min: 298.15,
    temp_max: 298.15,
    pressure: 991,
    humidity: 56
  },
  visibility: 10000,
  wind: { speed: 1.96, deg: 339, gust: 2.27 },
  clouds: { all: 0 },
  dt: 1613721067,
  sys: {
    type: 3,
    id: 2036316,
    country: 'IN',
    sunrise: 1613698601,
    sunset: 1613739000
  },
  timezone: 19800,
  id: 1262951,
  name: 'Moga',
  cod: 200
};

module.exports = exampleData;