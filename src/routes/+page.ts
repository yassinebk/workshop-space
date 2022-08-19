import type { PageLoad } from "./$types"
export const prerender = true;
interface User {
    id: string;

}

/** @type {import('./$types').PageLoad} */
export const load: PageLoad = async ({ parent }) => {
    const { user } = await parent();




    console.log(user);
    return {
        user

    }
    // ...
}