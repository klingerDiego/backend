import { projectModel } from "./proyecto";



const resolversProyecto = {

    Query: {

        Proyectos: async (parent,args) => {

            const proyecto = await projectModel.find({}).populate("lider");
            return proyecto;
            
        }
    
    },
    Mutation:{
        
        crearProyecto: async (parent, args) => {
            const proyectoCreado = await projectModel.create({
                nombreProyecto:args.nombreProyecto,
                estado:args.estado,
                fase:args.fase,
                presupuesto:args.presupuesto,
                fechaInicio:args.fechaInicio,
                fechaFin:args.fechaFin,
                lider:args.lider,
                objetivos:args.objetivos,
            })
            return proyectoCreado;           
        }   
     },

        


}
export {resolversProyecto};