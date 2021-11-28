import conectarBD from "./db/db"
import {userModel} from "./models/user"
import {Enum_EstadoUsuaroi, Enum_FaseProyecto, Enum_Rol, Enum_TipoObjetivo}from  "./models/enums";
import { projectModel } from "./models/Projects";
import { ObjetiveModel } from "./models/objetivo";
import { inscripcionModel } from "./models/inscripcion";
import { advanceModel } from "./models/avances";

//metodologia one to many #1
const crearProyectpsConObjetivos = async () => {
    
    const nuevoUsuaroi = await userModel.create({
        correo:"micorreco@gmail.com",
        indentificacion:"10523456",
        nombre:"dacniel",
        apellido:"salamanca",
        rol:Enum_Rol.Administrador,
        estado: Enum_EstadoUsuaroi.Autorizado,

})

const nuevoProyecto = await projectModel.create({
        nombreProyecto: "proyecto 3",
        presupuesto:500.454,
        fechaInicio: Date.now(),
        fechaFin: new Date("2022/09/16"),
        lider:nuevoUsuaroi._id,
  
    })

const objectgeneral = await ObjetiveModel.create ({

        descripcion:"este es el primer obgetivo general",
        tipo:Enum_TipoObjetivo.General,
        proyecto:nuevoProyecto._id,    

})
  
const objectSpesifico1 = await ObjetiveModel.create ({

        descripcion:"este es el primer obgetivo espesifico",
        tipo:Enum_TipoObjetivo.Espesifico,
        proyecto:nuevoProyecto._id,    

})

const objectSpesifico2 = await ObjetiveModel.create ({

        descripcion:"este es el segundo obgetivo espesifico",
        tipo:Enum_TipoObjetivo.Espesifico,
        proyecto:nuevoProyecto._id,    

})
    .then((u) => {
        console.log("todo creado :)",u)
    }).catch((e) => {
        console.log("error creando objetivo ", e)
    })  
};
//consulta de los objetivos de la metodologia 1
const consultaObjetivos = async ()=> {
    

    const proyecto = await projectModel.findOne({_id:"qui poner el respectivo id"}); 

    const objetivos = await ObjetiveModel .find({project:"qui poner el respectivo id"}); 

    const proyectoConObgetivos = {...proyecto,objetivos:objetivos};
    console.log("el proyecto con los onjetivos es:",proyectoConObgetivos)


};

//metodologia 2
const crearProyectpsConObjetivosMetodo2 = async () => {

const nuevoUsuaroi = await userModel.create({
    correo:"micorreco@gmail.com",
    indentificacion:"10523456",
    nombre:"daniel",
    apellido:"salamanca",
    rol:Enum_Rol.Administrador,
    estado: Enum_EstadoUsuaroi.Autorizado,

})

const nuevoProyecto = await projectModel.create({
    nombreProyecto: "proyecto 3",
    presupuesto:500.454,
    fechaInicio: Date.now(),
    fechaFin: new Date("2022/09/16"),
    lider:nuevoUsuaroi._id,
    objetivos:[
        {descripcion:"objetivo general aqui",tipo: Enum_TipoObjetivo.General},
        {descripcion:"objetivo espesifico 1 aqui",tipo: Enum_TipoObjetivo.Espesifico},
        {descripcion:"objetivo espesifico 2 aqui",tipo: Enum_TipoObjetivo.Espesifico}
    ],

})
}
//consulta (query) del metodo 2
const consultacrearProyectpsConObjetivosMetodo2 = async () => {

    const proyectoCreado = await projectModel.find({id: "61a2df042d91e6217f3fa6b3"});
    console.log("proyecto creado",JSON.stringify(proyectoCreado));

}

const main = async () => {
    await conectarBD();
    
        const nuevoUsuaroi = await userModel.create({
            correo:"micorreco@gmail.com",
            indentificacion:"10523456",
            nombre:"dacniel",
            apellido:"salamanca",
            rol:Enum_Rol.Estudiante,
            estado: Enum_EstadoUsuaroi.Autorizado,
    
    })
    
        const nuevoProyecto = await projectModel.create({
            nombreProyecto: "proyecto 3",
            presupuesto: 500.454,
            fechaInicio: Date.now(),
            fechaFin: new Date("2022/09/16"),
            lider: nuevoUsuaroi._id,
            objetivos:[
                {descripcion:"objetivo general aqui",tipo: Enum_TipoObjetivo.General},
                {descripcion:"objetivo espesifico 1 aqui",tipo: Enum_TipoObjetivo.Espesifico},
                {descripcion:"objetivo espesifico 2 aqui",tipo: Enum_TipoObjetivo.Espesifico}
            ],

        })

        const inscripcion = await inscripcionModel.create({

            proyecto: nuevoProyecto._id,
            estudiante: nuevoUsuaroi._id,
            fechaingreso: Date.now(),
            fechaegreso: new Date("2022/03/04"),

        })

        const avance = await advanceModel.create({

            proyecto: nuevoProyecto._id,
            fecha: Date.now(),
            descripcion: "este es una avance del proyecto",
            observaciones: ["toca mejorar"],
            creador: nuevoUsuaroi._id,

        })
    
}; 

main ();

//CREAR UN USUARIO
    /* await userModel.create({
        correo:"keller@jijija.com",
        indentificacion:"42090",
        nombre:"Keller",
        apellido:"klinger",
        rol:Enum_Rol.Estudiante,
    
    })

    .then((u) => {
        console.log("usuaroi creado :)",u)
    }).catch((e) => {
        console.log("error creando ususario ", e)
    }) */


    //OBTENER TODOS LOS USUARIOS
    /* await userModel.find()
    .then((u)=>{
        console.log("usuarios",u);
    })
    .catch((e) => {
        console.log("error obteniendo usuarios ", e)}) */
   

    //OBTENER UN SOLO USUARIO, SEGUN UN FILTRO (SEGUNDA OPCION DEL ANTERIOR CODIGO DE OBTENER)
   /*  await userModel.findOne({rol:Enum_Rol.Estudiante})
        .then((u)=>{
            console.log("usuario actualizado",u);
        })
        .catch((e) => {
            console.log("error actualizando ", e)}); */
        
    

    //EDITAR TODOS LOS USUARIOS
    /* await userModel.findOneAndUpdate({rol:Enum_Rol.Estudiante},
    {   
        nombre:"Raul",
        apellido: "klinger",
        indentificacion: "1234567"
    })
    .then((u)=>{
        console.log("usuario actualizado",u);
    })
    .catch((e) => {
        console.log("error actualizando ", e)}) */

  

   //ELIMINIAR UN USUARIO 
   /* await userModel.findOneAndDelete({rol:Enum_Rol.Estudiante})
    .then((u)=>{
        console.log("usuario actualizado",u);
    })
    .catch((e) => {
        console.log("error actualizando ", e)}); */
   
//aca arriba esta todo el CRUD


