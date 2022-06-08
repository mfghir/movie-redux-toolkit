import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAsyncNewMovies = createAsyncThunk(
  "newMovies/getAsyncNewMovies",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_MOVIE_API}`);
      return  res.data.items
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const newMoviesSlice = createSlice({
  name: "newMovies",
  initialState: {
    newMovies: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getAsyncNewMovies.fulfilled]: (state, action) => {
      return { ...state, popular: action.payload, error: null };
    },
    [getAsyncNewMovies.rejected]: (state, action) => {
      return {
        ...state,
        newMovies: [],
        error: action.payload.message,
      };
    },
  },
});

// export const { decrement, increment } = popularSlice.actions;
export default newMoviesSlice.reducer;
