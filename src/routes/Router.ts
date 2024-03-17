import { Router } from "express";
import BoardController from "../board/BoardController";
import CommentController from "../comment/CommentController";


const router = Router();

router.use('/boards', BoardController);
router.use('/comments', CommentController)

export default router;