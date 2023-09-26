export const noticiaTypeDef = `
    type Noticia {
        _id: String!
        titulo: String!
        url: String! 
        Fecha_de_publicacion: String!
        Resumen: String!
        imagen_del_banner: String!
        fuente: String!
        puntuacion_del_sentimiento_general: Float!
        etiqueta_del_sentimiento_general: String!
    }
    input NoticiaInput {
        titulo: String!
        url: String! 
        Fecha_de_publicacion: String!
        Resumen: String!
        imagen_del_banner: String!
        fuente: String!
        puntuacion_del_sentimiento_general: Float!
        etiqueta_del_sentimiento_general: String!
    }
    `;

export const noticiaQueries = `
      allNoticias: [Noticia]!
      noticiaById(id: String!): Noticia!
  `;

export const noticiaMutations = `
    createNoticia(noticia: NoticiaInput!): Noticia!
    updateNoticia(id: String!, noticia: NoticiaInput!): Noticia!
    deleteNoticia(id: String!): String
`;