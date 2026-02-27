async function fetchArticleComments(articleId)
{
	const url = `https://news-back-end-nqi7.onrender.com/api/articles/${articleId}/comments`;

	const	response = await fetch(url);

	const	body = await response.json();

	return (body.comments);
}

async function patchArticleComment(commentId)
{
	return (1);
}

export { fetchArticleComments };
