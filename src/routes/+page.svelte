<script>
	import PopularMovies from '../components/PopularMovies.svelte';
	import Search from '../components/Search.svelte';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<Search />
	<PopularMovies popular={data.popular} />
</section>
