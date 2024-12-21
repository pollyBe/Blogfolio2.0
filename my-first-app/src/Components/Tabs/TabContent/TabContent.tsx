import { useEffect} from 'react'
import PostCard from '../../PostCard/PostCard'
import style from './TabContent.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FetchPosts, selectPost } from '../../../store/postSliceRTK';

interface IPost{
  size: 'sizeL' | 'sizeM' | 'sizeS',
  date: string,
  title: string,
  description: string,
  image?: string,
  id:number,
}

const TabContent = () => {
  const dispatch = useDispatch()
  const { posts, loading, error } = useSelector((state) => state.posts)
  const navigate = useNavigate()
useEffect(() => {
  dispatch(FetchPosts())
}, [])
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
  );
};
export default TabContent;
