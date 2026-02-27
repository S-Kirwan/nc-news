import { useState } from "react";
import { Link } from "react-router-dom"

import useVotes from "../hooks/use-votes.jsx";

function ArticleCard ( { article } )
{
	const	{ voteChange, handleVote } = useVotes(article.article_id, 1);

	return (
		<>
		<li className="article-card">
			<Link to={`/topics/${article.topic}`}>
				<p className="article-card-topic">{article.topic}</p>
			</Link>
			<Link to={`/articles/${article.article_id}`}>
				<img className="article-card-image" src={article.article_img_url} alt="The article's image" />
				<h3 className="article-card-title" >{article.title}</h3>
			</Link>
			<button className="article-card-comments">{article.comment_count}</button>
			<div className="article-card-votes">
				<button className="upvote article-card-upvote" onClick={handleVote} >+</button>
				{article.votes + voteChange}
				<button className="downvote article-card-downvote" onClick={handleVote} >-</button>
			</div>
		</li>
		</>

	)
};

export default ArticleCard;
