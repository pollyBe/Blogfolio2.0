import { NavLink } from "react-router-dom"
import SignUpForm from "../../Components/SignUpForm/SignUpForm"

import style from './SignUp.module.scss'
import Title from "../../ui-components/Title/Title"
const SignUp = () => {
  return (
    <div className={style.container}>
      <div className={style.titleWrap}>
        <NavLink to="/">Back to home</NavLink>
        <Title title='Sign Up'/>
      </div>
      <SignUpForm/>
    </div>
  )
}
export default SignUp