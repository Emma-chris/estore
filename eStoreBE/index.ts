import express, { Application } from "express";
import env from "dotenv";
import { dbConfig } from "./utils/dbConfig";
import cors from "cors";
import { mainApp } from "./mainApp";
env.config();

const port: number = parseInt(process.env.PORT as string);
const app: Application = express();
app.use(express.json());
app.use(cors());

mainApp(app);

app.listen(port, () => {
  dbConfig();
});
