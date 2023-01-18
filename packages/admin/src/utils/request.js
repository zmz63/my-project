import axios from 'axios';

const axiosInst = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 5000,
});

axiosInst.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInst.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

const request = (config) => axiosInst.request(config);

export default request;
