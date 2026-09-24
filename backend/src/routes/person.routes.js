import express from "express";
import * as personController from "../controllers/person.controller.js";

const router = express.Router();

router.get("/persons", personController.getAll);

export default router;
