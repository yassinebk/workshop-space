import type { RequestHandler } from '@sveltejs/kit';

const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = import.meta.env.VITE_DISCORD_CLIENT_SECRET;
const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export const GET: RequestHandler = async ({ params, request: requestDisc, url }) => {
  const returnCode = url.searchParams.get('code');
  console.log('return code =>', returnCode);

  // Discord sends back some string code when the user accepts to authorize the app. 
  if (!returnCode) {
    return new Response(null, {
      headers: {
        location: '/'
      }, status: 401
    })
  }

  // To send to discord
  const dataObject = {
    client_id: DISCORD_CLIENT_ID,
    client_secret: DISCORD_CLIENT_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: DISCORD_REDIRECT_URI,
    code: returnCode,
    scope: 'identify email guilds'
  }

  const request = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    body: new URLSearchParams(dataObject),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });
  const response = await request.json();

  // redirect to front page in case of error
  if (response.error) {
    console.log('redirect to / due error');
    return new Response(null, {
      headers: { Location: '/' },
      status: 302
    });
  }

  // AUTH SUCCEDED => CHECK IF USER IN DB => ADD USER TO DB IF NOT
  // redirect user to front page with cookies set
  const access_token_expires_in = new Date(Date.now() + response.expires_in); // 10 minutes
  const refresh_token_expires_in = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
  console.log('redirect to / with cookies');

  return new Response(null, {
    headers: {
      'set-cookie': `disco_access_token=${response.access_token}; Path=/; HttpOnly; SameSite=Strict; Expires=${access_token_expires_in}};` + `disco_refresh_token=${response.refresh_token}; Path=/; HttpOnly; SameSite=Strict; Expires=${refresh_token_expires_in}`,
      location: '/'
    },
    status: 302,
    statusText: 'OK',
  }
  )

}
