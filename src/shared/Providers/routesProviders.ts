import { Router } from "express";
import UsuarioRoutes from "../../app/Admin/Usuarios/Shared/Infrastructure/Web/routes";

const router = Router();

router.use('/', UsuarioRoutes);

export default router;