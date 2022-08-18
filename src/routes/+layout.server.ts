import * as cookie from "cookie";
import type { LayoutServerLoad } from './$types';

const DISCORD_API_URL = import.meta.env.VITE_DISCORD_API_URL;
const HOST = import.meta.env.VITE_HOST;

/** @type {import('@sveltejs/kit').Handle} */

export const load: LayoutServerLoad = async ({ request }) => {
    // console.log("request", request);
    const cookies = cookie.parse(request.headers.get('cookie') || '');

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
            const response = await request.json();

            if (response.id) {
                return {
                    user: {
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
            return {
                user: {
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