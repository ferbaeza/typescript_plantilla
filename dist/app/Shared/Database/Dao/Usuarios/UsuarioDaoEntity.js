"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioDaoEntity = void 0;
class UsuarioDaoEntity {
    constructor(id, nombre, email, password, activo, verificado) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.activo = activo;
        this.verificado = verificado;
    }
    static fromRepository(model) {
        var _a, _b;
        return new UsuarioDaoEntity(model.id, model.nombre, model.email, model.password, (_a = model.activo) !== null && _a !== void 0 ? _a : false, (_b = model.verificado) !== null && _b !== void 0 ? _b : false);
    }
    setActivoTrue() {
        this.activo = true;
        return this;
    }
}
exports.UsuarioDaoEntity = UsuarioDaoEntity;
