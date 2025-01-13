import Save from '../../assets/Icon-Bookmark.svg?react'
import style from './SaveBtnGroup.module.scss'

const SaveBtnGroup = () => {
  return (<>
      <div className={style.btnWrap}>
        <button type='button'><Save className={style.icon}/></button>
        <button type='button'>...</button>
      </div>
  </>)
}
export default SaveBtnGroup