import { useContext } from "react";

import { UserContext } from "../contexts/logged-in-user.jsx";

function CommentCard ( { comment } )
{
	const	{ user } = useContext(UserContext);

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
			{comment.author === user.username ? <button className="delete-button">Delete</button> : <></>}
		</>
	)
}

export default CommentCard;
