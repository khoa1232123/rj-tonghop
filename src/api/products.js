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

export const createOrderData = (order) => {
  let url = 'http://localhost:5000/api/orders';
  axios
    .post(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: order,
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
};
