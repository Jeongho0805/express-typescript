import { Request, Response, Router } from "express";
import boardController from "../board/boardController";


const router = Router();

router.use('/boards', boardController);

export default router;