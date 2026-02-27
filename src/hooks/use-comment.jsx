import { useState } from "react";

function useComment(article_id)
{
	const	[renderPostComment, setRenderPostComment] = useState(false);
	const	[postedComment, setPostedComment] = useState(null);

	function handleRenderPostComment (event)
	{
		setRenderPostComment(!renderPostComment);
	}

	function handlePostComment (event)
	{
		event.preventDefault();

		const	comment = event.target.elements.commentText.value;

		if (comment === "")
		{
			return ;
		}

		async function postComment()
		{
			const	url = `https://news-back-end-nqi7.onrender.com/api/articles/${article_id}/comments`

			try
			{
				// username hard coded temporarily
				const	fetchOptions =
				{
					method: "POST",
					body: JSON.stringify({ body : comment, username : "jessjelly" }),
					headers : { "Content-Type" : "application/json" }
				}

				const	response = await fetch(url, fetchOptions);

				if (!response.ok)
				{
					setPostedComment(null);
				}
				else
				{
					setRenderPostComment(false);

					const	body = await response.json();

					setPostedComment(body.comment);
				}
			}
			catch (error)
			{
				console.log(error);
			}
		}
		postComment();
	}

	return { renderPostComment, handleRenderPostComment, postedComment, handlePostComment };
}

export default useComment;
