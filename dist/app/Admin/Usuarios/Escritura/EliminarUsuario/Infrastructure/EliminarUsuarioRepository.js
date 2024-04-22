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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EliminarUsuarioRepository = void 0;
// import { UsuarioDaoEntity } from "../../../../../Shared/Database/Dao/Usuarios/UsuarioDaoEntity";
const UsuariosModel_1 = require("../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel");
const FrameworExceptions_1 = require("../../../../../Shared/Exceptions/Framework/FrameworExceptions");
class EliminarUsuarioRepository {
    constructor() { }
    eliminarusuario(idUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield UsuariosModel_1.UsuariosModel.findByPk(idUsuario);
                if (usuario) {
                    return usuario.destroy();
                }
                return false;
            }
            catch (error) {
                console.log(error);
                throw new FrameworExceptions_1.RepositoryException();
            }
        });
    }
}
exports.EliminarUsuarioRepository = EliminarUsuarioRepository;
