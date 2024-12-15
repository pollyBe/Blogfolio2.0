import { useNavigate } from 'react-router-dom'
import style from './SuccessForm.module.scss'
import Button from '../../ui-components/Button/Button'

const SuccessForm = () => {
  const navigate = useNavigate()
  return (
    <div className={style.formWrap}>
    <div className={style.textWrap}>
      <p>Email confirmed.<br/>
      Your registration is now completed</p>
    </div>
    <Button type='button' text='Go To Home' onClick={()=>navigate('/')} />
  </div>)
}
export default SuccessForm