import React from 'react';
import { Cards, CountryPicker, Chart } from '../../components/Covid19';

const Covid19 = (props) => {
  return (
    <div>
      <h1>Covid19</h1>
      <div className="row">
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    </div>
  );
};

export default Covid19;
