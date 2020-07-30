import categoryReducer from './categoryReducer';
import postReducer from './postReducer';
import covid19Reducer from './covid19Reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  categoryData: categoryReducer,
  postData: postReducer,
  covidData: covid19Reducer,
});

export default rootReducer;
