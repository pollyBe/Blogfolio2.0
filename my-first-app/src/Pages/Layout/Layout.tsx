import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { ActiveContext } from "../../Context/Context";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";

const Layout = () => {
  const [active, setActive] = useState(false);
  const { theme } = useSelector((state)=>state.themeInStoreConfiguration)

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);
  return (
    <ActiveContext.Provider
      value={{ isActive: active, SetIsActive: setActive }}
    >
        <Header />
        <Navbar />
        <Outlet />
        <Footer/>
    </ActiveContext.Provider>
  );
};
export default Layout;
