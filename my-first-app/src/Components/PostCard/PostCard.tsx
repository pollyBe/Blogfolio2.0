import Like from '../../assets/Icon-Thumbs-Up.svg?react'
import DisLike from '../../assets/Icon-Thumbs-Down.svg?react'
import Save from '../../assets/Icon-Bookmark.svg?react'

import style from './PostCard.module.scss'

interface IProps {
  size: 'sizeL' | 'sizeM' | 'sizeS',
  date: string,
  title: string,
  description: string,
  image?: string,
  onClick: () => void,
}
const PostCard = ({ size, date, title, description, image, onClick }: IProps) => {

  switch (size) {
    case 'sizeL':
      return (<li className={style.cardSizeL} >
    <div className={style.cardWrap}>
      <div className={style.infoWrap}>
        <div className={style.date}>
          <p>{date}</p>
        </div>
        <h3 className={style.title} onClick={onClick}>{title.substring(0, 150)} ...</h3>
        <div className={style.description}>
          <p>{description.substring(0, 300)} ...</p>
        </div>
      </div>
      <div className={style.imgWrap}>
        <img src={image} />
      </div>
    </div>
    <div className={style.postFooter}>
      <div className={style.btnWrap}>
        <button type="button"><Like className={style.icon}/></button>
        <button type="button"><DisLike className={style.icon}/></button>
      </div>
      <div className={style.btnWrap}>
        <button type='button'><Save className={style.icon}/></button>
        <button type='button'>...</button>
      </div>
    </div>
  </li>);
  case 'sizeM':
    return (<li className={style.cardSizeM} >
      <div className={style.cardWrap}>
        <div className={style.imgWrap} onClick={onClick}>
          <img src={image} />
        </div>
        <div className={style.date}>
            <p>{date}</p>
        </div>
        <h3 className={style.title}>{title.substring(0, 50)} ...</h3>
      </div>
      <div className={style.postFooter}>
        <div className={style.btnWrap}>
          <button type="button"><Like className={style.icon} /></button>
          <button type="button"><DisLike className={style.icon} /></button>
        </div>
        <div className={style.btnWrap}>
          <button type='button'><Save className={style.icon}/></button>
          <button type='button'>...</button>
        </div>
      </div>
    </li>);
    case 'sizeS':
      return (<li className={style.cardSizeS} >
        <div className={style.cardWrap}>
        <div className={style.infoWrap}>
          <div className={style.date}>
              <p>{date}</p>
          </div>
            <h3 className={style.title}>{title.substring(0, 150)} ...</h3>
          </div>
          <div className={style.imgWrap} onClick={onClick}>
            <img src={image} />
          </div>
        </div>
        <div className={style.postFooter}>
          <div className={style.btnWrap}>
            <button type="button"><Like className={style.icon}/></button>
            <button type="button"><DisLike className={style.icon}/></button>
          </div>
          <div className={style.btnWrap}>
            <button type='button'><Save className={style.icon}/></button>
            <button type='button'>...</button>
          </div>
        </div>
      </li>);
  }
}
export default PostCard