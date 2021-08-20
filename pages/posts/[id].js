import React from "react";
import Card from "../../components/Card";
import CommentCard from "../../components/CommentCard";
import { getPostById, getCommentsForPostById } from "../../services";

function PostId({ postWithComments }) {
  const post = postWithComments[0];
  const comments = postWithComments.slice(1)[0];

  return (
    <div className="container-fluid">
      <h4>Post</h4>
      <Card id={post.id} title={post.title} body={post.body}></Card>
      <h4>Comments</h4>
      <>
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment}></CommentCard>
        ))}
      </>
    </div>
  );
}
export async function getServerSideProps(context) {
  console.log("the getServerSideProps function is called");
  let postWithComments = await Promise.all([
    getPostById(context.query.id),
    getCommentsForPostById(context.query.id),
  ]);
  return {
    props: {
      postWithComments,
    },
  };
}
export default PostId;
