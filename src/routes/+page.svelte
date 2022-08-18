<script lang="ts">
	let user: any;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<h1 class="heading">Hello there</h1>
	{#if !user}
		<a title="Discord OAuth2" href="api/auth">Authenticate via Discord</a>
	{/if}
</main>

<style>
</style>
