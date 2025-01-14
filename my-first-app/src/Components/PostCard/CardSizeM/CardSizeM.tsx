import LikeBtnGroup from '../../LikeBtnGroup/LikeBtnGroup';
import SaveBtnGroup from '../../SaveBtnGroup/SaveBtnGroup';
import style from './CardSizeM.module.scss'

interface IProps {
  date: string,
  title: string,
  image?: string,
  onClick: () => void,
}


const CardSizeM = ({ date, title, image, onClick }: IProps) => {
  const { cardSizeM, cardWrap, titleWrap, dateWrap, imgWrap, postFooter } = style;
   return (<li className={cardSizeM} >
    <div className={cardWrap}>
      <div className={imgWrap} onClick={onClick}>
        <img src={image} />
      </div>
      <div className={dateWrap}>
          <p>{date}</p>
      </div>
      <h3 className={titleWrap}>{title.substring(0, 50)} ...</h3>
    </div>
    <div className={postFooter}>
    <LikeBtnGroup/>
    <SaveBtnGroup/>
    </div>
  </li>);
}
export default CardSizeM