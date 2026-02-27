import { useEffect, useState } from "react";

import CardList from "./card-list.jsx";
import ArticleCard from "./article-card.jsx";

import { fetchLatestArticles } from "../utils/fetch-articles.jsx";
import useFetch from "../hooks/use-fetch.jsx";


function Home ()
{
	const	{ data : latestArticles, loading, error } = useFetch(fetchLatestArticles);


	if (loading)
	{
		return (
			<p>Loading</p>
		)
	}

	if (error)
	{
		return (
			<p>Error</p>
		)
	}

	return (
		<>
			<h2>Welcome to Snowfall</h2>
			<CardList>
				{
					latestArticles.map((article) =>
					{
						return (<ArticleCard key={article.article_id} article={article} />);
					})
				}
			</CardList>
		</>
	);
}

export default Home;
