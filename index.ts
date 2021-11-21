import conectarBD from "./db/db"
import {userModel} from "./models/user"
import {Enum_Rol}from  "./models/enums";


const main = async ()=> {
    await conectarBD();

    //CREAR UN USUARIO
    await userModel.create({
        correo:"klingerdiaz@gmail.com",
        indentificacion:"100246178798",
        nombre:"Deigo",
        apellido:"Klinger",
        rol:Enum_Rol.Estudiante,
    
    })

    .then((u) => {
        console.log("usuaroi creado :)",u)
    }).catch((e) => {
        console.log("error creando ususario ", e)
    })


    //OBTENER TODOS LOS USUARIOS
   /*  await userModel.find()
    .then((u)=>{
        console.log("usuarios",u);
    })
    .catch((e) => {
        console.log("error obteniendo usuarios ", e)})
    */
   };
main ();


//aca tengo parte del CRUD