import { useDispatch, useSelector } from "react-redux";
import { FetchPosts, selectPost } from "../../../store/postSliceRTK";
import PostCard from "../../PostCard/PostCard";
import PostsPagination from "../../PostsPagination/PostsPagination";
import { useNavigate } from "react-router-dom";

import style from './TabContent.module.scss'
import { useEffect } from "react";
import Title from "../../../ui-components/Title/Title";
import { RootState } from "../../../store";

interface IPost{
  size: 'sizeL' | 'sizeM' | 'sizeS',
  date: string,
  title: string,
  description: string,
  image?: string,
  id:number,
}

const TabFavouriteContent = () => {
  const dispatch = useDispatch()
  const {
    favouritePosts,
    loading,
    error,
    currentPage,
    itemsPerPage,
    searchQuery,
    ordering,} = useSelector((state: RootState) => state.posts)
  const navigate = useNavigate()
useEffect(() => {
  dispatch(FetchPosts({
    limit: itemsPerPage,
    offset: (currentPage - 1) * itemsPerPage,
    searchQuery: searchQuery,
    ordering: ordering,
  }))
}, [currentPage, ordering, favouritePosts])

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
  return (
    <>
    <ul className={style.postsWrap}>
    {!favouritePosts? <Title title='No favourite posts'/>:
        favouritePosts.map((post: IPost, index: number) => (
          <PostCard key={post.id}
            onClick={() => {
              dispatch(selectPost(post))
              navigate('/post')
              }
            }
            id={post.id}
          size={getPostSize(index)}
          date={post.date}
          title={post.title}
          description={post.description}
          image={post.image}
        />
      ))
    }
      </ul>
      <PostsPagination/>

    </>
  );
};

export default TabFavouriteContent;