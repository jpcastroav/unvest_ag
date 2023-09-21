import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/noticia';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allNoticias: (_) =>
			getRequest(URL, ''),
        noticiaById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createNoticia: (_, { noticia }) =>
			generalRequest(`${URL}/`, 'POST', noticia),
		updateNoticia: (_, { id, noticia }) =>
			generalRequest(`${URL}/${id}`, 'PUT', noticia),
		deleteNoticia: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;