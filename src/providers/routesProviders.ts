import { Router } from "express";
import routes  from "../app/login/infrastructure/routes";

const router = Router();


router.use('/login', routes);





router.get('/', (req, res) => {
    res.send('Hello World from routes Providers');
});

export default router;