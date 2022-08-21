import { initializeApiClient } from '$lib/sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params, parent }) => {
    const data = await parent();
    const { user } = data
    console.log('user inside session', data)

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

    workshop.main_image = urlFor(workshop.display_image).width(700).url();
    console.log(user._id);
    console.log(workshop);

    if (!workshop.views.map((v: any) => v._id).includes(user._id)) {
        console.log('here');
        workshop = await sanity
            .patch(workshop._id)
            .setIfMissing({ views: [] })
            .append('views', [{ _id: user._id, _type: 'reference' }])
            .commit({ autoGenerateArrayKeys: true });
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
