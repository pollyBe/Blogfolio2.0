// import { useMemo, useState } from "react"
import style from './Person.module.scss'
// import Button from "../Button/Button"
import User from '../../assets/user.svg?react'
import { NavLink } from "react-router-dom"

// interface IProps {
//   userName: string,
// }

const Person = () => {
  // const [authorized, setAuthorized] = useState(false)
  // const initials = useMemo(()=>
  // {
  //   return userName.split(' ').map((item)=>{return item[0]}).join('')
  // },[userName])
  return (
    <div className={style.person}>
      {/* {authorized ?
        <div >
          <div className={style.initials}>
            <span>{ initials}</span>
          </div>
          <div className={style.username}>
            <span>{ userName}</span>
          </div>
        </div> : */}
        <NavLink to='/home/sign-up'><User /></NavLink>
    </div>
  )
}

export default Person