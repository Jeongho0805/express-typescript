import { Sequelize} from "sequelize-typescript";
import {Board} from "../models/Board";
import {Comment} from "../models/Comment";

const sequelize = new Sequelize({
    database: 'board',
    dialect: 'mysql',
    username: 'root',
    host: 'localhost',
});

sequelize.addModels([Board, Comment]);

Board.hasMany(Comment);
Comment.belongsTo(Board);


export default sequelize;


