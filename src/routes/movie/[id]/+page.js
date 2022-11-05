export async function load({ fetch, params }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${params.id}?api_key=${
			import.meta.env.VITE_API
		}&language=en-US`
	);
	const data = await res.json();
	if (res.ok) {
		return {
			movie: data
		};
	}

	return {
		status: res.status,
		error: data
	};
}
