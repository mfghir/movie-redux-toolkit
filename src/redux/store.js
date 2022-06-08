import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./reducers/moviesSlice";

export const store = configureStore({
  reducer: {
    popularMovies: moviesSlice,
    upcoming: moviesSlice,
    popularTvs: moviesSlice,
  },
});
