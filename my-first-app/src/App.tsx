import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path = '/home/sign-up' element = {<SignUp/>}/>
          <Route path ="/about" element = {<About/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;