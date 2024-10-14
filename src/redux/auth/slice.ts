import { createSlice } from "@reduxjs/toolkit";
import {
  getMeThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from "./operations";
import { AuthState } from "../authTypes/authTypes";

const initialState: AuthState = {
  user: {
    name: "",
    email: "",
  },
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: '',
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.data.accessToken;
        state.isLoggedIn = true;
      }) .addCase(registerThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(getMeThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.isLoggedIn = true;
          state.isRefreshing = false;
          state.user.name = action.payload.name;
          state.user.email = action.payload.email;
        }
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        return initialState;
      })
      .addCase(getMeThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getMeThunk.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = slice.reducer;
