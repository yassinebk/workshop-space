import type { RequestHandler } from "@sveltejs/kit";

const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;
const DISCORD_ENDPOINT = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(DISCORD_REDIRECT_URI)}&response_type=code&scope=identify%20email%20guilds`;

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export const GET: RequestHandler = async (request) => {
  console.log(request);


  return new Response(null, {
    headers: {
      "location": DISCORD_ENDPOINT
    }, status: 302
  })
}
