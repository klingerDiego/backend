import { gql } from 'apollo-server-express';

const tipoUsuario = gql`

    type Usuario{
        _id:ID!
        nombre:String!
        apellido:String!
        identificacion:String!
        correo:String!
        estado:Enum_EstadoUsuario!
        rol: Enum_Rol!
    }

    type Query{
        Usuarios:[Usuario]
        
        Usuario(_id:String!): Usuario

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
    }

    `
;

export {tipoUsuario};

