import { gql } from 'apollo-server-express';

const tiposProyecto = gql`

scalar Date

    type Objetivo{
        _id:ID!
        descripcion:String!
        tipo:Enum_TipoObjetivo!
    }

    input crearObjetivo{
        _id:ID
        descripcion:String!
        tipo:Enum_TipoObjetivo!
    }

    type Proyecto{
        _id:ID!
        nombreProyecto:String!
        presupuesto:Float!
        fechaInicio: Date!
        fechaFin: Date!
        estado: Enum_EstadoProyecto!
        fase:Enum_FaseProyecto!
        lider: Usuario!
        objetivos: [Objetivo]
        avances:[Avance]
        inscripciones:[Inscripcion]
    }

    type Query{
        Proyectos:[Proyecto]
    }
    
    type Mutation{

        crearProyecto(
        nombreProyecto:String!
        presupuesto:Float!
        fechaInicio: Date!
        fechaFin: Date!
        estado: Enum_EstadoProyecto!
        fase:Enum_FaseProyecto!
        lider: String!
        objetivos:[crearObjetivo!]
        ):Proyecto

        aprobarInscripcion(
            id:String!
        ):Inscripcion 
    }

    `
;

export {tiposProyecto};

