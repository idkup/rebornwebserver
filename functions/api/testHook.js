// JavaScript source code
export async function onRequestPost(ctx){
	const corsHeaders = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': '*',
		'Access-Control-Allow-Headers': '*',
	};
	let obj;
	try {
		obj = await ctx.request.json();
	} catch (e) {
		return new Response('Invalid request', { status: 400, headers: corsHeaders});
	}
	console.log(obj);
	const url = await ctx.env.discord.get("WEBHOOK_URL");
	for (const key in obj) {
		let msg = {};
		msg.content = obj.form[key];
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			body: JSON.stringify(msg)
		});
		if (response.status === 200 || response.status === 204) {
			return new Response('Success', { status: 200, headers: corsHeaders });
		} else {
			return new Response('Errored', { status: 500, headers: corsHeaders });
		}
	}
}
