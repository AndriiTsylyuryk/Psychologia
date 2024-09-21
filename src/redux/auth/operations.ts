import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { myAPI } from "../../config/API";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await myAPI.post("users/");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
