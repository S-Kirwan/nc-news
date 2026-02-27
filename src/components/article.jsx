import { useParams } from "react-router-dom";

import { fetchIndividualArticle } from "../utils/fetch-articles.jsx";

import useFetch from "../hooks/use-fetch.jsx";

import ArticleSubheading from "./article-subheading.jsx";
import ArticleComments from "./article-comments.jsx";
import ArticleVotes from "./article-votes.jsx";

function Article ()
{
	const	{ article_id } = useParams()

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
			<p>error</p>
		)
	}

	return (
		<>
			<ArticleSubheading article={article} />
			<p>{article.body}</p>
			<ArticleVotes article={article} article_id={article_id} />
			<ArticleComments article={article} article_id={article_id} />
		</>
	)
}

export default Article;
