export const empresaTypeDef = `
    type Empresa {
    }
    input EmpresaInput {
    }
    `;

export const empresaQueries = `
      allEmpresas: [Empresa]!
      empresaById(id: Int!): Empresa!
  `;

export const empresaMutations = `
    createEmpresa(empresa: Empresa!): Empresa!
    updateEmpresa(id: Int!, empresa: EmpresaInput!): Empresa!
    deleteEmpresa(id: Int!): Int
`;