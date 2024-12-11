import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { ActiveContext, ThemeContext } from "../../Сontext/Context";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";

const Layout = () => {
  const [active, setActive] = useState(false);
  const [pageTheme, setPageTheme] = useState("light");
  const toggleTheme = () => {
    setPageTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${pageTheme}-theme`);
  }, [pageTheme]);
  return (
    <ActiveContext.Provider
      value={{ isActive: active, SetIsActive: setActive }}
    >
      <ThemeContext.Provider
        value={{ theme: pageTheme, toggleTheme: toggleTheme }}
      >
        <Header />
        <Navbar />
        <Outlet />
        <div>footer</div>
      </ThemeContext.Provider>
    </ActiveContext.Provider>
  );
};
export default Layout;
