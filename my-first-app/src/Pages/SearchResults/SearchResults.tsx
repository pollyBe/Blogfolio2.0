import { useDispatch, useSelector } from "react-redux";

import style from './SearchResults.module.scss'
import Title from "../../ui-components/Title/Title";
import PostCard from "../../Components/PostCard/PostCard";
import { useNavigate } from "react-router-dom";
import { selectPost } from "../../store/postSliceRTK";
import PostsPagination from "../../Components/PostsPagination/PostsPagination";

interface IPost{
  size: 'sizeL' | 'sizeM' | 'sizeS',
  date: string,
  title: string,
  description: string,
  image?: string,
  id:number,
}

const SearchResults = () => {
  const { posts, isLoading, error, searchQuery } = useSelector((state:any) => state.posts);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  if (isLoading) {
    return <div className={style.loading}>Loading...</div>;
  }
  if (error) {
    return <div className={style.error}>Error: {error}</div>;
  }
  if (posts.length === 0) {
    return <div className={style.noResults}>No results found.</div>;
  }
  return (
  <div className={style.searchContainer}>
    <Title title={`Search results '${searchQuery}'`} />
    <div className={style.results}>
        {posts.map((post:IPost) =>
          <PostCard key={post.id}
            onClick={() => {
              dispatch(selectPost(post))
              navigate('/post')
            }
            }
            size='sizeL'
            date={post.date}
            title={post.title}
            description={post.description}
            image={post.image}
          />
        )}
      </div>
      <PostsPagination/>
  </div>
  );
}
export default SearchResults