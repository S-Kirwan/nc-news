function CommentCard ( { comment } )
{
	return (
		<>
			<p>{comment.body}</p>
			<p>{comment.author}</p>
			<p>{new Date(comment.created_at).toLocaleDateString()}</p>
			<div id="comment-card-votes">
				<button className="comment-card-upvote">+</button>
				{comment.votes}
				<button className="comment-card-downvote">-</button>
			</div>
		</>
	)
}

export default CommentCard;
