<script lang="ts">
	import { quadInOut } from 'svelte/easing';

	import { fly } from 'svelte/transition';

	type WorkshopData = {
		topic: string;
		time: string;
		description: string;
		date: string;
		sessionLink?: string;
		color: string;
	};

	const workshopArray: WorkshopData[] = [
		{
			topic: 'the World Wide Web',
			time: '11:00 - 13:00',
			description:
				'Making our very first steps, getting an idea on the overall track and talking the tactics that we will be using to succeed in our journey !',
			date: '23 August 2k22',
			sessionLink: '/session/the-world-wide-web',
			color: 'var(--secondary)'
		},
		{
			topic: "HTML, Let's code!",
			time: '11:00 - 13:00',
			description:
				'We will start learning the basics of making our very first website, HTML is the first milestone in our journey !',
			date: '26 August 2k22',
			color: '#FB98FD'
		},
		{
			topic: 'CSS 00 to 01',
			time: '11:00 - 13:00',
			description:
				'We will be discovering the secrets to make very beautiful websites. We will learn how to approach design files',
			date: '30 August 2k22',
			color: '#54C8DF'
		},
		{
			topic: 'CSS 01 to 10',
			time: '11:00 - 13:00',
			description:
				"We learned how to convert designs to code but how can we add some interactivity to our websites ? That's where CSS comes in !",
			date: '2 September 2k22',
			color: '#E28386'
		},
		{
			topic: 'Javascript, DOM',
			time: '11:00 - 13:00',
			description:
				'Websites are all about services they offer. These services are features and need more advanced manipulation of website component HTML and CSS to become fully dynamic. Behold the power of JS !',
			date: '6 September 2k22',
			color: '#FEB310'
		},
		{
			topic: 'APIs, NodeJS',
			time: '11:00 - 13:00',
			description:
				'Everything is data. The color of your shirt, the content of the last post you tweeted, everything but from where does that data comes ? We will learn how to use APIs to get data from the internet. Then we will build our own !',
			date: '9 September 2k22',
			color: '#D46FCB'
		},
		{
			topic: 'Dev Tools, DX',
			time: '11:00 - 13:00',
			description:
				"It might have taken hours to debug a problem while it was a mispelled variable. That' a lot of time ! We will learn how to use Dev Tools to make the process of developing our websites more efficient and faster !",
			date: '13 September 2k22',
			color: '#8BE5B8'
		}
	];
	//     Session 1 : W W W  / becoming comfortable with the dev environment
	// Session 2 : meaningful websites with HTML
	// Session 3 : CSS zero to hero
	// Session 4 : smooth UX with CSS animations.
	// Session 5 : Javascript, DOM
	// You sent
	// Session 6: APIs, NodeJs
	// Session 7: dev tools for better DX and finding the perfect workflow
</script>

<div class="v-section-spacer-md" />
<div class="v-section-spacer-md" />
<div class="main-ctr">
	<div class="header" in:fly={{ y: -20, duration: 600 }}>Workshops Program</div>

	<div class="v-spacer-lg" />
	<div class="cards-container">
		<div class="img" />
		{#each workshopArray as workshop, index}
			<div
				class="session-card"
				in:fly={{
					y: -20,
					duration: 800,
					delay: 100 + 100 * index,
					easing: quadInOut
				}}
				out:fly={{
					y: -20,
					opacity: 0,
					duration: 300,
					easing: quadInOut
				}}
			>
				<div class="card-upper" style={`background-color:${workshop.color}`}>
					<h2 class="session-num">{index + 1}</h2>
				</div>
				<div class="content-ctr">
					<h1 class="session-title">{workshop.topic}</h1>
					<div class="v-spacer-md" />
					<h3 class="session-description">
						{workshop.description}
					</h3>

					<div class="v-spacer-lg" />
					<h3 class="session-time" style={`color:${workshop.color}`}>{workshop.date}</h3>
					<div class="v-spacer-xs" />
					<h3 class="session-time" style={`color:${workshop.color}`}>{workshop.time}</h3>
					<div class="v-spacer-lg" />
					<div>
						<div class="links">
							{#if workshop.sessionLink}
								<a href={workshop.sessionLink} class="session-link">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-link"
										width="32"
										height="32"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="#8699EF"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
										<path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
									</svg>
									<p>Session Content</p>
								</a>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.main-ctr {
		margin: 0px 1rem;
	}
	.header {
		font-size: 3rem;
		font-weight: bold;
		color: var(--secondary);
	}
	.cards-container {
		position: relative;
		justify-content: space-evenly;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		align-items: center;
		margin: 0 auto;
	}

	.card-upper {
		color: black;
		padding: 0 2rem;
	}
	.session-card {
		background: var(--black);
		flex: 1;
		margin: 2rem;
		border-radius: 10px;
		max-width: 450px;
		min-width: 400px;
		overflow: hidden;
		overflow: hidden;
	}
	.session-title {
		width: 100%;
		z-index: 2;
		color: #8699ef;
	}

	.session-time {
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--secondary);
		text-align: center;
		width: fit-content;
		padding: 2px 5px;
		border-radius: 3px;
		color: var(--tertiary);
	}
	.session-description {
		font-size: 1.1rem;
		color: var(--white);
	}

	.img {
		background: url('/workshop.jpg') no-repeat;
		background-size: cover;
		z-index: -2;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100%;
		opacity: 0.5;
	}

	.content-ctr {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 500px;
		padding: 1rem 2rem;
	}

	.session-link {
		display: flex;
		align-items: center;
		color: #8699ef;
	}

	.session-link:hover {
		color: var(--secondary);
	}
	.session-link:hover svg {
		stroke: var(--secondary);
	}
</style>
