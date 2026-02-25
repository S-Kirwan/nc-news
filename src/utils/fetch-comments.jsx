async function fetchArticleComments(articleId)
{
	const url = `https://news-back-end-nqi7.onrender.com/api/articles/${articleId}/comments`;

	try
	{
		const	response = await fetch(url);

		const	body = await response.json();

		return (body.comments);
	} catch (error)
	{
		console.log(error);
		return (null);
	}
}

export { fetchArticleComments };
