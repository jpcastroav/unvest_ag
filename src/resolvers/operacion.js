import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/operacion';
import {validate} from "../auth/validate";

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allOperaciones: (_, __, context) => {
			return validate(context.token || '').then(() => {
				return getRequest(URL, '').then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			})
		},
        operacionById: (_, { id }, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/${id}`, 'GET').then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			})
		},
	},
	Mutation: {
		createOperacion: (_, { operacion }, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/`, 'POST', operacion).then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			})
		},
		updateOperacion: (_, { id, operacion }, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/${id}`, 'PUT', operacion).then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			})
		},
		deleteOperacion: (_, { id }, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/${id}`, 'DELETE').then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			})
		}
	}
};

export default resolvers;