import { fetchData, fetchDailyData, fetchCountries } from '../../api/covid19';
import {
  GET_FULL_DATA,
  GET_DAILY_DATA,
  GET_COUNTRIES_DATA,
  GET_COUNTRY_DATA,
} from '../types';

export const getDataCovid = () => {
  return async (dispatch) => {
    const data = await fetchData();
    dispatch({ type: GET_FULL_DATA, payload: data });
  };
};

export const getDailyDataCovid = () => {
  return async (dispatch) => {
    const data = await fetchDailyData();
    dispatch({ type: GET_DAILY_DATA, payload: data });
  };
};

export const getCountriesDataCovid = () => {
  return async (dispatch) => {
    const data = await fetchCountries();
    dispatch({ type: GET_COUNTRIES_DATA, payload: data });
  };
};

export const getCountryDataCovid = (country) => {
  return async (dispatch) => {
    const data = await fetchData(country);
    dispatch({ type: GET_COUNTRY_DATA, payload: data, country });
  };
};
