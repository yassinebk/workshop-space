<script lang="ts">
	import Footer from '$lib/footer/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import Sidebar from '$lib/header/Sidebar.svelte';
	import '../app.css';
	import { isMenuOpen } from '../lib/stores/sidebar';

	export let data;
	console.log(data)
</script>

<Header />

<main>
	{#if $isMenuOpen}
		<Sidebar />
	{/if}
	<slot />
</main>
<div class="v-spacer-lg" />

<Footer />

<style>
</style>
