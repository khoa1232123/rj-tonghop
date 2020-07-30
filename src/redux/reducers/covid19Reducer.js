import {
  GET_FULL_DATA,
  GET_DAILY_DATA,
  GET_COUNTRIES_DATA,
  GET_COUNTRY_DATA,
} from '../types';

const initState = {
  data: [],
  dailyData: [],
  country: '',
  countriesData: [],
  countryData: [],
};

const covid19Reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_FULL_DATA:
      return { ...state, data: action.payload };

    case GET_DAILY_DATA:
      console.log(action.payload);
      return { ...state, dailyData: action.payload };

    case GET_COUNTRIES_DATA:
      console.log(action.payload);
      return { ...state, countriesData: action.payload };

    case GET_COUNTRY_DATA:
      console.log(action.payload);
      return {
        ...state,
        countryData: action.payload,
        country: action.country,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default covid19Reducer;
