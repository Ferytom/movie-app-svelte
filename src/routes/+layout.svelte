<script>
	import '../global.css';
</script>

<svelte:head>
	<title>Movie Website</title>
</svelte:head>

<nav>
	<a href="/">Movie Database</a>
</nav>

<main>
	<slot />
</main>

<style>
	nav {
		display: flex;
		min-height: 10vh;
		align-items: center;
		justify-content: center;
	}
	nav a {
		font-size: 1rem;
		font-weight: bold;
		font-family: 'Poppins';
		color: black;
		text-decoration: none;
	}
</style>
