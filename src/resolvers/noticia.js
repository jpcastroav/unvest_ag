import {generalRequest, getRequest} from '../utilities';
import {url, port, entryPoint} from '../config/noticia';
import {validate} from "../auth/validate";


const URL = `http://${url}:${port}/${entryPoint}`;
const resolvers = {
    Query: {
        allNoticias: (_, __, context) => {
            return validate(context.token || '').then(() => {
                getRequest(`${URL}/news`, '').then(r => {
                    return r;
                });
            }).catch(err => {
                return err;
            });
        },
        noticiaByTicker: (_, {ticker}, context) => {
            return validate(context.token || '').then(() => {
                getRequest(`${URL}/news/${ticker}`, '').then(r => {
                    return r;
                });
            }).catch(err => {
                return err;
            });
        }
    }
};

export default resolvers;