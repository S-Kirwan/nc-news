import { fetchArticleComments } from "../utils/fetch-comments.jsx";

import useComment from "../hooks/use-comment.jsx";
import useFetch from "../hooks/use-fetch.jsx";

import PostCommentCard from "./post-comment-card.jsx";
import CommentsList from "./comments-list.jsx";
import CommentCard from "./comment-card.jsx";


function ArticleComments ( { article, article_id } )
{
	const
	{
		renderPostComment,
		postedComment,
		handlePostComment,
		handleRenderPostComment
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
			<button onClick={handleRenderPostComment}>Comment</button>
			{renderPostComment ? <PostCommentCard handlePostComment={handlePostComment} /> : <></>}
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
