import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPasswordHidden: true,
};

const slice = createSlice({
  name: "password",
  initialState,
  reducers: {
    togglePasswordVisibility: (state) => {
      state.isPasswordHidden = !state.isPasswordHidden;
    },
  },
});

export const { togglePasswordVisibility } = slice.actions;
export const passwordReducer = slice.reducer;
