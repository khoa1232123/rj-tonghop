import { v4 } from 'uuid';
import {
  GET_POSTS,
  GET_POST,
  UPDATE_POST,
  ADD_POST,
  DELETE_POST,
} from '../types';

const localPost = localStorage.getItem('posts');

const initState = {
  posts: localPost ? JSON.parse(localPost) : [],
  post: {},
};

const postReducer = (state = initState, action) => {
  const posts = state.posts;
  var index = -1;

  switch (action.type) {
    case GET_POSTS:
      return state;

    case ADD_POST:
      var newPost = { id: v4(), ...action.payload };
      posts.push(newPost);
      localStorage.setItem('posts', JSON.stringify(posts));
      return { ...state, posts };

    case GET_POST:
      index = posts.findIndex((post) => post.id === action.payload);
      var post = {};
      console.log(action.payload);
      if (index !== -1) {
        post = posts[index];
      }
      return { ...state, post };

    case UPDATE_POST:
      index = posts.findIndex((post) => post.id === action.payload.id);
      posts[index] = action.payload;
      localStorage.setItem('posts', JSON.stringify(posts));
      return { ...state, posts, post: {} };

    case DELETE_POST:
      console.log('abc');
      posts.splice(action.payload, 1);
      localStorage.setItem('posts', JSON.stringify(posts));
      return { ...state, posts };

    default:
      return state;
  }
};

export default postReducer;
