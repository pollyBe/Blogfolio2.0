import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createPost = createAsyncThunk("posts/create", async () => {
  try {
  } catch (error) {}
});
const CreatePostSlice = createSlice({
  name: "createPosts",
  initialState: {
    post: {},
  },
  reducers: {},
});
export default CreatePostSlice.reducer;
