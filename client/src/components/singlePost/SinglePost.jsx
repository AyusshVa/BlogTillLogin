// returns a single post of particular id

import { Link } from "react-router-dom";
import "./singlePost.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SinglePost() {
  var location = useLocation(); // this single post will be on '/post/id' as it is defined in the app.js
  const path = location.pathname.split("/")[2]; // location.pathname = endpont of this post, and  we found the id of post as path

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path); // getting everything of the postid wala post, to display its data on the single page
      setPost(res.data); // setting res.data to post ie the post's all data is in post varialble
    };

    getPost();
  }, [path]); // do this everttime the path changes

  // this is self explainatory, just displaying the imgage, title , username, and post desc
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={post.photo} alt="" />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/posts?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>{post.createdAt}</span>
        </div>

        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
