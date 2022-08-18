<script lang="ts">
	import { dataset_dev } from 'svelte/internal';
	import AuthProfile from './AuthProfile.svelte';
</script>

<header>
	<nav class="navbar">
		<div class="navbar-sides logo-ctr">
			<a href="/">
				<p>Full stack Devini</p>
			</a>
			<div class="seperator" />
		</div>
		<ul class="navigations">
			<li><a href="/">Home </a></li>
			<li><a href="/workshops">Workshop</a></li>
			<li><a href="/faq">FAQ</a></li>
			<li><a href="/ressources">Ressources</a></li>
		</ul>
		<div class=" action-buttons">
			<button class="btn">
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
			<AuthProfile />
		</div>
	</nav>
</header>

<style>
	.navigations {
		display: flex;
		font-size: 1.15rem;
		font-weight: medium;
		justify-content: center;
	}

	.navigations li {
		margin: 0 2rem;
		font-weight: 500;
		cursor: pointer;
		transition: all ease-in-out 200ms;
	}

	.navigations li:hover {
		color: var(--secondary);
		transform: scale(1.1);
	}

	.action-buttons {
		max-width: 500px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.navbar {
		width: 100vw;
		max-width: 100vw;
		justify-content: space-between;
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 2rem;
		display: flex;
		align-items: center;
	}

	.navbar-sides {
	}

	.logo-ctr {
		display: flex;
		align-items: center;
		max-width: 400px;
	}

	.logo-ctr p {
		margin-left: 16px;
		font-size: 2.25rem;
		font-weight: bold;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: -webkit-linear-gradient(to top, #8a2387, #e94057, #f27121);
		background-image: linear-gradient(30deg, #8a2387, #e94057, #f27121);

		animation: gradient-camelion infinite 10s alternate-reverse;
		transition: ease-in-out all;
	}

	@keyframes gradient-camelion {
		to {
			background-position-y: 50vh;
			background-image: linear-gradient(30deg, #fc00ff, #00dbde);
		}
	}
</style>
