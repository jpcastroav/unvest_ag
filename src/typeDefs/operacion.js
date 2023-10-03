export const operacionTypeDef = `
    type Operacion {
        id: Int!
        fecha: Date!
        tipo: Int!
        cantidad: Float!
        id_usuario: Int!
    }
    input OperacionInput {
        fecha: Date!
        tipo: Int!
        cantidad: Float!
        id_usuario: Int!
    }
    `;

export const operacionQueries = `
      allOperaciones: [Operacion]!
      operacionById(id: Int!): Operacion!
  `;

export const operacionMutations = `
    createOperacion(operacion: OperacionInput!): Operacion!
    updateOperacion(id: Int!, operacion: OperacionInput!): Operacion!
    deleteOperacion(id: Int!): Int
`;