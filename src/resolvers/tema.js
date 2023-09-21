import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/tema';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allTemas: (_) =>
			getRequest(URL, ''),
        temaById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createTema: (_, { tema }) =>
			generalRequest(`${URL}/`, 'POST', tema),
		updateTema: (_, { id, tema }) =>
			generalRequest(`${URL}/${id}`, 'PUT', tema),
		deleteTema: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;