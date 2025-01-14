import { useNavigate, useParams } from 'react-router-dom'
import style from './RegConfirmForm.module.scss'
import Button from '../../ui-components/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { activateUser } from '../../store/userSlice'

interface IProps{
  email:string,
}

const RegConfirmForm = ({ email }: IProps) => {

  const navigate = useNavigate()
  const data = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(activateUser(data));
  }, []);
  return (<div className={style.formWrap}>
    <div className={style.textWrap}>
      <p>Please activate your account with the activation
      link in the email <a href='#'>{email}</a>.<br/>Please, check your email</p>
    </div>
    <Button type='button' text='Back To Home' onClick={()=>navigate('/')} />
  </div>)
}
export default RegConfirmForm