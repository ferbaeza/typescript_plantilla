"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuariosDependencies_1 = require("../Dependencies/UsuariosDependencies");
const router = (0, express_1.Router)();
router.get('/usuarios', UsuariosDependencies_1.usuariosPublicController.listar.bind(UsuariosDependencies_1.usuariosPublicController));
exports.default = router;
//# sourceMappingURL=routes.js.map