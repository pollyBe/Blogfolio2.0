// import { useState } from "react"
import style from "./Button.module.scss";

interface IProps {
  text:string,
  isDisabled?: boolean;
  btnType?: "Primary" | "Secondary" | "Secondary2";
  onClick?: () => void;
  type:"submit" | "reset" | "button",
}

const Button = ({ isDisabled, text, btnType, onClick, type }: IProps) => {
  return (
    <div className={style.buttonWrap}>
      <button
        disabled={isDisabled}
        onClick={onClick}
        type = {type}
        className={
          btnType === "Secondary"
            ? `button ${style.secondary}`
            : btnType === "Secondary2"
            ? `button ${style.secondary2}`
            : `button ${style.button}`
        }
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
