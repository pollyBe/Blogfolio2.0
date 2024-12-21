import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import isActiveSlice from "./isActiveSlice";
import { thunk } from "redux-thunk";
import postSliceRTK from "./postSliceRTK";
import signInSlice from "./signInSlice";
import userMeSlice from "./userMeSlice";

export default configureStore({
  reducer: {
    themeInStoreConfiguration: themeSlice,
    isActive: isActiveSlice,
    posts: postSliceRTK,
    signIn: signInSlice,
    userMe: userMeSlice,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(thunk);
  },
});
