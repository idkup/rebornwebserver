// JavaScript source code
export async function onRequest(ctx){
	const corsHeaders = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': '*',
		'Access-Control-Allow-Headers': '*',
	};
	let msg = {};
	msg.content = 'test test test test';
	console.log("asdfasdf");
	const url_promise = await fetch(ctx.env.discord.get("WEBHOOK_URL"));
	console.log(url_promise);
	const url = await url_promise.text;
	console.log(url);
	const response = url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
		body: JSON.stringify(msg)
	});
	console.log("fdsafdsa");
	if (response.status === 200 || response.status === 204) {
		return new Response('Success', { status: 200, headers: corsHeaders });
	} else {
		return new Response('Errored', { status: 500, headers: corsHeaders });
	}
}
