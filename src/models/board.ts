import { Table, Column, Model, DataType } from 'sequelize-typescript';

interface boardAttributes {
    id: number;
    title: string;
    content: string;
}

@Table
export class Board extends Model<boardAttributes> {
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
}
