import { fetchArticleComments } from "../utils/fetch-comments.jsx";

import useComment from "../hooks/use-comment.jsx";
import useFetch from "../hooks/use-fetch.jsx";

import CommentsList from "./comments-list.jsx";
import CommentCard from "./comment-card.jsx";


function ArticleComments ( { article, article_id } )
{
	const
	{
		postComment,
		postedComment,
		handleSendComment,
		handlePostComment
	} = useComment(article_id);

	const	fetchOptions =
	{
		dependencies : [],
		params: article_id
	}

	const
	{
		data : comments,
		loading : commentsLoading,
		error : commentsError
	} = useFetch(fetchArticleComments, fetchOptions);

	return (
		<section className="article-comments">
			<p>{article.comment_count}*ARTICLE_COMMENT_COUNT_PLACEHOLDER*</p>
			<button onClick={handlePostComment}>Comment</button>
			{postComment ? <p>postCommentCard</p> : <></>}
			<CommentsList>
				{
					comments === null ? <p>Loading</p> :
					comments.map((comment) =>
					{
						return (<CommentCard key={comment.comment_id} comment={comment} />);
					})
				}
			</CommentsList>
		</section>
	)
}

export default ArticleComments;
