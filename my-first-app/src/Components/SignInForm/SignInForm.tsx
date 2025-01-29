import { Link, useLocation, useNavigate } from "react-router-dom"
import Button from "../../ui-components/Button/Button"
import Input from "../../ui-components/Input/Input"

import style from './SignInForm.module.scss'
import { useDispatch, useSelector} from "react-redux"
import { signInUser } from "../../store/signInSlice"
import { useEffect, useState } from "react"
import { RootState } from "../../store"

interface ILogin {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [loginData, setLoginData] = useState<ILogin>({
    email: "",
    password: "",
  });
  const { pathname } = (useLocation().state || { from: "/" }).from;
  const { auth } = useSelector((state:RootState) => state.signIn);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const formHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signInUser(loginData));
  };
  useEffect(() => {
    if (auth) {
      navigate(pathname, { replace: true });
    }
  }, [auth]);
  return (
    <div className={style.formWrap}>
    <form className={style.form} onSubmit={formHandler}>
        <Input
          name='email'
          type="email"
          placeholder="Your email"
          title="Email"
          onChange={inputHandler}
        />
        <Input
          name='password'
          type="password"
          placeholder="Your password"
          title="Password"
          onChange={inputHandler}
        />
      <Link to='/reset-password' className={style.link} >Forgot password?</Link>
      <Button text = 'Sign In' type='submit'/>
      <div className={style.formFooter}>
        <p>Don’t have an account?</p>
        <Link to="/sign-up" state={(useLocation().state || { from: "/" })}>Sign Up</Link>
      </div>
    </form>
  </div>
  )
}
export default SignInForm