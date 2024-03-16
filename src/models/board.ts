import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import {Comment} from "./Comment";


interface BoardAttributes {
    id: number;
    title: string;
    content: string;
}

@Table
export class Board extends Model<BoardAttributes> {
    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column(DataType.STRING)
    title: string;

    @Column(DataType.STRING)
    content: string;

    @HasMany(() => Comment)
    comments: Comment[];
}
