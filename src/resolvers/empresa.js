import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/empresa';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allEmpresas: (_) =>
			getRequest(URL, ''),
        empresaById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createEmpresa: (_, { empresa }) =>
			generalRequest(`${URL}/`, 'POST', empresa),
		updateEmpresa: (_, { id, empresa }) =>
			generalRequest(`${URL}/${id}`, 'PUT', empresa),
		deleteEmpresa: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;