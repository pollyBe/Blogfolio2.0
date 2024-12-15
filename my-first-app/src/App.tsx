import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import RegConfirm from "./Pages/RegConfirm/RegConfirm";
import Posts from "./Pages/Posts/Posts";
import Success from "./Pages/Success/Success";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path = 'posts' element = {<Posts/>}/>
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/confirm' element={<RegConfirm />} />
          <Route path='/success' element={<Success/>}/>
          <Route path ="/about" element = {<About/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;