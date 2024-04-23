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
exports.UsuariosLecturaPublicRepository = void 0;
const UsuariosModel_1 = require("../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel");
const UsuariosListadoEntity_1 = require("../../ListarUsuarios/Domain/UsuariosListadoEntity");
class UsuariosLecturaPublicRepository {
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield UsuariosModel_1.UsuariosModel.findAll();
            console.log('usuarios', typeof usuarios);
            return usuarios.map(usuario => this.usuarioDaoEntity(usuario));
        });
    }
    usuarioDaoEntity(usuario) {
        return UsuariosListadoEntity_1.UsuariosListadoEntity.fromRepository(usuario);
    }
}
exports.UsuariosLecturaPublicRepository = UsuariosLecturaPublicRepository;
//# sourceMappingURL=UsuariosLecturaPublicRepository.js.map