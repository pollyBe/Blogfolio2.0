import { useDispatch } from 'react-redux';
import LikeBtnGroup from '../../LikeBtnGroup/LikeBtnGroup';
import SaveBtnGroup from '../../SaveBtnGroup/SaveBtnGroup';
import style from './CardSizeM.module.scss'
import { useCallback } from 'react';
import { setSelectedImage, showPopup } from '../../../store/postSliceRTK';

interface IProps {
  date: string,
  title: string,
  image?: string,
  onClick: () => void,
}


const CardSizeM = ({ date, title, image, onClick }: IProps) => {
  const dispatch = useDispatch();

  const handleImageClick = useCallback(() => {
    if (image) {
      dispatch(setSelectedImage(image));
      dispatch(showPopup());
    }
  }, [dispatch, image]);
  const { cardSizeM, cardWrap, titleWrap, dateWrap, imgWrap, postFooter } = style;
   return (<li className={cardSizeM} >
    <div className={cardWrap}>
      <div className={imgWrap} onClick={handleImageClick}>
        <img src={image} alt="Post Image"/>
      </div>
      <div className={dateWrap}>
          <p>{date}</p>
      </div>
      <h3 className={titleWrap} onClick={onClick}>{title.substring(0, 50)} ...</h3>
    </div>
    <div className={postFooter}>
    <LikeBtnGroup/>
    <SaveBtnGroup/>
    </div>
  </li>);
}
export default CardSizeM