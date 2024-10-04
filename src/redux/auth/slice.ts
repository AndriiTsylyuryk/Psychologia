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
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(getMeThunk.fulfilled, (state, action) => {
        // Перевірте, чи action.payload має потрібні властивості
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
