import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    selectedPost: null,
  },
  reducers: {
    selectPost(state, action) {
      state.selectedPost = action.payload;
    },
    clearPost(state) {
      state.selectedPost = null;
    },
    setPost(state, action) {
      state.posts = action.payload;
    },
  },
});

export const { selectPost, clearPost, setPost } = postsSlice.actions;
export default postsSlice.reducer;
