import axios from "axios";

export const myAPI = axios.create({
  baseURL: "https://psychologia-back-end.onrender.com/",
});

export const setToken = (token) => {
  myAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  myAPI.defaults.headers.common.Authorization = ``;
};
