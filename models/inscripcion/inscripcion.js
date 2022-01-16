import mongoose from "mongoose";
import { projectModel } from "../proyecto/proyecto.js";
import {UserModel} from "../usuario/usuario.js"
/* import { Enum_EstadoInscripcion, Enum_EstadoProyecto, Enum_EstadoUsuaroi, Enum_FaseProyecto, Enum_TipoObjetivo } from "../enums/enum";
 */
const {Schema, model}=mongoose;

/* interface Inscripcion {

    proyecto: Schema.Types.ObjectId,
    estudiante:Schema.Types.ObjectId,
    estado:Enum_EstadoInscripcion,
    fechaingreso:Date,
    fechaegreso:Date,
} */

const inscripcionSchema = new Schema ({

    proyecto:{
        type:Schema.Types.ObjectId,
            ref:projectModel,
            required:true, 
    },
    estudiante:{
        type:Schema.Types.ObjectId, 
            ref:UserModel,
            required:true,
    },
    estado:{
        enum:["RECHAZADA","ACEPTADA","PENDIENTE"],
        default:"PENDIENTE",
        type:String,
        required:true,
    },
    fechaEgreso:{
        type:Date,
        required:false,
    },
    fechaIngreso:{
        type:Date,
        required:false,
    }

});

const inscripcionModel =model("Inscripcion", inscripcionSchema);

export {inscripcionModel};