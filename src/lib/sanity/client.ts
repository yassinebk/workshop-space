import sanityClient from '@sanity/client';



export function initializeApiClient() {
    const SANITY_PROJECT_ID = import.meta.env.VITE_SANITY_ID;
    const SANITY_TOKEN = import.meta.env.VITE_SANITY_TOKEN;

    if (!SANITY_PROJECT_ID) {
        throw new Error("Directus TOKEN is not defined");
    }

    if (!SANITY_TOKEN) {
        throw new Error("Directus URI is not defined");
    }

    const client = sanityClient({
        projectId: SANITY_PROJECT_ID,
        dataset: 'test',
        apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
        token: SANITY_TOKEN, // or leave blank for unauthenticated usage
        useCdn: false, // `false` if you want to ensure fresh data
    }
    )

    return client
}
