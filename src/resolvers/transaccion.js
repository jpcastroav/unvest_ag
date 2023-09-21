import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/transaccion';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allTransacciones: (_) =>
			getRequest(URL, ''),
        transaccionById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createTransaccion: (_, { transaccion }) =>
			generalRequest(`${URL}/`, 'POST', transaccion),
		updateTransaccion: (_, { id, transaccion }) =>
			generalRequest(`${URL}/${id}`, 'PUT', transaccion),
		deleteTransaccion: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;