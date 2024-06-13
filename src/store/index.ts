import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./favoriteSlice";
import paginationSlice from "./paginationSlice";
import MoviesSlice from "./MoviesSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: MoviesSlice,
    favorites: favoritesSlice,
    pagination: paginationSlice,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
