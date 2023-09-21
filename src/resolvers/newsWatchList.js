import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/newsWatchList';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allNewsWatchLists: (_) =>
			getRequest(URL, ''),
        newsWatchListById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createNewsWatchList: (_, { newsWatchList }) =>
			generalRequest(`${URL}/`, 'POST', newsWatchList),
		updateNewsWatchList: (_, { id, newsWatchList }) =>
			generalRequest(`${URL}/${id}`, 'PUT', newsWatchList),
		deleteNewsWatchList: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;