// import Button from "../Button/Button"
import SearchIcon from '../../assets/search.svg?react'
import style from './Search.module.scss'
import { useState } from "react"

const Search = () => {

  const [visibility, setVisibility] = useState(false)

  return (
    <div className={style.searchwrap}>
      <input type='search' placeholder="Search..." className={visibility ? style.inputBox : style.hide} />
      <div className={style.buttonWrap}>
      <button className={style.button} onClick={()=>setVisibility(!visibility)}><SearchIcon/></button></div>
    </div>
  )
}
export default Search