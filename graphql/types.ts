import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/tipos';
import { tiposProyecto} from '../models/proyecto/tipos';
import { tipoUsuario } from '../models/usuario/tipos';
import { tiposAvance } from '../models/avances/tipos';
const tiposGlobales = gql`
scalar Date
 `;

export const tipos=[tiposGlobales,tiposProyecto,tipoUsuario,tiposEnums,tiposAvance];