import express from "express";
const router = express.Router();

import businessController from "../controllers/BusinessController";

router.get("/", businessController.getAll);
router.get("/:id", businessController.getById);
router.post("/", businessController.create);
router.put("/:id", businessController.updateById);
router.delete("/:id", businessController.deleteById);

export default router;