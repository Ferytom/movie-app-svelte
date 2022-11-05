export async function load({ fetch }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${
			import.meta.env.VITE_API
		}&language=en-US&page=3`
	);
	const data = await res.json();
	if (res.ok) {
		return {
			popular: data.results
		};
	}

	return {
		status: res.status,
		error: data
	};
}
