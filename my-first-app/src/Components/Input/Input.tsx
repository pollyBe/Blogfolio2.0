import { useState } from "react";
import style from "./Input.module.scss";

interface IInputProps {
  title?: string;
  placeholder: string;
  type: "text" | "e-mail" | "password" | "confirmPassword";
  onChange?: (value: string) => void;
}

const Input = ({ title, placeholder, type, onChange }: IInputProps) => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);

  const inputIsValid = (value: string) => {
    if (type === "text") {
      return value.trim().length > 0;
    }
    if (type === "e-mail") {
      const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailCheck.test(value);
    }
    if (type === "password") {
      return value.length >= 7;
    }
    return true;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    onChange?.(value);
    setIsError(!inputIsValid(value));
  };

  return (
    <div className={style.inputWrap}>
      <label className={style.label}>{title}</label>
      <input
        className={`${style.inputBox} ${isError ? style.error : ""}`}
        type={type}
        value={text}
        placeholder={isFocused ? "" : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
