import {generalRequest, getRequest} from '../utilities';
import {url, port, entryPoint} from '../config/noticia';


const URL = `http://${url}:${port}/${entryPoint}`;
const resolvers = {
    Query: {
        allNoticias: (_) => getRequest(`${URL}/news`, ''),
        noticiaByTicker: (_, {ticker}) => getRequest(`${URL}/news/${ticker}`, '')
    }
};

export default resolvers;