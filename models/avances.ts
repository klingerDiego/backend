import {Schema, model } from "mongoose";
import { projectModel } from "./Projects";
import {UserModel} from "./user"


interface Avance{

    proyecto: Schema.Types.ObjectId,
    fecha: Date,
    descripcion: string,
    observaciones:[string],
    creador:Schema.Types.ObjectId,

}

const advance = new Schema<Avance> ({

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

const advanceModel = model("Avance",advance,);

export {advanceModel};