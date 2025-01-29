import { createSlice } from "@reduxjs/toolkit";

const myPostsSlice = createSlice({
  name: "My Posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
    selectedPost: null,
  },
  reducers: {
    addpost(state, action) {
      state.posts = action.payload;
    },
    deletePost(state, action) {
      state.posts = action.payload;
    },
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

export const {
  addpost,
  deletePost,
  selectPost,
  fetchPostStart,
  fetchPostSuccess,
  fetchPostFail,
} = myPostsSlice.actions;
export default myPostsSlice;
