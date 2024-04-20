import { CrearUsuarioCommandHandler } from "../../../Escritura/CrearUsuario/Application/CrearUsuarioCommandHandler";
import { ListarUsuariosCommandHandler } from "../../../Lectura/ListarUsuarios/Application/ListarUsuariosCommandHandler";
import { UsuariosLecturaRepositoryInterface } from "../../../Lectura/Shared/Domain/Interfaces/UsuariosLecturaRepositoryInterface";
import { UsuariosLecturaRepository } from "../../../Lectura/Shared/Infrastructure/UsuariosLecturaRepository";
import { LoginCommandHandler } from "../../../Login/Application/LoginCommandHandler";
import { UsuarioRepository } from "../../../Escritura/CrearUsuario/Infrastructure/UsuarioRepository";
import { UsuariosController } from "../Web/Usuarios.Controller";
import { UsuarioRepositoryInterface } from "../../../Escritura/CrearUsuario/Domain/Interfaces/UsuarioRepositoryInterface";
import { ValidadorUsuario } from "../../../Escritura/CrearUsuario/Domain/Service/ValidadorUsuario";

//Repositories
const usuarioRepository: UsuarioRepositoryInterface = new UsuarioRepository();
const usuariosLecturaRepository: UsuariosLecturaRepositoryInterface = new UsuariosLecturaRepository();
//Services
const validadorUsuario: ValidadorUsuario = new ValidadorUsuario(usuarioRepository);
const loginCommandHandler: LoginCommandHandler = new LoginCommandHandler();
const listarUsuariosCommandHandler: ListarUsuariosCommandHandler = new ListarUsuariosCommandHandler(usuariosLecturaRepository);

const crearUsuarioCommandHandler: CrearUsuarioCommandHandler = new CrearUsuarioCommandHandler(usuarioRepository, validadorUsuario);



export const loginController = new UsuariosController(
    listarUsuariosCommandHandler,
    crearUsuarioCommandHandler,
    loginCommandHandler
);
