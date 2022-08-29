import { initializeApiClient } from '$lib/sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { ServerLoad } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export const load: ServerLoad = async ({ parent }) => {
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
			main_image: urlFor(workshops[0].main_image).width(300).url()
		}
		// ...
	};
};
