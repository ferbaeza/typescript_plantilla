import { DataTypes } from 'sequelize';

import { sequelize } from '../../Config/Database';

export const UsuariosProyectosModel = sequelize.define(
  'usuarios_proyectos',
  {
    usuario_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    proyecto_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  },
  {
    timestamps: false
  }
);
