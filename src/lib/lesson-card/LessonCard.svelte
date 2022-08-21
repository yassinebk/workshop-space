<script lang="ts">
	import type { WorkshopSession } from 'src/types/Models';
	import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

	export let workshop: Omit<WorkshopSession, 'id,createdAt,updatedAt,main_image'> & {
		main_image: ImageUrlBuilder;
	};

	console.log('session inside card', workshop);
</script>

<div class="lesson-card ">
	<div class="lesson-img-ctr">
		<img class="lesson-img" src={workshop.main_image.width(300).url()} alt="no " />
		<div class="icon-bubble" />
	</div>
	<div class="v-spacer-sm" />
	<div class="lesson-info-text">
		<h3>{workshop.title}</h3>
		<div class="v-spacer-sm" />
		<p>{workshop.title}</p>
	</div>

	<div class="v-spacer-sm" />
	<div class="line-sep" />
	<div class="v-spacer-sm" />
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

	<div class="v-spacer-md" />
	<div class="action-buttons">
		<a href={`/session/${workshop.slug}`}><button class="btn-white">Read</button></a>
	</div>
</div>

<style>
	.lesson-card {
		display: flex;
		flex-direction: column;
		padding: 1rem 2rem;
		width: 400px;
		align-items: center;
		font-size: 10px;
	}

	.lesson-img-ctr {
		width: 300px;
		max-height: 450px;
		border-radius: 30px;
		overflow: hidden;
	}

	.lesson-img {
		width: 100%;
	}

	.lesson-info-text {
		padding-left: 16px;
		padding-right: 16px;
	}

	.lesson-info-text h3 {
		font-size: 1.5rem;
		font-weight: 700;
	}
	.lesson-info-text p {
		font-size: 14px;
		font-weight: 200;
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

	/* .special-border {
		border: 2px solid rgb(249, 255, 80);
		animation: camelion-border 5s infinite;
		border-radius: 30px;
	} */

	@keyframes camelion-border {
		50% {
			border-color: lightblue;
		}
	}
	.line-sep {
		width: 85%;
		height: 1px;
		background-color: gray;
	}

	.action-buttons {
		justify-content: center;
		display: flex;
		width: 100%;
	}

	.action-buttons a {
		justify-content: center;
		display: flex;
		width: 100%;
		height: 100%;
	}

	.btn-white {
		margin: 0 auto;
		height: 40px;
		width: 85%;
		border-radius: 30px;
		background-color: transparent;
		color: rgb(146, 146, 146);
		cursor: pointer;
		border: 0.3px rgb(146, 146, 146) solid !important;
		transition: all ease-in-out 400ms;
	}

	.btn-white:hover {
		background-color: white;
		color: black;
	}
</style>
