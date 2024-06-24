
export default {
	async fetch(request, env, ctx): Promise<Response> {
		return Response.json({
			name: "Sarfraz khan"
		});
	},
} satisfies ExportedHandler<Env>;
