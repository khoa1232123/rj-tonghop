import axios from 'axios';

const URL = 'https:/api.openweathermap.org/data/2.5/weather';
const API_KEY = 'd3f28dd2f5424600f49c02a027435aea';

export const fetchWeather = async (query) => {
  const response = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  });
  return response;
};
