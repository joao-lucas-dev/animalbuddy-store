import axios from 'axios';

const api = axios.create({
  baseURL: 'https://animalbuddy-api.herokuapp.com/',
});

export default api;
