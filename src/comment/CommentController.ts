import {Request, Response, Router} from "express";
import {CommentCreateDto} from "./CommentDto";
import CommentRepository from "./CommentRepository";

const createComment = async (req: Request, res: Response) : Promise<Response> => {
    const dto: CommentCreateDto = req.body;
    const result = await CommentRepository.create(dto);
    return res.status(201).json({message: "댓글 작성 완료", data: result});
}

const router = Router();
router.post("/", createComment);

export default router;