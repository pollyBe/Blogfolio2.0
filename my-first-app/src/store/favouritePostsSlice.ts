import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouritePosts: [],
  loading: false,
  error: null as string | null,
};

const favouritePostsSlice = createSlice({
  name: "favouritePosts",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const post = state.posts.find(post => post.id === action.payload);
      if (post) {
        post.isFavorite = !post.isFavorite; if (post.isFavorite) {
          state.favouritePosts.push(post);
        } else {
          state.favouritePosts = state.favouritePosts.filter(fav => fav.id !== action.payload);
        }
      }
    },,
  },
});

export const { addPost, removePost } = favouritePostsSlice.actions;
export default favouritePostsSlice.reducer;
