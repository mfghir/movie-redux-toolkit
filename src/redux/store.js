import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "./reducers/detailSlice";
import popularMoviesSlice from "./reducers/popularMoviesSlice";

import searchSlice from "./reducers/searchSlice";
import tvSlice from "./reducers/tvSlice";
import upcomingSlice from "./reducers/upcomingSlice";

export const store = configureStore({


  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware({
  //   thunk: {
  //     extraArgument: myCustomApiService,
  //   },
  //   serializableCheck: false,
  // }),

  reducer: {
    popularMovies: popularMoviesSlice,
    upcoming: upcomingSlice,
    popularTvs: tvSlice,

    detail: detailSlice,
    search: searchSlice,
  },
});


