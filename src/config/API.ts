import axios from "axios";

export const myAPI = axios.create({
  baseURL: "http://localhost:3000/",
});

export const setToken = (token) => {
  myAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  myAPI.defaults.headers.common.Authorization = ``;
};
