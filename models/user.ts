import { Schema, model } from "mongoose";
import {Enum_Rol} from "./enums"


interface User{
    correo:string;
    indentificacion:string;
    nombre:string;
    apellido:string;
    rol: Enum_Rol;
}

const userSchema = new Schema<User>({

    correo:{
        type:String,
        required:true,
    },
    indentificacion:{
        type:String,
        required:true,
        unique:true,
    },
    nombre:{
        type:String,
        required:true,
    },
    apellido:{
        type:String,
        required:true,
    },
    rol:{
        type:String,
        required:true,
        enum:Enum_Rol,
    },
     
});

const userModel = model("user", userSchema);

export {userModel}; 

//"user" úede ser una palabra cualquiera, es el nombre del modelo que va a llamar las funciones de mongoos