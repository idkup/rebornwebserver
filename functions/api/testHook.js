// JavaScript source code
export async function onRequestPost(ctx){
	const corsHeaders = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': '*',
		'Access-Control-Allow-Headers': '*',
	};
	let msg = {};
	msg.content = 'test test test test';
	
	const response = await fetch(ctx.env.DISCORD_WEBHOOK_URL, {
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
