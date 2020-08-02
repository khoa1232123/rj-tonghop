import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  GET_CART_ITEMS,
  ADD_TO_CART,
  REMOVE_FORM_CART,
} from '../types';
import { fetchProductData } from '../../api/products';

export const fetchProducts = () => async (dispatch) => {
  const res = await fetchProductData();
  const products = res.data;
  products.sort((a, b) => (a._id > b._id ? 1 : -1));
  dispatch({ type: FETCH_PRODUCTS, payload: products });
};

export const filterProductsBySize = (products, size) => (dispatch) => {
  const filterProducts =
    size === ''
      ? products
      : products.filter((x) => x.availableSizes.indexOf(size) >= 0);
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: filterProducts,
  });
};

export const orderProductsByPrice = (filterProducts, sort) => (dispatch) => {
  if (sort === '') {
    filterProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    filterProducts.sort((a, b) =>
      sort === 'lowest'
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: filterProducts,
  });
};

export const getCartItems = () => (dispatch) => {
  const items = JSON.parse(localStorage.getItem('cartItems'));
  dispatch({
    type: GET_CART_ITEMS,
    payload: items,
  });
};

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().productData.cartItems;
  const items = cartItems.slice();
  let alreadyInCart = false;
  items.forEach((item) => {
    if (item._id === product._id) {
      item.count++;
      alreadyInCart = true;
    }
  });
  if (!alreadyInCart) {
    items.push({ ...product, count: 1 });
  }
  localStorage.setItem('cartItems', JSON.stringify(items));
  dispatch({ type: ADD_TO_CART, payload: items });
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState().productData.cartItems;
  const items = cartItems.slice();
  const newItems = items.filter((item) => item._id !== product._id);
  localStorage.setItem('cartItems', JSON.stringify(newItems));
  dispatch({ type: REMOVE_FORM_CART, payload: newItems });
};
