import express, { Application } from 'express'
import sequelize from "./util/Sequelize";
import cors from 'cors';
import router from "./routes/Router";

const app: Application = express()

const port: number = 3000

app.use(express.json())
app.use(cors());
app.use(router);

sequelize.sync({ force: false }).then(() => {
    console.log("테이블이 성공적으로 생성되었습니다.");
}).catch((error) => {
    console.error("테이블 생성 중 오류가 발생했습니다:", error);
});

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})