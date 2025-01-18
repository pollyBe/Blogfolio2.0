import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (objectFromPostsPage, { rejectWithValue }) => {
    const { limit, offset, searchQuery, ordering } = objectFromPostsPage;
    try {
      const responce = await fetch(
        `https://studapi.teachmeskills.by/blog/posts/?author__course_group=14&format=json&limit=${limit}&offset=${offset}&ordering=${ordering}&search=${searchQuery}`
      );
      if (!responce.ok) {
        throw new Error("error");
      }
      const data = await responce.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "error");
    }
  }
);
const postSliceRTK = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    totalItems: 0,
    currentPage: 1,
    itemsPerPage: 11,
    searchQuery: "",
    ordering: "",
    loading: false,
    error: null as string | null,
    selectedPost: null,
    isPopupVisible: false,
    selectedImage: null,
    isFavourite: false,
  },
  reducers: {
    selectPost(state, action) {
      console.log(action.payload);
      state.selectedPost = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setOrdering: (state, action) => {
      state.ordering = action.payload;
    },
    showPopup(state) {
      state.isPopupVisible = true;
    },
    hidePopup(state) {
      state.isPopupVisible = false;
    },
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    clearSelectedImage: (state) => {
      state.selectedImage = null;
    },
    setIsFavourite: (state, action) => {
      state.isFavourite = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.results;
        state.totalItems = action.payload.count;
      })
      .addCase(FetchPosts.rejected, (state, action) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        (state.loading = false), (state.error = action.payload as string);
      });
  },
});
export const {
  selectPost,
  setPage,
  setSearchQuery,
  setOrdering,
  setSelectedImage,
  clearSelectedImage,
  setIsFavourite,
  showPopup,
  hidePopup,
} = postSliceRTK.actions;
export default postSliceRTK.reducer;
