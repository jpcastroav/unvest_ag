export const stockWatchListTypeDef = `
    type StockWatchList {
        id: Int!
        id_stock: Int!
    }
    input StockWatchListInput {
        id_stock: Int!
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