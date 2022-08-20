import type { RequestHandler } from '@sveltejs/kit';

/* @type { import('@sveltejs/kit').RequestHandler }
 */
export const GET: RequestHandler = async ({ setHeaders }) => {
	console.log('redirect to / with cleared cookies');
	setHeaders({
		'set-cookie': [
			`disco_access_token=deleted; Path=/; Max-Age=-1`,
			`disco_refresh_token=deleted; Path=/; Max-Age=-1`
		]
	});

	return new Response(null, { headers: { Location: '/' }, status: 302 });
};
