import { NavLink } from "react-router-dom"
import Title from "../../ui-components/Title/Title"

import style from './Success.module.scss'
import SuccessForm from "../../Components/SuccessForm/SuccessForm"

const Success = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.titleWrap}>
          <NavLink to="/">Back to home</NavLink>
          <Title>Success</Title>
        </div>
        <SuccessForm />
      </div>
    </>
  )
}
export default Success