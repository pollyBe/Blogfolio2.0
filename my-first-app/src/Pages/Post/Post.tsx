import { useSelector } from "react-redux"
import SelectedPost from "../../Components/SelectedPost/SelectedPost"
import { RootState } from "../../store"

const Post = () => {
  const { selectedPost } = useSelector((state:RootState) => state.posts)
  return (<>
    <SelectedPost
      id={selectedPost.id}
      title={selectedPost.title}
      description={selectedPost.description}
      img={selectedPost.image} />
  </>)
}

export default Post