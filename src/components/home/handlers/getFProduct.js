import axios from 'axios';

export const getProduct = () => {
  return axios.get('https://dummyjson.com/products/4');
};
