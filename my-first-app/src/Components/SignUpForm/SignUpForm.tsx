import { useState } from "react";
import Button from "../../ui-components/Button/Button";
import Input from "../../ui-components/Input/Input";

import style from "./SignUpForm.module.scss";
import { NavLink } from "react-router-dom";
const SignUpForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(formValue);
  return (
    <div className={style.formWrap}>
      <form className={style.form}>
        <Input
          type="text"
          placeholder="Your name"
          title="Name"
          onChange={(value) => setFormValue({ ...formValue, name: value })}
        />
        <Input type="e-mail" placeholder="Your email" title="Email" />
        <Input type="password" placeholder="Your password" title="Password" />
        <Input
          type="confirmPassword"
          placeholder="Confirm password"
          title="Confirm password"
        />
        <Button text = 'Sign Up' type='submit'/>
        <div className={style.formFooter}>
          <p>Already have an account?</p>
          <NavLink to="/sign-in">Sign in</NavLink>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;
