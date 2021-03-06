import conectarBD from "./db/db"
import {UserModel} from "./models/usuario/usuario"
import {Enum_EstadoUsuaroi, Enum_FaseProyecto, Enum_Rol, Enum_TipoObjetivo}from  "./models/enums/enum";
import { projectModel } from "./models/proyecto/proyecto";
import { ObjetiveModel } from "./models/objetivo";
import { inscripcionModel } from "./models/inscripcion/inscripcion";
import { advanceModel } from "./models/avances/avance";

//metodologia one to many #1
const crearProyectpsConObjetivos = async () => {
    
    const nuevoUsuaroi = await UserModel.create({
        correo:"micorreco@gmail.com",
        identificacion:"10523456",
        nombre:"dacniel",
        apellido:"salamanca",
        rol:Enum_Rol.ADMINISTRADOR,
        estado: Enum_EstadoUsuaroi.AUTORIZADO,

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
        tipo:Enum_TipoObjetivo.GENERAL,
        proyecto:nuevoProyecto._id,    

})
  
const objectSpesifico1 = await ObjetiveModel.create ({

        descripcion:"este es el primer obgetivo espesifico",
        tipo:Enum_TipoObjetivo.ESPESIFICO,
        proyecto:nuevoProyecto._id,    

})

const objectSpesifico2 = await ObjetiveModel.create ({

        descripcion:"este es el segundo obgetivo espesifico",
        tipo:Enum_TipoObjetivo.ESPESIFICO,
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

const nuevoUsuaroi = await UserModel.create({
    correo:"micorreco@gmail.com",
    identificacion:"10523456",
    nombre:"daniel",
    apellido:"salamanca",
    rol:Enum_Rol.ADMINISTRADOR,
    estado: Enum_EstadoUsuaroi.AUTORIZADO,

})

const nuevoProyecto = await projectModel.create({
    nombreProyecto: "proyecto 3",
    presupuesto:500.454,
    fechaInicio: Date.now(),
    fechaFin: new Date("2022/09/16"),
    lider:nuevoUsuaroi._id,
    objetivos:[
        {descripcion:"objetivo general aqui",tipo: Enum_TipoObjetivo.GENERAL},
        {descripcion:"objetivo espesifico 1 aqui",tipo: Enum_TipoObjetivo.ESPESIFICO},
        {descripcion:"objetivo espesifico 2 aqui",tipo: Enum_TipoObjetivo.ESPESIFICO}
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
    
        const nuevoUsuaroi = await UserModel.create({
            correo:"micorre@gmail.com",
            identificacion:"105234",
            nombre:"dacniel",
            apellido:"salamanca",
            rol:Enum_Rol.ESTUDIANTE,
            estado: Enum_EstadoUsuaroi.AUTORIZADO,
    
    })
    
        const nuevoProyecto = await projectModel.create({
            nombreProyecto: "proyecto 3",
            presupuesto: 500.454,
            fechaInicio: Date.now(),
            fechaFin: new Date("2022/09/16"),
            lider: nuevoUsuaroi._id,
            objetivos:[
                {descripcion:"objetivo general aqui",tipo: Enum_TipoObjetivo.GENERAL},
                {descripcion:"objetivo espesifico 1 aqui",tipo: Enum_TipoObjetivo.ESPESIFICO},
                {descripcion:"objetivo espesifico 2 aqui",tipo: Enum_TipoObjetivo.ESPESIFICO}
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
    /* await UserModel.create({
        correo:"keller@jijija.com",
        identificacion:"42090",
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
    /* await UserModel.find()
    .then((u)=>{
        console.log("usuarios",u);
    })
    .catch((e) => {
        console.log("error obteniendo usuarios ", e)}) */
   

    //OBTENER UN SOLO USUARIO, SEGUN UN FILTRO (SEGUNDA OPCION DEL ANTERIOR CODIGO DE OBTENER)
   /*  await UserModel.findOne({rol:Enum_Rol.Estudiante})
        .then((u)=>{
            console.log("usuario actualizado",u);
        })
        .catch((e) => {
            console.log("error actualizando ", e)}); */
        
    

    //EDITAR TODOS LOS USUARIOS
    /* await UserModel.findOneAndUpdate({rol:Enum_Rol.Estudiante},
    {   
        nombre:"Raul",
        apellido: "klinger",
        identificacion: "1234567"
    })
    .then((u)=>{
        console.log("usuario actualizado",u);
    })
    .catch((e) => {
        console.log("error actualizando ", e)}) */

  

   //ELIMINIAR UN USUARIO 
   /* await UserModel.findOneAndDelete({rol:Enum_Rol.Estudiante})
    .then((u)=>{
        console.log("usuario actualizado",u);
    })
    .catch((e) => {
        console.log("error actualizando ", e)}); */
   
//aca arriba esta todo el CRUD


