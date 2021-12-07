import { gql } from 'apollo-server-express';

const typeDefs = gql`

scalar Date

enum Enum_EstadoUsuario{
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
}

enum Enum_Rol{
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
}  

enum Enum_EstadoProyecto{
    ACTIVO
    INACTIVO  
} 

enum Enum_FaseProyecto{
    INICIADO
    DESARROLLO
    TERMINDADO
    NULO
} 

enum Enum_TipoObjetivo{
    GENERAL
    ESPESIFICO
} 

    type Usuario{
        _id:ID!
        nombre:String!
        apellido:String!
        identificacion:String!
        correo:String!
        estado:Enum_EstadoUsuario!
        rol: Enum_Rol!
    }

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
    }

    type Query{
        Usuarios:[Usuario]
        
        Usuario(_id:String!): Usuario

        Proyectos:[Proyecto]
    }
    
    type Mutation{

        crearUsuario(

            nombre:String!
            apellido:String!
            identificacion:String!
            correo:String!
            estado:Enum_EstadoUsuario
            rol: Enum_Rol!

        ):Usuario

        eliminarUsuario(_id: String correo: String): Usuario

        editarUsuario(
            nombre:String!
            apellido:String!
            identificacion:String!
            correo:String!
            estado:Enum_EstadoUsuario
            rol: Enum_Rol!
            ):Usuario

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
    }

    `
;

export {typeDefs};