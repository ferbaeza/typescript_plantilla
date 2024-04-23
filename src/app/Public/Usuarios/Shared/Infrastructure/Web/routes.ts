import { Router } from "express";

import { usuariosPublicController } from "../Dependencies/UsuariosDependencies";

const router = Router();

router.get(
  "/usuarios",
  usuariosPublicController.listar.bind(usuariosPublicController)
);
// router.get('/', LoginController.get(req, res));

type RutasUsuarioPublic = Router;
export default router as RutasUsuarioPublic;
