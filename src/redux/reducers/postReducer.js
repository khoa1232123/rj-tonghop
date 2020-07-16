import { GET_NUMBER, ADD_NUMBER } from '../types';

const initState = {
  number: 0,
};

const postReducer = (state = initState, action) => {
  const number = state.number;
  switch (action.type) {
    case GET_NUMBER:
      return state;
    case ADD_NUMBER:
      var numbers = number + 1;
      return { ...state, number: numbers };
    default:
      return state;
  }
};

export default postReducer;
