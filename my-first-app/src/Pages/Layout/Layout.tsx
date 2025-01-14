import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";

const Layout = () => {
  const { theme } = useSelector((state: any) => state.theme)
  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);
  return (
    <>
        <Header />
        <Navbar />
        <Outlet />
        <Footer/>
    </>
  );
};
export default Layout;
