export const usuarioTypeDef = `
    type Usuario {
        id: Int!
        nombre_usuario: String!
        password: String!
        activo: Boolean!
    }
    input UsuarioInput {
        nombre_usuario: String!
        password: String!
        activo: Boolean!
    }
    `;

export const usuarioQueries = `
      allUsuarios: [Usuario]!
      usuarioById(id: Int!): Usuario!
  `;

export const usuarioMutations = `
    createUsuario(usuario: UsuarioInput!): Usuario!
    updateUsuario(id: Int!, usuario: UsuarioInput!): Usuario!
    deleteUsuario(id: Int!): Int
`;