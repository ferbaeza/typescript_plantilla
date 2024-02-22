"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.post('/', (req, res) => controller_1.LoginController.login(req, res));
router.get('/', (req, res) => controller_1.LoginController.get(req, res));
exports.default = router;
