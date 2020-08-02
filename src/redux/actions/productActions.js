import { FETCH_PRODUCTS } from '../types';
import { fetchProductData } from '../../api/products';

export const fetchProducts = () => async (dispatch) => {
  const res = await fetchProductData();

  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};
