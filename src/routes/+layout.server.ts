import { initializeApiClient } from "../lib/sanity/client";
import * as cookie from "cookie";
import type { DiscordUser } from "src/types/Models";
import type { LayoutServerLoad } from './$types';

const DISCORD_API_URL = import.meta.env.VITE_DISCORD_API_URL;
const HOST = import.meta.env.VITE_HOST;

/** @type {import('@sveltejs/kit').Handle} */

const upsertUserIntoDB = async (response: DiscordUser) => {
    const client = initializeApiClient();
    const users = await client.fetch(`*[_type=="participant" && discord_id=="${response.id}"]`);
    // console.log('user', user)
    // const res = await client.delete({ query: `*[_type=="participant" && discord_id=="${response.id}"]` })
    // console.log(res);
    if (users && users.length === 0) {
        const newParticipant = {
            _type: 'participant',
            discord_id: response.id,
            username: response.username,
            last_visited: new Date().toISOString(),
            points: 0,
            admin_summon: {
                summoned_at: null,
                has_summoned: false
            },
            confirmed: false
        }
        try {
            const res = await client.create(newParticipant);
            return res;
        }
        catch (error) {
            console.log('errror', error)
        }

    }

    return users[0];
}
export const load: LayoutServerLoad = async ({ request }) => {
    const cookies = cookie.parse(request.headers.get('cookie') || '');

    console.log(request);

    // if only refresh token is found, then access token has expired. perform a refresh on it.
    if (cookies.disco_refresh_token && !cookies.disco_access_token) {
        const discord_request = await fetch(`${HOST}/api/refresh?code=${cookies.disco_refresh_token}`);
        const discord_response = await discord_request.json();

        if (discord_response.disco_access_token) {
            // console.log('setting discord user via refresh token..')
            const request = await fetch(`${DISCORD_API_URL}/users/@me`, {
                headers: { 'Authorization': `Bearer ${discord_response.disco_access_token}` }
            });

            // returns a discord user if JWT was valid
            const response: DiscordUser = await request.json();



            if (response.id) {
                let dbUser = await upsertUserIntoDB(response);
                return {
                    user: {
                        ...dbUser,

                        // only include properties needed client-side —
                        // exclude anything else attached to the user
                        // like access tokens etc
                        ...response,
                        userImage: `https://cdn.discordapp.com/avatars/${response.id}/${response.avatar}.png`
                    }
                }
            }
        }
    }

    if (cookies.disco_access_token) {
        // console.log('setting discord user via access token..')
        const request = await fetch(`${DISCORD_API_URL}/users/@me`, {
            headers: { 'Authorization': `Bearer ${cookies.disco_access_token}` }
        });


        // returns a discord user if JWT was valid
        const response = await request.json();
        if (response.id) {
            let dbUser = await upsertUserIntoDB(response);
            return {
                user: {
                    ...dbUser,
                    // only include properties needed client-side —
                    // exclude anything else attached to the user
                    // like access tokens etc
                    ...response,
                    userImage: `https://cdn.discordapp.com/avatars/${response.id}/${response.avatar}.png`

                }
            }
        }
    }

    return {
        user: null
    }
}