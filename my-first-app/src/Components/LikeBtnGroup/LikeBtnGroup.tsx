import style from './LikeBtnGroup.module.scss';
import DisLike from '../../assets/Icon-Thumbs-Down.svg?react';
import Like from '../../assets/Icon-Thumbs-Up.svg?react'


const LikeBtnGroup = () => {
  return (<>
    <div className={style.btnWrap}>
          <button type="button"><Like className={style.icon} /></button>
          <button type="button"><DisLike className={style.icon} /></button>
      </div>
  </>)
}
export default LikeBtnGroup