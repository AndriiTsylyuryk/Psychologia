import { createSlice } from "@reduxjs/toolkit";
import {
  getLoginWithGoogle,
  getMeThunk,
  loginThunk,
  loginWithGoogle,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from "./operations";
import { AuthState } from "../authTypes/authTypes";

const initialState: AuthState = {
  user: {
    name: "",
    email: null,
  },
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        // state.accessToken = action.payload.data.accessToken;
        // state.isLoggedIn = true;
        state.isRefreshing = false;
        // state.user.email = action.payload.data.email;
      })
      .addCase(registerThunk.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.accessToken = action.payload.data.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.user.email = action.payload.data.email;
      })
      .addCase(loginThunk.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(loginWithGoogle.pending, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = true;
      })
      .addCase(getLoginWithGoogle.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(getMeThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      })
      .addCase(getMeThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getMeThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        return initialState;
      })
      .addCase(logoutThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.accessToken = action.payload;
      });
  },
});

export const authReducer = slice.reducer;
