import { useSelector } from "react-redux"
import SelectedPost from "../../Components/SelectedPost/SelectedPost"

const Post = () => {
  const { selectedPost } = useSelector((state:any) => state.posts)
  return (<>
    <SelectedPost
      id={selectedPost.id}
      title={selectedPost.title}
      description={selectedPost.description}
      img={selectedPost.image} />
  </>)
}

export default Post