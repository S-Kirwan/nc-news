function ArticleCard ( { article } )
{
	return (
		<>
		<li className="article-card">
			<img className="article-card-image" src={article.article_img_url} alt="The article's image" />
			<p className="article-card-topic">{article.topic}</p>
			<h3 className="article-card-title">{article.title}</h3>
			<button className="article-card-comments">{article.comment_count}</button>
			<div className="article-card-votes">
				<button className="upvote article-card-upvote">+</button>
				{article.votes}
				<button className="downvote article-card-downvote">-</button>
			</div>
		</li>
		</>

	)
};

export default ArticleCard;
