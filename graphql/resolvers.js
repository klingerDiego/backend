import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolverUsuario } from "../models/usuario/resolvers.js";
import { resolverAvance } from "../models/avances/resolvers.js";
import { resolverInscripciones } from "../models/inscripcion/resolver.js";

export const resolvers = [resolversProyecto,resolverUsuario, resolverAvance,resolverInscripciones];
