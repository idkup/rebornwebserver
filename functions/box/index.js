export async function onRequestGet(ctx) {
	const corsHeaders = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': '*',
		'Access-Control-Allow-Headers': '*',
	};
	try {
		let results = await ctx.env.db.prepare("SELECT * FROM mons").run();
		return new Response("asdf", { status: 200, headers: corsHeaders, json: results } );
	} catch (e) {
		return new Response(`${e}`, {status: 500, headers: corsHeaders } );
	}
}