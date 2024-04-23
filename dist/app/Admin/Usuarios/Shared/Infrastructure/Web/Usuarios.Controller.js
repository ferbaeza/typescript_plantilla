"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
const path_1 = __importDefault(require("path"));
const BaseController_1 = require("../../../../../Shared/Base/BaseController");
const UsuarioException_1 = require("../../../../../Shared/Exceptions/Usuario/UsuarioException");
const HttpCodes_1 = require("../../../../../Shared/Utils/HttpCodes");
const JsonResponse_1 = require("../../../../../Shared/Utils/JsonResponse");
const CrearUsuarioCommand_1 = require("../../../Escritura/CrearUsuario/Application/CrearUsuarioCommand");
const EliminarUsuarioCommand_1 = require("../../../Escritura/EliminarUsuario/Application/EliminarUsuarioCommand");
const ListarFichaUsuarioCommand_1 = require("../../../Lectura/FichaUsuario/Application/ListarFichaUsuarioCommand");
const ListarUsuariosCommand_1 = require("../../../Lectura/ListarUsuarios/Application/ListarUsuariosCommand");
class UsuariosController extends BaseController_1.BaseController {
    constructor(listarUsuariosCommandHandler, crearUsuarioCommandHandler, listarFichaUsuarioCommandHandler, eliminarUsuarioCommandHandler) {
        super();
        this.listarUsuariosCommandHandler = listarUsuariosCommandHandler;
        this.crearUsuarioCommandHandler = crearUsuarioCommandHandler;
        this.listarFichaUsuarioCommandHandler = listarFichaUsuarioCommandHandler;
        this.eliminarUsuarioCommandHandler = eliminarUsuarioCommandHandler;
    }
    listar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const command = new ListarUsuariosCommand_1.ListarUsuariosCommand();
                const usuarios = yield this.listarUsuariosCommandHandler.run(command);
                JsonResponse_1.JsonResponse.send(response, { data: usuarios }, path_1.default.basename(__filename));
            }
            catch (error) {
                if (error instanceof UsuarioException_1.NoExistenUsuariosException) {
                    JsonResponse_1.JsonResponse.error(response, error, error.message, path_1.default.basename(__filename), HttpCodes_1.HttpStatusCode.NO_CONTENT);
                }
            }
        });
    }
    ListarFichaUsuarioCommand(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                console.log(id);
                const command = new ListarFichaUsuarioCommand_1.ListarFichaUsuarioCommand(id);
                console.log(command);
                const usuarios = yield this.listarFichaUsuarioCommandHandler.run(command);
                JsonResponse_1.JsonResponse.send(response, { data: usuarios }, path_1.default.basename(__filename));
            }
            catch (error) {
                if (error instanceof UsuarioException_1.NoExistenUsuariosException) {
                    JsonResponse_1.JsonResponse.error(response, error, error.message, path_1.default.basename(__filename), HttpCodes_1.HttpStatusCode.NO_CONTENT);
                }
            }
        });
    }
    eliminarUsuario(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const command = new EliminarUsuarioCommand_1.EliminarUsuarioCommand(id);
                const data = yield this.eliminarUsuarioCommandHandler.run(command);
                JsonResponse_1.JsonResponse.send(response, data, `Usuario ${id} eliminado correctamente`);
            }
            catch (error) {
                if (error instanceof UsuarioException_1.UsuarioNoExisteException) {
                    JsonResponse_1.JsonResponse.error(response, error, error.message, path_1.default.basename(__filename), HttpCodes_1.HttpStatusCode.INTERNAL_SERVER_ERROR);
                }
            }
        });
    }
    crearUsuario(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, nombre, email, password } = request.body;
                const command = new CrearUsuarioCommand_1.CrearUsuarioCommand(id, nombre, email, password);
                const data = yield this.crearUsuarioCommandHandler.run(command);
                JsonResponse_1.JsonResponse.send(response, data, `Usuario ${nombre} con email ${email} creado correctamente`);
            }
            catch (error) {
                if (error instanceof UsuarioException_1.NoExistenUsuariosException) {
                    JsonResponse_1.JsonResponse.error(response, error, error.message, path_1.default.basename(__filename), HttpCodes_1.HttpStatusCode.NO_CONTENT);
                }
                if (error instanceof UsuarioException_1.UsuarioYaExisteConEseMailException) {
                    JsonResponse_1.JsonResponse.error(response, error, error.message, path_1.default.basename(__filename), HttpCodes_1.HttpStatusCode.BAD_REQUEST);
                }
                if (error instanceof UsuarioException_1.UsuarioYaExisteConEseIdException) {
                    JsonResponse_1.JsonResponse.error(response, error, error.message, path_1.default.basename(__filename), HttpCodes_1.HttpStatusCode.BAD_REQUEST);
                }
            }
        });
    }
}
exports.UsuariosController = UsuariosController;
