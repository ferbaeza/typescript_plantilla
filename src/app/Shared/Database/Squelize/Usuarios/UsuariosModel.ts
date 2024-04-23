import { DataTypes } from "sequelize";

import { sequelize } from "../../Config/Database";
import { ProyectosModel } from "../Proyectos/ProyectosModel";

export const UsuariosModel = sequelize.define("usuarios", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  verificado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
});
UsuariosModel.belongsToMany(ProyectosModel, { through: "usuarios_proyectos" });

// UsuariosModel.hasMany(ProyectosModel, { foreignKey: 'usuario_id', sourceKey: 'id'});
// ProyectosModel.belongsTo(UsuariosModel, { foreignKey: 'usuario_id', targetKey: 'id'});
