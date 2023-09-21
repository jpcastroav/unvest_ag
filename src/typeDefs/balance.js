export const balanceTypeDef = `
    type Balance {
    }
    input BalanceInput {
    }
    `;

export const balanceQueries = `
      allBalances: [Balance]!
      balanceById(id: Int!): Balance!
  `;

export const balanceMutations = `
    createBalance(balance: Balance!): Balance!
    updateBalance(id: Int!, balance: BalanceInput!): Balance!
    deleteBalance(id: Int!): Int
`;