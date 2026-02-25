function ArticlesSortBy ( { queries, setQueries } )
{
	function handleSortBySelection (event)
	{
		const newQuery = {...queries};
		
		newQuery.sortBy = event.target.value;
		setQueries(newQuery);
	}

	function handleOrderSelection (event)
	{
		const newQuery = {...queries};

		newQuery.order = event.target.value;
		setQueries(newQuery);
	}

	return (
		<label>
			<h3>Sort By</h3>
			<select name="sortBy" value={queries.sortBy} onChange={handleSortBySelection}>
				<option value="created_at">Latest</option>
				<option value="votes">Top Rated</option>
				<option value="topic">Topic</option>
				<option value="author">Author</option>
				<option value="comment_count">Comments</option>
			</select>
			<select name="order" value={queries.order} onChange={handleOrderSelection}>
				<option value="asc">Ascending</option>
				<option value="desc">Descending</option>
			</select>
		</label>
	)
}

export default ArticlesSortBy;
