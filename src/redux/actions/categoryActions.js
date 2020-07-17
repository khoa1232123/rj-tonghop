import { ADD_CATEGORY, GET_CATEGORIES, GET_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../types';

export const addCategory = (category) => {
  return (dispatch) => {
    dispatch({ type: ADD_CATEGORY, payload: category });
  };
};

export const getCategories = () => {
  return (dispatch) => {
    dispatch({ type: GET_CATEGORIES });
  };
};

export const getCategory = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_CATEGORY, payload: id });
  };
};

export const updateCategory = (category) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_CATEGORY, payload: category });
  };
};

export const deleteCategory = (id) => {
  return (dispatch) => {
    console.log('abc');
    dispatch({ type: DELETE_CATEGORY, payload: id });
  };
};
