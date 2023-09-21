export const stockWatchListTypeDef = `
    type StockWatchList {
    }
    input StockWatchListInput {
    }
    `;

export const stockWatchListQueries = `
      allStockWatchLists: [StockWatchList]!
      stockWatchListById(id: Int!): StockWatchList!
  `;

export const stockWatchListMutations = `
    createStockWatchList(stockWatchList: StockWatchListInput!): StockWatchList!
    updateStockWatchList(id: Int!, stockWatchList: StockWatchListInput!): StockWatchList!
    deleteStockWatchList(id: Int!): Int
`;