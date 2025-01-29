import { useDispatch } from "react-redux";
import LikeBtnGroup from "../../LikeBtnGroup/LikeBtnGroup"
import SaveBtnGroup from "../../SaveBtnGroup/SaveBtnGroup"

import style from './CardSizeS.module.scss'
import { useCallback } from "react";
import { setSelectedImage, showPopup } from "../../../store/postSliceRTK";

interface IProps {
  date: string,
  title: string,
  image?: string,
  onClick: () => void,
}

const CardSizeS = ({ date, title, image, onClick }: IProps) => {
  const dispatch = useDispatch();

  const handleImageClick = useCallback(() => {
    if (image) {
      dispatch(setSelectedImage(image));
      dispatch(showPopup());
    }
  }, [dispatch, image]);

 const { cardSizeS, cardWrap, infoWrap, dateWrap, cardTitle, imgWrap, postFooter } = style;

return (<li className={cardSizeS} >
  <div className={cardWrap}>
  <div className={infoWrap}>
    <div className={dateWrap}>
        <p>{date}</p>
    </div>
      <h3 className={cardTitle} onClick={onClick}>{title.substring(0, 150)} ...</h3>
    </div>
    <div className={imgWrap} onClick={handleImageClick}>
      <img src={image} alt="Post Image"/>
    </div>
  </div>
  <div className={postFooter}>
  <LikeBtnGroup/>
  <SaveBtnGroup/>
  </div>
  </li>)
}

export default CardSizeS