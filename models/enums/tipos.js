import { gql } from 'apollo-server-express';

const tiposEnums = gql`

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

enum Enum_EstadoInscripcion{
    ACEPTADA
    RECHAZADA 
    PENDIENTE
}
    `
;

export {tiposEnums};

