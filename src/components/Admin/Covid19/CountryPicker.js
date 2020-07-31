import React from 'react';
import {
  getCountriesDataCovid,
  getCountryDataCovid,
} from '../../../redux/actions/covid19Actions';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const CountryPicker = ({
  getCountriesDataCovid,
  getCountryDataCovid,
  covidData: { countriesData },
}) => {
  useEffect(() => {
    getCountriesDataCovid();
  }, [getCountriesDataCovid]);
  console.log(countriesData);
  return (
    <div className="col-12 mt-4 mb-4">
      <div className="row">
        <div className="col-12 col-md-4"></div>
        <div className="col-12 col-md-4">
          <select
            className="form-control"
            onChange={(e) => getCountryDataCovid(e.target.value)}
          >
            <option value="">Hello</option>
            {countriesData &&
              countriesData.map((country) => {
                return (
                  <option key={country} value={country}>
                    {country}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="col-12 col-md-4"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    covidData: state.covidData,
  };
};

const mapDispatchToProps = {
  getCountriesDataCovid,
  getCountryDataCovid,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryPicker);
