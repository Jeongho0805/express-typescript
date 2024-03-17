import {Board} from "../models/Board";
import {Comment} from "../models/Comment";

class BoardRepository {
    findAll() {
        return Board.findAll({
            include: [{
                model: Comment,
                as: 'comments'
            }]
        });
    }

    findById(boardId: number): Promise<Board> {
        return Board.findByPk(boardId);
    }

    create(title: string, content: string): Promise<Board> {
        return Board.create({title: title, content: content});
    }
}

export default new BoardRepository();

