import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://reagentes-api.herokuapp.com/api/',
});
