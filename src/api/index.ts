import axios from "axios";

export const $api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const $api2 = axios.create({
  baseURL: process.env.REACT_APP_API_GOOGLE_AUTH,
});

$api.interceptors.request.use((config) => {
  return config;
});

$api2.interceptors.request.use((config) => {
  return config;
});
