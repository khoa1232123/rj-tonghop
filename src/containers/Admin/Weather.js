import React, { useState } from 'react';
import { fetchWeather } from '../../api/weather';

const Weather = (props) => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery('');
    }
  };

  return (
    <div className="weather">
      <div className="main-container">
        <div className="row">
          <input
            type="text"
            className="search"
            placeholder="search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
          {weather.main && (
            <div className="city">
              <h2 className="city-name">
                <span>{weather.name}</span>
                <sup>{weather.sys.country}</sup>
              </h2>
              <div className="city-temp">
                {Math.round(weather.main.temp)}&deg;C
              </div>
              <div className="info">
                <img
                  className="city-icon"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="icon weather"
                />
                <p>{weather.weather[0].description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
