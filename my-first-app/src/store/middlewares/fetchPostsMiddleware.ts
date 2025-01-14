import { fetchPostFail, fetchPostStart, fetchPostSuccess } from "../postSlice";

export const fetchPostsMiddlware = (store) => (next) => async (action) => {
  if (action.type == "posts/fetchPosts") {
    store.dispatch(fetchPostStart());
    try {
      const responce = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/?author__course_group=14&limit=9"
      );
      if (!responce.ok) {
        throw new Error("error");
      }
      const data = await responce.json();
      store.dispatch(fetchPostSuccess(data.results));
    } catch (error) {
      store.dispatch(fetchPostFail(error.message));
    }
  }
  return next(action);
};
