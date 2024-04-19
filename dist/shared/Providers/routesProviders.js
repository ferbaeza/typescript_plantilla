"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("../../app/login/infrastructure/routes"));
const router = (0, express_1.Router)();
router.use('/login', routes_1.default);
router.get('/', (req, res) => {
    res.send('Hello World from routes Providers');
});
exports.default = router;
