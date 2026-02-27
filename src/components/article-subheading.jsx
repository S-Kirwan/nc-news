function ArticleSubheading ( { article } )
{
	return (
		<section className="article-subheading">
			<h2 className="article-subheading-title">{article.title}</h2>
			<p className="article-subheading-topic">{article.topic}</p>
			<img className="article-img" src={article.article_img_url} alt="Article image"/>
			<p>{new Date(article.created_at).toLocaleDateString()}</p>
		</section>
	)
}

export default ArticleSubheading;
