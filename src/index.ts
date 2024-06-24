

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

		return Response.json({
			message: "Hello Sarfraz How are you, you get 100k offer"
		});
	},
};