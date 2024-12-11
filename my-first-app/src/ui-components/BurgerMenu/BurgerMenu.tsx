import  Menu  from "../../assets/menuIcon.svg?react";
import  Cancel  from "../../assets/cancelIcon.svg?react";
import { useContext } from "react";
import { ActiveContext } from "../../Context/Context";


import style from './BurgerMenu.module.scss'
const BurgerMenu = () => {
  const context = useContext(ActiveContext);
  return (
    <div className={style.btnWrap}>
    <button onClick={() => context?.SetIsActive(!context.isActive)} className={style.burgerBtn}>
      {!context?.isActive ? <Menu /> : <Cancel />}
      </button>
    </div>
  );
};
export default BurgerMenu;
