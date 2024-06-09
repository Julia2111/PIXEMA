import { createSlice } from "@reduxjs/toolkit";
import { ICard } from "../Types/Types";

const favoritesSlice = createSlice({
  name: "favorite",
  initialState: {
    favoritePosts: [] as ICard[],
  },
  reducers: {
    addFavoritePost(
      state: { favoritePosts: ICard[] },
      action: {
        payload: { post: ICard };
        type: string;
      }
    ) {
      const uniquePosts = new Set([
        ...state.favoritePosts,
        action.payload.post,
      ]);
      state.favoritePosts = [...uniquePosts];
    },
  },
});

export const { addFavoritePost } = favoritesSlice.actions;
export default favoritesSlice.reducer;
