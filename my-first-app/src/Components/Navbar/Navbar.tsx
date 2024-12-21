import { NavLink, useLocation, useNavigate } from "react-router-dom";

import Button from "../../ui-components/Button/Button";
import Person from "../../ui-components/Person/Person";
import Light  from "../../assets/light.svg?react";
import Dark from "../../assets/dark.svg?react";

import style from './Navbar.module.scss'
import styles from "./Navbar.module.scss";
import { switchTheme } from "../../store/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { switchIsActive } from "../../store/isActiveSlice";
import { stopTokenUpdate } from "../../store/signInSlice";


const Navbar = () => {
  const { theme } = useSelector((state:any) => state.themeInStoreConfiguration)
  const { isActive } = useSelector((state:any) => state.isActive)
  const dispatch = useDispatch()
  const { auth } = useSelector((state:any) => state.signIn);
  const navigate = useNavigate()
  const location = useLocation()

  const myClass = () => ({ isActive }:any) => isActive ? style.linkActive : style.link;
  const closeNavBar = () => dispatch(switchIsActive(false))
  const signInHandler = () => {
    navigate("/sign-in", { state: { from: location } });
    closeNavBar();
  };
  return (
    <div
      className={
        !isActive ? styles.navbar : `${styles.navbar} ${styles.active}`
      }
    >{auth? <div>
      <Person />
    </div> : null}

      <div className={style.links}>
        <NavLink onClick={closeNavBar}
          className={myClass()}
          to="/"
        >Home</NavLink>
        <NavLink onClick={closeNavBar}
          className={myClass()}
          to="/about">About us</NavLink>
      </div>
      <div className={style.navbarFooter}>
      <div className = {style.btnWrap}>
          <button onClick={() =>
            dispatch(switchTheme('light'))
          } className={theme == 'light' ? `${style.modeBtnLight} ${style.disabled}` : style.modeBtnLight}>
            <Light className={style.icon} />
        </button>
        <button onClick={()=>dispatch(switchTheme('dark'))} className = {theme == 'dark' ? `${style.modeBtnDark} ${style.disabled}` : style.modeBtnDark}>
        <Dark className={style.icon}/>
        </button>
        </div>
        {auth ? (
          <Button btnType="Secondary" text='Log Out' type='button' onClick={() => dispatch(stopTokenUpdate())} />
        ) : (
          <Button btnType="Secondary" text='Sign In' type='button' onClick={signInHandler} />
        )}
      </div>
    </div>
  );
};
export default Navbar;
