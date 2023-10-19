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
    type OwnedStock {
        id_empresa: Int!
        cantidad: Float!
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
      getOwnedStocks(userId: Int!): [OwnedStock]!
  `;

export const transaccionMutations = `
    createTransaccion(transaccion: TransaccionInput!): Transaccion!
`;