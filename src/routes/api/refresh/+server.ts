import type { RequestHandler } from '@sveltejs/kit';

const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = import.meta.env.VITE_DISCORD_CLIENT_SECRET;
const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export const GET: RequestHandler = async ({ params }) => {
    const disco_refresh_token = params.code;

    if (!disco_refresh_token) {
        return new Response(
            JSON.stringify({ error: 'No refresh token found' }),
            { status: 500, statusText: 'No refresh token found' }
        )
    }

    // initializing data object to be pushed to Discord's token endpoint.
    // quite similar to what we set up in callback.js, expect with different grant_type.
    const dataObject = {
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET,
        grant_type: 'refresh_token',
        redirect_uri: DISCORD_REDIRECT_URI,
        refresh_token: disco_refresh_token,
        scope: 'identify email guilds'
    };

    // performing a Fetch request to Discord's token endpoint
    const request = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams(dataObject),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    const response = await request.json();

    if (response.error) {
        return new Response(JSON.stringify({ error: response.error }), { headers: { 'Content-Type': 'application/ json' }, status: 500, statusText: 'Internal Server Error' });
    }

    // redirect user to front page with cookies set
    const access_token_expires_in = new Date(Date.now() + response.expires_in); // 10 minutes
    const refresh_token_expires_in = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days


    return new Response(JSON.stringify({ disco_access_token: response.access_token }), {
        headers: {
            'Content-Type': 'application/json',
            'set-cookie':
                `disco_access_token=${response.access_token}; Path=/; HttpOnly; SameSite=Strict; Expires=${access_token_expires_in}};` + `disco_refresh_token=${response.refresh_token}; Path=/; HttpOnly; SameSite=Strict; Expires=${refresh_token_expires_in}`,

        }, status: 200, statusText: 'OK'
    });
}