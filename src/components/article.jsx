import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchIndividualArticle } from "../utils/fetch-articles.jsx";
import { fetchArticleComments } from "../utils/fetch-comments.jsx";

import CardList from "./card-list.jsx";
import CommentCard from "./comment-card.jsx";

function Article ()
{
	const	[article, setArticle] = useState(null);
	const	[comments, setComments] = useState([]);
	const	{ article_id } = useParams()


	useEffect(() =>
	{
		const	asyncFetchIndividualArticle = async () =>
		{
			const	individualArticle = await fetchIndividualArticle(article_id);

			setArticle(individualArticle);
		};

		const	asyncFetchComments = async () =>
		{
			const fetchedComments = await fetchArticleComments(article_id);

			setComments(fetchedComments);
		}

		asyncFetchIndividualArticle();
		asyncFetchComments();
	}, []);

	if (article === null)
		return (
			<p>loading</p>
		)

	return (
		<>
			<div id="article-subheading">
				<h2 className="article-subheading-title">{article.title}</h2>
				<p className="article-subheading-topic">{article.topic}</p>
			</div>
			<img className="article-img" src={article.article_img_url} alt="Article image"/>
			<p>{new Date(article.created_at).toLocaleDateString()}</p>
			<p>{article.body}</p>
			<div className="article-votes">
				<p>{article.votes}</p>
				<button>+</button>
				<button>-</button>
			</div>
			<div className="article-comments">
				<p>{article.comment_count}</p>
				<button>Post Comment</button>
				<CardList>
					{
						comments.map((comment) =>
						{
							return (<CommentCard key={comment.comment_id} comment={comment} />);
						})
					}
				</CardList>
			</div>

		</>
	)
}

export default Article;
