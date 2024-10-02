import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const slice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    toggleBurgerMenu(state) {
      state.isOpen ? state.isOpen = false : state.isOpen;
    },
  },
});

export const toggleBurgerMenu = slice.actions;
export const closeBurgerMenu = slice.actions;

export const burgerReducer = slice.reducer;
