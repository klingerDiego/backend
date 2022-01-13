import { Schema, model } from "mongoose";
import { Enum_EstadoProyecto, Enum_EstadoUsuaroi, Enum_FaseProyecto, Enum_TipoObjetivo } from "../enums/enum";
import { UserModel } from "../usuario/usuario";

interface Proyecto{

    nombreProyecto:string,
    presupuesto:number,
    fechaInicio:Date,
    fechaFin:Date,
    lider:Schema.Types.ObjectId,
    estado:Enum_EstadoProyecto,
    fase:Enum_FaseProyecto,
    objetivos:[{descripcion:string, tipo:Enum_TipoObjetivo}]
}

const projectSchema =new Schema<Proyecto>({

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
    estado:{
        type:String,
        enum:Enum_EstadoProyecto,
        default:Enum_EstadoProyecto.INACTIVO,
    },
    fase:{
        type:String,
        enum:Enum_FaseProyecto,
        default:Enum_FaseProyecto.NULO,
    },
    lider:{
        type:Schema.Types.ObjectId,
        enum:Enum_FaseProyecto,
        ref:UserModel,
    },
    objetivos: [
        {
          descripcion: {
            type: String,
            required: true,
          },
          tipo: {
            type: String,
            enum: Enum_TipoObjetivo,
            required: true,
          },
        },
      ],
});

const projectModel = model("Proyecto", projectSchema);
 
export { projectModel };