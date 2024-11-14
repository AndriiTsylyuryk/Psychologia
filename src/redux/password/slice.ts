import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPassword: false,
};

const slice = createSlice({
  name: "password",
  initialState,
  reducers: {
    togglePasswordVisibility: (state) => {
      state.showPassword = !state.showPassword;
    },
  },
});

export const { togglePasswordVisibility } = slice.actions;
export const passwordReducer = slice.reducer;
