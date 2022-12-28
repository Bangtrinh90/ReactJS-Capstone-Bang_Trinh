import axios from "axios";

export const http = axios.create({
  baseURL: "https://shop.cyberlearn.vn",
  timeout: 30000,
});

http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer `,
    };
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);
