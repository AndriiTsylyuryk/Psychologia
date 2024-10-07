import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isLight: true,
};

const slice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    toggleBurgerMenu(state) {
      state.isOpen = !state.isOpen;
    },
    toggleTheme(state) {
      state.isLight = !state.isLight;
    },
  },
});

export const { toggleBurgerMenu, toggleTheme } = slice.actions;

export const burgerReducer = slice.reducer;
export const themeReducer = slice.reducer;
