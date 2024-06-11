import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import favoritesSlice from "./favoriteSlice";
import paginationSlice from "./paginationSlice";
import MoviesSlice from "./MoviesSlice";
import trendsSlice from "./trendsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: MoviesSlice,
    favorites: favoritesSlice,
    pagination: paginationSlice,
    trends: trendsSlice,
    // ratingModal: ratingModalReducer,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
