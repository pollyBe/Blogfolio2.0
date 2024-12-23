import { useDispatch, useSelector } from "react-redux";
import { switchIsActive } from "../../store/isActiveSlice";
import BurgerMenu from "../../ui-components/BurgerMenu/BurgerMenu";
import Person from "../../ui-components/Person/Person";
import Search from "../Search/Search";
import User from '../../assets/user.svg?react'

import style from './Header.module.scss'
import { NavLink } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector((state:any) => state.signIn);

  return (
    <div className={style.header}>
      <BurgerMenu />
      <div className={style.right}>
        <Search/>
        {auth ? <Person /> : <NavLink onClick={() => dispatch(switchIsActive(false))} to='/sign-in'><User /></NavLink>}
      </div>
    </div>
  );
};
export default Header;
