import { resolversProyecto } from "../models/proyecto/resolvers";
import { resolverUsuario } from "../models/usuario/resolvers";
import { resolverAvance } from "../models/avances/resolvers";

export const resolvers = [resolversProyecto,resolverUsuario, resolverAvance];
