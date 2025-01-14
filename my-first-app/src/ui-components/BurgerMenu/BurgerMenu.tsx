import  Menu  from "../../assets/menuIcon.svg?react";
import  Cancel  from "../../assets/cancelIcon.svg?react";

import style from './BurgerMenu.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { switchIsActive } from "../../store/isActiveSlice";

const BurgerMenu = () => {
  const { isActive } = useSelector((state:any) => state.isActive)
  const dispatch = useDispatch()

  return (
    <div className={style.btnWrap}>
    <button onClick={() => dispatch(switchIsActive(isActive? false:true))} className={style.burgerBtn}>
      {!isActive ? <Menu /> : <Cancel />}
      </button>
    </div>
  );
};
export default BurgerMenu;
