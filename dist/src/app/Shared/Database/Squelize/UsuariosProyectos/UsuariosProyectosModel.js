"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosProyectosModel = void 0;
const sequelize_1 = require("sequelize");
const Database_1 = require("../../Config/Database");
exports.UsuariosProyectosModel = Database_1.sequelize.define('usuarios_proyectos', {
    usuario_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    proyecto_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
}, {
    timestamps: false
});
//# sourceMappingURL=UsuariosProyectosModel.js.map