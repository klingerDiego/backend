import {Schema, model} from "mongoose";
import { Enum_EstadoProyecto, Enum_TipoObjetivo } from "./enums/enum";
import { projectModel } from "./proyecto/proyecto";

interface objective{
    descripcion: string,
    tipo: Enum_TipoObjetivo,
    /* proyecto: Schema.Types.ObjectId; */
}

const objectiveSchema =new Schema<objective>({

    descripcion:{
        type:String,
        required:true,       
    },
    tipo:{
        type:String,
        enum:Enum_TipoObjetivo,
        required:true,
    },
    /* proyecto:{
        type:Schema.Types.ObjectId,
        ref:projectModel,
    } */
});

const ObjetiveModel = model("objetivo",objectiveSchema);

export {ObjetiveModel};

//las entidades "proyecto" que estanc¿ comentadas sirven para cuando se hace una referencia de muchos a uno en una db no relacional, es decir la metodologia 1 del index


