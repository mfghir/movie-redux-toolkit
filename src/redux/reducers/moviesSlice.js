import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncPopularMovies = createAsyncThunk(
  "movies/getAsyncPopularMovies",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_MOVIE_API}`
      );
      return res.data.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAsyncUpcoming = createAsyncThunk(
  "movies/getAsyncUpcoming",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://imdb-api.com/en/API/ComingSoon/${process.env.REACT_APP_MOVIE_API}`
      );
      return res.data.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAsyncPopularTvs = createAsyncThunk(
  "movies/getAsyncPopularTvs",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://imdb-api.com/en/API/MostPopularTVs/${process.env.REACT_APP_MOVIE_API}`
      );
      return res.data.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",

  initialState: {
    popularMovies: [],
    upcoming: [],
    popularTvs: [],
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

    [getAsyncUpcoming.fulfilled]: (state, action) => {
      return { ...state, upcoming: action.payload, error: null };
    },
    [getAsyncUpcoming.rejected]: (state, action) => {
      return {
        ...state,
        upcoming: [],
        error: action.payload.message,
      };
    },

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

export default moviesSlice.reducer;
