import {inscripcionModel} from "./inscripcion.js"

const resolverInscripciones={

    Query:{
        Inscripciones: async (parent,args)=>{
            const inscripciones = await inscripcionModel.find().populate("proyecto")
            return inscripciones;
        },
    },

    Mutation: {
        crearInscripcion: async (parent,args)=>{
            const inscripcionCreada = await inscripcionModel.create({
                estado: args.estado,
                proyecto: args.proyecto,
                estudiante: args.estudiante
            });
            return inscripcionCreada

        },

        aprobarInscripcion: async (parent, args) => {
            const InscripcionApro = await inscripcionModel.findByIdAndUpdate(args.id, {
                estado:"ACEPTADA",
                fechaIngreso:Date.now()

            });
            return InscripcionApro;

        }

    }

}

export {resolverInscripciones};