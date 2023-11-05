import axios from 'axios';

export const getProducts = (apiSrc) => {
  return axios.get(apiSrc);
};
