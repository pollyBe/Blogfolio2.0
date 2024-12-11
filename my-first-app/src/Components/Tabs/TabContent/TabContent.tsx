import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import PostCard from '../../PostCard/PostCard'
import style from './TabContent.module.scss'

interface IPost{
  size: 'sizeL' | 'sizeM' | 'sizeS',
  date: string,
  title: string,
  description: string,
  image?: string,
  id:number,
}

const TabContent = () => {
  const url = 'https://studapi.teachmeskills.by/blog/posts/?author__course_group=14&limit=9'
  const [posts, setPosts] = useState([])
// const navigate = useNavigate()
useEffect(() => {
fetch(url)
  .then((response) => response.json())
  .then((data) => setPosts(data.results))
},[posts])

  return (
    <ul className={style.postsWrap}>
    {
      posts.map(({date, title, description, image, id}:IPost) => (
        <li key={id}><PostCard
          size='sizeL'
          date={date}
          title={title}
          description={description}
          image={image}
        /></li>
      ))
    }
    </ul>
  );
};
export default TabContent;
