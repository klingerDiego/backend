enum Enum_Rol{
    Estudiante="Estudiante",
    Lider="Lider",
    Administrador="Administrador",
}  

enum Enum_EstadoUsuaroi{
    Pendiente="Pendiente",
    Autorizado="Autorizado",
    NoAutorizado="No autorizado",
} 

enum Enum_FaseProyecto{
    Iniciado="Iniciado",
    Desarrollo="desarrollo",
    Termindado="Termindado",
    Nulo="",
} 

enum Enum_EstadoProyecto{
    Activo="Activo",
    Inactivo="Inactivo",
    
} 

enum Enum_TipoObjetivo{
    General="General",
    Espesifico="Espesifico",
} 

enum Enum_EstadoInscripcion{
    aceptada="aceptada",
    rechazada="rechazada",
}


export{Enum_EstadoUsuaroi, Enum_Rol,Enum_FaseProyecto, Enum_EstadoProyecto, Enum_TipoObjetivo,Enum_EstadoInscripcion} 