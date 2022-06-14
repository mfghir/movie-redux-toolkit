import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { detailURL } from "../../api";

export const getAsyncDetail = createAsyncThunk(
  "detail/getAsyncDetail",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.get(detailURL(payload.id));

      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detail: [],
    error: null,
  },
  reducers: {},

  extraReducers: {
    [getAsyncDetail.fulfilled]: (state, action) => {
      return { ...state, detail: action.payload, error: null };
    },
    [getAsyncDetail.rejected]: (state, action) => {
      return {
        ...state,
        detail: [],
        error: action.payload.message,
      };
    },
  },
});

export default detailSlice.reducer;
