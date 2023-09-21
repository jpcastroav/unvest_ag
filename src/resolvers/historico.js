import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/historico';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allHistoricos: (_) =>
			getRequest(URL, ''),
        historicoById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createHistorico: (_, { historico }) =>
			generalRequest(`${URL}/`, 'POST', historico),
		updateHistorico: (_, { id, historico }) =>
			generalRequest(`${URL}/${id}`, 'PUT', historico),
		deleteHistorico: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;