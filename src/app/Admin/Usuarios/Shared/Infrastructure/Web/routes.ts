import { Router, Request, Response } from "express";
import { UsuariosController } from "./Usuarios.Controller";
import { CommandBus } from "../../../../../../shared/Bus/Domain/CommandBus";
import { UsuarioRepository } from "../Datasource/UsuarioRepository";
// import path from 'path';

const router = Router();

const repository = new UsuarioRepository();
const loginController = new UsuariosController(repository);

router.post('/login', loginController.login.bind(loginController));
router.post('/register', loginController.crearUsuario.bind(loginController));
router.get('/usuarios', loginController.listar.bind(loginController));
// router.get('/', LoginController.get(req, res));


type UsuarioRoutes = Router;
export default router as UsuarioRoutes;



