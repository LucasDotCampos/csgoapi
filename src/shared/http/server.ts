import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";

import route from "./routes";
import swaggerDocs from "./swagger.json";

import "../http/typeorm/connection";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());
app.use(route);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.PORT, () => {
    console.log(`Running at ${process.env.PORT} port`);
});
