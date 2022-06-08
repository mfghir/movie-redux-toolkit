import { configureStore } from "@reduxjs/toolkit";
import newMoviesSlice from "./reducers/newMoviesSlice";
import popularSlice from "./reducers/popularSlice";
import upcomingSlice from "./reducers/upcomingSlice";

export const store = configureStore({
  reducer: {
    popular: popularSlice,
    newMovies: newMoviesSlice,
    upcoming: upcomingSlice,
  },
});
