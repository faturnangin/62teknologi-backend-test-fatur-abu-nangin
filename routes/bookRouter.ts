import express from "express";
const router = express.Router();

import bookController from "../controllers/bookController"

router.get("/", bookController.getAll);
router.get("/:id", bookController.getById);
router.post("/", bookController.create);
router.put("/:id", bookController.updateById);
router.delete("/:id", bookController.deleteById);

export default router;