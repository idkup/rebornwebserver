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
	if (!obj.form) {
		return new Response('Invalid JSON', { status: 400, headers: corsHeaders});
	}
	const url = await ctx.env.discord.get("WEBHOOK_URL");
	Object.entries(obj.form).forEach((async entry) => {
		const [key, value] = entry;
		let msg = {};
		msg.content = value;
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
	});
}
