import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/balance';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allBalances: (_) =>
			getRequest(URL, ''),
        balanceById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createBalance: (_, { balance }) =>
			generalRequest(`${URL}/`, 'POST', balance),
		updateBalance: (_, { id, balance }) =>
			generalRequest(`${URL}/${id}`, 'PUT', balance),
		deleteBalance: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;