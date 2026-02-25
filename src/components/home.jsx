import { useEffect, useState } from "react";

import CardList from "./card-list.jsx";
import ArticleCard from "./article-card.jsx";

import { fetchLatestArticles } from "../utils/fetch-articles.jsx";

function Home ()
{
	const	[latestArticles, setLatestArticles] = useState([]);

	useEffect(() =>
	{
		const asyncFetchLatestArticles = async () =>
		{
			const	articles = await fetchLatestArticles();
			setLatestArticles(articles);
		}

		asyncFetchLatestArticles();
	}, []);

	return (
		<>
			<h2>Welcome to Snowfall</h2>
			<CardList>
				{latestArticles.map((article) =>
				{
					return (<ArticleCard key={article.article_id} article={article} />);
				})}
			</CardList>
		</>
	);
}

export default Home;
