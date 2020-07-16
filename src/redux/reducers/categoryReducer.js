import {
  ADD_CATEGORY,
  GET_CATEGORIES,
  GET_CATEGORY,
  UPDATE_CATEGORY,
  REMOVE_CATEGORY,
} from '../types';
import Categories from '../../containers/Layout/Categories';

const initState = {
  categories: [{ name: 'abc', description: 'abc' }],
  category: {},
};

const categoryReducer = (state = initState, action) => {
  const categories = state.categories;
  const category = state.category;

  switch (action.type) {
    case GET_CATEGORIES:
      return state;

    case ADD_CATEGORY:
      categories.push(action.payload);
      return { ...state, categories };

    case GET_CATEGORY:
      var getCategory = {
        id: action.payload,
        name: categories[action.payload].name,
        description: categories[action.payload].description,
      };
      return { ...state, category: getCategory };

    case UPDATE_CATEGORY:
      var updateCategory = action.payload;
      categories[updateCategory.id] = {
        name: updateCategory.name,
        description: updateCategory.description,
      };
      return { ...state, categories, category: {} };

    case REMOVE_CATEGORY:
      console.log('abc');
      categories.splice(action.payload, 1);
      return { ...state, categories };

    default:
      return state;
  }
};

export default categoryReducer;
