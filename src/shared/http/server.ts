import cors from "cors";
import express from "express";

import route from "./routes";

import "../http/typeorm/connection";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());
app.use(route);

app.listen(process.env.PORT, () => {
    console.log(`Running at ${process.env.PORT} port`);
});
