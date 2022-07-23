import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          <div className="postCat">
            {post.categories.map((c) => (
              <span className="postCat">{c}</span> // these will return all the categories associated with the posts.
            ))}
          </div>
        </div>

        {/* title of posts */}
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
      </div>
      {/* description  */}
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
