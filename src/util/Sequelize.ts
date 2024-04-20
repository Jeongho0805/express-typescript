import { Sequelize} from "sequelize-typescript";
import {Board} from "../models/Board";
import {Comment} from "../models/Comment";

const sequelize = new Sequelize({
    database: 'board',
    dialect: 'mysql',
    username: 'root',
    host: 'localhost',
    logging: (msg) => {
        let formattedMsg = msg.replace(/(SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|LEFT OUTER JOIN|AND)/gi, match => `\n${match}`);
        formattedMsg = formattedMsg.replace(/, /g, ',\n  ');
        console.log('\n');
        console.log('========================= SQL QUERY =========================\n', formattedMsg);
        console.log('===============================================================\n')
        console.log('\n')
    }
});

sequelize.addModels([Board, Comment]);

Board.hasMany(Comment, { foreignKey: 'boardId' });
Comment.belongsTo(Board, { foreignKey: 'boardId' });


export default sequelize;


