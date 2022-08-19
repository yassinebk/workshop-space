<script lang="ts">
	let user: any;
	import IntroSection from '$lib/homepage/intro-section.svelte';
	import LessonCard from '$lib/lesson-card/LessonCard.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="v-section-spacer-md" />
<main>
	<IntroSection />
	<div class="v-section-spacer-md" />
	<LessonCard />
</main>

<style>
</style>
