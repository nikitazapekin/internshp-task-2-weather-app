import axios from "axios";

const $api = axios.create({
  baseURL: process.env.BASE_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Client-ID ${process.env.ACCESS_TOKEN}`;

  return config;
});

export default $api;
