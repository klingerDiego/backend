import mongoose from "mongoose";
/* import { Enum_EstadoProyecto, Enum_EstadoUsuaroi, Enum_FaseProyecto, Enum_TipoObjetivo } from "../enums/enum.js";
 */import { UserModel } from "../usuario/usuario.js";

const {Schema, model}=mongoose;

/* interface Proyecto{

    nombreProyecto:string,
    presupuesto:number,
    fechaInicio:Date,
    fechaFin:Date,
    lider:Schema.Types.ObjectId,
    estado:Enum_EstadoProyecto,
    fase:Enum_FaseProyecto,
    objetivos:[{descripcion:string, tipo:Enum_TipoObjetivo}]
} */

const projectSchema =new Schema({

    nombreProyecto:{
        type:String,
        required:true,       
    },
    presupuesto:{
        type:Number,
        required:true,
    },
    fechaInicio:{
        type:Date,
        required:true,
    },
    fechaFin:{
        type:Date,
    },
    estado:{
        type:String,
        enum:["ACTIVO","INACTIVO"],
        default:"INACTIVO",
    },
    fase:{
        type:String,
        enum:["INICIADO","DESARROLLO","TEERMINADO","NULO"],
        default:"NULO"
    },
    lider:{
        type:Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },
    objetivos: [
        {
          descripcion: {
            type: String,
            required: true,
          },
          tipo: {
            type: String,
            enum: ["GENERAL","ESPESIFICO"],
            required: true,
          },
        },
      ],
},
{
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
} 
);

projectSchema.virtual("avances",{
    ref:"Avance",
    localField:"_id",
    foreignField:"proyecto"

});

projectSchema.virtual("inscripciones",{
    ref:"Inscripcion",
    localField:"_id",
    foreignField:"proyecto"

});

const projectModel = model("Proyecto", projectSchema);
 
export { projectModel };