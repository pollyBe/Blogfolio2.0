import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedImage, hidePopup } from '../../store/postSliceRTK';
import style from './Popup.module.scss';
import { useEffect, useState } from 'react';

import Prev from '../../assets/Icon-Arrow-Prev.svg?react'
import Next from '../../assets/Icon-Arrow-Next.svg?react'

const Popup = ({ images }) => {
  const dispatch = useDispatch();

  const selectedImage = useSelector((state:any) => state.posts.selectedImage);
  const isPopupVisible = useSelector((state:any) => state.posts.isPopupVisible);

  useEffect(() => {
    if (selectedImage && Array.isArray(images)) {
      setCurrentIndex(images.findIndex(image => image === selectedImage));
    }
  }, [selectedImage, images]);

  const [currentIndex, setCurrentIndex] = useState(images.findIndex(image => image === selectedImage));

  const handleClose = () => {
    dispatch(clearSelectedImage());
    dispatch(hidePopup());
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex:number) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex:number) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!isPopupVisible) {
    return null;
  }

  return (
    <div className={style.popup}>
      <div className={style.overlay} onClick={handleClose}></div>
      <div className={style.popupContent}>
        <button className={style.closeButton} onClick={handleClose}>X</button>
        <img src={images[currentIndex]} alt="Popup" />
        <div className={style.buttonsWrap}>
          <button className={style.prevButton} onClick={handlePrev}>
            <Prev className={style.icon} /> Prev
          </button>
          <button className={style.nextButton} onClick={handleNext}>
            Next <Next className={style.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
