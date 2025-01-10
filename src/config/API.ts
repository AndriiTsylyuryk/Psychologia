import { selectToken } from "@/redux/auth/selector";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export const myAPI = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});

export const setToken = (token) => {
  myAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  myAPI.defaults.headers.common.Authorization = ``;
};
