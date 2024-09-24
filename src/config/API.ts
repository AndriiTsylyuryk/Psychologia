import axios from "axios";

export const myAPI = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setToken = (token) => {
  myAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  myAPI.defaults.headers.common.Authorization = ``;
};
