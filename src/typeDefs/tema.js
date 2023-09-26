export const temaTypeDef = `
    type Tema {
        _id: String!
        Nombre_del_tema: String!
        Puntuacion_de_relevancia: Float!
        id_noticia: String!
    }
    input TemaInput {
        Nombre_del_tema: String!
        Puntuacion_de_relevancia: Float!
        id_noticia: String!
    }
    `;

export const temaQueries = `
      allTemas: [Tema]!
      temaById(id: String!): Tema!
  `;

export const temaMutations = `
    createTema(tema: TemaInput!): Tema!
    updateTema(id: String!, tema: TemaInput!): Tema!
    deleteTema(id: String!): String
`;