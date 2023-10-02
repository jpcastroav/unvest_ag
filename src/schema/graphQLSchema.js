import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLScalarType, Kind } from 'graphql';
import { mergeSchemas } from '../utilities';

import { historicoMutations, historicoQueries, historicoTypeDef } from '../typeDefs/historico';
import { empresaMutations, empresaQueries, empresaTypeDef } from '../typeDefs/empresa';

import { empresaRelacionadaTypeDef } from '../typeDefs/empresaRelacionada';
import { temaTypeDef } from '../typeDefs/tema';
import { noticiaQueries, noticiaTypeDef } from '../typeDefs/noticia';

import { balanceMutations, balanceQueries, balanceTypeDef } from '../typeDefs/balance'
import { operacionMutations, operacionQueries, operacionTypeDef } from '../typeDefs/operacion'
import { transaccionMutations, transaccionQueries, transaccionTypeDef } from '../typeDefs/transaccion'

import { newsWatchListMutations, newsWatchListQueries, newsWatchListTypeDef } from '../typeDefs/newsWatchList'
import { stockWatchListMutations, stockWatchListQueries, stockWatchListTypeDef } from '../typeDefs/stockWatchList'
import { perfilMutations, perfilQueries, perfilTypeDef } from '../typeDefs/perfil';
import { usuarioMutations, usuarioQueries, usuarioTypeDef } from '../typeDefs/usuario';

import historicoResolvers from '../resolvers/historico';
import empresaResolvers from '../resolvers/empresa';
import empresaRelacionadaResolvers from '../resolvers/empresaRelacionada'
import temaResolvers from '../resolvers/tema';
import noticiaResolvers from '../resolvers/noticia'
import balanceResolvers from '../resolvers/balance'
import operacionResolvers from '../resolvers/operacion'
import transaccionResolvers from '../resolvers/transaccion'
import newsWatchListResolvers from '../resolvers/newsWatchList'
import stockWatchListResolvers from '../resolvers/stockWatchList'
import perfilResolvers from '../resolvers/perfil';
import usuarioResolvers from '../resolvers/usuario';

const dateScalar = new GraphQLScalarType({
	name: 'Date',
	description: 'Date custom scalar type',
	serialize(value) {
	  if (value instanceof Date) {
		return value.toISOString(); // Convert outgoing Date to ISO string
	  } else if(typeof value === 'string'){
		return value;
	  }
	  throw Error('GraphQL Date Scalar serializer expected a `Date` object');
	},
	parseValue(value) {
	  if (typeof value === 'string') {
		return new Date(value); // Convert incoming string to Date
	  }
	  throw new Error('GraphQL Date Scalar parser expected a `string`');
	},
	parseLiteral(ast) {
	  if (ast.kind === Kind.STRING) {
		// Convert hard-coded AST string to Date
		return new Date(ast.value);
	  }
	  // Invalid hard-coded value (not an string)
	  return null;
	},
  });

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar Date',
		'scalar JSON',
		// historicoTypeDef,
		// empresaTypeDef,

		//seccion news
		empresaRelacionadaTypeDef,
		temaTypeDef,
		noticiaTypeDef,


		// balanceTypeDef,
		// operacionTypeDef,
		// transaccionTypeDef,
		// newsWatchListTypeDef,
		// stockWatchListTypeDef,

		//Completados

		perfilTypeDef,
		usuarioTypeDef

	],
	[
		// historicoQueries,
		// empresaQueries,

		//Seccion news
		//empresaRelacionadaQueries,
		//temaQueries,
		noticiaQueries,

		// balanceQueries,
		// operacionQueries,
		// transaccionQueries,
		// newsWatchListQueries,
		// stockWatchListQueries,

		//Completados

		perfilQueries,
		usuarioQueries

	],
	[
		// historicoMutations,
		// empresaMutations,

		//Seccion news
		/*empresaRelacionadaMutations,
		temaMutations,
		noticiaMutations,*/

		// balanceMutations,
		// operacionMutations,
		// transaccionMutations,
		// newsWatchListMutations,
		// stockWatchListMutations,

		//Completados

		perfilMutations,
		usuarioMutations

	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON, Date: dateScalar }, 
		// historicoResolvers,
		// empresaResolvers,
		
		//Seccion news
		//empresaRelacionadaResolvers,
		//temaResolvers,
		noticiaResolvers,
		
		// balanceResolvers,
		// operacionResolvers,
		// transaccionResolvers,
		// newsWatchListResolvers,
		// stockWatchListResolvers,

		//Completados
		/*
		perfilResolvers,
		usuarioResolvers
		*/
	)
});
