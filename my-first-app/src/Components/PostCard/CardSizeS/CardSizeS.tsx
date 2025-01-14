import LikeBtnGroup from "../../LikeBtnGroup/LikeBtnGroup"
import SaveBtnGroup from "../../SaveBtnGroup/SaveBtnGroup"

import style from './CardSizeS.module.scss'

interface IProps {
  date: string,
  title: string,
  image?: string,
  onClick: () => void,
}

const CardSizeS = ({ date, title, image, onClick }: IProps) => {

 const { cardSizeS, cardWrap, infoWrap, dateWrap, cardTitle, imgWrap, postFooter } = style;

return (<li className={cardSizeS} >
  <div className={cardWrap}>
  <div className={infoWrap}>
    <div className={dateWrap}>
        <p>{date}</p>
    </div>
      <h3 className={cardTitle}>{title.substring(0, 150)} ...</h3>
    </div>
    <div className={imgWrap} onClick={onClick}>
      <img src={image} />
    </div>
  </div>
  <div className={postFooter}>
  <LikeBtnGroup/>
  <SaveBtnGroup/>
  </div>
  </li>)
}

export default CardSizeS