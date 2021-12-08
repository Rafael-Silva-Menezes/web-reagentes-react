import axios from 'axios';

const api = axios.create({
  baseURL: 'http://reagentes-api.herokuapp.com/api',
});

export default api;
