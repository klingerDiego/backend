import {Schema, model } from "mongoose";
import { projectModel } from "./Projects";
import {userModel} from "./user"
import { Enum_EstadoInscripcion, Enum_EstadoProyecto, Enum_EstadoUsuaroi, Enum_FaseProyecto, Enum_TipoObjetivo } from "./enums";


interface Inscripcion {

    proyecto: Schema.Types.ObjectId,
    estudiante:Schema.Types.ObjectId,
    estado:Enum_EstadoInscripcion,
    fechaingreso:Date,
    fechaegreso:Date,
}

const inscripcionSchema = new Schema<Inscripcion> ({

    proyecto:{
        type:Schema.Types.ObjectId,
            ref:projectModel,
            required:true, 
    },
    estudiante:{
        type:Schema.Types.ObjectId, 
            ref:userModel,
            required:true,
    },
    estado:{
        enum:Enum_EstadoInscripcion,
        default:Enum_EstadoInscripcion.rechazada,
        type:String,
    },
    fechaingreso:{
        type:Date,
        required:true,
    },
    fechaegreso:{
        type:Date,
        required:true,
    }

});

const inscripcionModel =model("Inscripcion", inscripcionSchema);

export {inscripcionModel};