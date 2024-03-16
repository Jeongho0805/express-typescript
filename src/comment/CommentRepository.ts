import {Board} from "../models/Board";
import {CommentCreateDto} from "./CommentDto";
import {Comment} from "../models/Comment";

class CommentRepository {
    create(dto: CommentCreateDto): Promise<Comment> {
        return Comment.create({content: dto.content, boardId: dto.boardId});
    }
}

export default new CommentRepository();