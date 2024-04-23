import { Router } from 'express';

import { loginController } from '../Dependencies/UsuariosDependencies';

const router = Router();

router.post('/register', loginController.crearUsuario.bind(loginController));
router.get('/usuarios', loginController.listar.bind(loginController));

router.get('/usuario/:id', loginController.ListarFichaUsuarioCommand.bind(loginController));
router.delete('/usuario/:id', loginController.eliminarUsuario.bind(loginController));

router.put('/usuario/:id', loginController.listar.bind(loginController));

type RutasUsuarioAdmin = Router;
export default router as RutasUsuarioAdmin;
