import { Router } from "express";

import RutasUsuarioAdmin from "../../Admin/Usuarios/Shared/Infrastructure/Web/routes";
import RutasUsuarioPublic from "../../Public/Usuarios/Shared/Infrastructure/Web/routes";

const router = Router();

//Admin
router.use("/", RutasUsuarioAdmin);

//Public
router.use("/", RutasUsuarioPublic);

export default router;
