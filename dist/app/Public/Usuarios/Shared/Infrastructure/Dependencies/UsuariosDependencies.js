"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosPublicController = void 0;
const ListarUsuariosPublicCommandHandler_1 = require("../../../Lectura/ListarUsuarios/Application/ListarUsuariosPublicCommandHandler");
const UsuariosLecturaPublicRepository_1 = require("../../../Lectura/Shared/Infrastructure/UsuariosLecturaPublicRepository");
const LoginCommandHandler_1 = require("../../../Login/Application/LoginCommandHandler");
const UsuariosPublicController_1 = require("../Web/UsuariosPublicController");
//Repositories
const usuariosLecturaPublicRepository = new UsuariosLecturaPublicRepository_1.UsuariosLecturaPublicRepository();
//Services
const loginCommandHandler = new LoginCommandHandler_1.LoginCommandHandler();
const listarUsuariosCommandHandler = new ListarUsuariosPublicCommandHandler_1.ListarUsuariosPublicCommandHandler(usuariosLecturaPublicRepository);
exports.usuariosPublicController = new UsuariosPublicController_1.UsuariosPublicController(listarUsuariosCommandHandler, loginCommandHandler);
