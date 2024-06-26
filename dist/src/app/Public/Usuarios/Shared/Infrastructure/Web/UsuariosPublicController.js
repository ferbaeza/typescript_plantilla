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
exports.UsuariosPublicController = void 0;
const path_1 = __importDefault(require("path"));
const BaseController_1 = require("../../../../../Shared/Base/BaseController");
const UsuarioException_1 = require("../../../../../Shared/Exceptions/Usuario/UsuarioException");
const HttpCodes_1 = require("../../../../../Shared/Utils/HttpCodes");
const JsonResponse_1 = require("../../../../../Shared/Utils/JsonResponse");
const LoginCommand_1 = require("../../../Login/Application/LoginCommand");
class UsuariosPublicController extends BaseController_1.BaseController {
    constructor(loginCommandHandler, listarUsuariosPublicCommandHandler) {
        super();
        this.loginCommandHandler = loginCommandHandler;
        this.listarUsuariosPublicCommandHandler = listarUsuariosPublicCommandHandler;
    }
    listar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield this.listarUsuariosPublicCommandHandler.run();
                JsonResponse_1.JsonResponse.send(response, { data: usuarios }, path_1.default.basename(__filename));
            }
            catch (error) {
                if (error instanceof UsuarioException_1.NoExistenUsuariosException) {
                    JsonResponse_1.JsonResponse.error(response, error, error.message, path_1.default.basename(__filename), HttpCodes_1.HttpStatusCode.NO_CONTENT);
                }
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const command = new LoginCommand_1.LoginCommand({
                    email: req.body.email,
                    password: req.body.password
                });
                const response = yield this.loginCommandHandler.run(command);
                JsonResponse_1.JsonResponse.send(res, { data: req.body, response }, path_1.default.basename(__filename));
            }
            catch (error) { }
        });
    }
}
exports.UsuariosPublicController = UsuariosPublicController;
//# sourceMappingURL=UsuariosPublicController.js.map