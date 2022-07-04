import axios, { type AxiosPromise, type Method } from "axios";
import config from "./config";
const { VITE_TIME_OUT } = import.meta.env;
const instance = axios.create({
  baseURL: config.BaseURL,
  withCredentials: true,
  timeout: VITE_TIME_OUT,
});
instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (err) => Promise.reject(err)
);
instance.interceptors.response.use(
  (res) => {
    try {
      return res.data;
    } catch (error) {
      return res;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default (url: string, method: Method, data: unknown): AxiosPromise => {
  return instance({
    url,
    method,
    [method.toLowerCase() === "get" ? "params" : "data"]: data,
  });
};
