import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/operacion';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allOperaciones: (_) =>
			getRequest(URL, ''),
        operacionById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createOperacion: (_, { operacion }) =>
			generalRequest(`${URL}/`, 'POST', operacion),
		updateOperacion: (_, { id, operacion }) =>
			generalRequest(`${URL}/${id}`, 'PUT', operacion),
		deleteOperacion: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;