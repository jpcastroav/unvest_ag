export const operacionTypeDef = `
    type Operacion {
    }
    input OperacionInput {
    }
    `;

export const operacionQueries = `
      allOperaciones: [Operacion]!
      operacionById(id: Int!): Operacion!
  `;

export const operacionMutations = `
    createOperacion(operacion: Operacion!): Operacion!
    updateOperacion(id: Int!, operacion: OperacionInput!): Operacion!
    deleteOperacion(id: Int!): Int
`;