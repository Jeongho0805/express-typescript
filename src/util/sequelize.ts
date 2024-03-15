import { Sequelize} from "sequelize-typescript";
import {Board} from "../models/board";

const sequelize = new Sequelize({
    database: 'board',
    dialect: 'mysql',
    username: 'root',
    host: 'localhost',
});

sequelize.addModels([Board]);

export default sequelize;


