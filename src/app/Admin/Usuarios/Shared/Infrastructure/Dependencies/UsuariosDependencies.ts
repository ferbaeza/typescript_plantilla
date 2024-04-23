import { CrearUsuarioCommandHandler } from '../../../Escritura/CrearUsuario/Application/CrearUsuarioCommandHandler';
import { UsuarioRepositoryInterface } from '../../../Escritura/CrearUsuario/Domain/Interfaces/UsuarioRepositoryInterface';
import { ValidadorUsuario } from '../../../Escritura/CrearUsuario/Domain/Service/ValidadorUsuario';
import { UsuarioRepository } from '../../../Escritura/CrearUsuario/Infrastructure/UsuarioRepository';
import { EliminarUsuarioCommandHandler } from '../../../Escritura/EliminarUsuario/Application/EliminarUsuarioCommandHandler';
import { EliminarUsuarioRepository } from '../../../Escritura/EliminarUsuario/Infrastructure/EliminarUsuarioRepository';
import { ListarFichaUsuarioCommandHandler } from '../../../Lectura/FichaUsuario/Application/ListarFichaUsuarioCommandHandler';
import { FichaUsuarioRepositoryInterface } from '../../../Lectura/FichaUsuario/Domain/Interfaces/FichaUsuarioRepositoryInterface';
import { FichaUsuarioRepository } from '../../../Lectura/FichaUsuario/Infrastructure/FichaUsuarioRepository';
import { ListarUsuariosCommandHandler } from '../../../Lectura/ListarUsuarios/Application/ListarUsuariosCommandHandler';
import { UsuariosLecturaRepositoryInterface } from '../../../Lectura/ListarUsuarios/Domain/Interfaces/UsuariosLecturaRepositoryInterface';
import { UsuariosLecturaRepository } from '../../../Lectura/ListarUsuarios/Infrastructure/UsuariosLecturaRepository';
import { UsuariosController } from '../Web/Usuarios.Controller';

//Repositories
const usuarioRepository: UsuarioRepositoryInterface = new UsuarioRepository();
const usuariosLecturaRepository: UsuariosLecturaRepositoryInterface =
  new UsuariosLecturaRepository();
const fichaUsuarioRepositoryInterface: FichaUsuarioRepositoryInterface =
  new FichaUsuarioRepository();
const eliminarUsuarioRepositoryInterface = new EliminarUsuarioRepository();
//Services
const validadorUsuario: ValidadorUsuario = new ValidadorUsuario(usuarioRepository);
//Casos de Uso
const listarUsuariosCommandHandler: ListarUsuariosCommandHandler = new ListarUsuariosCommandHandler(
  usuariosLecturaRepository
);
const crearUsuarioCommandHandler: CrearUsuarioCommandHandler = new CrearUsuarioCommandHandler(
  usuarioRepository,
  validadorUsuario
);
const listarFichaUsuarioCommandHandler = new ListarFichaUsuarioCommandHandler(
  fichaUsuarioRepositoryInterface
);
const eliminarUsuarioCommandHandler = new EliminarUsuarioCommandHandler(
  eliminarUsuarioRepositoryInterface
);

export const loginController = new UsuariosController(
  listarUsuariosCommandHandler,
  crearUsuarioCommandHandler,
  listarFichaUsuarioCommandHandler,
  eliminarUsuarioCommandHandler
);
