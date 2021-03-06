import mongoose from "mongoose";

const {Schema, model}=mongoose;

/* import { Enum_EstadoUsuaroi, Enum_Rol } from "../enums/enum.js"
 */

/* interface User {
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: Enum_Rol;
    estado: Enum_EstadoUsuaroi;
    proyectosLiderados: [string]
}
 */
const userSchema = new Schema({

    correo: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => {
                
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email); //esta es una expreseion regular, buscar en internet

                /* if(email.includes("@") && email.includes(".")){
                    return true;
                }
                else{
                    return false;
                } */
            },
            message:"el formato de correo electronico no es correcto",
        },
        
    },
    identificacion: {
        type: String,
        required: true,
        unique: true,
      },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        required: true,
        enum: ["ESTUDIANTE","LIDER","ADMINSITRADOR"],
    },
    estado: {
        type: String,
        required: true,
        enum: ["PENDIENTE","AUTORIZADO","NO_AUTORIZADO"],
        default:"PENDIENTE",
    },

}   );

const UserModel = model("user", userSchema);

export { UserModel };

//"user" puede ser una palabra cualquiera, es el nombre del modelo que va a llamar las funciones de mongoos

//en este archivo estoy creando los documentos(correo,nombre...) de la coleccion users