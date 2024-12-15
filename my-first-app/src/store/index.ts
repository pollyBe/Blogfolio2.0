import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import isActiveSlice from "./isActiveSlice";
import postsSlice from "./postSlice";

export default configureStore({
  reducer: {
    themeInStoreConfiguration: themeSlice,
    isActive: isActiveSlice,
    posts: postsSlice,
  },
});
