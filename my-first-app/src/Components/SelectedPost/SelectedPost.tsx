import { NavLink } from "react-router-dom"
import Save from '../../assets/Icon-Bookmark.svg?react'

import style from './SelectedPost.module.scss'
import LikeBtnGroup from "../LikeBtnGroup/LikeBtnGroup"

interface IPost{
  id: number,
  title: string,
  img: string,
  description: string,
}

const SelectedPost = ({id, title, img, description}:IPost) => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.nav}>
          <NavLink to='/'>Home</NavLink>
          <p>Post {id}</p>
        </div>
        <h1>{title}</h1>
        <div className={style.post}>
          <div className={style.imgWrap}>
            <img src={img} alt="#" />
          </div>
          <p>{description}</p>
          <div className={style.postFooter}>
            <LikeBtnGroup/>
            <div className={style.btnWrap}>
            <button type='button'><Save className={style.icon}/> Add to Favourites</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SelectedPost