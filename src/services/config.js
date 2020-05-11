import axios from 'axios';
import authHeader from './auth/auth-header';

export const http = getAxios();

function getAxios() {
  let instance = axios.create({
    baseURL: 'http://localhost:8081/api/'
  });

  instance.interceptors.request.use(config => {
    config.headers.Authorization = authHeader();
    return config;
  }, error => Promise.reject(error));

  return instance;
}
