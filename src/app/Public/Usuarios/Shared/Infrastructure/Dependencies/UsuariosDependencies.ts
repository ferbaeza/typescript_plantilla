import { ListarUsuariosPublicCommandHandler } from "../../../Lectura/ListarUsuarios/Application/ListarUsuariosPublicCommandHandler";
import { UsuariosLecturaPublicRepositoryInterface } from "../../../Lectura/Shared/Domain/Interfaces/UsuariosLecturaPublicRepositoryInterface";
import { UsuariosLecturaPublicRepository } from "../../../Lectura/Shared/Infrastructure/UsuariosLecturaPublicRepository";
import { LoginCommandHandler } from "../../../Login/Application/LoginCommandHandler";
import { UsuariosPublicController } from "../Web/UsuariosPublicController";

//Repositories
const usuariosLecturaPublicRepository: UsuariosLecturaPublicRepositoryInterface =
  new UsuariosLecturaPublicRepository();
//Services
const loginCommandHandler: LoginCommandHandler = new LoginCommandHandler();
const listarUsuariosCommandHandler: ListarUsuariosPublicCommandHandler =
  new ListarUsuariosPublicCommandHandler(usuariosLecturaPublicRepository);

export const usuariosPublicController = new UsuariosPublicController(
  listarUsuariosCommandHandler,
  loginCommandHandler
);
