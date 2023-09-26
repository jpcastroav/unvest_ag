export const empresaRelacionadaTypeDef = `
    type EmpresaRelacionada {
        _id: Int!
        ticker: String!
        Puntuacion_de_relevancia: Float!
        Puntuacion_de_sentimiento: Float!
        etiqueta_del_sentimiento: String!
        id_noticia: String!
    }
    input EmpresaRelacionadaInput {
        ticker: String!
        Puntuacion_de_relevancia: Float!
        Puntuacion_de_sentimiento: Float!
        etiqueta_del_sentimiento: String!
        id_noticia: String!
    }
    `;

export const empresaRelacionadaQueries = `
      allEmpresaRelacionadas: [EmpresaRelacionada]!
      empresaRelacionadaById(id: String!): EmpresaRelacionada!
  `;

export const empresaRelacionadaMutations = `
    createEmpresaRelacionada(empresaRelacionada: EmpresaRelacionadaInput!): EmpresaRelacionada!
    updateEmpresaRelacionada(id: String!, empresaRelacionada: EmpresaRelacionadaInput!): EmpresaRelacionada!
    deleteEmpresaRelacionada(id: String!): String
`;