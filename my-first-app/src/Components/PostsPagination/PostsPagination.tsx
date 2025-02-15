import style from './PostsPagination.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import {  setPage } from '../../store/postSliceRTK';

import Next from '../../assets/Icon-Arrow-Next.svg?react'
import Prev from '../../assets/Icon-Arrow-Prev.svg?react'
import { RootState } from '../../store';



const PostsPagination = () => {
  const dispatch = useDispatch()
  const {
    currentPage,
    itemsPerPage,
    totalItems,
  } = useSelector((state: RootState) => state.posts)
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber));
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };
  const renderPageNumber = () => {
    const pageNumber = [];
    const maxPageNumber = 4;
    const startPage = Math.max(currentPage - Math.floor(maxPageNumber / 2), 1);
    const endPage = Math.min(startPage + maxPageNumber - 1, totalPages);
    for (let i = startPage; i <= endPage; i++) {
      pageNumber.push(
        <button
          className ={ i === currentPage ? style.pageNubmersCurr : style.pageNubmers }
          key={i}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumber;
  };
  return (<div className={style.numbersWrapper}>
    <button className={style.NumberButton} onClick={handlePrevious} disabled={currentPage === 1}>
      <Prev className={style.icon}/> Prev
    </button>
    <div className={style.pageNubmersWrap}>{renderPageNumber()}</div>
    <button className={style.NumberButton}  onClick={handleNext} disabled={currentPage === totalPages}>
      Next <Next className={style.icon}/>
    </button>
  </div>)
}
export default PostsPagination
