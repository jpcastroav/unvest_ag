export const temaTypeDef = `
    type Tema {
    }
    input TemaInput {
    }
    `;

export const temaQueries = `
      allTemas: [Tema]!
      temaById(id: Int!): Tema!
  `;

export const temaMutations = `
    createTema(tema: Tema!): Tema!
    updateTema(id: Int!, tema: TemaInput!): Tema!
    deleteTema(id: Int!): Int
`;