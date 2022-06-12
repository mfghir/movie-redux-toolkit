import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { searchURL } from "../../api";

export const getAsyncSearch = createAsyncThunk(
  "search/getAsyncSearch",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.get(searchURL(payload.searchInput));
      // console.log(res.data.results);
      return res.data.results;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: [],
    error: null,
  },
  reducers: {},

  extraReducers: {
    [getAsyncSearch.fulfilled]: (state, action) => {
      return { ...state, search: action.payload, error: null };
    },
    [getAsyncSearch.rejected]: (state, action) => {
      return {
        ...state,
        search: [],
        error: action.payload.message,
      };
    },
  },
});

export default searchSlice.reducer;
