import {generalRequest, getRequest} from '../utilities';
import {url, port} from '../config/historico';
import {validate} from "../auth/validate";

const URL = `http://${url}:${port}`;

const resolvers = {
    Query: {
        historicoByTicker: (_, {ticker}, context) => {
            return validate(context.token || '').then(() => {
                return generalRequest(`${URL}/get/historic/${ticker}`, 'GET').then(r => {
                    return r.data.historic;
                })
            }).catch(err => {
                return err;
            });
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