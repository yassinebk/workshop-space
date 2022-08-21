import { initializeApiClient } from '$lib/sanity/client';
import type { PageLoad } from './$types';
export const prerender = true;
import imageUrlBuilder from '@sanity/image-url';

/** @type {import('./$types').PageLoad} */
export const load: PageLoad = async ({ parent }) => {
	const { user } = await parent();

	const sanity = initializeApiClient();

	const builder = imageUrlBuilder(sanity);

	function urlFor(source: string) {
		return builder.image(source);
	}

	const workshops = await sanity.fetch(
		`*[_type=="workshop_session"]
		{
			title,
			'slug':slug.current,
			time,
			date,
			main_image,
			views[]{
			    defined(_ref) =>{discord_id},
			}
		}`
	);

	return {
		user,
		workshop: {
			...workshops[0],
			main_image: urlFor(workshops[0].main_image)
		}
		// ...
	};
};
