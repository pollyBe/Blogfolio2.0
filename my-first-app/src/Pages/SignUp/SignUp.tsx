import { NavLink } from "react-router-dom"
import SignUpForm from "../../Components/SignUpForm/SignUpForm"

import style from './SignUp.module.scss'
const SignUp = () => {
  return (
    <div className={style.container}>
      <div className={style.titleWrap}>
        <NavLink to="/home">Back to home</NavLink>
        <h1>Sign Up</h1>
      </div>
      <SignUpForm/>
    </div>
  )
}
export default SignUp