export const newsWatchListTypeDef = `
    type NewsWatchList {
    }
    input NewsWatchListInput {
    }
    `;

export const newsWatchListQueries = `
      allNewsWatchLists: [NewsWatchList]!
      newsWatchListById(id: Int!): NewsWatchList!
  `;

export const newsWatchListMutations = `
    createNewsWatchList(newsWatchList: NewskWatchListInput!): NewsWatchList!
    updateNewsWatchList(id: Int!, newsWatchList: NewsWatchListInput!): NewsWatchList!
    deleteNewsWatchList(id: Int!): Int
`;