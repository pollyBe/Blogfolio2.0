// import { useState } from "react";
import BurgerMenu from "../../ui-components/BurgerMenu/BurgerMenu";
import Person from "../Person/Person";
import Search from "../Search/Search";

import style from './Header.module.scss'

const Header = () => {

  return (
    <div className={style.header}>
      <BurgerMenu />
      <div className={style.right}>
        <Search/>
        <Person />
      </div>
    </div>
  );
};
export default Header;
