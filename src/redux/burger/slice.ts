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
    setTheme(state, action) {
      state.isDark = action.payload;
    },
  },
});

export const { toggleBurgerMenu, toggleTheme, setTheme } = slice.actions;

export const burgerReducer = slice.reducer;
export const themeReducer = slice.reducer;
