import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { popularMoviesURL } from "../../api";

export const getAsyncPopularMovies = createAsyncThunk(
  "popularMovies/getAsyncPopularMovies",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(popularMoviesURL());
      return res.data.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    popularMovies: [],
    error: null,
  },
  reducers: {},

  extraReducers: {
    [getAsyncPopularMovies.fulfilled]: (state, action) => {
      return { ...state, popularMovies: action.payload, error: null };
    },
    [getAsyncPopularMovies.rejected]: (state, action) => {
      return {
        ...state,
        popularMovies: [],
        error: action.payload.message,
      };
    },
  },
});

export default popularMoviesSlice.reducer;
