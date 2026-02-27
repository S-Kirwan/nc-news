import useVotes from "../hooks/use-votes.jsx";

function ArticleVotes ( { article, article_id } )
{
	const	{ voteChange, handleVote } = useVotes(article_id, 1);

	return (
		<section className="article-votes">
			<p>{article.votes + voteChange }</p>
			<button className="upvote article-upvote" onClick={handleVote}>+</button>
			<button className="downvote article-downvote" onClick={handleVote}>-</button>
		</section>
	)
}

export default ArticleVotes;
