import { modeloAvance } from "./avance";

const resolverAvance ={
    Query:{

        Avances: async (parent, args) => {
            const avances = await modeloAvance.find()
            .populate("proyecto")
            .populate("creador");  
            return avances;   
        },

        filtrarAvance:async (parents,args) => {
            const avanceFiltrado = await modeloAvance.find({proyecto:args.idProyecto})
            .populate("proyecto")
            .populate("creador")
            return avanceFiltrado;
        },
    },

    Mutation:{
        crearAvance:async (parents,args) => {
            const avanceCreado = modeloAvance.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creador: args.creador,
            })
            return avanceCreado;  
        },

    },
};
export {resolverAvance};