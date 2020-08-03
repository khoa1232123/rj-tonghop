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

export const createOrderData = async (order) => {
  let url = '/api/orders';
  await axios
    .post(url, {
      body: JSON.stringify(order),
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
};
