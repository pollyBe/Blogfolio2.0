import { useEffect} from 'react'
import PostCard from '../../PostCard/PostCard'
import style from './TabContent.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FetchPosts, selectPost, setPage } from '../../../store/postSliceRTK';

import Next from '../../../assets/Icon-Arrow-Next.svg?react'
import Prev from '../../../assets/Icon-Arrow-Prev.svg?react'

interface IPost{
  size: 'sizeL' | 'sizeM' | 'sizeS',
  date: string,
  title: string,
  description: string,
  image?: string,
  id: number,
  onclick: () => void;
}

const TabContent = () => {
  const dispatch = useDispatch()
  const {
    posts,
    loading,
    error,
    currentPage,
    itemsPerPage,
    totalItems,
    searchQuery,
    ordering,} = useSelector((state: any) => state.posts)
  const navigate = useNavigate()
useEffect(() => {
  dispatch(FetchPosts({
    limit: itemsPerPage,
    offset: (currentPage - 1) * itemsPerPage,
    searchQuery: searchQuery,
    ordering: ordering,
  }))
}, [currentPage, ordering])
if (loading) {
  return <div>loading...</div>;
}
if (error) {
  return <div>Error...</div>;
}

  const getPostSize = (index: number) => {
    if (index === 0) return 'sizeL';
    return 'sizeM';
  };

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
    console.log(pageNumber)
    return pageNumber;
  };

  return (
    <>
    <ul className={style.postsWrap}>
    {
        posts.map((post: IPost, index: number) => (
          <PostCard key={post.id}
            onClick={() => {
              dispatch(selectPost(post))
              navigate('/post')
              }
            }
          size={getPostSize(index)}
          date={post.date}
          title={post.title}
          description={post.description}
          image={post.image}
        />
      ))
    }
    </ul>
    <div className={style.numbersWrapper}>
        <button className={style.NumberButton} onClick={handlePrevious} disabled={currentPage === 1}>
          <Prev className={style.icon}/> Prev
        </button>
        <div className={style.pageNubmersWrap}>{renderPageNumber()}</div>
        <button className={style.NumberButton}  onClick={handleNext} disabled={currentPage === totalPages}>
          Next <Next className={style.icon}/>
        </button>
      </div>
    </>
  );
};
export default TabContent;
