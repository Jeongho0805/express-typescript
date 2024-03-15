import {Request, Response, Router} from "express";
import * as boardRepository from './boardRepository'
import {BoardCreateDto} from "./boardDto";

const getAllBoards = async (req:Request, res: Response) : Promise<Response> => {
    const boards = await boardRepository.findAll();
    return res.status(200).json({message: '모든 게시글 조회를 완료하였습니다.', data: boards});
}

const getBoard = async (req: Request, res: Response) : Promise<Response> => {
    const boardId = Number(req.params.boardId);
    const board = await boardRepository.findById(boardId);
    return res.status(200).json({message: '게시판 조회를 완료하였습니다.', data: board});
}

const createBoard = async (req: Request, res: Response) : Promise<Response> => {
    const message: string = '게시판 생성 완료';
    const boardCreateDto: BoardCreateDto = req.body;
    console.log(JSON.stringify(boardCreateDto));
    const board = await boardRepository.createBoard(boardCreateDto.title, boardCreateDto.content);
    return res.status(201).json({message: message, data: board});
}

const router = Router();
router.get("/", getAllBoards);
router.get("/:boardId", getBoard);
router.post("/", createBoard);

export default router;