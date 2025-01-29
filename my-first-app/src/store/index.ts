import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import isActiveSlice from "./isActiveSlice";
import postSliceRTK from "./postSliceRTK";
import signInSlice from "./signInSlice";
import userMeSlice from "./userMeSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    isActive: isActiveSlice,
    posts: postSliceRTK,
    signIn: signInSlice,
    userMe: userMeSlice,
    user: userSlice,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat();
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;