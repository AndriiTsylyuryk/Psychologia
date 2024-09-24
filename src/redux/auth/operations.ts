import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { clearToken, myAPI, setToken } from "../../config/API";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await myAPI.post("users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await myAPI.post("users/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logoutThunk = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    await myAPI.post("users/logout");
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getMeThunk = createAsyncThunk("getMe", async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().state.aut;
  try {
    setToken(savedToken);
    const { data } = await myAPI.get("users/current");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
