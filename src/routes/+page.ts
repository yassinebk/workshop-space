import type { PageLoad } from './$types';
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export const load: PageLoad = async ({ parent }) => {
	const { user } = await parent();

	return {
		user
	};
	// ...
};
