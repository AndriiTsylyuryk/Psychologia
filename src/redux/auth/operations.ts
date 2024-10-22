import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { clearToken, myAPI, setToken } from "../../config/API";
import { RootState, UserType } from "../store";
import { setTheme } from "../burger/slice";

interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials: RegisterCredentials, thunkAPI) => {
    try {
      const { data } = await myAPI.post("auth/register", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

interface LoginCredentials {
  email: string;
  password: string;
}

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials: LoginCredentials, thunkAPI) => {
    try {
      const { data } = await myAPI.post("auth/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);






export const loginWithGoogle = createAsyncThunk(
  "googleLogin",
  async (code: string, thunkApi) => {
    try {
      const response = await myAPI.post("auth/confirm-oauth", { code });
      const { accessToken } = response.data.data;
      console.log(accessToken)
      setToken(accessToken);
      return accessToken;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);









export const logoutThunk = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    await myAPI.post("auth/logout");
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getMeThunk = createAsyncThunk<
  UserType,
  void,
  { state: RootState }
>("getMe", async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().auth.accessToken;
  const savedTheme = thunkAPI.getState().theme.isDark;
  thunkAPI.dispatch(setTheme(savedTheme));
  if (savedToken === null) {
    return thunkAPI.rejectWithValue("no token");
  }
  try {
    setToken(savedToken);
    const { data } = await myAPI.get("/");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
