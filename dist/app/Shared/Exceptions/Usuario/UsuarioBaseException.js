"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioBaseException = void 0;
class UsuarioBaseException extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.UsuarioBaseException = UsuarioBaseException;
