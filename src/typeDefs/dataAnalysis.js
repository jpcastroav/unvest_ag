export const dataAnalysisTypeDef = `
    type Prediction {
        timestamp: String!
        value: Float!
    }
    type Stock {
        ticker: String!
        value: Float!
    }
    `;

export const dataAnalysisQueries = `
    getFutureByTicker(ticker: String!, days: Int!): [Prediction]!
    getRelevantByTicker(days: Float!): [Stock]!
    getValuableByTicker(days: Float!): [Stock]!
  `;

export const dataAnalysisMutations = `
    
`;