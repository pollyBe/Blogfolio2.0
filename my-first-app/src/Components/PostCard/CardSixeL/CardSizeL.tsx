import { memo, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import LikeBtnGroup from "../../LikeBtnGroup/LikeBtnGroup";
import SaveBtnGroup from "../../SaveBtnGroup/SaveBtnGroup";
import style from './CardSizeL.module.scss';
import { setSelectedImage, showPopup } from '../../../store/postSliceRTK';

interface IProps {
  date: string,
  title: string,
  description: string,
  image?: string,
  onClick: () => void,
}

const CardSizeL = ({ date, title, description, image, onClick }: IProps) => {
  const dispatch = useDispatch();

  const handleImageClick = useCallback(() => {
    if (image) {
      dispatch(setSelectedImage(image));
      dispatch(showPopup());
    }
  }, [dispatch, image]);

  return (
    <li className={style.cardSizeL}>
      <div className={style.cardWrap}>
        <div className={style.infoWrap}>
          <div className={style.dateWrap}>
            <p>{date}</p>
          </div>
          <h3 className={style.titleWrap} onClick={onClick}>
            {title.substring(0, 150)} ...
          </h3>
          <div className={style.descriptionWrap}>
            <p>{description.substring(0, 300)} ...</p>
          </div>
        </div>
        <div className={style.imgWrap} onClick={handleImageClick}>
          <img src={image} alt="Post Image" />
        </div>
      </div>
      <div className={style.postFooter}>
        <LikeBtnGroup />
        <SaveBtnGroup />
      </div>
    </li>
  );
};

export default memo(CardSizeL);
