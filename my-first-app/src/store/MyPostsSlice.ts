import { createSlice } from "@reduxjs/toolkit";

const MyPostsSlice = createSlice({
  name: "My Posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
    selectedPost: null,
  },
  reducers: {
    selectPost(state, action) {
      state.selectedPost = action.payload;
    },
    fetchPostStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPostSuccess(state, action) {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchPostFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
