<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
	const { user, workshop } = data;
	console.log(workshop);
</script>

<div class="v-section-spacer-md" />
{#if user && user.confirmed}
	<div>
		<h1 class="session-title">{workshop.title}</h1>
		<div class="v-spacer-md" />
		<div class="lesson-info-numbers">
			<div class="info-part">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-calendar"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					stroke-width="1"
					stroke="#ffffff"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<rect x="4" y="5" width="16" height="16" rx="2" />
					<line x1="16" y1="3" x2="16" y2="7" />
					<line x1="8" y1="3" x2="8" y2="7" />
					<line x1="4" y1="11" x2="20" y2="11" />
					<line x1="11" y1="15" x2="12" y2="15" />
					<line x1="12" y1="15" x2="12" y2="18" />
				</svg>
				<p>{workshop.date}</p>
			</div>
			<div class="info-part">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-eye"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					stroke-width="1"
					stroke="#ffffff"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<circle cx="12" cy="12" r="2" />
					<path
						d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"
					/>
				</svg>
				<p>{workshop.views.length} Views</p>
			</div>
		</div>
	</div>
	<div class="v-section-spacer-md" />
	<div class="main-img-ctr"><img src={workshop.main_image} alt="" class="main-img" /></div>
	<div class="v-spacer-lg" />
	<div class="session-content">
		<SvelteMarkdown source={workshop.body} />
		<h1>Session Ressources & Links</h1>
		<SvelteMarkdown source={workshop.Ressources} />
	</div>
{:else}
	<div class="error-text">
		<h1>You have to login and be registered to the course to access its content</h1>
		<div class="v-spacer-md" />
		<h3>Please login and if you have any problems contact the facebook page</h3>
		<div class="v-spacer-sm" />
		<a href="/">Go back to home</a>
	</div>
{/if}

<style>
	.session-title {
		text-transform: capitalize;
		color: var(--secondary);
		font-size: 4rem;
	}
	.main-img-ctr {
		max-height: 700px;
	}

	.main-img {
		max-height: 700px;
		width: 100%;
	}
	.error-text {
		min-height: 580px;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 5%;
	}

	.error-text h1 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--secondary);
	}

	.error-text h3 {
		color: var(--primary);
	}

	.error-text a {
		color: var(--primary);
		text-decoration: underline;
	}

	.error-text a:hover {
		opacity: 0.9;
	}

	.lesson-info-numbers {
		display: flex;
		width: 100%;
		justify-content: space-around;
	}
	.info-part {
		display: flex;
		align-items: center;
		flex: 1;
		justify-content: center;
	}
	.info-part p {
		margin-left: 10px;
	}
</style>
