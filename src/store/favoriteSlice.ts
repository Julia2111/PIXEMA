import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../Types/Types";

interface FavoritesState {
  favoritePosts: ICard[];
}

const initialState: FavoritesState = {
  favoritePosts: [],
};

const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavoritePost(state, action: PayloadAction<ICard>) {
      const existingPost = state.favoritePosts.find(
        (post) => post.id === action.payload.id
      );
      if (!existingPost) {
        state.favoritePosts.push(action.payload);
      }
    },
  },
});

export const { addFavoritePost } = favoritesSlice.actions;
export default favoritesSlice.reducer;
