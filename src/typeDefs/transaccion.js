export const transaccionTypeDef = `
    type Transaccion {
    }
    input TransaccionInput {
    }
    `;

export const transaccionQueries = `
      allTransacciones: [Transaccion]!
      transaccionById(id: Int!): Transaccion!
  `;

export const transaccionMutations = `
    createTransaccion(transaccion: Transaccion!): Transaccion!
    updateTransaccion(id: Int!, transaccion: TransaccionInput!): Transaccion!
    deleteTransaccion(id: Int!): Int
`;