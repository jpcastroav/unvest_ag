export const historicoTypeDef = `
    type Historico {
        _id: Int!
        relatedDate: Date!
        high: Float!
        low: Float!
        open: Float!
        close: Float!
        empresaTicker: String!
    }
    `;

export const historicoQueries = `
      historicoByTicker(ticker: String!): [Historico]!
  `;

export const historicoMutations = `

`;