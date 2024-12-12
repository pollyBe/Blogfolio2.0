import { NavLink } from "react-router-dom"
import Button from "../../ui-components/Button/Button"
import Input from "../../ui-components/Input/Input"

import style from './SignInForm.module.scss'

const SignInForm = () => {
  return (
    <div className={style.formWrap}>
    <form className={style.form}>
      <Input type="e-mail" placeholder="Your email" title="Email" />
      <Input type="password" placeholder="Your password" title="Password" />
      <a className={style.link} href='#'>Forgot password?</a>
      <Button text = 'Sign In' type='submit'/>
      <div className={style.formFooter}>
        <p>Don’t have an account?</p>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </div>
    </form>
  </div>
  )
}
export default SignInForm