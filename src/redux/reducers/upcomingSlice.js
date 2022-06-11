import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { upcomingURL } from "../../api";

export const getAsyncUpcoming = createAsyncThunk(
  "upcoming/getAsyncUpcoming",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(upcomingURL());
      return res.data.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const upcomingSlice = createSlice({
  name: "upcoming",
  initialState: {
    upcoming: [],
    error: null,
  },
  reducers: {},

  extraReducers: {
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
  },
});

export default upcomingSlice.reducer;
