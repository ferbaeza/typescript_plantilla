import { Sequelize } from 'sequelize';

import { dbConfig } from '../../Config/AppConfig';

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'postgres'
});

export { sequelize };
