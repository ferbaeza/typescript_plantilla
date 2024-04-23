"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectosModel = void 0;
const sequelize_1 = require("sequelize");
const Database_1 = require("../../Config/Database");
exports.ProyectosModel = Database_1.sequelize.define('proyectos', {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    titulo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    puntuacion: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
});
//# sourceMappingURL=ProyectosModel.js.map