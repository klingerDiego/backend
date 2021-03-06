import { gql } from 'apollo-server-express';

const tiposInscripcion = gql`

    type Inscripcion{
        _id:ID!
        estado: Enum_EstadoInscripcion!
        fechaIngredo:Date
        fechaEgreso:Date
        proyecto:Proyecto!
        estudiante: Usuario!
    }

    type Query{
        Inscripciones:[Inscripcion]
    }

    type Mutation{
        crearInscripcion(
            estado: Enum_EstadoInscripcion!
            proyecto: String!
            estudiante: String!
        ):Inscripcion
     }
`;


export {tiposInscripcion};