import { NavLink, useLocation, useNavigate} from "react-router-dom"
import Title from "../../ui-components/Title/Title"
import SignInForm from "../../Components/SignInForm/SignInForm"


import style from './SignIn.module.scss'
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { RootState } from "../../store"

const SignIn = () => {
  const { auth } = useSelector((state: RootState) => state.signIn);
  const { pathname } = (useLocation().state || { from: "/" }).from;
  const navigate = useNavigate();
    useEffect(() => {
    if (auth) {
      navigate(pathname, { replace: true });
    }
  }, [auth]);
  return (
    <div>
      <div className={style.container}>
        <div className={style.titleWrap}>
          <NavLink to="/">Back to home</NavLink>
          <Title title='Sign In'/>
        </div>
        <SignInForm/>
      </div>
    </div>
  )
}
export default SignIn