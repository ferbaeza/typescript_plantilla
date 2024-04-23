"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = exports.port = void 0;
require("dotenv/config");
exports.port = (_a = Number(process.env.PORT)) !== null && _a !== void 0 ? _a : 3000;
exports.dbConfig = {
    host: String(process.env.DB_HOST),
    user: String(process.env.DB_USER),
    password: String(process.env.DB_PASS),
    database: String(process.env.DB_NAME),
    port: Number(process.env.DB_PORT),
    dialect: String(process.env.DB_DIALECT),
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
//# sourceMappingURL=AppConfig.js.map