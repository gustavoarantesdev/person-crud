import express from "express";
import * as personController from "../controllers/person.controller.js";

const router = express.Router();

router.get("/persons", personController.getAll);
router.get("/persons/:id", personController.getById);
router.post("/persons", personController.create);
router.put("/persons", personController.update);
router.delete("/persons", personController.destroy);

export default router;
