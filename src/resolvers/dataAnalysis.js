import {generalRequest} from '../utilities';
import {port, url} from '../config/dataAnalysis';

const URL = `http://${url}:${port}`

const resolvers = {
    Query: {
        getFutureByTicker: (_, { ticker, days }) => {
            return generalRequest(`${URL}/price_prediction/${ticker}/${days}`, 'GET').then(r => {
                return Object.entries(r).map(([timestamp, value]) => ({
                    timestamp: parseInt(timestamp), // Convert the key to an integer if needed
                    value: value,
                }));
            })
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
        getRelevantByTicker: (_, { days } ) => {
            return generalRequest(`${URL}/relevant_stock/${days}`, 'GET').then(r => {
                return r.map(({percentage_difference, symbol}) => ({
                    ticker: symbol,
                    value: percentage_difference,
                }));
            })
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
        getValuableByTicker: (_, { days } ) => {
            return generalRequest(`${URL}/valuable_stock/${days}`, 'GET').then(r => {
                console.log(r)
                return r.map(({percentage_difference, symbol}) => ({
                    ticker: symbol,
                    value: percentage_difference,
                }));
            })
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