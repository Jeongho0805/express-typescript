import {Table, Column, Model, DataType, ForeignKey} from 'sequelize-typescript';
import {Board} from "./Board";

interface CommentAttributes {
    id: number;
    content: string;
    boardId: number;
}

@Table
export class Comment extends Model<CommentAttributes> {
    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column(DataType.STRING)
    content: string;

    @Column({
        type: DataType.BIGINT,
        field: "boardId"
    })
    boardId: number; // 속성 이름은 boardId로 변경
}
