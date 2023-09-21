export const historicoTypeDef = `
    type Historico {
    }
    input HistoricoInput {
    }
    `;

export const historicoQueries = `
      allHistoricos: [Historico]!
      historicoById(id: Int!): Historico!
  `;

export const historicoMutations = `
    createHistorico(historico: Historico!): Historico!
    updateHistorico(id: Int!, historico: HistoricoInput!): Historico!
    deleteHistorico(id: Int!): Int
`;