import Link from "next/link";
import React from "react";
import { deletePostById } from "../services";
function Card({ id, title, body, updatePostList }) {
  const deletePost = async (id) => {
    let res = await deletePostById(id);
    updatePostList(id);
  };
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Post Id:{id}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
        <p className="card-text">{body}</p>
        <Link href={`/posts/${id}`}>
          <a className="card-link">Comments</a>
        </Link>
        <a onClick={() => deletePost(id)} className="card-link">
          Delete Post
        </a>
      </div>
    </div>
  );
}

export default Card;
