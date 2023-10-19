import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/stockWatchList';
import {validate} from "../auth/validate";

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	/*
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
	*/

	Query: {
		allStockWatchLists: (_, __, context) => {
			return validate(context.token || '').then(() => {
				return getRequest(URL, '').then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
        stockWatchListById: (_, { id }, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/${id}`, 'GET').then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
	},
	Mutation: {
		createStockWatchList: (_, { stockWatchList }) => {

			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/`, 'POST', stockWatchList).then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
		updateStockWatchList: (_, { id, stockWatchList }) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/${id}`, 'PUT', stockWatchList).then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
		deleteStockWatchList: (_, { id }) => {

			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/${id}`, 'DELETE').then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		}
	}

};

export default resolvers;