<script>
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			if (window && window.top) {
				window.top.location = '/';
			}
		}, 5000);
	});
</script>

<div class="main-ctr">
	<div class="bg-img main-bg" />
	<div class="bg-img overlay" />
	<h1>You have successfully logged in</h1>
	<div class="v-spacer-lg" />
	<h3>Please wait 5s, you will be redirected to the main page</h3>
	<a href="/">Redirect now</a>
</div>

<style>
	.bg-img {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
	.main-bg {
		background: url('/loggedin-bg.jpg') no-repeat center center fixed;
		z-index: -5;
	}

	.overlay {
		background: rgba(0, 0, 0, 0.7);
		z-index: -2;
	}
	.main-ctr {
		flex: 1;
		height: max-content;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin: 20% 0;
		overflow: hidden;
		padding-top: 4rem;
		padding-bottom: 4rem;
		border-radius: 20px;
	}
	a {
		color: var(--tertiary);
		text-decoration: underline;
		margin-top: 10px;
		text-align: center;
		font-weight: 800;
	}
	a:hover {
		color: var(--secondary);
	}

	h1 {
		font-size: 2.5rem;
		font-weight: bold;
		color: var(--secondary);
		text-align: center;
	}

	h3 {
		font-weight: 300;
		text-align: center;
		color: var(--secondary);
	}
</style>
