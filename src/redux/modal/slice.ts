import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  request: "",
  isModalOpen: false,
  eventData: { start: null, end: null },
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
    setEventData(state, action) {
      state.eventData = action.payload; 
    },
  },
});

export const { setRequest, toggleModal, clearRequest,setEventData  } = slice.actions;

export const modalReducer = slice.reducer;
