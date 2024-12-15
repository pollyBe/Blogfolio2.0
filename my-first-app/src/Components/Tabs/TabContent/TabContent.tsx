import { useEffect} from 'react'
import PostCard from '../../PostCard/PostCard'
import style from './TabContent.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setPost } from '../../../store/postSlice';
import { useNavigate } from 'react-router-dom';

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
  const { posts } = useSelector((state) => state.posts)
  const navigate = useNavigate()
useEffect(() => {
  fetch('https://studapi.teachmeskills.by/blog/posts/?author__course_group=14&limit=8')
  .then((response) => response.json())
  .then((data) => dispatch(setPost(data.results)))
})

  const getPostSize = (index: number) => {
    if (index === 0) return 'sizeL';
    return 'sizeM';
  };

  return (
    <ul className={style.postsWrap}>
    {
        posts.map(({ date, title, description, image, id }: IPost, index: number) => (
          <PostCard key={id}
          onClick={() => navigate(`${id}`)}
          size={getPostSize(index)}
          date={date}
          title={title}
          description={description}
          image={image}
        />
      ))
    }
    </ul>
  );
};
export default TabContent;
