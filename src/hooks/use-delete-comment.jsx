import { useState } from "react";

function useDeleteComment (comment)
{
	const	[commentDeleted, setCommentDeleted] = useState(false);

	function handleDeleteComment (event)
	{
		async function deleteComment()
		{
			const	url = `https://news-back-end-nqi7.onrender.com/api/comments/${comment.comment_id}`

			const	fetchOptions =
			{
				method : "DELETE",
			}

			const	response = await fetch(url, fetchOptions);

			if (!response.ok)
			{
				//error handling
				console.log(response);
			}
			else
			{
				setCommentDeleted(true);
			}
		}
		deleteComment();
	}

	return { commentDeleted, handleDeleteComment };
}

export default useDeleteComment;
