import axios from 'axios';

const API_ENV_URL = 'https://frontend-candidate.dev.sdh.com.ua/v1';

const API = axios.create({
  baseURL: API_ENV_URL,
  responseType: 'json',
});

export default API;
