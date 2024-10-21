<script>
	import Header from '../Header.svelte'
	import '../fonts.css'
	import '../app.css';
</script>

<svelte:head>
	<title>poGGadaj</title>
	<meta name="description" content="Open-source implementation of the Gadu-Gadu server" />
</svelte:head>

<main>
	<Header />
	<hr>
	<br>
	<slot />
</main>
