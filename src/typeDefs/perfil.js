export const perfilTypeDef = `
    type Perfil {
        id: Int!
        id_usuario: Int!
        nombre: String!
        apellido: String!
        correo: String!
        telefono: String!
        imagen: String!
    }
    input PerfilInput {
        id_usuario: Int!
        nombre: String!
        apellido: String!
        correo: String!
        telefono: String!
        imagen: String!
    }
    `;

export const perfilQueries = `
      allPerfiles: [Perfil]!
      perfilById(id: Int!): Perfil!
  `;

export const perfilMutations = `
    createPerfil(perfil: PerfilInput!): Perfil!
    updatePerfil(id: Int!, perfil: PerfilInput!): Perfil!
    deletePerfil(id: Int!): Int
`;