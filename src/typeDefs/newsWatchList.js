export const newsWatchListTypeDef = `
    type NewsWatchList {
        id: Int!
        id_news: Int!
    }   
    input NewsWatchListInput {
        id_news: Int!
    }
    `;

export const newsWatchListQueries = `
      allNewsWatchLists: [NewsWatchList]!
      newsWatchListById(id: Int!): NewsWatchList!
  `;

export const newsWatchListMutations = `
    createNewsWatchList(newsWatchList: NewsWatchListInput!): NewsWatchList!
    updateNewsWatchList(id: Int!, newsWatchList: NewsWatchListInput!): NewsWatchList!
    deleteNewsWatchList(id: Int!): Int
`;