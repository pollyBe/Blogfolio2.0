import { useState } from "react";
import style from "./Input.module.scss";

interface IInputProps {
  title?: string,
  placeholder: string,
  type: "text" | "email" | "password" | "confirmPassword",
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  name: string,
  value?: string,
}

const Input = ({ title, placeholder, type, onChange, name }: IInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className={style.inputWrap}>
      <label className={style.label}>{title}</label>
      <input
        name={name}
        className={`${style.inputBox} ${isError ? style.error : ""}`}
        type={type}
        placeholder={isFocused ? "" : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
      />{isError?(<p className={style.errorText}>Passwords does not match</p>):null}
    </div>
  );
};

export default Input;
