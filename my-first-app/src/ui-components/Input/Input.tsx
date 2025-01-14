import { useState, useEffect } from "react";
import style from "./Input.module.scss";

interface IInputProps {
  title?: string,
  placeholder: string,
  type: "text" | "email" | "password" | "confirmPassword" | "course_group",
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  name: string,
  value?: string,
}

const Input = ({ title, placeholder, type, onChange, name, value }: IInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (type === 'confirmPassword' && value !== undefined) {
      console.log('here')
      setIsError(value !== '');
    }
  }, [value]);

  return (
    <div className={style.inputWrap}>
      <label className={style.label}>{title}</label>
      <input
        name={name}
        className={`${style.inputBox} ${isError ? style.error : ""}`}
        type={type === "confirmPassword" ? "password" : type}
        placeholder={isFocused ? "" : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        value={value}
      />
      {isError && type === "confirmPassword" && (
        <p className={style.errorText}>Passwords doesn't match</p>
      )}
    </div>
  );
};

export default Input;

