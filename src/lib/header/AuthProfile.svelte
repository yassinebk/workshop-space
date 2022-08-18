<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';

	let toggled = false;
	let hover = false;
	function toggle() {
		toggled = !toggled;
		return toggled;
	}

	function activeHover() {
		hover = true;
	}
	function desactiveHover() {
		hover = false;
	}
</script>

<div class="profile-container" on:click={toggle}>
	{#if $page.data.user}
		<div class="user-info">
			<div
				class="avatar"
				style={`${
					hover
						? `border:${$page.data.user ? `1px solid ${$page.data.user.banner_color}` : ''}`
						: ''
				}`}
				on:mouseenter={activeHover}
				on:mouseleave={desactiveHover}
			>
				<img src={$page.data.user.userImage} alt={`${$page.data.user.username}'s avatar`} />
			</div>
		</div>
		{#if toggled}
			<div
				class="menu"
				style={`border:1px solid ${$page.data.user.banner_color}`}
				transition:fly={{
					duration: 200,
					y: 100,
					opacity: 0.1,
					easing: expoOut
				}}
			>
				<ul>
					<li class="gradient-text" style="cursor:text">Welcome {$page.data.user.username} 👋</li>
					<li>Roles</li>
					<a href="/api/signout"><li>Signout</li></a>
				</ul>
			</div>
		{/if}
	{:else}
		<a href="/api/auth" style="margin-left:1rem;display:flex">
			<button class="btn secondary-btn" style="padding-left: 1.25rem;padding-right:1.25rem">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-brand-discord"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="1"
					stroke="#C653FF"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					style="fill:none"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<circle cx="9" cy="12" r="1" />
					<circle cx="15" cy="12" r="1" />
					<path d="M7.5 7.5c3.5 -1 5.5 -1 9 0" />
					<path d="M7 16.5c3.5 1 6.5 1 10 0" />
					<path
						d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"
					/>
					<path
						d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"
					/>
				</svg>
				<p style="margin-left:1rem">Signin</p></button
			>
		</a>
	{/if}
</div>

<style>
	.profile-container {
		cursor: pointer;
		position: relative;
	}
	.menu {
		position: absolute;
		top: 100%;
		left: -200%;
		background-color: var(--black);
		width: fit-content;
		border-radius: 20px;
	}

	.menu ul {
		list-style: none;
		display: flex;
		min-width: 300px;
		padding: 4px;
		flex-direction: column;
		justify-content: space-around;
		overflow: hidden;
		align-items: center;
	}

	.menu ul li {
		padding: 1rem;
		cursor: pointer;
		max-width: 99%;
		transition: all ease-in-out 200ms;
		width: 100%;
		max-width: 100%;
		height: 50px;
		border-radius: 10px;
		/* box-shadow: rgba(255, 255, 255, 0.25) 0px 4px 8px -2px,
			rgba(255, 255, 255, 0.38) 0px 0px 0px 1px; */
		margin: 4px 0px;
	}

	.menu ul li:hover {
		background-color: var(--secondary);
		color: var(--black);
		opacity: 0.9;
	}

	.menu a {
		width: 100%;
	}
</style>
