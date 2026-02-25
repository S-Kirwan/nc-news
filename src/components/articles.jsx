import { useEffect, useState } from "react";

import ArticleCard from "./article-card.jsx";
import CardList from "./card-list.jsx";

import { fetchArticles } from "../utils/fetch-articles.jsx";

function Articles ()
{
	const	[articles, setArticles] = useState([]);

	useEffect(() =>
	{
		const asyncFetchArticles = async () =>
		{
			const articles = await fetchArticles(null);
			setArticles(articles);
		}

		asyncFetchArticles();
	}, []);

	return (
		<section className="article-page">
			<form id="sort-by">
				<h3>Sort By</h3>
				<select>
					<option>Latest</option>
					<option>Top Rated</option>
					<option>Topic</option>
					<option>Author</option>
				</select>
				<select>
					<option>Ascending</option>
					<option>Descending</option>
				</select>
			</form>
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
