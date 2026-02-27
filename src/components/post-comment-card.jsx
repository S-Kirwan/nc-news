import { useState } from "react";


function PostCommentCard ( { handlePostComment } )
{

	const	[commentText, setCommentText] = useState("");

	function handleCommentText (event)
	{
		setCommentText(event.target.value);
	}
	
	return (
		<form onSubmit={handlePostComment}>
			<textarea id="comment" name="commentText" value={commentText} onChange={handleCommentText}/>
			<input type="submit" value="Post" />
		</form>
	)
}

export default PostCommentCard;
