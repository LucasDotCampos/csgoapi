import { Router } from "express";

import GunsController from "../../../Modules/Guns/controller/GunsController";

const route = Router();

const gunController = new GunsController();

route.post("/register", gunController.create);
route.get("/", gunController.index);
route.get("/name/:name", gunController.GetByName);
route.get("/id/:gunId", gunController.GetById);
route.put("/update/:gunId", gunController.update);
route.get("/side/:side", gunController.GetBySide);
route.get("/type/:type", gunController.GetByType);

export default route;
