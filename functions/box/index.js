export async function onRequestGet(ctx) {
	const corsHeaders = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': '*',
		'Access-Control-Allow-Headers': '*',
	};
	try {
		let results = await ctx.env.db.prepare("SELECT * FROM mons").all();
		let response = new Response("asdf", 200);
		response.json = ctx.json(results);
		return response;
	} catch (e) {
		return new Response(`${e}`, 500);
	}
}