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
exports.ValidadorUsuario = void 0;
const UsuarioException_1 = require("../../../../../../Shared/Exceptions/Usuario/UsuarioException");
class ValidadorUsuario {
    constructor(repository) {
        this.repository = repository;
    }
    validar(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioYaExisteConEseId = yield this.repository.validarUsuario({
                id: usuario.id
            });
            if (usuarioYaExisteConEseId) {
                throw new UsuarioException_1.UsuarioYaExisteConEseIdException();
            }
            const usuarioYaExisteConEseMail = yield this.repository.validarUsuario({
                email: usuario.email
            });
            if (usuarioYaExisteConEseMail) {
                throw new UsuarioException_1.UsuarioYaExisteConEseMailException();
            }
        });
    }
}
exports.ValidadorUsuario = ValidadorUsuario;
//# sourceMappingURL=ValidadorUsuario.js.map