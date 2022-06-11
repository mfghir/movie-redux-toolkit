import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { searchURL } from "../../api";

export const getAsyncSearch = createAsyncThunk(
  "search/getAsyncSearch",
  async (payload, { rejectWithValue }) => {
    try {
      // const res = await axios.put(searchURL(payload))

      const res = await axios.get(searchURL(payload.searchInput),{
        // id: payload.id,
        // search: payload.searchInput,
        // title: payload.title,
        // released: payload.year,
        // image: payload.image,
      });

      console.log(res.data)
      return res.data;
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
      // return { ...state, search: action.payload, error: null };
      // return { ...state,state.search.push(action.payload), error: null };
      state.search.push(action.payload)

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
