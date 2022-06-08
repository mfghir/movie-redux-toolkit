import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { popularGamesURL } from "../../api";

export const getAsyncPopularMovies = createAsyncThunk(
  "popular/getAsyncPopularMovies",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_MOVIE_API}`);
      return  res.data.items
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const popularSlice = createSlice({
  name: "popular",
  initialState: {
    popular: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getAsyncPopularMovies.fulfilled]: (state, action) => {
      return { ...state, popular: action.payload, error: null };
    },
    [getAsyncPopularMovies.rejected]: (state, action) => {
      return {
        ...state,
        popular: [],
        error: action.payload.message,
      };
    },
  },
});

// export const { decrement, increment } = popularSlice.actions;
export default popularSlice.reducer;
