import { NavLink} from "react-router-dom"
import Title from "../../ui-components/Title/Title"
import SignInForm from "../../Components/SignInForm/SignInForm"


import style from './SignIn.module.scss'

const SignIn = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.titleWrap}>
          <NavLink to="/">Back to home</NavLink>
          <Title>Sign In</Title>
        </div>
        <SignInForm/>
      </div>
    </div>
  )
}
export default SignIn