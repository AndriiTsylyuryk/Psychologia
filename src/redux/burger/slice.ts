import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const slice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    toggleBurgerMenu(state) {
      state.isOpen = !state.isOpen; // Просто перемикаємо стан
    },
  },
});

export const { toggleBurgerMenu } = slice.actions;

export const burgerReducer = slice.reducer;
