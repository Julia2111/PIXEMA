import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import favoritesSlice from "./favoriteSlice";
import paginationSlice from "./paginationSlice";
import MoviesSlice from "./MoviesSlice";
import trendsSlice from "./trendsSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: MoviesSlice,
    favorites: favoritesSlice,
    pagination: paginationSlice,
    trends: trendsSlice,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
