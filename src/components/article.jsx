import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchIndividualArticle } from "../utils/fetch-articles.jsx";
import { fetchArticleComments } from "../utils/fetch-comments.jsx";

import useFetch from "../hooks/use-fetch.jsx";
import useVotes from "../hooks/use-votes.jsx";

import CommentsList from "./comments-list.jsx";
import CommentCard from "./comment-card.jsx";

function Article ()
{
	const	{ article_id } = useParams()
	const	{ voteChange, handleVote } = useVotes(article_id, 1);

	const	fetchOptions =
	{
		dependencies : [],
		params: article_id
	}

	const
	{
		data : article,
		loading : articleLoading,
		error : articleError
	} = useFetch(fetchIndividualArticle, fetchOptions);

	const
	{
		data : comments,
		loading : commentsLoading,
		error : commentsError
	} = useFetch(fetchArticleComments, fetchOptions);

	if (articleLoading)
	{
		return (
			<p>loading</p>
		)
	}

	if (articleError)
	{
		console.log(articleError);
		return (
			<p>{articleError}</p>
		)
	}

	return (
		<>
			<div className="article-subheading">
				<h2 className="article-subheading-title">{article.title}</h2>
				<p className="article-subheading-topic">{article.topic}</p>
			</div>
			<img className="article-img" src={article.article_img_url} alt="Article image"/>
			<p>{new Date(article.created_at).toLocaleDateString()}</p>
			<p>{article.body}</p>
			<div className="article-votes">
				<p>{article.votes + voteChange }</p>
				<button className="upvote article-upvote" onClick={handleVote}>+</button>
				<button className="downvote article-downvote" onClick={handleVote}>-</button>
			</div>
			<div className="article-comments">
				<p>{article.comment_count}</p>
				<button>Post Comment</button>
				<CommentsList>
					{
						comments === null ? <p>Loading</p> :
						comments.map((comment) =>
						{
							return (<CommentCard key={comment.comment_id} comment={comment} />);
						})
					}
				</CommentsList>
			</div>
		</>
	)
}

export default Article;
