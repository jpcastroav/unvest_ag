export const empresaTypeDef = `
    type Empresa {
        _id: String!
        ticker: String!
        nombre: String!
        descripcion: String!
        sector: String!
        industria: String!
        direccion: String!
    }
    input EmpresaInput {
        ticker: String!
        nombre: String!
        descripcion: String!
        sector: String!
        industria: String!
        direccion: String!
    }
    `;

export const empresaQueries = `
    createEmpresaByTicker(ticker: String!): String!
    getEmpresaByTicker(ticker: String!): Empresa!
    getEmpresas: [Empresa]!
  `;

export const empresaMutations = `
    updateEmpresa(id: String!, empresa: EmpresaInput!): Empresa!
`;