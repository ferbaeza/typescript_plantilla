import { Router, Request, Response} from "express";
import {LoginController} from "./controller";

const router = Router();

router.post('/', (req: Request, res: Response) => LoginController.login(req, res));
router.get('/', (req: Request, res: Response) => LoginController.get(req, res));

export default router;



