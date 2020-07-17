import { GET_POSTS, GET_POST } from '../types';

const initState = {
  posts: [],
  post: {},
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return state;
    case GET_POST:
      return { ...state };
    default:
      return state;
  }
};

export default postReducer;
