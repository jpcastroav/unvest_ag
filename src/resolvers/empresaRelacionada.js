import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/empresaRelacionada';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allEmpresaRelacionadas: (_) =>
			getRequest(URL, ''),
        empresaRelacionadaById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createEmpresaRelacionada: (_, { empresaRelacionada }) =>
			generalRequest(`${URL}/`, 'POST', empresaRelacionada),
		updateEmpresaRelacionada: (_, { id, empresaRelacionada }) =>
			generalRequest(`${URL}/${id}`, 'PUT', empresaRelacionada),
		deleteEmpresaRelacionada: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;