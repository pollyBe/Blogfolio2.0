import style from './PostCard.module.scss'
import LikeBtnGroup from '../LikeBtnGroup/LikeBtnGroup'
import SaveBtnGroup from '../SaveBtnGroup/SaveBtnGroup'
import CardSizeS from './CardSizeS/CardSizeS';

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
    <LikeBtnGroup/>
    <SaveBtnGroup/>
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
      <LikeBtnGroup/>
      <SaveBtnGroup/>
      </div>
    </li>);
    case 'sizeS':
      return <CardSizeS/>;
  }
}
export default PostCard