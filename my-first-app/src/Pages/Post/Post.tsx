import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SelectedPost from "../../Components/SelectedPost/SelectedPost"

const Post = () => {
  const path = useParams();
  const [post, setPost] = useState({id: 0, title: '', description: '', image: '' })
  useEffect(() => {
    fetch(`https://studapi.teachmeskills.by/blog/posts/${path.id}`)
      .then((response) => response.json())
      .then((data) =>setPost(data))
  }, [])
  console.log(post)
  return (<>
    <SelectedPost
      id={post.id}
      title={post.title}
      description={post.description}
      img={post.image} />
  </>)
}

export default Post