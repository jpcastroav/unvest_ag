export const empresaRelacionadaTypeDef = `
    type EmpresaRelacionada {
    }
    input EmpresaRelacionadaInput {
    }
    `;

export const empresaRelacionadaQueries = `
      allEmpresaRelacionadas: [EmpresaRelacionada]!
      empresaRelacionadaById(id: Int!): EmpresaRelacionada!
  `;

export const empresaRelacionadaMutations = `
    createEmpresaRelacionada(empresaRelacionada: EmpresaRelacionada!): EmpresaRelacionada!
    updateEmpresaRelacionada(id: Int!, empresaRelacionada: EmpresaRelacionada!): EmpresaRelacionada!
    deleteEmpresaRelacionada(id: Int!): Int
`;