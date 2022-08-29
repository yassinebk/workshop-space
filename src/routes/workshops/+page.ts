import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ parent }) => {
	const data = await parent();
	return data;
};
