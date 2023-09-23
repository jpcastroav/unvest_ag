import {generalRequest, getRequest} from '../utilities';
import {url, port} from '../config/historico';

const URL = `http://${url}:${port}`;

const resolvers = {
    Query: {
        historicoByTicker: (_, {ticker}) => {
            return generalRequest(`${URL}/get/historic/${ticker}`, 'GET').then(r => {
                return r.data.historic;
            })
        },
    }, Mutation: {

    }
};

/*

query {
  historicoByTicker(ticker: "AAPL") {
    close
  }
}

 */

export default resolvers;