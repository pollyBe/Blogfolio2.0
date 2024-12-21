import { useState } from "react";
import Button from "../../ui-components/Button/Button";
import Input from "../../ui-components/Input/Input";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../store/userSlice";

import style from "./SignUpForm.module.scss";

const SignUpForm = () => {
  const navigate = useNavigate()
  const [isError, setIsError] = useState(false);
  const [registraionData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
    course_group: 14,
  });
  const dispatch = useDispatch();

  const formHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e?.preventDefault();
    dispatch(signUpUser(registraionData));
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegistrationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const passwordCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (registraionData.password !== e.target.value) {
      setIsError(true)
    }
  }

  return (
    <div className={style.formWrap}>
      <form className={style.form} onSubmit={formHandler}>
        <Input
          name='name'
          type="text"
          placeholder="Your name"
          title="Name"
          value={registraionData.name}
          onChange={inputHandler}
        />
        <Input
          name='email'
          type="e-mail"
          value={registraionData.email}
          placeholder="Your email"
          onChange={inputHandler}
          title="Email" />
        <Input
          name='password'
          type="password"
          value={registraionData.password}
          placeholder="Your password"
          onChange={inputHandler}
          title="Password" />
        <Input
          name='confirmPassword'
          type="confirmPassword"
          placeholder="Confirm password"
          title="Confirm password"
          onChange={passwordCheckHandler}
        />
        <Button text = 'Sign Up' type='submit' onClick={()=> navigate('/confirm')} />
        <div className={style.formFooter}>
          <p>Already have an account?</p>
          <NavLink to="/sign-in">Sign in</NavLink>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;
