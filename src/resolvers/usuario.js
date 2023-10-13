import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/usuario';
import {validate} from "../auth/validate";

const URL = `http://${url}:${port}`;

const resolvers = {
	Query: {
		allUsuarios: (_, __, context) => {
			return validate(context.token || '').then(r => {
				if ( r === "ADM") {
					return generalRequest(`${URL}/users`, 'GET').then(r => {
						return r;
					})
				} else {
					throw new Error("Unauthorized");
				}
			}).catch(err => {
				return err;
			});
		},
		usuarioById: (_, { id }, context) => {
			return validate(context.token || '').then(r => {
				if ( r === "ADM") {
					return generalRequest(`${URL}/user/${id}`, 'GET').then(r => {
						return r;
					})
				} else {
					throw new Error("Unauthorized");
				}
			}).catch(err => {
				return err;
			});
		},
		getIDUsuario: (_, __, context) => {
			return validate(context.token || '').then(() => {
				const tokenWithoutBearer = context.token.replace('Bearer ', '');
				return generalRequest(`${URL}/getID?token=${tokenWithoutBearer}`, 'GET').then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		}
	},
	Mutation: {
		createUsuario: (_, { usuario }) =>
			generalRequest(`${URL}/saveUser`, 'POST', usuario),
		updateUsuario: (_, { id, usuario }, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/updateUser/${id}`, 'PUT', usuario).then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
		deleteUsuario: (_, { id }, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/deleteUser/${id}`, 'DELETE').then(r => {
					return r.message;
				})
			}).catch(err => {
				return err;
			});
		},
		loginUsuario: (_, { usuario }) =>
			generalRequest(`${URL}/login`, 'POST', usuario),
	}
};

export default resolvers;