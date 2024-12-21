import { useSelector } from "react-redux"
import SelectedPost from "../../Components/SelectedPost/SelectedPost"

const Post = () => {
  // const path = useParams();
  // const [post, setPost] = useState({id: 0, title: '', description: '', image: '' })
  // useEffect(() => {
  //   fetch(`https://studapi.teachmeskills.by/blog/posts/${path.id}`)
  //     .then((response) => response.json())
  //     .then((data) =>setPost(data))
  // }, [])
  // console.log(post)
  const { selectedPost } = useSelector((state) => state.posts)
  console.log(selectedPost)
  return (<>
    <SelectedPost
      id={selectedPost.id}
      title={selectedPost.title}
      description={selectedPost.description}
      img={selectedPost.image} />
  </>)
}

export default Post