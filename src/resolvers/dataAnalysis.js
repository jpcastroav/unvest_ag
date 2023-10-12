import {generalRequest} from '../utilities';
import {port, url} from '../config/dataAnalysis';
import {validate} from "../auth/validate";

const URL = `http://${url}:${port}`

const resolvers = {
    Query: {
        getFutureByTicker: (_, { ticker, days }, context) => {
            return validate(context.token || '').then(() => {
                return generalRequest(`${URL}/price_prediction/${ticker}/${days}`, 'GET').then(r => {
                    return Object.entries(r).map(([timestamp, value]) => ({
                        timestamp: parseInt(timestamp), // Convert the key to an integer if needed
                        value: value,
                    }));
                })
            }).catch(err => {
                return err;
            });
        }
        /*
        query {
            getFutureByTicker (ticker: "AAPL", days: 30) {
                timestamp
                value
            }
        }
         */
        ,
        getRelevantByTicker: (_, { days }, context) => {
            return validate(context.token || '').then(() => {
                return generalRequest(`${URL}/relevant_stock/${days}`, 'GET').then(r => {
                    return r.map(({percentage_difference, symbol}) => ({
                        ticker: symbol,
                        value: percentage_difference,
                    }));
                })
            }).catch(err => {
                return err;
            });
        }
        /*
            query {
                getRelevantByTicker (days: 30) {
                    ticker
                    value
                }
            }
         */
        ,
        getValuableByTicker: (_, { days }, context) => {

            return validate(context.token || '').then(() => {
                return generalRequest(`${URL}/valuable_stock/${days}`, 'GET').then(r => {
                    console.log(r)
                    return r.map(({percentage_difference, symbol}) => ({
                        ticker: symbol,
                        value: percentage_difference,
                    }));
                })
            }).catch(err => {
                return err;
            });

        }
        /*
            query {
                getValuableByTicker (days: 30) {
                    ticker
                    value
                }
            }
         */
    }
}

export default resolvers;