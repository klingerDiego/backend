import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/tipos.js';
import { tiposProyecto} from '../models/proyecto/tipos.js';
import { tipoUsuario } from '../models/usuario/tipos.js';
import { tiposAvance } from '../models/avances/tipos.js';
import { tiposInscripcion } from '../models/inscripcion/tipos.js';
const tiposGlobales = gql`
scalar Date
 `;

export const tipos=[tiposGlobales,tiposProyecto,tipoUsuario,tiposEnums,tiposAvance,tiposInscripcion];