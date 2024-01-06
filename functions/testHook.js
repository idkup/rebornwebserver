// JavaScript source code
async function testHook(){
	let url = "https://discord.com/api/webhooks/1193064619175051314/Cbkwg9gRbiJfllr1EOd0zXPuwDTgiCUhfW1KbzO67wsWxbSJYKfkk3BTodyqB8mRbO97";
	let msg = {};
	msg.content = 'hahaxd';
	
	const response = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
		body: JSON.stringify(msg)
	});
}
