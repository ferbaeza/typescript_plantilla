"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const CrearUsuarioCommandHandler_1 = require("../../../Escritura/CrearUsuario/Application/CrearUsuarioCommandHandler");
const ValidadorUsuario_1 = require("../../../Escritura/CrearUsuario/Domain/Service/ValidadorUsuario");
const UsuarioRepository_1 = require("../../../Escritura/CrearUsuario/Infrastructure/UsuarioRepository");
const EliminarUsuarioCommandHandler_1 = require("../../../Escritura/EliminarUsuario/Application/EliminarUsuarioCommandHandler");
const EliminarUsuarioRepository_1 = require("../../../Escritura/EliminarUsuario/Infrastructure/EliminarUsuarioRepository");
const ListarFichaUsuarioCommandHandler_1 = require("../../../Lectura/FichaUsuario/Application/ListarFichaUsuarioCommandHandler");
const FichaUsuarioRepository_1 = require("../../../Lectura/FichaUsuario/Infrastructure/FichaUsuarioRepository");
const ListarUsuariosCommandHandler_1 = require("../../../Lectura/ListarUsuarios/Application/ListarUsuariosCommandHandler");
const UsuariosLecturaRepository_1 = require("../../../Lectura/ListarUsuarios/Infrastructure/UsuariosLecturaRepository");
const Usuarios_Controller_1 = require("../Web/Usuarios.Controller");
//Repositories
const usuarioRepository = new UsuarioRepository_1.UsuarioRepository();
const usuariosLecturaRepository = new UsuariosLecturaRepository_1.UsuariosLecturaRepository();
const fichaUsuarioRepositoryInterface = new FichaUsuarioRepository_1.FichaUsuarioRepository();
const eliminarUsuarioRepositoryInterface = new EliminarUsuarioRepository_1.EliminarUsuarioRepository();
//Services
const validadorUsuario = new ValidadorUsuario_1.ValidadorUsuario(usuarioRepository);
//Casos de Uso
const listarUsuariosCommandHandler = new ListarUsuariosCommandHandler_1.ListarUsuariosCommandHandler(usuariosLecturaRepository);
const crearUsuarioCommandHandler = new CrearUsuarioCommandHandler_1.CrearUsuarioCommandHandler(usuarioRepository, validadorUsuario);
const listarFichaUsuarioCommandHandler = new ListarFichaUsuarioCommandHandler_1.ListarFichaUsuarioCommandHandler(fichaUsuarioRepositoryInterface);
const eliminarUsuarioCommandHandler = new EliminarUsuarioCommandHandler_1.EliminarUsuarioCommandHandler(eliminarUsuarioRepositoryInterface);
exports.loginController = new Usuarios_Controller_1.UsuariosController(listarUsuariosCommandHandler, crearUsuarioCommandHandler, listarFichaUsuarioCommandHandler, eliminarUsuarioCommandHandler);
