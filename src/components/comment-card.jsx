import { useContext } from "react";

import { UserContext } from "../contexts/logged-in-user.jsx";

import useDeleteComment from "../hooks/use-delete-comment.jsx";

function CommentCard ( { comment } )
{
	const	{ user } = useContext(UserContext);

	const	{ commentDeleted, handleDeleteComment } = useDeleteComment(comment);


	if (commentDeleted)
	{
		return (
			<></>
		)
	}
	return (
		<div className="comment-card">
			<p>{comment.body}</p>
			<p>{comment.author}</p>
			<p>{new Date(comment.created_at).toLocaleDateString()}</p>
			<div id="comment-card-votes">
				<button className="comment-card-upvote">+</button>
				{comment.votes}
				<button className="comment-card-downvote">-</button>
			</div>
			{comment.author === user.username ? <button className="delete-button" onClick={handleDeleteComment} >Delete</button> : <></>}
		</div>
	)
}

export default CommentCard;
