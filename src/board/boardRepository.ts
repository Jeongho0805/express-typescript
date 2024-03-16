import {Board} from "../models/Board";

class BoardRepository {
    findAll(): Promise<Board[]> {
        return Board.findAll();
    }

    findById(boardId: number): Promise<Board> {
        return Board.findByPk(boardId);
    }

    create(title: string, content: string): Promise<Board> {
        return Board.create({title: title, content: content});
    }
}

export default new BoardRepository();

