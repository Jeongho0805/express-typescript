import {Table, Column, Model, DataType, ForeignKey} from 'sequelize-typescript';
import {Board} from "./Board";

interface CommentAttributes {
    id: number;
    content: string;
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

    @ForeignKey(() => Board)
    @Column({
        type: DataType.BIGINT,
        field: 'BoardId' // 외래키 컬럼 이름을 명확히 지정
    })
    boardId: number; // 속성 이름은 boardId로 변경
}
