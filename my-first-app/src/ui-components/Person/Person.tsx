import style from './Person.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo } from 'react'
import { getUserData } from '../../store/userMeSlice'


const Person = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector((state:any) => state.signIn);
  const { username } = useSelector((state:any) => state.userMe.userInfo)

  useEffect(()=>{
    if (auth) dispatch(getUserData())
  },[auth])
  const initials = useMemo(()=>
  {
    return username.split(' ').map((item:any)=>{return item[0]}).join('')
  }, [username])

  return (
    <div className={style.person}>
          <div className={style.initials}>
            <span>{initials}</span>
          </div>
          <div className={style.username}>
            <span>{username}</span>
          </div>
    </div>
  )
}

export default Person