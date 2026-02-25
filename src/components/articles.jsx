import { useEffect, useState } from "react";

import ArticleCard from "./article-card.jsx";
import CardList from "./card-list.jsx";
import ArticlesSortBy from "./sort-by-select.jsx";

import { fetchArticles } from "../utils/fetch-articles.jsx";

function Articles ()
{
	const	defaultQuery =
	{
		sortBy:"topic",
		order:"desc"
	}

	const	[queries, setQueries] = useState(defaultQuery);
	const	[articles, setArticles] = useState([]);

	useEffect(() =>
	{
		const asyncFetchArticles = async () =>
		{
			const	query = "?sort_by=" + queries.sortBy + "&order=" + queries.order;
			
			const	articles = await fetchArticles(query);

			setArticles(articles);
		}

		asyncFetchArticles();
	}, [queries]);

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
