import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  request: "",
  isModalOpen: false,
};

const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
    setRequest(state, action) {
      state.request = action.payload;
    },
    clearRequest(state) {
      state.request = "";
    },
  },
});

export const { setRequest, toggleModal, clearRequest } = slice.actions;

export const modalReducer = slice.reducer;
