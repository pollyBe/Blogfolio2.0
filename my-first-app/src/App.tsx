import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import RegConfirm from "./Pages/RegConfirm/RegConfirm";
import Success from "./Pages/Success/Success";
import Post from "./Pages/Post/Post";
import MyPosts from "./Pages/MyPosts/myPosts";
import ProtectedRoute from "./Pages/ProtectedRote/ProtectedRote";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import SearchResults from "./Pages/SearchResults/SearchResults";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='/post' element={<Post />} />
          <Route path='/search-results' element={<SearchResults/>}/>
          <Route path='/my-posts' element={
            <ProtectedRoute><MyPosts /></ProtectedRoute>
            }
          />
          <Route path='/reset-password' element={<ResetPassword/>} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/confirm' element={<RegConfirm />} />
          <Route path='/success' element={<Success/>}/>
          <Route path="/about" element={<About />} />
          <Route path="activate/:uid/:token" element={<RegConfirm />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;