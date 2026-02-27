import { useEffect, useState } from "react";

import ArticlesSortBy from "./sort-by-select.jsx";
import ArticleCard from "./article-card.jsx";
import CardList from "./card-list.jsx";

import { fetchArticles } from "../utils/fetch-articles.jsx";
import useFetch from "../hooks/use-fetch.jsx";

function Articles ()
{
	const	defaultQuery =
	{
		sortBy:"created_at",
		order:"desc"
	}

	const	[queries, setQueries] = useState(defaultQuery);
	
	const	fetchOptions =
	{
		dependencies: [queries],
		params: queries
	}

	const	{ data : articles, loading, error } = useFetch(fetchArticles, fetchOptions)

	if (loading)
	{
		return (
			<p>Loading</p>
		)
	};

	if (error)
	{
		return (
			<p>${error}</p>
		)
	}

	return (
		<section className="article-page">
			<ArticlesSortBy queries={queries} setQueries={setQueries} />
			<CardList>
				{articles.map((article) =>
				{
					return (<ArticleCard key={article.article_id} article={article} />);
				})}
			</CardList>
		</section>
	)
}

export default Articles;
