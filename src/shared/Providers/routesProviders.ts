import { Router } from "express";
import UsuarioRoutes from "../../app/Admin/Usuarios/Shared/Infrastructure/Web/routes";
import RutasUsuarioPublic from "../../app/Public/Usuarios/Shared/Infrastructure/Web/routes";

const router = Router();

router.use('/', UsuarioRoutes);
router.use('/', RutasUsuarioPublic);

export default router;