<script lang="ts">
	import IntroSection from '$lib/homepage/intro-section.svelte';
	import LessonCard from '$lib/lesson-card/LessonCard.svelte';
	import type { WorkshopSession } from 'src/types/Models';
	import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

	export let data: {
		workshop: Omit<WorkshopSession, 'id,createdAt,updatedAt,main_image'> & {
			main_image: ImageUrlBuilder;
		};
	};

	console.log(data.workshop);
	let clientHeight: number;

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="v-section-spacer-md" />
<IntroSection />
<div class="v-section-spacer-md" />
<div class="card-2" bind:clientHeight>
	<div class="left-col"><h1>Starting your learning journey here !</h1></div>
	<div class="right-col"><LessonCard workshop={data.workshop} /></div>
</div>

<style>
	.card-2 {
		height: fit-content;
		border: 1px solid #ccc;
		display: flex;
		flex-direction: row;
		padding: 2rem;
		justify-content: space-between;
		border-radius: 20px;
		margin: 1rem;
		/* color:black; */
	}
	.card-2 .left-col h1 {
		font-size: 110px !important;
	}
	@media only screen and (max-width: 480px) {
		.card-2 .left-col h1 {
			font-size: 40px !important;
		}

		.card-2 {
			flex-direction: column;
			align-items: center;
		}
	}
	@media only screen and (max-width: 900px) {
		.card-2 {
			border: none;
		}
		.card-2 .left-col h1 {
			font-size: 60px;
		}

		.card-2 {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
