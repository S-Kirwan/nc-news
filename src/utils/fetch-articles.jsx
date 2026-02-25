async function fetchLatestArticles ()
{
	const	url = "https://news-back-end-nqi7.onrender.com/api/articles";
	const	maxArticles = 5;
	
	try
	{
		const	body = await fetch(url);
	
		const	parsedBody = await body.json();
		console.log(parsedBody);
		return (parsedBody.articles.slice(0, maxArticles));
	
	} catch (error)
	{
		console.log(error);
		return ([]);
	}
}

async function fetchArticles (query)
{
	let url = "https://news-back-end-nqi7.onrender.com/api/articles";
	
	if (query !== null)
		url += query;
	
	try
	{
		const	body = await fetch(url);
	
		const	parsedBody = await body.json();
		
		return (parsedBody.articles);
	} catch (error)
	{
		console.log(error);
		return ([]);
	}
}

async function fetchIndividualArticle(articleId)
{
	const url = `https://news-back-end-nqi7.onrender.com/api/articles/${articleId}`;

	try
	{
		const	body = await fetch(url);

		const	parsedBody = await body.json();

		return (parsedBody.article)
	} catch (error)
	{
		console.log(error);
		return ([]);
	}
}

export { fetchLatestArticles, fetchArticles, fetchIndividualArticle };
