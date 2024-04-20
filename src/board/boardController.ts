import {Request, Response, Router} from "express";
import {BoardCreateDto} from "./BoardDto";
import BoardRepository from "./BoardRepository";

const getAllBoards = async (req:Request, res: Response) : Promise<Response> => {
    const boards = await BoardRepository.findAll();
    return res.status(200).json({message: '모든 게시글 조회를 완료하였습니다.', data: boards});
}

const getBoard = async (req: Request, res: Response) : Promise<Response> => {
    const boardId = Number(req.params.boardId);
    const board = await BoardRepository.findById(boardId);
    return res.status(200).json({message: '게시판 조회를 완료하였습니다.', data: board});
}

const createBoard = async (req: Request, res: Response) : Promise<Response> => {
    const message: string = '게시판 생성 완료';
    const boardCreateDto: BoardCreateDto = req.body;
    console.log(JSON.stringify(boardCreateDto));
    const board = await BoardRepository.create(boardCreateDto.title, boardCreateDto.content);
    return res.status(201).json({message: message, data: board});
}

const deleteBoard = async (req: Request, res: Response): Promise<Response> => {
    const boardId = Number(req.params.boardId);
    const count = await BoardRepository.delete(boardId);
    if (count != 1) {
        return res.status(404).json({message: "존재하지 않는 게시글입니다."});
    }
    return res.status(200).json({message: "게시글 삭제를 완료하였습니다."});


}

const router = Router();
router.get("/", getAllBoards);
router.get("/:boardId", getBoard);
router.post("/", createBoard);
router.delete("/:boardId", deleteBoard)

export default router;