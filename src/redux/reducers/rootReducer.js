import categoryReducer from './categoryReducer';
import postReducer from './postReducer';
import covid19Reducer from './covid19Reducer';
import productReducer from './productReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  categoryData: categoryReducer,
  postData: postReducer,
  covidData: covid19Reducer,
  productData: productReducer,
});

export default rootReducer;
