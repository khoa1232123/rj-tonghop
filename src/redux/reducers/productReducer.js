const {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
  GET_CART_ITEMS,
  ADD_TO_CART,
  REMOVE_FORM_CART,
} = require('../types');

const initState = {
  products: [],
  filterProducts: [],
  cartItems: [],
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filterProducts: action.payload,
      };

    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        products: action.payload,
      };

    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        products: action.payload,
      };

    case GET_CART_ITEMS:
    case ADD_TO_CART:
    case REMOVE_FORM_CART:
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
