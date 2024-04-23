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
exports.UsuarioRepository = void 0;
const UsuariosModel_1 = require("../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel");
const UsuarioDaoEntity_1 = require("../../../../../Shared/Database/Dao/Usuarios/UsuarioDaoEntity");
const FrameworExceptions_1 = require("../../../../../Shared/Exceptions/Framework/FrameworExceptions");
class UsuarioRepository {
    crear(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioGuardado = yield UsuariosModel_1.UsuariosModel.create(usuario);
                return this.usuarioDaoEntity(usuarioGuardado);
            }
            catch (error) {
                throw new FrameworExceptions_1.RepositoryException();
            }
        });
    }
    validarUsuario(specificacion) {
        return __awaiter(this, void 0, void 0, function* () {
            const existe = yield UsuariosModel_1.UsuariosModel.findOne({ where: specificacion });
            if (existe) {
                return true;
            }
            return false;
        });
    }
    usuarioDaoEntity(usuario) {
        return UsuarioDaoEntity_1.UsuarioDaoEntity.fromRepository(usuario);
    }
}
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=UsuarioRepository.js.map