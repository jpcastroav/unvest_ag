export const usuarioTypeDef = `
    type Usuario {
        idUser: Int!
        nameUser: String!
        passwordUser: String!
        roleUser: String!
        activeUser: Boolean!
    }
    input UsuarioInput {
        nameUser: String!
        passwordUser: String!
        roleUser: String!
        activeUser: Boolean!
    }
    
    input UsuarioLogin {
        nameUser: String!
        passwordUser: String!
    }
    `;

export const usuarioQueries = `
      allUsuarios: [Usuario]!
      usuarioById(id: Int!): Usuario!
      getIDUsuario: String!
  `;

export const usuarioMutations = `
    createUsuario(usuario: UsuarioInput!): Usuario!
    updateUsuario(id: Int!, usuario: UsuarioInput!): Usuario!
    deleteUsuario(id: Int!): Int
    loginUsuario(usuario: UsuarioLogin!): String!
`;