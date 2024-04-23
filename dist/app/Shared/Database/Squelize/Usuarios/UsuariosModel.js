"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosModel = void 0;
const sequelize_1 = require("sequelize");
const Database_1 = require("../../Config/Database");
const ProyectosModel_1 = require("../Proyectos/ProyectosModel");
exports.UsuariosModel = Database_1.sequelize.define("usuarios", {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    activo: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    verificado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
});
exports.UsuariosModel.belongsToMany(ProyectosModel_1.ProyectosModel, { through: "usuarios_proyectos" });
// UsuariosModel.hasMany(ProyectosModel, { foreignKey: 'usuario_id', sourceKey: 'id'});
// ProyectosModel.belongsTo(UsuariosModel, { foreignKey: 'usuario_id', targetKey: 'id'});
