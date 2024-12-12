import { useContext } from "react";
import { NavLink } from "react-router-dom";

import Button from "../../ui-components/Button/Button";
import Person from "../../ui-components/Person/Person";

import Light  from "../../assets/light.svg?react";
import Dark from "../../assets/dark.svg?react";
import { ActiveContext } from "../../Context/Context";

import style from './Navbar.module.scss'
import styles from "./Navbar.module.scss";
import { switchTheme } from "../../store/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const context = useContext(ActiveContext);
  const { theme } = useSelector((state)=>state.themeInStoreConfiguration)
  const dispatch = useDispatch()

  return (
    <div
      className={
        !context?.isActive ? styles.navbar : `${styles.navbar} ${styles.active}`
      }
    >
      <div>
        <Person />
      </div>
      <div className={style.links}>
        <NavLink
          className={({ isActive }) => isActive ? style.linkActive : style.link}
          to="/"
        >Home</NavLink>
        <NavLink
          className={({ isActive }) => isActive ? style.linkActive : style.link}
          to="/about">About us</NavLink>
      </div>
      <div className={style.navbarFooter}>
      <div className = {style.btnWrap}>
          <button onClick={() =>
            dispatch(switchTheme('light'))
          } className={theme == 'light' ? `${style.modeBtnLight} ${style.disabled}` : style.modeBtnLight}>
        <Light />
        </button>
        <button onClick={()=>dispatch(switchTheme('dark'))} className = {theme == 'dark' ? `${style.modeBtnDark} ${style.disabled}` : style.modeBtnDark}>
        <Dark />
        </button>
      </div>
      <Button btnType="Secondary" text = 'Log Out' type='button'/>
      </div>
    </div>
  );
};
export default Navbar;
