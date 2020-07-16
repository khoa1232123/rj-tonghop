import categoryReducer from './categoryReducer';

import { combineReducers } from 'redux';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  categoryData: categoryReducer,
  postData: postReducer,
});

export default rootReducer;
