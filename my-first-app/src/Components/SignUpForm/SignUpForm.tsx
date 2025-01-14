import { useState } from "react";
import Button from "../../ui-components/Button/Button";
import Input from "../../ui-components/Input/Input";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../store/userSlice";

import style from "./SignUpForm.module.scss";

const SignUpForm = () => {
  const [isError, setIsError] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    username: "",
    email: "",
    password: "",
    course_group: '',
  });
  const dispatch = useDispatch();

  const formHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signUpUser(registrationData));
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value, 'password')
    setRegistrationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const confirmPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value,'confirm')
    setIsError(registrationData.password !== value);
  };

  return (
    <div className={style.formWrap}>
      <form className={style.form} onSubmit={formHandler}>
        <Input
          name='username'
          type="text"
          placeholder="Your name"
          title="Name"
          value={registrationData.username}
          onChange={inputHandler}
        />
        <Input
          name='email'
          type="email"
          value={registrationData.email}
          placeholder="Your email"
          onChange={inputHandler}
          title="Email" />
        <Input
          name='course_group'
          type="course_group"
          value={registrationData.course_group}
          placeholder="Course group"
          onChange={inputHandler}
          title="Course group" />
        <Input
          name='password'
          type="password"
          value={registrationData.password}
          placeholder="Your password"
          onChange={inputHandler}
          title="Password" />
        <Input
          name='confirmPassword'
          type="confirmPassword"
          placeholder="Confirm password"
          onChange={confirmPasswordHandler}
          title="Confirm password"
        />
        {isError && (
          <p className={style.errorText}>Passwords doesn't match</p>
        )}
        <Button text='Sign Up' type='submit' />
        <div className={style.formFooter}>
          <p>Already have an account?</p>
          <NavLink to="/sign-in">Sign in</NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
