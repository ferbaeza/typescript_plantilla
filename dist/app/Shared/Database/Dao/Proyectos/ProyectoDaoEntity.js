"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoDaoEntity = void 0;
class ProyectoDaoEntity {
    constructor(id, titulo, descripcion, puntuacion, url, usuarioId) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.puntuacion = puntuacion;
        this.url = url;
        this.usuarioId = usuarioId;
    }
    static fromRepository(model) {
        var _a, _b;
        return new ProyectoDaoEntity(model.id, model.titulo, model.descripcion, (_a = model.puntuacion) !== null && _a !== void 0 ? _a : 0, (_b = model.url) !== null && _b !== void 0 ? _b : "", model.usuario_id);
    }
}
exports.ProyectoDaoEntity = ProyectoDaoEntity;
