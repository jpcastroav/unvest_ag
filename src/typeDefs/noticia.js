export const noticiaTypeDef = `
    type Noticia {
    }
    input NoticiaInput {
    }
    `;

export const noticiaQueries = `
      allNoticias: [Noticia]!
      noticiaById(id: Int!): Noticia!
  `;

export const noticiaMutations = `
    createNoticia(noticia: Noticia!): Noticia!
    updateNoticia(id: Int!, noticia: NoticiaInput!): Noticia!
    deleteNoticia(id: Int!): Int
`;