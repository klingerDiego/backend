import { gql } from "apollo-server-express";

const tiposAvance = gql`
  type Avance {
    _id: ID!  
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creador: Usuario!
  }

  type Query {
    Avances: [Avance]
  }

  type Mutation {
    crearAvance(
      fecha: Date!,
      descripcion: String!,
      proyecto: String!,
      creador: String!,
    ): Avance
  }
`;
export { tiposAvance };
