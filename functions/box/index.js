export async function onRequestGet(ctx) {
	const corsHeaders = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': '*',
		'Access-Control-Allow-Headers': '*',
	};
	try {
		let results = await ctx.env.db.prepare("SELECT * FROM mons").run();
		return new Response(`${JSON.stringify(results.results)}`, { status: 200, headers: corsHeaders } );
	} catch (e) {
		return new Response(`${e}`, {status: 500, headers: corsHeaders } );
	}
}