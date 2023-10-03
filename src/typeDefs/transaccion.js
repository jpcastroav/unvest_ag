export const transaccionTypeDef = `
    type Transaccion {
        id: Int!
        fecha: Date!
        tipo: Int!
        valor_accion: Float!
        cantidad: Float!
        id_empresa: Int!
        id_usuario: Int!

    }
    input TransaccionInput {
        fecha: Date!
        tipo: Int!
        valor_accion: Float!
        cantidad: Float!
        id_empresa: Int!
        id_usuario: Int!
    }
    `;

export const transaccionQueries = `
      allTransacciones: [Transaccion]!
      transaccionById(id: Int!): Transaccion!
  `;

export const transaccionMutations = `
    createTransaccion(transaccion: TransaccionInput!): Transaccion!
    updateTransaccion(id: Int!, transaccion: TransaccionInput!): Transaccion!
    deleteTransaccion(id: Int!): Int
`;