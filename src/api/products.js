import axios from 'axios';

export const fetchProductData = async () => {
  let url = '/api/products';
  try {
    const { data } = await axios.get(url);
    return { data };
  } catch (error) {
    console.log(error);
  }
};
