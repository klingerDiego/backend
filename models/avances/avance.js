import mongoose from "mongoose";
import { projectModel } from "../proyecto/proyecto.js";
import {UserModel} from "../usuario/usuario.js"

const {Schema, model}=mongoose;

/* interface Avance{

    proyecto: Schema.Types.ObjectId,
    fecha: Date,
    descripcion: string,
    observaciones:[string],
    creador:Schema.Types.ObjectId,

} */

const advance = new Schema ({

        proyecto:{
            type:Schema.Types.ObjectId,
            ref:projectModel,
            required:true,
        },
        fecha:{
            type:Date,
            required:true,
        },
        descripcion:{
            type:String,
            required:true,
        },
        observaciones:[{
            type:String,
        }],
        creador:{
            type:Schema.Types.ObjectId,
            ref:UserModel,
            required:true,
        },

})
;
const modeloAvance = model("Avance",advance,);

export {modeloAvance};