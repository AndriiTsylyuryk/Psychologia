import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isDark: false,
};

const slice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    toggleBurgerMenu(state) {
      state.isOpen = !state.isOpen;
    },
    toggleTheme(state) {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleBurgerMenu, toggleTheme } = slice.actions;

export const burgerReducer = slice.reducer;
export const themeReducer = slice.reducer;
