async function fetchLatestArticles ()
{
	const	maxArticles = 5;
	const	url = "https://news-back-end-nqi7.onrender.com/api/articles";
	
	const	response = await fetch(url);
	
	const	body = await response.json();

	return (body.articles.slice(0, maxArticles));
}

async function fetchArticles (query)
{
	let url = "https://news-back-end-nqi7.onrender.com/api/articles";
	
	if (query !== null)
		url += "?sort_by=" + query.sortBy + "&order=" + query.order;
	
	const	response = await fetch(url);

	const	body = await response.json();
	
	return (body.articles);
}

async function fetchIndividualArticle(articleId)
{
	const url = `https://news-back-end-nqi7.onrender.com/api/articles/${articleId}`;

	const	response = await fetch(url);

	const	body = await response.json();

	return (body.article)
}

async function patchArticleVotes(articleId, votes)
{
	const url = `https://news-back-end-nqi7.onrender.com/api/articles/${articleId}`;

	const	response = await fetch(url)
}

export { fetchLatestArticles, fetchArticles, fetchIndividualArticle };
