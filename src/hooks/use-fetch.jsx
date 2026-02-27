import { useState, useEffect } from "react";

function useFetch (fetchFunc, options = { dependencies : [], params : {} })
{
	const	{ dependencies, params } = options;

	const	[loading, setLoading] = useState(true);
	const	[error, setError] = useState(null);
	const	[data, setData] = useState(null);

	useEffect(() =>
	{
		async function setup()
		{
			setLoading(true);
			try
			{
				const	data = await fetchFunc(params);
				
				setData(data);
			}
			catch (error)
			{
				setError(error);
			}
			finally
			{
				setLoading(false);
			}

		}
		setup();
	}, dependencies)
	return { data, loading, error };
}

export default useFetch;
