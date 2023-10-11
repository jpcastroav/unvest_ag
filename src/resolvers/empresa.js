import { generalRequest, getRequest } from '../utilities';
import { url, port } from '../config/empresa';
import { validate } from "../auth/validate";

const URL = `http://${url}:${port}`;

const resolvers = {
	Query: {
		createEmpresaByTicker: (_, { ticker }, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/create/empresa/${ticker}`, 'POST').then(r => {
					return r.message;
				})
			}).catch(err => {
				return err;
			});
		},
/*
	query {
  		createEmpresaByTicker (ticker: "AMZN")
	}
 */
		getEmpresaByTicker: (_, { ticker }, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/get/empresa/${ticker}`, 'GET').then(r => {
					return r.data.empresa;
				})
			}).catch(err => {
				return err;
			});
		},
/*
	query {
  		getEmpresaByTicker (ticker: "AAPL") {
    		ticker,
    		descripcion
  			}
	}
 */
		getEmpresas: (_, __, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/get/empresas`, 'GET').then(r => {
					return r.data.empresas;
				})
			}).catch(err => {
				return err;
			});
		}
	},
/*
	query {
  		getEmpresas {
    		ticker,
    		descripcion
  		}
	}
 */

	Mutation: {
		updateEmpresa: (_, { id, empresa }, context) => {
			return validate(context.token || '').then(r => {
				return generalRequest(`${URL}/update/empresa/${id}`, 'PUT', empresa).then(r => {
					return r.data.empresa;
				})
			}).catch(err => {
				return err;
			});
		},
		/*
			mutation {
  				updateEmpresa (id: "650074d36d830245ff8c0b2a", empresa: {
    				ticker: "AAPL"
					nombre: "Apple Inc"
					descripcion: "Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services. Apple is the world's largest technology company by revenue (totalling $274.5 billion in 2020) and, since January 2021, the world's most valuable company. As of 2021, Apple is the world's fourth-largest PC vendor by unit sales, and fourth-largest smartphone manufacturer. It is one of the Big Five American information technology companies, along with Amazon, Google, Microsoft, and Facebook."
					sector: "TECHNOLOGY"
					industria: "ELECTRONIC COMPUTERS"
					direccion: "ONE INFINITE LOOP, CUPERTINO, CA, US"
				}) {
						nombre
				}
			}
 		*/
	}
};

export default resolvers;