import { Sequelize} from "sequelize-typescript";
import {Board} from "../models/Board";
import {Comment} from "../models/Comment";

const sequelize = new Sequelize({
    database: 'board',
    dialect: 'mysql',
    username: 'root',
    host: 'localhost',
    logging: (msg) => {
        let formattedMsg = msg.replace(/(SELECT|FROM|WHERE|LEFT OUTER JOIN|AND)/gi, match => `\n${match}`);
        formattedMsg = formattedMsg.replace(/, /g, ',\n  ');
        console.log('\n');
        console.log('========================= SQL QUERY =========================\n', formattedMsg);
        console.log('===============================================================\n')
        console.log('\n')
    }
});

sequelize.addModels([Board, Comment]);

Board.hasMany(Comment);
Comment.belongsTo(Board);


export default sequelize;


