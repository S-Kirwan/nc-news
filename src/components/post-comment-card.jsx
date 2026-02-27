import { useState } from "react";

import useComment from "../hooks/use-comment.jsx";

function PostCommentCard ( { article_id } )
{

	const	{ handlePostComment } = useComment(article_id);
	const	[commentText, setCommentText] = useState("");

	function handleCommentText (event)
	{
		setCommentText(event.target.value);
	}
	
	return (
		<form onSubmit={handlePostComment}>
			<textarea id="comment" value={commentText} onChange={handleCommentText}/>
			<input type="submit" value="Post" />
		</form>
	)
}

export default PostCommentCard;
