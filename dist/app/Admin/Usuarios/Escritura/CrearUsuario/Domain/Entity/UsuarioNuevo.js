"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioNuevo = void 0;
const uuid_1 = require("uuid");
class UsuarioNuevo {
    constructor(id, nombre, email, password, activo, verificado) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.activo = activo;
        this.verificado = verificado;
    }
    static fromCommand(command) {
        var _a;
        const idUsuario = (_a = command.id) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)();
        const activo = false;
        const verificado = false;
        return new UsuarioNuevo(idUsuario, command.nombre, command.email, command.password, activo, verificado);
    }
}
exports.UsuarioNuevo = UsuarioNuevo;
