import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Light  from "../../assets/light.svg?react";
import Dark from "../../assets/dark.svg?react";
import { ActiveContext, ThemeContext } from "../../Сontext/Context";
import style from './Navbar.module.scss'

import styles from "./Navbar.module.scss";
import Button from "../Button/Button";
import Person from "../Person/Person";
const Navbar = () => {
  const context = useContext(ActiveContext);
  const theme = useContext(ThemeContext);
  console.log(theme?.theme);

  return (
    <div
      className={
        !context?.isActive ? styles.navbar : `${styles.navbar} ${styles.active}`
      }
    >
      <Person />
      <div className={style.links}>
        <NavLink
          className={({ isActive }) => isActive ? style.linkActive : style.link}
          to="/home"
        >Home</NavLink>
        <NavLink
          className={({ isActive }) => isActive ? style.linkActive : style.link}
          to="/about">About us</NavLink>
      </div>
      <div className={style.navbarFooter}>
      <div className = {style.btnWrap}>
      <button onClick={theme?.toggleTheme} className = {style.modeBtn}>
        <Light />
        </button>
        <button onClick={theme?.toggleTheme} className = {style.modeBtn}>
        <Dark />
        </button>
      </div>
      <Button btnType="Secondary">Log Out</Button>
      </div>
    </div>
  );
};
export default Navbar;
