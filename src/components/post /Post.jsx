import "./post.css";

const Post = ({img}) => {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Travel</span>
          <span className="postCat">Destination</span>
        </div>
        <span className="postTitle">
        Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, similique.   
    </p>
    </div>
  )
}

export default Post
