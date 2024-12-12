import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import isActiveSlice from "./isActiveSlice";

export default configureStore({
  reducer: {
    themeInStoreConfiguration: themeSlice,
    isActive: isActiveSlice,
  },
});
