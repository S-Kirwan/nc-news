import { useState } from "react";
// import {}

function	useVotes(targetId, isArticle)
{
	const	[voteChange, setVoteChange] = useState(0);

	function	handleVote(event)
	{
		const	targetClasses = [...event.target.classList];

		const	incVotes = targetClasses.includes("upvote") ? 1 : -1;

		if (voteChange !== 0)
		{
			setVoteChange(0);
			incVotes *= -1;
		}
		else
		{
			setVoteChange(incVotes);
		}

		async function patchVote()
		{
			let url = "https://news-back-end-nqi7.onrender.com/api/"

			if (isArticle)
			{
				url += `articles/${targetId}`;
			}
			else
			{
				url += `comments/${targetId}`;
			}

			try
			{
				const	fetchOptions =
				{
					method: "PATCH",
					body: JSON.stringify({ inc_votes : incVotes }),
					headers : { "Content-Type" : "application/json" }
				}

				const	response = await fetch(url, fetchOptions);

				if (!response.ok)
				{
					voteChange === 0 ? setVoteChange(incVotes) : setVoteChange(0);
				}
			}
			catch (error)
			{
				console.log(error);
			}
		}
		patchVote();
	}
	return ( { voteChange, handleVote } );
}

export default useVotes;
