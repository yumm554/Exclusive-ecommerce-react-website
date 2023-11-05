import axios from 'axios';

export const getCategories = () => {
  return axios.get('https://dummyjson.com/products/categories?limit=3');
};

export const getCategWthImg = () => {
  return axios.get('https://dummyjson.com/products?limit=4');
};
