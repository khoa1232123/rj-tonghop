import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../types';

export const getPosts = () => {
  return (dispatch) => {
    dispatch({ type: GET_POSTS });
  };
};

export const getPost = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_POST, payload: id });
  };
};

export const addPost = (post) => {
  return (dispatch) => {
    dispatch({ type: ADD_POST, payload: post });
  };
};

export const updatePost = (post) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_POST, payload: post });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_POST, payload: id });
  };
};
