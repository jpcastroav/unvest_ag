export const balanceTypeDef = `
    type Balance {
        id: Int!
        valor: Float!
        id_usuario: Int!
    }
    input BalanceInput {
        valor: Float!
        id_usuario: Int!
    }
    `;

export const balanceQueries = `
      allBalances: [Balance]!
      balanceById(id: Int!): Balance!
      balanceByUserId(userId: Int!): Balance!
  `;

export const balanceMutations = `
    createBalance(balance: BalanceInput!): Balance!
`;