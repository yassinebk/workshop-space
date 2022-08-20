<script lang="ts">
	import { circIn } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { isMenuOpen } from '../stores/sidebar';

	function closeSidebar() {
		$isMenuOpen = false;
	}
</script>

<svelte:window
	on:scroll={(event) => {
		event.preventDefault();
		window.scrollTo(0, 0);
	}}
/>
<div class="sidebar" on:click={closeSidebar} transition:fade={{ duration: 800, easing: circIn }}>
	<div class="close-button-ctr" on:click={closeSidebar}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-plus"
			width="32"
			height="32"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="#a905b6"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<line x1="12" y1="5" x2="12" y2="19" />
			<line x1="5" y1="12" x2="19" y2="12" />
		</svg>
	</div>
	<ul class="navigations hide-desktop">
		<li transition:fly={{ delay: 800, easing: circIn }}><a href="/">Home </a></li>
		<li transition:fly={{ delay: 820, easing: circIn }}><a href="/workshops">Workshop</a></li>
		<li transition:fly={{ delay: 840, easing: circIn }}><a href="/faq">FAQ</a></li>
		<li transition:fly={{ delay: 860, easing: circIn }}><a href="/ressources">Ressources</a></li>
	</ul>
	<div class="v-spacer-lg" />
	<div class="buttons-section">
		<button class="btn" transition:fly={{ delay: 880, easing: circIn }}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-phone-call"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="1"
				stroke="#000000"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path
					d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
				/>
				<path d="M15 7a2 2 0 0 1 2 2" />
				<path d="M15 3a6 6 0 0 1 6 6" />
			</svg>
			<p style="margin-left:6px;">Contact Instructor</p>
		</button>
	</div>
	<div class="auth-section" transition:fly={{ delay: 900, easing: circIn }} />
</div>

<style>
	.sidebar {
		position: absolute;

		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--black);
		height: 100vh;
		width: 100vw;
		z-index: 4;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

	.navigations {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.navigations li {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.close-button-ctr {
		margin-left: auto;
		transform: scale(1.2);
		margin-right: 2rem;
		cursor: pointer;
	}

	.close-button-ctr .icon {
		transform: rotate(45deg);
	}
</style>
