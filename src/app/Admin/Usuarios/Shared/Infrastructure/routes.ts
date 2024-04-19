import { Router, Request, Response } from "express";
import { UsuariosController } from "./Usuarios.Controller";
import { CommandBus } from "../../../../../shared/Bus/Domain/CommandBus";
// import path from 'path';

const router = Router();

const loginController = new UsuariosController();

router.post('/login', loginController.login.bind(loginController.login));
// router.get('/', LoginController.get(req, res));


type UsuarioRoutes = Router;
export default router as UsuarioRoutes;



