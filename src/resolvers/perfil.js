import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/perfil';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allPerfiles: (_) =>
			getRequest(URL, ''),
		perfilById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createPerfil: (_, { perfil }) =>
			generalRequest(`${URL}/`, 'POST', perfil),
		updatePerfil: (_, { id, perfil }) =>
			generalRequest(`${URL}/${id}`, 'PUT', perfil),
		deletePerfil: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;