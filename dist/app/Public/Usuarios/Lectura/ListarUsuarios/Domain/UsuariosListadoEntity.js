"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosListadoEntity = void 0;
class UsuariosListadoEntity {
    constructor(id, nombre, email, activo) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.activo = activo;
    }
    static fromRepository(model) {
        var _a;
        return new UsuariosListadoEntity(model.id, model.nombre, model.email, (_a = model.activo) !== null && _a !== void 0 ? _a : false);
    }
}
exports.UsuariosListadoEntity = UsuariosListadoEntity;
