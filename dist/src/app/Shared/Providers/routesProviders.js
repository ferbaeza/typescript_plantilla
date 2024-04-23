"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("../../Admin/Usuarios/Shared/Infrastructure/Web/routes"));
const routes_2 = __importDefault(require("../../Public/Usuarios/Shared/Infrastructure/Web/routes"));
const router = (0, express_1.Router)();
router.use('/', routes_1.default);
router.use('/public', routes_2.default);
exports.default = router;
//# sourceMappingURL=routesProviders.js.map