import { ADD_NUMBER, GET_NUMBER } from '../types';

export const addNumber = () => {
  return (dispatch) => {
    dispatch({ type: ADD_NUMBER });
  };
};

export const getNumber = () => {
  return (dispatch) => {
    console.log('get');
    dispatch({ type: GET_NUMBER });
  };
};
