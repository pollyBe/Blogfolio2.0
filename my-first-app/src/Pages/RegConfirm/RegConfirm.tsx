import { NavLink } from "react-router-dom"
import Title from "../../ui-components/Title/Title"
import style from './RegConfirm.module.scss'
import RegConfirmForm from "../../Components/RegConfirmForm/RegConfirmForm"

const RegConfirm = () => {
  return (
    <div>
    <div className={style.container}>
      <div className={style.titleWrap}>
        <NavLink to="/">Back to home</NavLink>
        <Title>Registration Confirmation</Title>
      </div>
      <RegConfirmForm email='example@gmail.com' />
    </div>
  </div>
  )
}
export default RegConfirm