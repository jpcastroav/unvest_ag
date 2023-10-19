import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/newsWatchList';
import {validate} from "../auth/validate";

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	/*
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
	*/
	Query: {
		allNewsWatchLists: (_, __, context) => {
			return validate(context.token || '').then(() => {
				return getRequest(URL, '').then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
        newsWatchListById: (_, { id }, context) => {
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
		createNewsWatchList: (_, { newsWatchList }) => {

			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/`, 'POST', newsWatchList).then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
		updateNewsWatchList: (_, { id, newsWatchList }) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/${id}`, 'PUT', newsWatchList).then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
		deleteNewsWatchList: (_, { id }) => {

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