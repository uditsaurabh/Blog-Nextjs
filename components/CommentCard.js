function CommentCard({ comment }) {
  console.log("***props are as follows****", comment);
  return (
    <div>
      <div className="card">
        <div className="card-header">{comment.name}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{comment.body}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
