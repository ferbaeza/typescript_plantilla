"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuariosDependencies_1 = require("../Dependencies/UsuariosDependencies");
const router = (0, express_1.Router)();
router.post('/register', UsuariosDependencies_1.loginController.crearUsuario.bind(UsuariosDependencies_1.loginController));
router.get('/usuarios', UsuariosDependencies_1.loginController.listar.bind(UsuariosDependencies_1.loginController));
router.get('/usuario/:id', UsuariosDependencies_1.loginController.ListarFichaUsuarioCommand.bind(UsuariosDependencies_1.loginController));
router.delete('/usuario/:id', UsuariosDependencies_1.loginController.eliminarUsuario.bind(UsuariosDependencies_1.loginController));
router.put('/usuario/:id', UsuariosDependencies_1.loginController.listar.bind(UsuariosDependencies_1.loginController));
exports.default = router;
//# sourceMappingURL=routes.js.map