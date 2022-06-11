import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { populartvsURL } from "../../api";

export const getAsyncPopularTvs = createAsyncThunk(
  "popularTvs/getAsyncPopularTvs",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(populartvsURL());
      return res.data.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const tvSlice = createSlice({
  name: "popularTVs",
  initialState: {
    popularTvs: [],
    error: null,
  },
  reducers: {},

  extraReducers: {
    [getAsyncPopularTvs.fulfilled]: (state, action) => {
      return { ...state, popularTvs: action.payload, error: null };
    },
    [getAsyncPopularTvs.rejected]: (state, action) => {
      return {
        ...state,
        popularTvs: [],
        error: action.payload.message,
      };
    },
  },
});

export default tvSlice.reducer;
