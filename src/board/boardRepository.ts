import {Board} from "../models/board";

export async function findAll(): Promise<Board[]> {
    return await Board.findAll();
}


export async function findById(boardId: number) {
    return await Board.findByPk(boardId);
}

export const createBoard = async(title: string, content: string): Promise<Board> => {
    return await Board.create({title: title, content: content});
}

