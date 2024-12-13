import { useNavigate } from 'react-router-dom'
import style from './RegConfirmForm.module.scss'
import Button from '../../ui-components/Button/Button'

interface IProps{
  email:string,
}

const RegConfirmForm = ({email}:IProps) => {
 const navigate = useNavigate()
  return (<div className={style.formWrap}>
    <div className={style.textWrap}>
      <p>Please activate your account with the activation
      link in the email <a href='#'>{email}</a>.<br/>Please, check your email</p>
    </div>
    <Button type='button' text='Back To Home' onClick={()=>navigate('/')} />
  </div>)
}
export default RegConfirmForm