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
exports.FichaUsuarioRepository = void 0;
const UsuarioDaoEntity_1 = require("../../../../../Shared/Database/Dao/Usuarios/UsuarioDaoEntity");
const UsuariosModel_1 = require("../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel");
const FrameworExceptions_1 = require("../../../../../Shared/Exceptions/Framework/FrameworExceptions");
const UsuarioException_1 = require("../../../../../Shared/Exceptions/Usuario/UsuarioException");
class FichaUsuarioRepository {
    constructor() { }
    getEntity(idUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield UsuariosModel_1.UsuariosModel.findOne();
                if (usuario === undefined || usuario === null) {
                    throw new UsuarioException_1.UsuarioNoExisteException();
                }
                return this.usuarioDaoEntity(usuario);
            }
            catch (error) {
                console.log(error);
                throw new FrameworExceptions_1.RepositoryException();
            }
        });
    }
    usuarioDaoEntity(usuario) {
        return UsuarioDaoEntity_1.UsuarioDaoEntity.fromRepository(usuario);
    }
}
exports.FichaUsuarioRepository = FichaUsuarioRepository;
