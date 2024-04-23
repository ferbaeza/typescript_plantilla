"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const AppConfig_1 = require("../../Config/AppConfig");
const sequelize = new sequelize_1.Sequelize(AppConfig_1.dbConfig.database, AppConfig_1.dbConfig.user, AppConfig_1.dbConfig.password, {
    host: AppConfig_1.dbConfig.host,
    dialect: 'postgres'
});
exports.sequelize = sequelize;
//# sourceMappingURL=Database.js.map