import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/stockWatchList';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allStockWatchLists: (_) =>
			getRequest(URL, ''),
        stockWatchListById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createStockWatchList: (_, { stockWatchList }) =>
			generalRequest(`${URL}/`, 'POST', stockWatchList),
		updateStockWatchList: (_, { id, stockWatchList }) =>
			generalRequest(`${URL}/${id}`, 'PUT', stockWatchList),
		deleteStockWatchList: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;