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
    
    type NoticiaDTO {
        article: Noticia!
        topics: [Tema]!
        tickers: [EmpresaRelacionada]!
    }
    `;

export const noticiaQueries = `
      allNoticias: [NoticiaDTO]!
      noticiaByTicker(ticker: String!): [NoticiaDTO]!
  `;

/*export const noticiaMutations = `

`;*/