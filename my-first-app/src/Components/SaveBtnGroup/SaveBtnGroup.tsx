import { useDispatch, useSelector } from 'react-redux';
import Save from '../../assets/Icon-Bookmark.svg?react';
import style from './SaveBtnGroup.module.scss';
import { useEffect, useState } from 'react';
import { toggleFavorite } from '../../store/postSliceRTK';

interface SaveBtnGroupProps {
  postId: number;
}

const SaveBtnGroup: React.FC<SaveBtnGroupProps> = ({ postId }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state: any) =>
    state.posts.posts.find(post => post.id === postId)?.isFavorite
  );
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setAdded(isFavorite || false);
  }, [isFavorite]);

  const toggleFavourite=()=> {
    dispatch(toggleFavorite(postId));
    setAdded(true || false);
  }

  return (
    <div className={style.btnWrap}>
      <button type="button" onClick={toggleFavourite}>
        <Save className={!added ? style.icon : style.iconBlack} />
      </button>
      <button type="button">...</button>
    </div>
  );
};

export default SaveBtnGroup;
