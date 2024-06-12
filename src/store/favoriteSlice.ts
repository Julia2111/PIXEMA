import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../Types/Types";

const initialState = {
  favoritePosts: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavoritePost(state, action: PayloadAction<ICard>) {
      const existingPost = state.favoritePosts.find(
        (post: { id: string }) => post.id === action.payload.id
      );
      if (!existingPost) {
        state.favoritePosts.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favoritePosts));
      }
    },
  },
});

export const { addFavoritePost } = favoritesSlice.actions;
export default favoritesSlice.reducer;
