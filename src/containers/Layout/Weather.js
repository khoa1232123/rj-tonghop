import React, { useState } from 'react';
import { fetchWeather } from '../../api/weather';

const Weather = (props) => {
  const [query, setQuery] = useState('');

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      console.log(data);
    }
  };

  return (
    <div>
      <h1>Weather</h1>
      <div className="row">
        <input
          type="text"
          className="search"
          placeholder="search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </div>
    </div>
  );
};

export default Weather;
