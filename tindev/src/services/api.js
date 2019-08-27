/* eslint-disable prettier/prettier */
import axios from 'axios';

const api = axios.create({
  // eslint-disable-next-line comma-dangle
  baseURL: 'http://localhost:3333'
});

export default api;

