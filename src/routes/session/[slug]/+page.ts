import { initializeApiClient } from '$lib/sanity/client';
import type { PageLoad } from '.svelte-kit/types/src/routes/$types';
import imageUrlBuilder from '@sanity/image-url';

export const load: PageLoad = async ({ params, fetch, data, depends, parent }) => {
	console.log(params, fetch, data, depends);
	const { user } = await parent();

	if (!user) {
		return {
			user: null
		};
	}

	const { slug } = params;

	function urlFor(source: string) {
		return builder.image(source);
	}

	const sanity = initializeApiClient();
	const builder = imageUrlBuilder(sanity);
	type view = {
		_ref: string;
		_id: string;
		to: string;
	};
	let workshop;
	workshop = (await sanity.fetch(`*[_type=="workshop_session" && slug.current=="${slug}"]`))[0];

	workshop.main_image = urlFor(workshop.display_image);
	console.log(user._id);
	console.log(workshop);

	if (!workshop.views.map((v: any) => v._id).includes(user._id)) {
		console.log('here');
		workshop = await sanity
			.patch(workshop._id)
			.setIfMissing({ views: [] })
			.append('views', [{ _id: user._id, _type: 'reference' }])
			.commit({ autoGenerateArrayKeys: true });

		console.log(workshop);
	}

	// Check for the sesison !
	// Check if the user is confirmed
	// Check if the param is present
	// Fetch data and feed it to the page

	return {
		workshop,
		user
	};
};
