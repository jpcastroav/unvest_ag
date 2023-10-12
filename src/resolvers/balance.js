import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/balance';
import { urlAuth, portAuth, entryPointAuth } from "../config/usuario";
import {validate} from "../auth/validate";

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allBalances: (_, __, context) => {
			return validate(context.token || '').then(() => {
				return getRequest(URL, '').then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
        balanceById: (_, { id }, context) => {
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
		createBalance: (_, { balance }) => {

			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/`, 'POST', balance).then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
		updateBalance: (_, { id, balance }) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/${id}`, 'PUT', balance).then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
		deleteBalance: (_, { id }) => {

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