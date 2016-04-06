import axios from 'axios';

const WEATHER_KEY = '9002e25972e2ddfb9443029744e9742c';
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${WEATHER_URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
