import Koa from 'koa';
import KoaRouter from 'koa-router';
import koaLogger from 'koa-logger';
import koaBody from 'koa-bodyparser';
import koaCors from '@koa/cors';
import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa';
import graphQLSchema from './schema/graphQLSchema';
import { formatErr } from './utilities';

const app = new Koa();
const router = new KoaRouter();
const PORT = process.env.PORT || 5500;

app.use(koaLogger());
app.use(koaCors());

// read token from header
app.use(async (ctx, next) => {
	if (ctx.header.authorization) {
		const token = ctx.header.authorization;
		if (token && token[3]) {
			ctx.state.token = token;
		}
	}
	await next();
});

// GraphQL
const graphql = graphqlKoa((ctx) => {
	return ({
		schema: graphQLSchema,
		context: { token: ctx.state.token },
		formatError: formatErr
	})
});
router.post('/graphql', koaBody(), graphql);
router.get('/graphql', graphql);

// test route
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(router.routes());
app.use(router.allowedMethods());
// eslint-disable-next-line
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
