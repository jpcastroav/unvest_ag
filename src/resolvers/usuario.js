import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/usuario';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allUsuarios: (_) =>
			getRequest(URL, ''),
		usuarioById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET')
	},
	Mutation: {
		createUsuario: (_, { usuario }) =>
			generalRequest(`${URL}/`, 'POST', usuario),
		updateUsuario: (_, { id, usuario }) =>
			generalRequest(`${URL}/${id}`, 'PUT', usuario),
		deleteUsuario: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;