import { Router, Request, Response } from "express";
import { loginController } from "../Dependencies/UsuariosDependencies";

const router = Router();


router.post('/login', loginController.login.bind(loginController));
router.post('/register', loginController.crearUsuario.bind(loginController));
router.get('/usuarios', loginController.listar.bind(loginController));
// router.get('/', LoginController.get(req, res));


type UsuarioRoutes = Router;
export default router as UsuarioRoutes;



