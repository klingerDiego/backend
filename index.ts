import conectarBD from "./db/db"
import {userModel} from "./models/user"
import {Enum_Rol}from  "./models/enums";


const main = async ()=> {
    await conectarBD();

    //crear un usuario
    await userModel.create({
        correo:"klingerdiaz@gmail.com",
        indentificacion:"10024617878",
        nombre:"Deigo",
        apellido:"Klinger",
        rol:Enum_Rol.Administrador,
    
    })

    .then((u) => {
        console.log("usuaroi creado :)",u)
    }).catch((e) => {
        console.log("error creando ususario ", e)
    })


    //obtener los usuarios 
   /*  await userModel.find()
    .then((u)=>{
        console.log("usuarios",u);
    })
    .catch((e) => {
        console.log("error obteniendo usuarios ", e)})
    */
   };
main ();