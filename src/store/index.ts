import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import favoritesSlice from "./favoriteSlice";
import paginationSlice from "./paginationSlice";

export default configureStore({
  reducer: {
    authReducer: authReducer,
    favorites: favoritesSlice,
    pagination: paginationSlice,
  },
});

export type AppStore = ReturnType<typeof configureStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
