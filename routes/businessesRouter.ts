import express from "express";
const businessesRouter = express.Router();

import businessesController from "../controllers/businessesController";

businessesRouter.get("/", businessesController.getAll);
businessesRouter.get("/:id", businessesController.getById);
businessesRouter.get("/search", businessesController.getByProps);
businessesRouter.post("/", businessesController.create);
businessesRouter.delete("/:id", businessesController.deleteById);
businessesRouter.put("/:id", businessesController.updateById);

export default businessesRouter;