import type { Load } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load: Load = async ({ parent }) => {
	const { user } = await parent();
	console.log(user);
	return {
		user
	};
	// ...
};
