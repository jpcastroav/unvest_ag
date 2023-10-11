import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/perfil';
import {validate} from "../auth/validate";

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allPerfiles: (_, __, context) => {
			return validate(context.token || '').then(() => {
				return getRequest(URL, '').then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
		perfilById: (_, { id }, context) => {

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
		createPerfil: (_, { perfil }, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/`, 'POST', perfil).then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
		updatePerfil: (_, { id, perfil }, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/${id}`, 'PUT', perfil).then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
		deletePerfil: (_, { id }, context) => {
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