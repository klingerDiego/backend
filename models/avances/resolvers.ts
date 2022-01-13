import { modeloAvance } from "./avance";

const resolverAvance ={
    Query:{

        Avances: async (parent, args) => {
            const avances = await modeloAvance.find();  
            return avances;   
        },
    },

    Mutation:{
        crearAvance:async (parents,args) => {
            const avanceCreado = modeloAvance.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creador: args.creador,
            });
            return avanceCreado;     
        },
    },
};
export {resolverAvance};