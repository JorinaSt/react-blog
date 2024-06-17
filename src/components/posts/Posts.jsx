import Post from "../post /Post"
import "./posts.css"


const Posts = () => {
  return (
    <div className="posts">

      <Post  img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post  img= "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      <Post  img="https://images.pexels.com/photos/68661/tree-desert-namibia-dead-vlei-68661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      <Post  img="https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      <Post  img="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      <Post  img="https://images.pexels.com/photos/13679334/pexels-photo-13679334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
    </div>
  )
}

export default Posts
