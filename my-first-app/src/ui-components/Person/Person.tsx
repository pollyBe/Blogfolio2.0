import style from './Person.module.scss'
// import User from '../../assets/user.svg?react'
// import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo } from 'react'
import { getUserData } from '../../store/userMeSlice'


const Person = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector((state:any) => state.signIn);
  const { userInfo } = useSelector((state:any) => state.userMe)

  useEffect(()=>{
    if (auth) dispatch(getUserData())
  },[auth])
  const userName = userInfo?.username || '';
  console.log(userInfo.username)
  const initials = useMemo(()=>
  {
    return userName.split(' ').map((item:any)=>{return item[0]}).join('')
  }, [userName])

  return (
    <div className={style.person}>
        <div >
          <div className={style.initials}>
            <span>{initials}</span>
          </div>
          <div className={style.username}>
            <span>{userName}</span>
          </div>
        </div>
    </div>
  )
}

export default Person