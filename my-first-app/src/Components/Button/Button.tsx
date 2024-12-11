// import { useState } from "react"
import style from "./Button.module.scss";

interface IProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  btnType?: "Primary" | "Secondary" | "Secondary 2";
  onClick?: () => void;
}

const Button = ({ isDisabled, children, btnType, onClick }: IProps) => {
  return (
    <div className={style.buttonWrap}>
      <button
        disabled={isDisabled}
        onClick={onClick}
        className={
          btnType === "Secondary"
            ? `button ${style.secondary}`
            : btnType === "Secondary 2"
            ? `button ${style.secondary2}`
            : `button ${style.button}`
        }
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
