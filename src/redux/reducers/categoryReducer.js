import { v4 } from 'uuid';
import {
  ADD_CATEGORY,
  GET_CATEGORIES,
  GET_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from '../types';

const initState = {
  categories: [],
  category: {},
};

const categoryReducer = (state = initState, action) => {
  const categories = state.categories;
  var index = -1;
  switch (action.type) {
    case GET_CATEGORIES:
      return state;

    case ADD_CATEGORY:
      var newCategory = { id: v4(), ...action.payload };
      categories.push(newCategory);
      return { ...state, categories };

    case GET_CATEGORY:
      index = categories.findIndex(
        (category) => category.id === action.payload
      );
      var category = {};
      if (index !== -1) {
        category = categories[index];
      }
      return { ...state, category };

    case UPDATE_CATEGORY:
      index = categories.findIndex(
        (category) => category.id === action.payload.id
      );
      categories[index] = action.payload;
      return { ...state, categories, category: {} };

    case DELETE_CATEGORY:
      console.log('abc');
      categories.splice(action.payload, 1);
      return { ...state, categories };

    default:
      return state;
  }
};

export default categoryReducer;
